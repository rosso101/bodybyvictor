import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";

// Styled Components
const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  padding: 3rem 2rem 1.5rem;
  color: #e2e8f0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2);
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BrandSection = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

const BrandLink = styled(Link)`
  text-decoration: none;
`;

const BrandName = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fc8181;
  margin: 0;
  transition: all 0.3s ease;

  &:hover {
    color: #f56565;
    text-shadow: 0 0 10px rgba(252, 129, 129, 0.3);
  }
`;

const BrandDescription = styled.p`
  margin-top: 1rem;
  color: #a0aec0;
  line-height: 1.5;
`;

const AddressSection = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #e2e8f0;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, #667eea, #fc8181);
    border-radius: 1px;
  }
`;

const AddressText = styled.p`
  color: #a0aec0;
  line-height: 1.5;
`;

const ContactSection = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: #a0aec0;
  transition: all 0.3s ease;

  &:hover {
    color: #e2e8f0;

    svg {
      transform: scale(1.1);
    }
  }

  svg {
    transition: all 0.3s ease;
    color: #667eea;
  }
`;

const CopyrightSection = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #a0aec0;
`;

const CopyrightLink = styled.span`
  color: #fc8181;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #f56565;
    text-shadow: 0 0 10px rgba(252, 129, 129, 0.3);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection>
          <BrandLink to="/">
            <BrandName>FitZone</BrandName>
          </BrandLink>
          <BrandDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </BrandDescription>
        </BrandSection>

        <AddressSection>
          <SectionTitle>Address</SectionTitle>
          <AddressText>89925 Aubree Square Mumbai 12721</AddressText>
        </AddressSection>

        <ContactSection>
          <SectionTitle>Contact</SectionTitle>
          <ContactItem>
            <AiTwotonePhone size={20} />
            <span>+91-777-24-12</span>
          </ContactItem>
          <ContactItem>
            <AiOutlineMail size={20} />
            <span>FitZone@gmail.com</span>
          </ContactItem>
        </ContactSection>
      </FooterContent>

      <CopyrightSection>
        @copyright developed by{" "}
        <CopyrightLink>champion programmers</CopyrightLink> | All rights reserved
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;