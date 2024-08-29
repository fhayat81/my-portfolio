import React, { forwardRef } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contactme = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="contact-me" className="mx-2 my-4 pt-16 md:pt-[75px]">
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
          <a className="text-lg md:text-xl" href="mailto:fazalhayatkhan001@gmail.com">fazalhayatkhan001@gmail.com</a>
        </div>
        {/* Phone number */}
        <div className="flex items-center gap-2 md:gap-3 my-2">
          <FaPhoneAlt className="text-xl md:text-2xl text-primary" />
          <a className="text-lg md:text-xl" href="tel:+91-9870403728">+91-9870403728</a>
        </div>
        <div className="flex items-center gap-2 md:gap-3 my-2">
          <a className="text-lg md:text-xl" href="https://github.com/fhayat81" target="_blank"><FaGithub className="text-xl md:text-2xl text-primary"/></a>
          <a className="text-lg md:text-xl" href="https://www.instagram.com/_fazal_776/" target="_blank"><FaInstagram className="text-xl md:text-2xl text-primary"/></a>
          <a className="text-lg md:text-xl" href="https://www.linkedin.com/in/fazal-hayat-khan-747443283/" target="_blank"><FaLinkedin className="text-xl md:text-2xl text-primary"/></a>
        </div>
      </div>
    </div>
  );
});

export default Contactme;
