import React from "react";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div className="mx-2 lg:m-14 bg-gray-300 p-5">
      <div className=" bg-white text-black p-10 rounded-xl ">
        <div className=" flex flex-col lg:flex-row justify-between">
          <div className="order-2 lg:order-1 mt-2">
            <div className="flex flex-col gap-3 mb-5">
              <h1 className="text-xl font-semibold">About</h1>
              <h1 className="text-xl font-semibold">Rielverse</h1>
            </div>
            <p className="leading-8">
              Work directly with Insurance experts that have over 15 years{" "}
              <br className="hidden lg:flex" /> of experience in the insurance
              industry.
            </p>
            <div className="h-[1px] w-[90%] bg-gradient-to-r from-blue-500 to-transparent mt-20"></div>
          </div>

          <div className="relative order-1 lg:order-2 w-[15rem] mx-auto lg:mx-0 lg:w-[22rem]">
            <img src="/col.jfif" alt="col" className="rounded-lg" />
            <span>
              <img
                src="/v.svg"
                alt="v"
                className=" absolute w-[7rem] lg:w-[15rem] -bottom-2 -left-12 lg:-bottom-14 lg:-left-[130px] rounded-xl"
              />
            </span>
          </div>
        </div>
        <div className="py-8">
          <div className="flex flex-col gap-3 mb-5">
            <h1 className="text-xl font-semibold leading-9">
              Comparing, customizing & buying insurance <br /> policies has just
              got easier
            </h1>
          </div>
          <p className="mb-10 leading-8">
            Rielverse is built on over a decade’s worth of insurance experience
            and expertise. Abc, our co-founder has worked in insurance for
            nearly 15 years, and understands the pain points of the customers
            who are looking to buy or renew their insurance, be it car, home,
            life or health and has been looking at how to resolve these issues
            as well as providing a solution-based service to his clients.
          </p>
          <p className="leading-8">
            This is where Abc, founder of SNG and co-founder of Rielverse was
            able to provide his digital experience to help build a user friendly
            and easy digital platform that provides an online quote to customers
            in under 1 minute, at any time, anywhere on any device.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="border-2 mx-10 lg:mx-0 border-transparent rounded-xl hover:border-blue-700">
            <motion.div
              initial={{ x: 0, y: 0 }}
              whileHover={{
                x: 10,
                y: 10,
                transition: { duration: 0.5 },
              }}
            >
              <img
                src="/temp.png"
                alt="temp"
                className="rounded-xl"
                width={800}
              />
            </motion.div>
          </div>
          <div className="py-10 space-y-5">
            <div>
              <div className="flex flex-col gap-3 mb-5">
                <h1 className="text-xl font-semibold">Our Mission</h1>
              </div>
              <p className="leading-8">
                Our mission is to become the most reliable platform for personal
                finance and insurance in the SNG by simplifying the process.
                Find and compare insurance policies, credit cards, loans, and
                bank accounts all in one place.
              </p>
            </div>
            <div>
              <div className="flex flex-col gap-3 mb-5">
                <h1 className="text-xl font-semibold">Our Vision</h1>
              </div>
              <p className="leading-8">
                Our vision is to have you bank on us for all your personal
                finance needs. Our platform allows you to easily compare
                multiple policies side-by-side to visualize the benefits and
                advantages of each policy, thereby empowering you to make your
                own informed banking decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="py-0 lg:py-10 space-y-5">
          <p className="leading-7 text-sm">
            The team at Rielverse has been hand-picked to ensure that the same
            level of care, service and insurance expertise is what each customer
            receives, always! Constantly listening and learning so that the
            customer has the best digital experience, is able to find the best
            insurance cover quickly, easily and at the best price with an
            insurance expert at the other end of the phone or WhatsApp chat as
            support.
          </p>
          <p className="leading-7 text-sm">
            The team at Rielverse chose to partner with Abc Insurance as their
            broker because they have nearly 15 years of experience within the
            insurance industry, and more importantly they provide a service that
            aligns itself with the values that underpin Rielverse around
            quality, transparency, speed, and best service.
          </p>
        </div>
        <div className="py-14 my-24 px-10 gap-8 lg:gap-4 bg-gray-300 rounded-xl grid grid-rows-5 lg:grid-cols-5">
          <h1 className="font-semibold">Need Insurance? Request Call Back</h1>

          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name*"
              className="px-8 w-[100%] text-sm py-3 border-b-2 border-blue-500 rounded-full placeholder-slate-600 bg-transparent"
            />
          </div>

          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Phone Number*"
              className="px-8 w-[100%] text-sm py-3 border-b-2 border-blue-500 rounded-full placeholder-slate-600 bg-transparent"
            />
          </div>

          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name*"
              className="px-8 w-[100%] text-sm py-3 border-b-2 border-blue-500 rounded-full placeholder-slate-600 bg-transparent"
            />
          </div>

          <button className="relative w-fit mx-auto font-semibold px-8 items-center flex whitespace-nowrap justify-start py-3 bg-blue-500 rounded-xl text-white overflow-hidden">
            <p className="z-20 text-xs">REQUEST CALLBACK</p>
            <span className=" -top-4 right-10 rotate-45 absolute w-20 h-20 border-t-[12px] border-r-[12px] border-gray-300 rounded-lg"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
