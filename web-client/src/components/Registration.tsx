import React, { useState } from 'react'

import { Link } from 'react-router-dom';

import icon from '../assets/profile.jpeg';

import { motion } from 'framer-motion';


function Registration() {

  const [chooseRegistrationType, setChooseRegistrationType] = useState(true)

  const [chooseEmployee, setChooseEmployee] = useState(false)

  const [chooseNgo, setChooseNgo] = useState(false)

  const [chooseEnterprise, setChooseEnterprise] = useState(false)
  

  const [employeeFirstName, setEmployeeFirstName] = useState("")
  
  const handleEFN=(e:any)=>{
    e.preventDefault();
    setEmployeeFirstName(e.target.value);
  }


  const [employeeLastName, setEmployeeLastName] = useState("")

  const handleELN=(e:any)=>{
    e.preventDefault();
    setEmployeeLastName(e.target.value);
  }


  const [employeePhoneNumber, setEmployeePhoneNumber] = useState("")

  const handleEPN=(e:any)=>{
    e.preventDefault();
    setEmployeePhoneNumber(e.target.value);
  }


  const [employeeEmail, setEmployeeEmail] = useState("")

  const handleEE=(e:any)=>{
    e.preventDefault();
    setEmployeeEmail(e.target.value);
  }


  const [employeePassword, setEmployeePassword] = useState("")

  const handleEP=(e:any)=>{
    e.preventDefault();
    setEmployeePassword(e.target.value);
  }


  const [employeeConfirmPassword, setEmployeeConfirmPassword] = useState("")

  const handleECP=(e:any)=>{
    e.preventDefault();
    setEmployeeConfirmPassword(e.target.value);
  }




  const [employeeCompanyEmail, setEmployeeCompanyEmail] = useState("")

  const handleECE=(e:any)=>{
    e.preventDefault();
    setEmployeeCompanyEmail(e.target.value);
  }










  const [enterpriseName, setEnterpriseName] = useState("");
  
  const handleEntN=(e:any)=>{
    e.preventDefault();
    setEnterpriseName(e.target.value);
  }

  const [enterpriseEmail, setEnterpriseEmail] = useState("");
  
  const handleEntE=(e:any)=>{
    e.preventDefault();
    setEnterpriseEmail(e.target.value);
  }


  const [enterpriseInterest, setEnterpriseInterest] = useState("");
  
  const handleEntI=(e:any)=>{
    e.preventDefault();
    setEnterpriseInterest(e.target.value);
  }

  const [enterpriseLocation, setEnterpriseLocation] = useState("");
  
  const handleEntL=(e:any)=>{
    e.preventDefault();
    setEnterpriseLocation(e.target.value);
  }


  const [enterprisePassword, setEnterprisePassword] = useState("");
  
  const handleEntP=(e:any)=>{
    e.preventDefault();
    setEnterprisePassword(e.target.value);
  }


  const [enterpriseConfirmPassword, setEnterpriseConfirmPassword] = useState("");
  
  const handleEntC=(e:any)=>{
    e.preventDefault();
    setEnterpriseConfirmPassword(e.target.value);
  }









  const [organisationName, setOrganisationName] = useState();

  const handleON=(e:any)=>{
    e.preventDefault();
    setOrganisationName(e.target.value);
  }


  const [organisationInterest, setOrganisationInterest] = useState();

  const handleOI=(e:any)=>{
    e.preventDefault();
    setOrganisationInterest(e.target.value);
  }


  const [organisationEmail, setOrganisationEmail] = useState();

  const handleOE=(e:any)=>{
    e.preventDefault();
    setOrganisationEmail(e.target.value);
  }


  const [organisationPassword, setOrganisationPassword] = useState();

  const handleOP=(e:any)=>{
    e.preventDefault();
    setOrganisationPassword(e.target.value);
  }

  const [organisationConfirmPassword, setOrganisationConfirmPassword] = useState();

  const handleOC=(e:any)=>{
    e.preventDefault();
    setOrganisationConfirmPassword(e.target.value);
  }







  return (
    <>

        <div className='relative flex justify-center'>
            <div className='absolute h-[840px] w-[465px] bg-[#F8D54B] rounded-3xl mt-[100px]'>



            <img src={icon} alt="profile icon" className='absolute m-[-90px] w-[171px] h-[171px] rounded-full border-[#F8D54B] border-[10px]' />
                
{
  chooseRegistrationType && 
<>

            <motion.div onClick={()=>{
              setChooseRegistrationType(false)
              setChooseEmployee(true)
            }
            } whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                      }}
                      className="flex btn text-3xl text-[#F8D54B]  justify-center pt-[50px] bg-white ml-[55px] mt-[120px] h-[150px] w-[350px] rounded-xl">
              Employee
            </motion.div>

            <motion.div onClick={()=>{
              setChooseRegistrationType(false)
              setChooseEnterprise(true)
            }
          } whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                      }}
            className="flex btn text-3xl text-[#F8D54B] justify-center pt-[50px] bg-white ml-[55px] mt-[120px] h-[150px] w-[350px] rounded-xl">
              Enterprise
            </motion.div>

            <motion.div onClick={()=>{
              setChooseRegistrationType(false)
              setChooseNgo(true)
            }} whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                      }}
            className="flex btn text-3xl text-[#F8D54B] justify-center pt-[50px] bg-white ml-[55px] mt-[120px] h-[150px] w-[350px] rounded-xl">
              NGO
            </motion.div>
            </>

}



{/* ****************************************************************************************************************************************************** */}
{/* EMPLOYEE REGISTRATION */}
{

chooseEmployee && <div>
                <div className='flex justify-center mt-[50px] text-3xl font-inter'>SIGN UP</div>
                <div className='w-1/3 h-1/6 mb-7 font-inter font-light'>
                        <label htmlFor="first_name" className="block mt-[26px] ml-[26px] mb-2 text-xl text-black">First name : </label>
                        <input onChange={handleEFN} value={employeeFirstName} type="text" id="first_name" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="Foulen"/>
                        
                        
                        <label htmlFor="last_name" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Last name : </label>
                        <input onChange={handleELN} value={employeeLastName} type="text" id="last_name" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="Weld foulen"/>
                        
                          
                        <label htmlFor="email" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Email : </label>
                        <input onChange={handleEE} value={employeeEmail} type="text" id="email" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="foulen.weldfoulen@example.org"/>

                          
                        <label htmlFor="phone" className="block w-[170px] mt-[11px] ml-[26px] mb-2 text-xl text-black">Phone number : </label>
                        <input onChange={handleEPN} value={employeePhoneNumber} type="text" id="phone" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="55318868"/>

                          
                        <label htmlFor="password" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Password : </label>
                        <input onChange={handleEP} value={employeePassword} type="password" id="password" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="*********"/>

                          
                        <label htmlFor="cpassword" className="block w-[200px] mt-[11px] ml-[26px] mb-2 text-xl text-black">Confirm password : </label>
                        <input onChange={handleECP} value={employeeConfirmPassword} type="password" id="cpassword" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="*********"/>

                        <label htmlFor="companyMail" className="block w-[200px] mt-[11px] ml-[26px] mb-2 text-xl text-black">Company mail : </label>
                        <input onChange={handleECE} value={employeeCompanyEmail} type="text" id="companyMail" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="Company mail"/>


                </div>



                <div className='flex justify-center pt-1 text-xl text-white mt-[80px] ml-[130px]  w-[180px] h-[40px] rounded-[20px] bg-[#30017E]'>
                  Sign up
                </div>

                <Link to='/login' className='flex ml-[130px] w-[400px] h-[40px] rounded-[20px] opacity-60	'>
                  already a member ? <div className='font-bold pl-1'> log in</div> 
                </Link>


</div>
}
{/* ****************************************************************************************************************************************************** */}




{/* ****************************************************************************************************************************************************** */}
{/* ENTERPRISE REGISTRATION */}
{

chooseEnterprise && <div>
                <div className='flex justify-center mt-[50px] text-3xl font-inter'>SIGN UP</div>
                <div className='w-1/3 h-1/6 mb-7 font-inter font-light'>
                        <label htmlFor="enterprise_name" className="block w-[190px] mt-[26px] ml-[26px] mb-2 text-xl text-black">Enterprise name : </label>
                        <input onChange={handleEntN} value={enterpriseName} type="text" id="enterprise_name" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="Foulen"/>
                        
                        
   
                        <label htmlFor="email" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Email : </label>
                        <input onChange={handleEntE} value={enterpriseEmail} type="text" id="email" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="company@example.org"/>


                        <label htmlFor="interest" className="block w-[200px] mt-[11px] ml-[26px] mb-2 text-xl text-black">Field of interest : </label>
                        <input onChange={handleEntI} value={enterpriseInterest} type="text" id="interest" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="Interest"/>


                        <label htmlFor="location" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Location : </label>
                        <input onChange={handleEntL} value={enterpriseLocation} type="text" id="location" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="Location"/>


                          
                        <label htmlFor="password" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Password : </label>
                        <input onChange={handleEntP} value={enterprisePassword} type="password" id="password" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="*********"/>

                          
                        <label htmlFor="cpassword" className="block w-[200px] mt-[11px] ml-[26px] mb-2 text-xl text-black">Confirm password : </label>
                        <input onChange={handleEntC} value={enterpriseConfirmPassword} type="password" id="cpassword" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="*********"/>


                </div>



                <div className='flex justify-center pt-1 text-xl text-white mt-[140px] ml-[130px]  w-[180px] h-[40px] rounded-[20px] bg-[#30017E]'>
                  Sign up
                </div>

                <Link to='/login' className='flex ml-[130px] w-[400px] h-[40px] rounded-[20px] opacity-60	'>
                  already a member ? <div className='font-bold pl-1'> log in</div> 
                </Link>


</div>
}
{/* ****************************************************************************************************************************************************** */}





{/* ****************************************************************************************************************************************************** */}
{/* NGO REGISTRATION */}
{

chooseNgo && <div>
                <div className='flex justify-center mt-[50px] text-3xl font-inter'>SIGN UP</div>
                <div className='w-1/3 h-1/6 mb-7 font-inter font-light'>
                        <label htmlFor="org_name" className="block w-[200px] mt-[26px] ml-[26px] mb-2 text-xl text-black">Organization name : </label>
                        <input onChange={handleON} value={organisationName} type="text" id="org_name" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="Name"/>
                        
                        
                        <label htmlFor="interest" className="block w-[200px] mt-[11px] ml-[26px] mb-2 text-xl text-black">Field of interest : </label>
                        <input onChange={handleOI} value={organisationInterest} type="text" id="interest" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="Interest"/>
                        
                          
                        <label htmlFor="email" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Email : </label>
                        <input onChange={handleOE} value={organisationEmail} type="text" id="email" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="organization@example.org"/>

                          
                          
                        <label htmlFor="password" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Password : </label>
                        <input onChange={handleOP} value={organisationPassword} type="password" id="password" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="*********"/>

                          
                        <label htmlFor="cpassword" className="block w-[200px] mt-[11px] ml-[26px] mb-2 text-xl text-black">Confirm password : </label>
                        <input onChange={handleOC} value={organisationConfirmPassword} type="password" id="cpassword" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" placeholder="*********"/>



                </div>



                <button className='flex justify-center pt-1 text-xl text-white mt-[240px] ml-[130px]  w-[180px] h-[40px] rounded-[20px] bg-[#30017E]'>
                  Sign up
                </button>

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