import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 bg-n-8 text-n-1">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block text-center">
          © {new Date().getFullYear()} AI Club of VIT Bhopal. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap justify-center">
          {socials.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-transform transform hover:scale-110 hover:bg-n-6"
              >
                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Optional: Add a secondary section for links or credits */}
      <div className="mt-5 text-center">
        <p className="text-sm text-n-4">
          Join us on our journey to innovate and inspire.
        </p>
        <a
          href="#contact"
          className="mt-2 inline-block px-4 py-2 bg-n-6 text-n-1 rounded-full transition-colors hover:bg-color-1 hover:text-n-8"
        >
          Contact Us
        </a>
      </div>
    </Section>
  );
};

export default Footer;
