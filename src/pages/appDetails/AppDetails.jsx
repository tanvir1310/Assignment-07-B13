import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFriends from "../../hooks/useFriends";
import { HashLoader } from "react-spinners";
import { InstallAppsContext } from "../../context/InstallAppsContext";
import { toast } from "react-toastify";
import {
  Phone,
  MessageSquare,
  Video,
  Bell,
  Archive,
  Trash2,
} from "lucide-react";

const AppDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFriends();

  const context = useContext(InstallAppsContext) || {};
  const { setTimeline = () => {} } = context;

  const expectedFriend = friends?.find((f) => String(f.id) === id);

  if (loading)
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <HashLoader color="#14362A" />
      </div>
    );

  if (!expectedFriend)
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Friend not found!
      </div>
    );

  const handleQuickCheckIn = (type) => {
    const newEntry = {
      id: Date.now(),
      name: expectedFriend.name,
      action: type,
      date: new Date().toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    setTimeline((prev) => [newEntry, ...prev]);
    toast.success(`${type} recorded with ${expectedFriend.name}!`);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-8 rounded-[16px] shadow-sm border border-gray-100 text-center relative">
              <div className="absolute top-6 right-6 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
              <img
                src={expectedFriend.picture}
                className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border border-gray-100"
                alt={expectedFriend.name}
              />
              <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                {expectedFriend.name}
              </h2>
              <div className="flex flex-col items-center gap-2 mt-3">
                <span className="bg-[#FEE2E2] text-[#EF4444] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Overdue
                </span>
                <span className="bg-[#D1FAE5] text-[#10B981] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Family
                </span>
              </div>
              <p className="text-gray-500 italic text-sm mt-5 leading-relaxed">
                "{expectedFriend.bio || "Former colleague, great mentor"}"
              </p>
              <p className="text-gray-400 text-xs mt-3">
                Preferred: {expectedFriend.email.split("@")[0]}
              </p>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-white border border-gray-100 py-4 px-6 rounded-[12px] flex items-center justify-center gap-3 font-semibold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
                <Bell size={18} className="text-gray-600" /> Snooze 2 Weeks
              </button>
              <button className="w-full bg-white border border-gray-100 py-4 px-6 rounded-[12px] flex items-center justify-center gap-3 font-semibold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
                <Archive size={18} className="text-gray-600" /> Archive
              </button>
              <button className="w-full bg-white border border-gray-100 py-4 px-6 rounded-[12px] flex items-center justify-center gap-3 font-semibold text-red-500 hover:bg-red-50 transition-all shadow-sm">
                <Trash2 size={18} /> Delete
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-8 rounded-[16px] border border-gray-100 shadow-sm text-center">
                <h4 className="text-4xl font-bold text-[#14362A]">
                  {expectedFriend.days_since_contact || 62}
                </h4>
                <p className="text-gray-400 text-sm font-medium mt-1">
                  Days Since Contact
                </p>
              </div>
              <div className="bg-white p-8 rounded-[16px] border border-gray-100 shadow-sm text-center">
                <h4 className="text-4xl font-bold text-[#14362A]">
                  {expectedFriend.goal || 30}
                </h4>
                <p className="text-gray-400 text-sm font-medium mt-1">
                  Goal (Days)
                </p>
              </div>
              <div className="bg-white p-8 rounded-[16px] border border-gray-100 shadow-sm text-center">
                <h4 className="text-2xl font-bold text-[#14362A]">
                  Feb 27, 2026
                </h4>
                <p className="text-gray-400 text-sm font-medium mt-1">
                  Next Due
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[16px] border border-gray-100 shadow-sm flex justify-between items-center">
              <div>
                <h3 className="text-[#14362A] font-bold text-lg">
                  Relationship Goal
                </h3>
                <p className="text-gray-600 mt-1">
                  Connect every{" "}
                  <span className="font-bold text-gray-900">30 days</span>
                </p>
              </div>
              <button className="bg-[#F8FAFC] text-gray-600 px-4 py-1.5 rounded-[6px] text-xs font-bold border border-gray-200 hover:bg-gray-100">
                Edit
              </button>
            </div>

            <div className="bg-white p-8 rounded-[16px] border border-gray-100 shadow-sm">
              <h3 className="text-[#14362A] font-bold text-lg mb-8">
                Quick Check-In
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => handleQuickCheckIn("Call")}
                  className="flex flex-col items-center justify-center p-8 bg-[#F8FAFC] rounded-[12px] hover:bg-gray-100 transition-all gap-3 border border-gray-50 group"
                >
                  <Phone
                    size={28}
                    className="text-[#14362A] group-hover:scale-110 transition-transform"
                  />
                  <span className="text-gray-700 font-semibold">Call</span>
                </button>
                <button
                  onClick={() => handleQuickCheckIn("Text")}
                  className="flex flex-col items-center justify-center p-8 bg-[#F8FAFC] rounded-[12px] hover:bg-gray-100 transition-all gap-3 border border-gray-50 group"
                >
                  <MessageSquare
                    size={28}
                    className="text-[#14362A] group-hover:scale-110 transition-transform"
                  />
                  <span className="text-gray-700 font-semibold">Text</span>
                </button>
                <button
                  onClick={() => handleQuickCheckIn("Video")}
                  className="flex flex-col items-center justify-center p-8 bg-[#F8FAFC] rounded-[12px] hover:bg-gray-100 transition-all gap-3 border border-gray-50 group"
                >
                  <Video
                    size={28}
                    className="text-[#14362A] group-hover:scale-110 transition-transform"
                  />
                  <span className="text-gray-700 font-semibold">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
