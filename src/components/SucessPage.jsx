import React from "react";
import image from "../Images/big-green-check.png";

const SucessPage = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex-col flex items-center   ">
        <div className="">
          <img className=" " src={image} alt="" />
        </div>
        <div className="font-bold text-4xl">Applicaion Submitted</div>
        <div className="text-gray-400 font-medium py-2 ">Thank You for Your intrest!</div>
        <div className="text-gray-400 font-medium">
          Our review team will your application and call you for interwiew
        </div>
      </div>
    </div>
  );
};

export default SucessPage;
