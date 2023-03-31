import React, { useState } from 'react'
import { SubmitData } from './api/services/FormRequest'

const Personaldetails = ({setForm , setId}) => {
   const [gender,setGender] =useState(false)
    const [data ,setData] = useState({
        name:"",
        email:'',
        phone:'',
    })
  
   const handleChangegender = (e) =>{
      setGender(e.target.value)
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
      const [validname,setValidname] =useState(true)
      const [validemail,setValidemail] =useState(true)
      const [validphone,setValidphone] =useState(true)
      const [isgender,setIsgender] = useState(true)

      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(gender,"this is the freaking gender of the year");
        gender ? setIsgender(true): setIsgender(false) 
        console.log(data.name,data.email,data.phone);
        let nameRegex =/^[a-zA-Z0-9 \s]{5,25}$/
        let emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let phoneRegex =/^[0-9]{10}$/
        console.log(gender,"genderre");
        nameRegex.test(data.name) ? setValidname(true) : setValidname(false)
        emailRegex.test(data.email)? setValidemail(true): setValidemail(false)
        phoneRegex.test(data.phone)? setValidphone(true): setValidphone(false)
        if(nameRegex.test(data.name) && emailRegex.test(data.email) &&  phoneRegex.test(data.phone)&& isgender){
          const Data = {...data,gender}
          console.log("success", Data);
          const response  = await SubmitData(Data)
         console.log(response,"resoponse",setForm(),"=>setform ggggggggggggggggg");
          setId(response.data.id)
          setForm(()=>false)
        }
       
      }

      return (
          <div className=' px-20 pt-10'>
        <div className="flex">
        <p className='font-bold text-3xl'>Personal Information</p>
        </div>
        <div className="mt-5">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit} >
        <input
                      type="text"
                      className="p-4  border-gray-300 border-2 text-zinc-700 font-semibold  rounded-md w-3/4"
                      placeholder="Name"
                      name="name"
                      onChange={(e)=>{
                        handleChange(e)
                        setValidname(true)
                      }}
                      value={data.name}
                    />
                      <span
                style={{
                  display: validname ? "none" : "block",
                  color: "red",
                  fontSize: "12px",
                  marginTop:-30
                }}
              >
               Enter A valid Name
              </span>
                     <input
                      type="text"
                      className="p-4  border-gray-300 border-2 text-zinc-600 font-semibold rounded-md w-3/4"
                      placeholder="Email Address"
                      name="email"
                      onChange={(e)=>{
                        handleChange(e)
                        setValidemail(true)
                      }}
                      value={data.email}
                    />
                         <span
                style={{
                  display: validemail ? "none" : "block",
                  color: "red",
                  fontSize: "12px",
                  marginTop:-30
                }}
              >
               Please Enter A valid Email
              </span>
                     <input
                      type="text"
                      className="p-4  border-gray-300 border-2 text-zinc-700 font-semibold rounded-md w-3/4"
                      placeholder="Phone"
                      name="phone"
                      onChange={(e)=>{
                        handleChange(e)
                        setValidphone(true)
                      }}
                      value={data.phone}
                    />
                         <span
                style={{
                  display: validphone ? "none" : "block",
                  color: "red",
                  fontSize: "12px",
                  marginTop:-30
                }}
              >
               Enter a Valid Phone Number
              </span>

                    <p className='text-lg font-bold'>Select Gender</p>
                    <div className="flex gap-5">
                    <label for='male' className="border-2 p-4 px-8 rounded-md cursor-pointer">
                            <input type='checkbox' className='cursor-pointer ' value="male" name="male" id='male' onChange={handleChangegender} checked={gender === 'male'}  />
                            <label for='male'  className='ml-2 cursor-pointer text-zinc-400 font-semibold  ' >Male</label>
                        </label>
                        <label for='female' className="border-2 p-4 px-8 rounded-md cursor-pointer">
                        <input type='checkbox' value="female" name="male" id='female' onChange={handleChangegender} checked={gender === 'female'} className='cursor-pointer' />
                            <label  className='ml-2 cursor-pointer  text-zinc-400 font-semibold' >Female</label>
                        </label>
                    </div>
                    <span
                style={{
                  display: isgender ? "none" : "block",
                  color: "red",
                  fontSize: "12px",
                  marginTop:-30
                }}
              >
              Please Select A Gender
              </span>

                    <div className="">
                        <button type="submit" className='bg-[#01b681] rounded-md  font-semibold text-white text-center px-24 p-5'>Next</button>
                    </div>
        </form>
        {/* <button onClick={()=>setForm(false)}>sdfsadfasd</button> */}
        </div>
    </div>
  )
}

export default Personaldetails