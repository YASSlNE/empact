import React from 'react'

import DatePicker from "react-datepicker";

import { useState } from 'react';

import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';


function AddEvent() {


    const [name, setName] = useState()

    const handleName=(e:any)=>{
        e.preventDefault();
        setName(e.target.value);
    }


    const [field, setField] = useState();

    const handleField=(e:any)=>{
        e.preventDefault();
        setField(e.target.value);
    }




    const [startDate, setStartDate] = useState(new Date());


    const [details, setDetails] = useState();

    const handleDetails=(e:any)=>{
        e.preventDefault();
        setDetails(e.target.value)
    }


    const [imageSrc, setImageSrc] = useState()





    const [volunteers, setVolunteers] = useState();

    const handleVolunteers=(e:any)=>{
        e.preventDefault();
        setVolunteers(e.target.value);
    }



    const [points, setPoints] = useState();

    const handlePoints=(e:any)=>{
        e.preventDefault();
        setPoints(e.target.value);
    }

    const initialImage = '';

    const config2: ImagePickerConf = {
        borderRadius: '8px',
        language: 'en',
        width: '330px',
        height: '50px',
        
        objectFit: 'contain',
        compressInitial: null,
      };
    
  return (
    <>
    
    <div className='relative flex justify-center'>
              <div className='absolute h-[840px] w-[465px] bg-[#F8D54B] rounded-3xl mt-[30px]'>
                <div className='flex justify-center mt-[100px] text-3xl font-inter'>Add Event</div>

                <div className='w-1/3 h-1/6 mb-7 font-inter font-light'>
                        <label htmlFor="name" className="block w-[400px] mt-[26px] ml-[26px] mb-2 text-xl text-black">Name : </label>
                        <input type="text" onChange={handleName} value={name} id="name" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5"/>
                        
                        
                        <label htmlFor="field" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Field : </label>
                        <input type="text" onChange={handleField} value={field} id="field" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5"/>
                        


                        <label htmlFor="last_name" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Date : </label>
                        <DatePicker className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5" selected={startDate} onChange={(date:Date) => setStartDate(date)} />



                        <label htmlFor="details" className="block mt-[11px] ml-[26px] mb-2 text-xl text-black">Details : </label>
                        <input type="text" id="details" onChange={handleDetails} value={details} className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5"/>
                        


                        <label htmlFor="picture" className="block w-[400px] mt-[11px] ml-[26px] mb-2 text-xl text-black">Event picture : </label>
                        < ReactImagePickerEditor
                                config={config2}
                                imageSrcProp={initialImage}
                                imageChanged={(newDataUri: any) => { setImageSrc(newDataUri) }} />
                        



                        <label htmlFor="nbvolunteers" className="block w-[400px] mt-[11px] ml-[26px] mb-2 text-xl text-black">Number of needed volunteers : </label>
                        <input type="text" id="nbvolunteers" onChange={handleVolunteers} value={volunteers} className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5"/>
                        



                        <label htmlFor="points" className="block w-[400px] mt-[11px] ml-[26px] mb-2 text-xl text-black">Points per volunteer : </label>
                        <input onChange={handlePoints} value={points} type="text" id="points" className="border mx-[50px] w-[366px] h-[36px]  text-black text-sm rounded-[20px] p-2.5"/>
                        


                        <button className='flex justify-center pt-1 text-xl text-white mt-[40px] ml-[130px]  w-[180px] h-[40px] rounded-[20px] bg-[#30017E]'>
                          Add
                        </button>
                </div>

              </div>
            </div>
    </>
  )
}

export default AddEvent