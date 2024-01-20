import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import "./HomePage.css"
const HomePage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://cse.google.com/cse.js?cx=YOUR_CX_CODE'; // Replace YOUR_CX_CODE with your actual CSE code
    document.head.appendChild(script);

    script.onload = () => {
      window.__gcse || (window.__gcse = {});
      window.__gcse.callback = () => {
        // Additional customization or actions after the search box is loaded
      };
    };

    return () => {
      // Cleanup the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="gcse-search"></div>
  );
};

export default HomePage;
