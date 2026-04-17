import React from "react";
import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();
  const { id, name, picture, days_since_contact, tags, status } = friend;

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "overdue":
        return "bg-red-500 text-white";
      case "on-track":
        return "bg-orange-500 text-white";
      case "almost due":
        return "bg-[#14362A] text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div
      onClick={() => navigate(`/friend/${id}`)}
      className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all cursor-pointer text-center group"
    >
      {/* 📸 Picture */}
      <div className="mb-4 overflow-hidden rounded-full w-20 h-20 mx-auto">
        <img
          src={picture}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* 🧑 Name */}
      <h3 className="font-bold text-xl text-gray-800 mb-1">{name}</h3>

      {/* 📅 Days Since Contact */}
      <p className="text-gray-400 text-sm mb-4 font-medium">
        {days_since_contact} days
      </p>

      {/* 🏷️ Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 🔴 Status (Background color changes based on status) */}
      <div className="flex justify-center">
        <span
          className={`text-[10px] font-bold px-6 py-1.5 rounded-full uppercase tracking-widest shadow-sm ${getStatusClass(status)}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;
