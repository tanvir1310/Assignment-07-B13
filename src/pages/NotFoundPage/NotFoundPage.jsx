import React from "react";
import { Link } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center">
        {/* ইলাস্ট্রেশন বা আইকন সেকশন */}
        <div className="relative mb-8">
          <h1 className="text-[120px] md:text-[150px] font-black text-[#1a2e25]/5 leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <AlertCircle size={80} className="text-[#1a2e25] animate-bounce" />
          </div>
        </div>

        {/* টেক্সট সেকশন */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-slate-500 mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* বাটন সেকশন */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1a2e25] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#2d4f3f] transition-all hover:-translate-y-1"
          >
            <Home size={18} />
            Go Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto border border-slate-200 bg-white text-slate-600 px-8 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-all"
          >
            Previous Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
