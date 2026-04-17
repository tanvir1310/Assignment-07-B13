import React, { createContext, useState } from "react";

export const InstallAppsContext = createContext(null);

export const InstallAppsProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);
  const [timeline, setTimeline] = useState([]);

  return (
    <InstallAppsContext.Provider
      value={{ installedApps, setInstalledApps, timeline, setTimeline }}
    >
      {children}
    </InstallAppsContext.Provider>
  );
};
