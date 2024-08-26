import React from "react";
import Image from "next/image";

function cartPage() {
  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] text-red-500">
      {/*product container*/}
      <div className="h-1/2 p-4 flex flex-col justify-center   lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20">
        <div className="">
          {/*single item container*/}
          <div className="flex items-center justify-between mb-4 ">
            <Image
              src="/temporary/p1.png"
              alt=""
              width={100}
              height={100}
            ></Image>
            <div className="">
              <h1 className="font-bold text-2xl ">Sicilian</h1>
              <span>Large</span>
            </div>
            <h2 className="font-bold">$27.52</h2>
            <span className="cursor-pointer">X</span>
          </div>
          <div className="flex items-center justify-between mb-4 ">
            <Image
              src="/temporary/p1.png"
              alt=""
              width={100}
              height={100}
            ></Image>
            <div className="">
              <h1 className="font-bold text-2xl ">Sicilian</h1>
              <span>Large</span>
            </div>
            <h2 className="font-bold">$27.52</h2>
            <span className="cursor-pointer">X</span>
          </div>
          <div className="flex items-center justify-between mb-4 ">
            <Image
              src="/temporary/p1.png"
              alt=""
              width={100}
              height={100}
            ></Image>
            <div className="">
              <h1 className="font-bold text-2xl ">Sicilian</h1>
              <span>Large</span>
            </div>
            <h2 className="font-bold">$27.52</h2>
            <span className="cursor-pointer">X</span>
          </div>
        </div>
      </div>
      {/*payment container*/}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col  justify-center gap-6 lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 2xl:text-xl 2xl:gap-8">
        <div className="flex justify-between">
          <span className="">Subtotal (3items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">Free!</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="uppercase">Total(incl.vat)</span>
          <span className="font-bold">$88.20</span>
        </div>
        <hr className=""></hr>
        <div className="flex justify-end">
          {" "}
          <button className="uppercase bg-red-500 text-white p-3 rounded-md w-1/2">
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default cartPage;
