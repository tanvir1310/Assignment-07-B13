import { useEffect, useState } from "react";

const useFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        // ফাইলটি অবশ্যই public ফোল্ডারে 'friends.json' নামে থাকতে হবে
        const res = await fetch("/friends.json");

        if (!res.ok) {
          throw new Error("friends.json file not found in public folder");
        }

        const data = await res.json();

        // বাস্তবসম্মত ফিল ফিল দেওয়ার জন্য সাময়মিক ডিলে
        setTimeout(() => {
          setFriends(data);
          setLoading(false);
        }, 1200);
      } catch (error) {
        console.error("Fetch Error:", error.message);
        setLoading(false);
      }
    };
    fetchFriends();
  }, []);

  return { friends, loading };
};

export default useFriends;
