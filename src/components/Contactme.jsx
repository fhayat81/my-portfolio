import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contactme = () => {
  return (
    <div id="contact-me" className="mx-2 my-4">
      {/* Heading */}
      <p className="text-center text-primary font-semibold text-2xl md:text-3xl">
        CONTACT ME
      </p>
      {/* Contacts */}

      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-col items-center justify-center"
      >
        {/* Gmail ID */}
        <div className="flex items-center gap-2 md:gap-3 my-2">
          <FaEnvelope className="text-xl md:text-2xl text-primary" />
          <p className="text-lg md:text-xl">fazalhayatkhan001@gmail.com</p>
        </div>
        {/* Phone number */}
        <div className="flex items-center gap-2 md:gap-3 my-2">
          <FaPhoneAlt className="text-xl md:text-2xl text-primary" />
          <p className="text-lg md:text-xl">+91-9870403728</p>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
