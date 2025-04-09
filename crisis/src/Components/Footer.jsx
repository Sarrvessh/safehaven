import React, { useState } from "react";
import ContactForm from "./ContactForm";

const Footer = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="relative">
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-2xl mx-4">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute z-50 text-gray-500 top-2 right-2 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ContactForm />
          </div>
        </div>
      )}
      
      <footer className="p-8 text-white bg-gray-800">
        <div className="container flex justify-between w-full">
          <div className="w-1/3 ml-10">
            <ul>
              <li className="py-1 text-sm">
                <a href="#">National Disaster Management Authority (NDMA)</a>
              </li>
              <li className="py-1 text-sm">
                <a href="#">National Disaster Response Force (NDRF)</a>
              </li>
              <li className="py-1 text-sm">
                <a href="#">National Institute for Disaster Management (NIDM)</a>
              </li>
              <li className="py-1 text-sm">
                <a href="#">Disaster Management Division, MHA</a>
              </li>
              <li className="py-1 text-sm">
                <a href="#">National Platform for Disaster Risk Reduction (NPDRR)</a>
              </li>
            </ul>
          </div>
          <div className="container w-1/3 mt-4 ml-20 text-sm">
            <p className="text-gray-300">
              Developed By
              <br />
              Sarvesh PV
              <br />
              Coimbatore Institute of Technology,
              <br />
              TamilNadu
              <br />
              cbe-004
              <br />
              Reserved for Government of India.
            </p>
          </div>
          <div className="container w-1/3 mt-4 ml-20 text-sm">
            <p className="mt-2 text-gray-300">
              Reach us at
              <br />
              <button
                onClick={() => setShowContactForm(true)}
                className="text-white underline transition duration-300 hover:text-blue-300"
              >
                Contact Support
              </button>
            </p>
            <p className="mt-2 text-gray-400">
              Privacy Policy
              <br />
              Terms & Conditions
              <br />
              National Disaster Management Authority (NDMA)
              <br />
              2024 Government of India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
