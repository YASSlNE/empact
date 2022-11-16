import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

import {v4 as uuidv4} from 'uuid'
import cardLogo from '../assets/cardLogo2.jpeg';

export interface event{
    pictureUrl?: string;
    name?: string;
    mainActivity?: string;
    date?: Date;
    location?: string;
    numberOfNeededVolunteers?: number;
    pointsPerVolunteer?: number;
    details?: string;
    id?:string;
}


EventCard.defaultProps={
    id:uuidv4(),
    name:"ziw",
    mainActivity:"Actziwziw",
}
function EventCard({pictureUrl, name,  date, location, numberOfNeededVolunteers, pointsPerVolunteer, details, id} : event) {



    const [hover, setHover] = useState(false);




    const bgSettings={
        backgroundImage: `url(${pictureUrl})`,
        backgroundSize: 'cover',
        
    }






  return (
    <>
    <Link to='/cardDetails/' state={{pictureUrl:pictureUrl, name: name,  date:date, location:location, numberOfNeededVolunteers:numberOfNeededVolunteers, pointsPerVolunteer, details:details}}>
    <div style={bgSettings} onMouseLeave={(MouseEvent)=> setHover(false)} onMouseEnter={(MouseEvent)=> setHover(true)} className="flex w-[250px] h-[250px] rounded-xl">
        
        
        
        {hover && 
        <>        
        
            <motion.div animate={{y:-10}} className='flex pl-3 pr-3 pt-1 mt-[83.25px] break-all max-w-xl text-left w-full h-2/3  bg-black bg-opacity-40 text-white	rounded-xl'>
                
                {details}
            </motion.div>
        </>

        }


    </div>
    </Link>

    </>
  )
}

export default EventCard