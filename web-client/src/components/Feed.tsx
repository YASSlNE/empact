import React from 'react'
import EventCard from './EventCard'

import cardLogo from '../assets/cardLogo.png'


import cardLogo2 from '../assets/cardLogo2.jpeg'

function Feed() {
  return (
    <>
    <div className="flex bg-[#30017E] justify-center gap-[100px] rounded-t-[100px] h-[500px] min-w-full pr-[150px]">


    <div className='ml-[100px]'>
        Search Bar
    </div>


    <div id="events" className='mt-10 flex gap-[100px] overflow-x-scroll'>
        <EventCard eventPictureUrl={cardLogo2} details="qdf,qsdlipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas accumsan felis, vel hendrerit nisl lacinia ac. Nulla placerat id felis et malesuada."/>
        <EventCard eventPictureUrl={cardLogo} details="The International Climate Summit, in its 27th edition, kicked off earlier this week in Sharm El-Sheikh, Egypt."/>
        <EventCard eventPictureUrl={cardLogo} details="The International Climate Summit, in its 27th edition, kicked off earlier this week in Sharm El-Sheikh, Egypt."/>
        <EventCard eventPictureUrl={cardLogo} details="The International Climate Summit, in its 27th edition, kicked off earlier this week in Sharm El-Sheikh, Egypt."/>
        <EventCard eventPictureUrl={cardLogo} details="The International Climate Summit, in its 27th edition, kicked off earlier this week in Sharm El-Sheikh, Egypt."/>
        <EventCard eventPictureUrl={cardLogo} details="The International Climate Summit, in its 27th edition, kicked off earlier this week in Sharm El-Sheikh, Egypt."/>
        <EventCard eventPictureUrl={cardLogo2} details="Lorem qdf,qsdlipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas accumsan felis, vel hendrerit nisl lacinia ac. Nulla placerat id felis et malesuada."/>
    </div>
    
    </div>

    </>
  )
}

export default Feed