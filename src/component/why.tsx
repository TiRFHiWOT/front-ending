import React from "react";
import { motion } from "framer-motion";

function Why() {
  return (
    <div className="flex flex-col overflow-hidden">
      <motion.div
        className="text-center px-5"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 },
        }}
      >
        <h1 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-700">
          WHY RIELVERSE.COM ?
        </h1>
        <h1 className="text-2xl md:text-4xl mt-2 md:mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900">
          Insurance Has Never Been So Simple &
        </h1>
        <h1 className="text-2xl md:text-4xl mt-2 md:mt-8 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900">
          We Are Trying To Make It Even More!
        </h1>
        <p className="text-black text-sm font-medium mt-4 md:mt-8 leading-8">
          Be it the Comparisons, Helping you find the best plan for your needs,
          Making changes to your existing policy or even claims - We are with
          you all the way
        </p>
      </motion.div>

      <div className="flex justify-center my-10 px-5 lg:px-10">
        <div className=" bg-gradient-to-b from-blue-700 via-blue-700 to-transparent p-1 rounded-3xl">
          <div className="mx-auto bg-white text-center py-8 grid grid-cols-1 lg:grid-cols-3 rounded-3xl">
            <motion.div
              className="flex flex-col justify-around text-black px-2 gap-3 md:border-r-2 border-blue-700"
              initial={{ opacity: 0, scale: 1.3, y: 50 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.8 },
              }}
            >
              <h1 className="text-lg">GUIDANCE</h1>
              <div className="mx-auto ">
                <img src="/guide.svg" alt="cus" width={70} />
              </div>
              <h1 className="text-xl font-semibold text-blue-600">
                Transparent Comparisons
              </h1>
              <p className="text-sm font-medium leading-7">
                Rielverse have a team of unbiased insurance experts that is
                dedicated to helping you buy best insurance
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col justify-around text-black px-2 gap-3 md:border-r-2 border-blue-700"
              initial={{ opacity: 0, scale: 1.3, y: 50 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.8 },
              }}
            >
              <h1 className="text-lg">ASSISTANCE</h1>
              <div className="mx-auto ">
                <img src="/ass.svg" alt="cus" width={70} />
              </div>
              <h1 className="text-xl font-semibold text-blue-600">
                Application to Issuance
              </h1>
              <p className="text-sm font-medium leading-7">
                From short-simple forms and a hassle free process to a Dedicated
                Operations Team for a smooth experience
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col justify-around text-black px-2 gap-3 "
              initial={{ opacity: 0, scale: 1.3, y: 50 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.8 },
              }}
            >
              <h1 className="text-lg">SUPPORT</h1>
              <div className="mx-auto ">
                <img src="/sup.svg" alt="cus" width={70} />
              </div>
              <h1 className="text-xl font-semibold text-blue-600">
                Dedicated Claim Desk
              </h1>
              <p className="text-sm font-medium leading-7">
                We have a team of professionals that is dedicated to helping our
                users in the event of a claim.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
