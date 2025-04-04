import React from "react";
import styled, { keyframes } from 'styled-components';
import img from "../assets/img/about.png";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 4rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  animation: ${slideInLeft} 0.8s ease-out;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
    padding-right: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #3a4a6d;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;

  @media (min-width: 768px) {
    text-align: left;
  }

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

    @media (min-width: 768px) {
      left: 0;
      transform: none;
    }
  }
`;

const TextContent = styled.div`
  width: 100%;
  color: #4a5568;
  line-height: 1.6;

  @media (min-width: 768px) {
    width: 80%;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${slideInRight} 0.8s ease-out;

  @media (min-width: 768px) {
    width: 50%;
    justify-content: flex-end;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const About = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>About Us</Title>
        <TextContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi
            velit debitis iusto voluptatum consectetur optio minima, ipsum
            maxime, blanditiis illo corporis quod nam voluptas magnam dolorum
            amet accusamus error!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            accusamus laboriosam rerum aliquid et odit itaque at, doloremque quo
            consequuntur?
          </p>
        </TextContent>
      </ContentContainer>
      <ImageContainer>
        <img src={img} alt="About our company" />
      </ImageContainer>
    </Container>
  );
};

export default About;