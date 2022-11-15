import React, { useState } from 'react'



import icon from '../assets/profile.jpeg';

function Login() {



  const [email, setEmail] = useState();
  
  const [password, setPassword] = useState();


  const handleEmail=(e:any)=>{
    e.preventDefault();
    setEmail(e.target.value);
  }



  const handlePassword=(e:any)=>{
    e.preventDefault();
    setPassword(e.target.value);
  }


  return (
    <>
            <div className='relative flex justify-center'>
              <div className='absolute h-[540px] w-[465px] bg-[#F8D54B] rounded-3xl mt-[100px]'>
                <img src={icon} alt="profile icon" className='absolute ml-[140px] m-[-90px] w-[171px] h-[171px] rounded-full border-[#F8D54B] border-[10px]' />
                <div className='flex justify-center mt-[100px] text-3xl font-inter'>LOGIN</div>

                <div className='w-1/3 h-1/6 mb-7 font-inter font-light'>
                        <label htmlFor="first_name" className="block w-[400px] mt-[26px] ml-[26px] mb-2 text-xl text-black">Email or phone number : </label>
                        <input onChange={handleEmail} value={email} type="text" id="first_name" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5"/>
                        
                        
                        <label htmlFor="last_name" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Password : </label>
                        <input onChange={handlePassword} value={password} type="password" id="last_name" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5"/>
                        
                        <div className='opacity-40 w-[200px] ml-[300px]'>Forgot password ?</div>

                        <div className='flex justify-center pt-1 text-xl text-white mt-[80px] ml-[130px]  w-[180px] h-[40px] rounded-[20px] bg-[#30017E]'>
                          Login
                        </div>
                </div>

              </div>
            </div>
    
    </>
  )
}

export default Login