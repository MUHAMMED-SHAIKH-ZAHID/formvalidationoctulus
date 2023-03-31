import React, { useState } from "react";
import image from "../Images/job-bg.jpg";
import Personaldetails from "./Personaldetails";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import Jobposition from "./Jobposition";

const Signup = () => {
  // const [form ,  setForm ]= useState(false)
  const [form, setForm] = useState(true)
  console.log("itehs teh  formmm",form);
  const [id,setId]=useState('')
  return (
    <div className="  flex">
      <div
        className="w-1/2 relative border-5 flex justify-between"
        style={{
          backgroundImage: `url(${image})`,
          height: "100vh",
        }}
      >
        <div className=" relative flex-col items-center justify-around  h-4/6 pt-56 px-20 ">
          <p className="text-white font-bold text-5xl  ">Lets Join with us !</p>
          <p className="text-white text-lg ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            explicabo ipsam possimus?
          </p>
        </div>
        <div className=" absolute bottom-10 w-[100%] flex justify-between lg:px-10 items-center  ">
          <div className="  ">
            <p className="text-white">Copyright@2022 Octilus Technologies</p>
          </div>
          <div className="flex text-white w-[20%]  justify-between ">
            <FaFacebookF />
            <FaTwitter />
            <ImLinkedin2 />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        {form ?  <Personaldetails setForm={setForm} setId={setId} />  :      <Jobposition setForm={setForm} id={id} />}
       
   
      </div>
    </div>
  );
};

export default Signup;
