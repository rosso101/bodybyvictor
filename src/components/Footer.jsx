import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";
import logo from "../assets/img/logo.png"; // Make sure this path matches your file structure

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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const CompanyLogo = styled.img`
  height: 36px; /* Increased from 24px to 36px */
  margin: 0 4px;
  vertical-align: middle;
  transition: all 0.3s ease;
  cursor: pointer;
  object-fit: contain;

  &:hover {
    transform: scale(1.15); /* Slightly increased hover scale */
    filter: 
      drop-shadow(0 0 8px rgba(252, 129, 129, 0.4))
      brightness(1.1); /* Added brightness effect */
  }
`;

const CopyrightText = styled.span`
  display: inline-flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection>
          <BrandLink to="/">
            <BrandName>BodyByVic</BrandName>
          </BrandLink>
          <BrandDescription>
            Find yourself know yourself, be yourself
          </BrandDescription>
        </BrandSection>

        <AddressSection>
          <SectionTitle>Address</SectionTitle>
          <AddressText>00800 Westlands, Nairobi</AddressText>
        </AddressSection>

        <ContactSection>
          <SectionTitle>Contact</SectionTitle>
          <ContactItem>
            <AiTwotonePhone size={20} />
            <span>+254 716914336</span>
          </ContactItem>
          <ContactItem>
            <AiOutlineMail size={20} />
            <span>FitZone@gmail.com</span>
          </ContactItem>
        </ContactSection>
      </FooterContent>

      <CopyrightSection>
        <CopyrightText>@copyright developed by</CopyrightText>
        <CompanyLogo 
          src={logo} 
          alt="Champion Programmers Logo" 
          onClick={() => window.open("https://portfolio-kohl-xi-51.vercel.app/", "_blank")}
        />
        <CopyrightText>| All rights reserved</CopyrightText>
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;