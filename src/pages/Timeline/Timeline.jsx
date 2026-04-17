import React, { useContext, useState } from "react";
import { InstallAppsContext } from "../../context/InstallAppsContext";
import { Phone, MessageSquare, Video } from "lucide-react";

const Timeline = () => {
  const context = useContext(InstallAppsContext) || {};
  const { timeline = [] } = context;
  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.action === filter);

  const getIcon = (type) => {
    if (type === "Call") return <Phone size={24} className="text-gray-600" />;
    if (type === "Text")
      return <MessageSquare size={24} className="text-gray-600" />;
    return <Video size={24} className="text-gray-600" />;
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-[#14362A]">Timeline</h1>

      <div className="mb-10">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="p-3 border border-gray-300 rounded-xl w-full max-w-[300px] outline-none shadow-sm focus:ring-2 focus:ring-[#14362A] bg-white"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredTimeline && filteredTimeline.length > 0 ? (
          filteredTimeline.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 animate-in fade-in duration-300"
            >
              <div className="p-4 bg-gray-50 rounded-full">
                {getIcon(item.action)}
              </div>
              <div>
                <p className="text-xl font-medium text-gray-800">
                  <span className="font-bold">{item.action}</span> with{" "}
                  {item.name}
                </p>
                <p className="text-gray-400 text-sm mt-1">{item.date}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-[32px] border-2 border-dashed border-gray-200 text-gray-500 font-medium">
            No activities recorded in the timeline yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
