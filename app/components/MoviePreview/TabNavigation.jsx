import React from "react";

export default function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "seasons", label: "Seasons" },
    { id: "details", label: "Details" },
    { id: "moreLikeThis", label: "More Like This" }
  ];

  return (
    <div className="flex border-b justify-between items-center border-gray-700 px-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`py-2 px-4 text-[13px] font-medium relative ${
            activeTab === tab.id
              ? "gold_color"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellw-500 gold_bg"></div>
          )}
        </button>
      ))}
    </div>
  );
}