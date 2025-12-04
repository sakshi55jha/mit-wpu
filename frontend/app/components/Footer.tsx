import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg font-semibold mb-2">
          MIT World Peace University | Pune
        </p>

        <div className="space-x-4 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Use
          </a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">
            Sitemap
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} MIT-WPU. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
