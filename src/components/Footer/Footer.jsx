import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2 flex items-center justify-center" style={{ height: '50px' }}>
      <p className="text-sm">
        © 2023 Fod-DSA. All rights reserved. 
        <a href="/privacy-policy" className="text-gray-400 hover:underline ml-2">Privacy Policy</a> | 
        <a href="/terms-of-service" className="text-gray-400 hover:underline ml-2">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
