import React from "react";
import styled, { keyframes } from 'styled-components';
import Button from "../layouts/Button";
import img from "../assets/img/contactImg.jpg";

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

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(102, 126, 234, 0); }
  100% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0); }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  animation: ${slideInLeft} 0.8s ease-out;

  @media (min-width: 768px) {
    width: 48%;
    padding: 3rem;
  }
`;

const FormTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;

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

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-weight: 500;
  font-size: 0.95rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.9);
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${slideInRight} 0.8s ease-out;

  @media (min-width: 768px) {
    width: 48%;
  }
`;

const ContactImage = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    animation: ${pulse} 1s ease-out;
  }
`;

const Contact = () => {
  return (
    <Container>
      <ContactWrapper>
        <ContactForm>
          <FormTitle>Contact Us</FormTitle>
          
          <FormGroup>
            <FormLabel htmlFor="userName">Your Name</FormLabel>
            <FormInput
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="userEmail">Your Email</FormLabel>
            <FormInput
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your email"
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="userNumber">Your Number</FormLabel>
            <FormInput
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="Enter your number"
            />
          </FormGroup>

          <SubmitButton title="Send Message" />
        </ContactForm>

        <ImageContainer>
          <ContactImage src={img} alt="Contact us" />
        </ImageContainer>
      </ContactWrapper>
    </Container>
  );
};

export default Contact;