import React from "react";

function PersonalCard() {
  return (
    <div className="mx-2 lg:m-14 bg-gray-300 p-5">
      <div className=" bg-white text-black p-5 rounded-xl grid grid-cols-2 ">
        <div className=" col-span-1">
          <div>
            <h1 className="text-2xl font-semibold">Motorcycle Insurance</h1>
            <h1 className="mt-2">Be insured and ready to ride!</h1>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm my-20">
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="First Name"
                className="px-8 w-[100%] py-2 border-b-2 border-blue-500 rounded-full placeholder-slate-300 bg-white"
              />
            </div>

            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Ex:gmail.com "
                className="px-8 w-[100%] py-2 border-b-2 border-blue-500 rounded-full placeholder-slate-300 bg-white"
              />
            </div>

            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Phone"
                className="px-8 w-[100%] py-2 border-b-2 border-blue-500 rounded-full placeholder-slate-300 bg-white"
              />
            </div>

            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="First Name"
                className="px-8 w-[100%] py-2 border-b-2 border-blue-500 rounded-full placeholder-slate-300 bg-white"
              />
            </div>
          </div>

          <button className="relative font-semibold px-10 w-40 flex justify-start py-3 bg-blue-500 rounded-xl text-white overflow-hidden">
            SEND
            <span className=" -top-4 right-10 rotate-45 absolute w-20 h-20 border-t-[12px] border-r-[12px] border-gray-400 rounded-lg"></span>
          </button>

          <div className=" flex flex-row gap-2 my-10">
            <input type="checkbox" className="bg-white" />
            <p className="text-xs">
              I hereby authorize Rielverse to contact me on my given mobile
              number.
            </p>
          </div>
        </div>

        <div className="col-span-1 py-10 pl-20 flex flex-col justify-between ">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-2">
              <img src="/girl.svg" alt="girl" width={30} />
              <div className="flex flex-col">
                <h1 className="font-semibold text-blue-600">Customer Care</h1>
                <p className="text-xs">Looking for help regarding policy?</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2">
              <img src="/call.svg" alt="call" width={22} />
              <div className="flex flex-col">
                <h1 className="font-semibold text-blue-600">
                  Call Us : 9999-22-999
                </h1>
                <p className="text-xs">24/7 available</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2">
              <img src="/mail.svg" alt="mail" width={30} />
              <div className="flex flex-col">
                <h1 className="font-semibold text-blue-600">Drop Email At</h1>
                <p className="text-xs">
                  Email-Id <br />
                  help@reilverse.com | support@reilverse.com
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <img src="/people.svg" alt="people" width={400} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default PersonalCard;
