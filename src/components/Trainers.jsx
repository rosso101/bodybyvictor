import React from "react";
import styled, { keyframes } from 'styled-components';
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import TrainerCard from "../layouts/TrainerCard";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #3a4a6d;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.5rem;
  animation: ${fadeIn} 0.6s ease-out;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #667eea, #764ba2);
    border-radius: 2px;
  }
`;

const TrainersGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  animation: ${fadeIn} 0.8s ease-out;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const StyledTrainerCard = styled(TrainerCard)`
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  background: white;
  transform: translateY(0);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    animation: ${pulse} 2s infinite;
  }
`;

const Trainers = () => {
  return (
    <Container>
      <Title>Our Trainers</Title>

      <TrainersGrid>
        <StyledTrainerCard img={img1} name="Anatoly" />
        <StyledTrainerCard img={img2} name="Victor" />
        <StyledTrainerCard img={img3} name="Evgeny" />
      </TrainersGrid>
    </Container>
  );
};

export default Trainers;