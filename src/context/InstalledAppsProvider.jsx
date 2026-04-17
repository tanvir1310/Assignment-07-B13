import { useState } from "react";
import { InstallAppsContext } from "./InstallAppsContext";

const InstalledAppsProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  // এই স্টেটটি আপনার মিসিং ছিল, যা টাইমলাইনের জন্য দরকার
  const [timeline, setTimeline] = useState([]);

  const data = {
    installedApps,
    setInstalledApps,
    timeline, // এখানে অ্যাড করা হয়েছে
    setTimeline, // এখানে অ্যাড করা হয়েছে
  };

  return (
    <InstallAppsContext.Provider value={data}>
      {children}
    </InstallAppsContext.Provider>
  );
};

export default InstalledAppsProvider;
