import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "../layouts/Button";
import styled from "styled-components";

// Styled components for PlansCard
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #222;
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 31%;
    margin-bottom: 0;
  }
`;

const CardTitle = styled.h2`
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  color: #fff;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const PriceText = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
  color: #fff;
  margin-left: 0.5rem;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const FeatureIcon = styled.span`
  margin-right: 1.25rem;
  color: #4CAF50;
  flex-shrink: 0;
`;

const FeatureText = styled.p`
  color: #ddd;
  text-align: left;
  margin: 0;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const PlansCard = (props) => {
  // Define different features based on price
  const getFeatures = (price) => {
    switch(price) {
      case "0":
        return [
          "Free access to basic gym equipment",
          "Limited to 3 visits per week",
          "No personal trainer access"
        ];
      case "3000":
        return [
          "Full access to all gym equipment",
          "Unlimited weekly visits",
          "2 free personal trainer sessions per month"
        ];
      case "5000":
        return [
          "Full access to all gym equipment and premium areas",
          "Unlimited visits with 24/7 access",
          "Weekly personal trainer sessions",
          "Access to all group classes"
        ];
      default:
        return [
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ];
    }
  };

  const features = getFeatures(props.price);

  return (
    <CardContainer>
      <CardTitle>{props.title}</CardTitle>

      <PriceContainer>
        <FeatureIcon>
          <MdOutlineAttachMoney size={22} />
        </FeatureIcon>
        <PriceText>{props.price}</PriceText>
      </PriceContainer>

      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon>
              <AiFillCheckCircle size={22} />
            </FeatureIcon>
            <FeatureText>{feature}</FeatureText>
          </FeatureItem>
        ))}
      </FeaturesContainer>

      <ButtonContainer>
        <Button title="Buy Plan" />
      </ButtonContainer>
    </CardContainer>
  );
};

export default PlansCard;