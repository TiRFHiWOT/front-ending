import React from "react";
import { motion } from "framer-motion";

function Explore() {
  return (
    <div className="flex justify-center py-48 px-5 overflow-hidden">
      <motion.div
        className="mx-auto"
        initial={{ opacity: 0, scale: 1.5, y: -50 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.8 },
        }}
      >
        <img src="/Frame.svg" alt="frame" width={1300} />
      </motion.div>
    </div>
  );
}

export default Explore;
