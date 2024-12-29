import { motion } from "framer-motion";
import React from "react";

interface ToggleButtonsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ToggleButtons({
  activeTab,
  onTabChange,
}: ToggleButtonsProps) {
  return (
    <div className="relative w-fit mx-auto lg:mx-0">
      <motion.div
        className="absolute top-1.5 left-1.5 w-[48.5%] h-[80%] bg-[rgba(161,185,215,255)] rounded-lg"
        animate={{ x: activeTab === "business" ? "100%" : "0%" }}
        transition={{ duration: 0.5 }}
      />
      <div className="flex flex-row p-1.5 text-xs bg-[rgba(255,255,255,255)] w-fit rounded-lg">
        <button
          onClick={() => onTabChange("personal")}
          className={`px-10 lg:px-20 py-3 z-10 ${
            activeTab === "personal" ? "text-blue-600" : "text-black"
          }`}
        >
          PERSONAL
        </button>
        <button
          onClick={() => onTabChange("business")}
          className={`px-10 lg:px-20 py-3 z-10 ${
            activeTab === "business" ? "text-blue-600" : "text-black"
          }`}
        >
          BUSINESS
        </button>
      </div>
    </div>
  );
}
