import React from "react";
import { motion } from "framer-motion";

function Who() {
  return (
    <div className="flex justify-center my-20 px-4 lg:px-14 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-9 lg:gap-10">
        <motion.div
          className="col-span-3 text-center lg:text-start flex flex-col gap-2 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
          }}
        >
          <h1 className="text-xl font-semibold text-gray-400">WHO WE ARE ?</h1>
          <h1 className="text-4xl leading-[3rem] font-semibold text-blue-500 ">
            Always there for our users
          </h1>
          <p className="text-black font-medium text-sm leading-9 w-[80%] lg:w-full mx-auto">
            We are committed to serve our customers during or after the purchase
            of your policy, handover all your insurance related worries to us
            and Relax!
          </p>
        </motion.div>
        <motion.div
          className="col-span-6 flex flex-row "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
          }}
        >
          <div className=" bg-gradient-to-r from-blue-400 via-transparent to-transparent p-0.5 rounded-2xl">
            <div className=" flex bg-white py-7 rounded-2xl px-5 flex-col justify-center gap-3 text-black h-full">
              <div className="px-3">
                <img src="/save.svg" alt="save" width={70} />
              </div>
              <h1 className="text-2xl font-semibold">
                Save Big on Your Policies
              </h1>
              <p className="text-sm leading-6">
                We provide competitive rates with all other perks & benefits of
                online insurance
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-400 via-transparent to-transparent p-0.5 rounded-2xl">
            <div className=" flex bg-white py-7 rounded-2xl px-5 flex-col justify-center gap-3 text-black h-full">
              <div className="px-3 ">
                <img src="/comp.svg" alt="save" width={70} />
              </div>
              <h1 className="text-2xl font-semibold">
                Comparing Quotes is Verse
              </h1>
              <p className="text-sm leading-6">
                We provide you with simple yet effective tools & calculators to
                find the best plan
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-400 via-transparent to-transparent p-0.5 rounded-2xl">
            <div className=" flex bg-white py-7 rounded-2xl px-5 flex-col justify-center gap-3 text-black h-full">
              <div className="px-3">
                <img src="/use.svg" alt="save" width={70} />
              </div>
              <h1 className="text-2xl font-semibold">User Experience</h1>
              <p className="text-sm leading-6">
                An awesome insurance experience which is User-friendly, Quick &
                Joyful
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Who;
