import React from "react";
import styled, { keyframes } from 'styled-components';
import PlansCard from "../layouts/PlansCard";

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
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #3a4a6d;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  animation: ${fadeIn} 0.6s ease-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #667eea, #764ba2);
    border-radius: 2px;
  }
`;

const PlansGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  animation: ${fadeIn} 0.8s ease-out;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 2.5rem;
  }
`;

const StyledPlansCard = styled(PlansCard)`
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  background: white;
  transform: translateY(0);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    animation: ${pulse} 2s infinite;
  }

  &:nth-child(2) {
    transform: translateY(0) scale(1);
    
    @media (min-width: 768px) {
      transform: translateY(-10px) scale(1.05);
    }

    &:hover {
      @media (min-width: 768px) {
        transform: translateY(-15px) scale(1.08);
      }
    }
  }
`;

const Plans = () => {
  return (
    <Container id="plans">
      <Title>Gym Membership</Title>

      <PlansGrid>
        <StyledPlansCard title="Trial Plan" price="0" />
        <StyledPlansCard title="Plus Plan" price="3000" />
        <StyledPlansCard title="ProMax Plan" price="5000" />
      </PlansGrid>
    </Container>
  );
};

export default Plans;