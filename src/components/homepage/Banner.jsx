import React, { useContext, useMemo } from "react";
import { Plus } from "lucide-react";
import { InstallAppsContext } from "../../context/InstallAppsContext";
import useFriends from "../../hooks/useFriends";

const Banner = () => {
  const { timeline = [] } = useContext(InstallAppsContext) || {};
  const { friends = [], loading } = useFriends();

  // স্ট্যাটস ক্যালকুলেশন
  const dynamicStats = useMemo(() => {
    const totalFriends = friends.length;

    // On Track: যাদের days_since_contact তাদের লক্ষ্য (goal) এর চেয়ে কম বা সমান
    const onTrack = friends.filter(
      (f) => f.days_since_contact <= f.goal,
    ).length;

    // Need Attention: যারা তাদের লক্ষ্য অতিক্রম করেছে (overdue)
    const needAttention = friends.filter(
      (f) => f.days_since_contact > f.goal,
    ).length;

    // Interactions This Month: এই মাসে করা মোট অ্যাকশন (timeline count)
    const interactions = timeline.length;

    return [
      { label: "Total Friends", value: loading ? "..." : totalFriends },
      { label: "On Track", value: loading ? "..." : onTrack },
      { label: "Need Attention", value: loading ? "..." : needAttention },
      { label: "Total Interactions", value: interactions },
    ];
  }, [friends, timeline, loading]);

  return (
    <div className="px-6 pt-12 pb-6 font-sans">
      {/* Header Section */}
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Friends to keep close in your life
        </h1>
        <p className="mt-4 text-sm leading-6 text-slate-500">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-8 flex justify-center">
        <button className="flex items-center gap-2 rounded-md bg-[#2D4F3F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#233d31] transition-colors">
          <Plus size={18} />
          Add a Friend
        </button>
      </div>

      {/* Dynamic Stats Grid */}
      <div className="mx-auto mt-8 max-w-6xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dynamicStats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-xl bg-white p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md"
            >
              <span
                className={`text-3xl font-bold ${
                  stat.label === "Need Attention" && stat.value > 0
                    ? "text-red-500"
                    : "text-[#1a2e25]"
                }`}
              >
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-medium text-slate-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="mx-auto mt-16 max-w-6xl border-slate-200" />
    </div>
  );
};

export default Banner;
