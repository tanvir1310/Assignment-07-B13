import React from "react";
import { HashLoader } from "react-spinners";
import useFriends from "../../hooks/useFriends"; // পাথ ঠিক করা হয়েছে
import FriendCard from "../ui/FriendCard";

const YourFriends = () => {
  const { friends, loading } = useFriends();

  return (
    <div className="container mx-auto mb-16 px-4">
      <h2 className="font-bold text-3xl mb-8">Your Friends</h2>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <HashLoader color="#14362A" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default YourFriends;
