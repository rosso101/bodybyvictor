import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const TrainerCard = (props) => {
  // Destructure social media links from props (or use defaults)
  const { instagramLink, whatsappLink, linkedinLink } = props;
  
  const handleInstagramClick = () => {
    window.open(instagramLink || "https://www.instagram.com/_lenaiyasa/", "_blank");
  };
  
  const handleWhatsAppClick = () => {
    // Direct WhatsApp chat link for +254716914336
    window.open(
      whatsappLink || "https://wa.me/254716914336", 
      "_blank"
    );
  };
  
  const handleLinkedInClick = () => {
    window.open(linkedinLink || "https://www.linkedin.com/in/victorlenaiyasa/", "_blank");
  };

  return (
    <div className="flex flex-col items-center gap-3 pt-8 w-full md:w-1/4 bg-[#222] rounded-xl">
      <div className="w-3/4">
        <img className="rounded-lg" src={props.img} alt="img" />
      </div>
      <div>
        <h1 className="text-xl font-semibold py-2 text-center">{props.name}</h1>
        <div className="flex flex-row justify-between py-4 gap-4">
          <BsInstagram 
            size={25} 
            className="hover:text-[#e53961] cursor-pointer" 
            onClick={handleInstagramClick}
          />
          <BsWhatsapp 
            size={25} 
            className="hover:text-[#25D366] cursor-pointer" 
            onClick={handleWhatsAppClick}
          />
          <BsLinkedin 
            size={25} 
            className="hover:text-[#0077B5] cursor-pointer" 
            onClick={handleLinkedInClick}
          />
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;