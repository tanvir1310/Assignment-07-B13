import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a2e25] text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">KeenKeeper</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">
            Social Links
          </h3>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform font-bold text-[#1a2e25]"
            >
              Ig
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform font-bold text-[#1a2e25]"
            >
              Fb
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform font-bold text-[#1a2e25]"
            >
              X
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
