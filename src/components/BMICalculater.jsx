import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled Components
const Container = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  animation: ${fadeIn} 0.6s ease-out;
`;

const Title = styled.h1`
  color: #3a4a6d;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 2rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.8);
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`;

const RangeInput = styled(Input)`
  -webkit-appearance: none;
  height: 8px;
  background: #e2e8f0;
  border-radius: 5px;
  padding: 0;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #667eea;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      transform: scale(1.2);
      background: #5a67d8;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to right, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ResultContainer = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.5s ease-out;
`;

const BMIScore = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #3a4a6d;
  margin: 0.5rem 0;
  animation: ${pulse} 2s infinite;
`;

const Category = styled.div`
  font-size: 1.2rem;
  color: ${props => {
    if (props.category === 'Underweight') return '#3182ce';
    if (props.category === 'Normal weight') return '#38a169';
    if (props.category === 'Overweight') return '#dd6b20';
    return '#e53e3e';
  }};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const HealthTip = styled.div`
  font-size: 0.9rem;
  color: #4a5568;
  padding: 0.5rem;
  background: #f7fafc;
  border-radius: 8px;
  margin-top: 1rem;
`;

const UnitToggle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  background: ${props => props.active ? '#667eea' : 'white'};
  color: ${props => props.active ? 'white' : '#4a5568'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:first-child {
    border-radius: 8px 0 0 8px;
  }
  
  &:last-child {
    border-radius: 0 8px 8px 0;
  }
  
  &:hover {
    background: ${props => props.active ? '#5a67d8' : '#f7fafc'};
  }
`;

// Main Component
const BMICalculator = () => {
  const [unitSystem, setUnitSystem] = useState('metric');
  const [heightCm, setHeightCm] = useState(170);
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(6);
  const [weight, setWeight] = useState(154); // Start with pounds as default
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [healthTip, setHealthTip] = useState('');

  const calculateBMI = () => {
    let calculatedBmi;
    if (unitSystem === 'metric') {
      // Using pounds for weight in metric mode (switched)
      calculatedBmi = (weight / ((heightCm / 100) ** 2) * 0.453592).toFixed(1); // Convert lbs to kg in calculation
    } else {
      // Using kg for weight in imperial mode (switched)
      const totalInches = (heightFeet * 12) + heightInches;
      calculatedBmi = ((weight * 2.20462) / (totalInches ** 2) * 703).toFixed(1); // Convert kg to lbs in calculation
    }
    
    setBmi(calculatedBmi);
    determineCategory(calculatedBmi);
  };

  const determineCategory = (bmiValue) => {
    let newCategory = '';
    let newTip = '';
    
    if (bmiValue < 18.5) {
      newCategory = 'Underweight';
      newTip = 'Consider consulting a nutritionist to develop a healthy weight gain plan.';
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      newCategory = 'Normal weight';
      newTip = 'Great job! Maintain your healthy lifestyle with balanced diet and regular exercise.';
    } else if (bmiValue >= 25 && bmiValue < 30) {
      newCategory = 'Overweight';
      newTip = 'Try incorporating more physical activity and healthier food choices into your routine.';
    } else {
      newCategory = 'Obese';
      newTip = 'Consider consulting a healthcare professional for guidance on weight management.';
    }
    
    setCategory(newCategory);
    setHealthTip(newTip);
  };

  useEffect(() => {
    if (bmi !== null) {
      calculateBMI();
    }
  }, [unitSystem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  const toggleUnitSystem = (system) => {
    setUnitSystem(system);
    // Reset values when changing unit system
    if (system === 'metric') {
      setHeightCm(170);
      setWeight(154); // pounds
    } else {
      setHeightFeet(5);
      setHeightInches(6);
      setWeight(70); // kg
    }
    setBmi(null);
  };

  // Helper function to display height in feet'inches" format
  const displayHeight = () => {
    if (unitSystem === 'metric') {
      return `${heightCm} cm`;
    }
    return `${heightFeet}' ${heightInches}"`;
  };

  // Helper function to display weight unit
  const displayWeightUnit = () => {
    return unitSystem === 'metric' ? 'lbs' : 'kg';
  };

  return (
    <Container>
      <Title>know yourself</Title>
      
      <UnitToggle>
        <ToggleButton 
          active={unitSystem === 'metric'} 
          onClick={() => toggleUnitSystem('metric')}
        >
          Metric (lbs, cm)
        </ToggleButton>
        <ToggleButton 
          active={unitSystem === 'imperial'} 
          onClick={() => toggleUnitSystem('imperial')}
        >
          Imperial (kg, ft/in)
        </ToggleButton>
      </UnitToggle>
      
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="height">
            Height: {displayHeight()}
          </Label>
          {unitSystem === 'metric' ? (
            <RangeInput
              type="range"
              id="height"
              min={100}
              max={250}
              value={heightCm}
              onChange={(e) => setHeightCm(parseInt(e.target.value))}
            />
          ) : (
            <>
              <RangeInput
                type="range"
                id="height"
                min={48} // 4 feet (48 inches)
                max={96} // 8 feet (96 inches)
                value={(heightFeet * 12) + heightInches}
                onChange={(e) => {
                  const totalInches = parseInt(e.target.value);
                  setHeightFeet(Math.floor(totalInches / 12));
                  setHeightInches(totalInches % 12);
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                <span>4' 0"</span>
                <span>8' 0"</span>
              </div>
            </>
          )}
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="weight">
            Weight: {weight} {displayWeightUnit()}
          </Label>
          <RangeInput
            type="range"
            id="weight"
            min={unitSystem === 'metric' ? 66 : 30} // min lbs in metric, min kg in imperial
            max={unitSystem === 'metric' ? 440 : 200} // max lbs in metric, max kg in imperial
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
          />
        </InputGroup>
        
        <Button type="submit">Calculate BMI</Button>
      </form>
      
      {bmi && (
        <ResultContainer>
          <div>Your BMI is</div>
          <BMIScore>{bmi}</BMIScore>
          <Category category={category}>{category}</Category>
          <HealthTip>{healthTip}</HealthTip>
        </ResultContainer>
      )}
    </Container>
  );
};

export default BMICalculator;