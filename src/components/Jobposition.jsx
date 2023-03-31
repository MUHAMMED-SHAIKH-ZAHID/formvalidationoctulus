import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import {  useNavigate } from "react-router-dom";
import { UpdateData } from "./api/services/FormRequest";

const Jobposition = ({setForm ,id}) => {
  const [job_title, setjob_title] = useState("");
  const [policy, setPolicy] = useState(false);
  console.log(policy, "policy");
  const handlechange = (e) => {
    setjob_title(e.target.value);
    console.log(e.target.value);
  };
  const handlecheckbox = (e) => {
    setPolicy(!policy);
    console.log(policy);
  };
   const navigate = useNavigate()
   console.log(id,"its teh response fo thew sever");
  const options = [
    { value: "Frontend Developer" },
    { value: "WordPress Developer" },
    { value: "UI/UX Designer" },
    { value: "Support Engineer" },
    { value: "Graphic Designer" },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("teh job_title selected is", job_title, "policy", policy);
    if (job_title && policy) {
      console.log("success", job_title);
      const Data ={id,job_title}
      console.log(Data,"this is freaking");
      const response =await UpdateData(Data)
      console.log(response,"the last responce of the project");
      console.log(response.data,"the last gggggggggggggggggggggggggggg");
     
      if(response?.data?.success === true ){
        navigate('/success')
      }
    }
  };
  return (
    <div className="p-10">
      <div className="text-xl flex font-bold text-gray-400 cursor-pointer" onClick={()=>setForm(true)}>
        <BiArrowBack className="mt-1" /> PREVIOUS STEP{" "}
      </div>
      <div className="font-bold text-4xl py-4">Select Job Position</div>
      <hr className="h-[2px] my-8 bg-gray-300 border-0 " />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col  gap-4">
          {options.map((item) => {
            return (
              <div class="flex items-center ">
                <input
                  id="default-radio-2"
                  type="radio"
                  value={item.value}
                  onChange={handlechange}
                  checked={job_title === item.value}
                  name="default-radio"
                  className="w-4 h-4 bg-green-300 text-green-500 "
                />
                <label
                  for="default-radio-2"
                  className="ml-2 text-lg font-bold text-gray-green dark:text-gray-400"
                >
                  {item.value}
                </label>
              </div>
            );
          })}
        </div>

        <div class="flex items-center py-5">
          <input
            id="link-checkbox"
            type="checkbox"
            value={policy}
            onChange={handlecheckbox}
            className="w-4 h-4 text-[#01b681] bg-gray-100 border-gray-300 rounded focus:ring-[#01b681] "
          />
          <label
            for="link-checkbox"
            className="ml-2 text-base font-bold text-gray-600 "
          >
            I Accept the{" "}
            <a href=" # " className="text-[#01b681] hover:underline">
              Terms of Conditions{" "}
            </a>{" "}
            And{" "}
            <a href=" #" class="text-[#01b681] hover:underline ">
              Privacy Policy
            </a>
          </label>
        </div>

        {/* <button
          type={policy ? :'submit':'button'}
          className="bg-[#01b681] px-20 p-4 rounded-md text-white font-semibold"
        >
          Submit
        </button> */}
        <button type={policy ? "submit" : "button"}
        className="bg-[#01b681] px-20 p-4 rounded-md text-white font-semibold"
        >Submit</button>
      </form>
  
    </div>
  );
};

export default Jobposition;
