import React from "react";
import { HashLoader } from "react-spinners";
import useFriends from "../../hooks/useFriends"; // পরিবর্তন ১: useApps এর বদলে useFriends
import FriendCard from "../../components/ui/FriendCard"; // পরিবর্তন ২: AppCard এর বদলে FriendCard

const Apps = () => {
  // পরিবর্তন ৩: friends এবং loading ডেসট্রাকচারিং
  const { friends, loading } = useFriends();

  return (
    <div className="container mx-auto my-16 px-4 md:px-10">
      {/* Section header */}
      <div className="mb-12 text-center max-w-[600px] mx-auto">
        <h2 className="font-bold text-4xl text-gray-800">All Friends</h2>
        <p className="text-gray-500 mt-3">
          Manage and track your connections. Stay updated with your friends'
          contact status and goals.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <HashLoader color="#14362A" /> {/* আপনার থিম কালার */}
        </div>
      ) : (
        /* পরিবর্তন ৪: আপনার ফিগমা ডিজাইন অনুযায়ী ৪-কলাম গ্রিড লেআউট */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            /* পরিবর্তন ৫: প্রোফাইল ডাটা পাস করা */
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
