import React, { useState } from 'react'

import { Link } from 'react-router-dom';

import icon from '../assets/profile.jpeg';




function Registration() {



  const [typeOfUser, setTypeOfUser] = useState();

  const ziw=false;



  return (
    <>

        <div className='relative flex justify-center'>
            <div className='absolute h-[840px] w-[465px] bg-[#F8D54B] rounded-3xl mt-[100px]'>



            <img src={icon} alt="profile icon" className='absolute m-[-90px] w-[171px] h-[171px] rounded-full border-[#F8D54B] border-[10px]' />
                


            <div className="flex justify-center bg-white mt-[30px]">
              Employee
            </div>





{/* ****************************************************************************************************************************************************** */}
{/* EMPLOYEE REGISTRATION */}
{ziw && <div>
                <div className='flex justify-center mt-[50px] text-3xl font-inter'>SIGN UP</div>
                <div className='w-1/3 h-1/6 mb-7 font-inter font-light'>
                        <label htmlFor="first_name" className="block mt-[26px] ml-[26px] mb-2 text-xl text-black">First name : </label>
                        <input type="text" id="first_name" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="Foulen"/>
                        
                        
                        <label htmlFor="last_name" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Last name : </label>
                        <input type="text" id="last_name" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="Weld foulen"/>
                        
                          
                        <label htmlFor="email" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Email : </label>
                        <input type="text" id="email" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="foulen.weldfoulen@example.org"/>

                          
                        <label htmlFor="phone" className="block w-[170px] mt-[11px] ml-[26px] mb-2 text-xl text-black">Phone number : </label>
                        <input type="text" id="phone" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="55318868"/>

                          
                        <label htmlFor="password" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Password : </label>
                        <input type="password" id="password" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="*********"/>

                          
                        <label htmlFor="cpassword" className="block w-[200px] mt-[11px] ml-[26px] mb-2 text-xl text-black">Confirm password : </label>
                        <input type="password" id="cpassword" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="*********"/>

                        <label htmlFor="company" className="block w-[200px] mt-[11px] ml-[26px] mb-2 text-xl text-black">Choose company : </label>
                        <input type="text" id="company" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="Company"/>


                </div>



                <div className='flex justify-center pt-1 text-xl text-white mt-[500px] ml-[130px]  w-[180px] h-[40px] rounded-[20px] bg-[#30017E]'>
                  Sign up
                </div>

                <Link to='/login' className='flex ml-[130px] w-[400px] h-[40px] rounded-[20px] opacity-60	'>
                  already a member ? <div className='font-bold pl-1'> log in</div> 
                </Link>


</div>
}
{/* ****************************************************************************************************************************************************** */}






            </div>
        </div>

    </>
  )
}

export default Registration