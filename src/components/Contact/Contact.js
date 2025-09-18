// src/components/Contact/Contact.js
import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Contact = () => {
  // This function will be called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    
    // Replace with your email address
    const email = 'saif.rahman@rwth-aachen.de';
    const subject = encodeURIComponent("Portfolio Contact Form Submission");
    
    // This will open the user's default email client
    window.location.href = `mailto:${email}?subject=${subject}`;
  };

  return (
    <Section id="contact">
      <SectionDivider />
      {/* <SectionTitle>Contact Me</SectionTitle> */}
      
      <div className="max-w-xl mx-auto mt-8">
        <p className="text-center text-lg text-white/75 mb-8">
          Have a project in mind or just want to connect? Send me a message.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          {/* 
            NOTE: We are not including input fields for a name or message.
            The goal is to get the user into their email client. This is a 
            cleaner, more direct call to action. We will just have a button.
          */}

          <button
            type="submit"
            className="
              w-64 h-16 rounded-full text-2xl font-semibold text-white
              flex items-center justify-center
              transition-all duration-300 ease-in-out
              bg-[#C55A11] hover:bg-[#F47C2E] hover:scale-110
            "
          >
            Get in Touch
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;