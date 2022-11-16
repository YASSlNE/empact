import React, { useEffect } from 'react'
import { event } from './EventCard'
import { useParams, useLocation } from 'react-router-dom'
import { participateInEvent } from '../utils/events.axios';


function EventDetails(this: any, {pictureUrl, name,  date, location, numberOfNeededVolunteers, pointsPerVolunteer, details, id} : event) {




    const loc=useLocation()





// Getting event details from the event card
// *********
    pictureUrl=loc.state.pictureUrl;
    name=loc.state.name;
    date=loc.state.date;
    location=loc.state.location;
    numberOfNeededVolunteers=loc.state.numberOfNeededVolunteers;
    pointsPerVolunteer=loc.state.pointsPerVolunteer;
    details=loc.state.details;
// **********

  const participateClickHandler = () => {
    if(id === undefined) return;
    participateInEvent(id);
  };

    
  return (
    <>
        <div className="flex bg-[#30017E] justify-center gap-[100px] rounded-t-[100px] h-[500px] min-w-full pr-[150px]">
        <div className='flex flex-row justify-center items-center'>
          <img src={pictureUrl}></img>
          <div className='flex flex-col justify-center items-center'>
            <h1>{name}</h1>
            <h4>{details}</h4>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1>Location</h1>
            <h4>{location}</h4>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1>Number of needed volunteers</h1>
            <h4>{numberOfNeededVolunteers}</h4>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1>Date</h1>
            <h4>{date?.toString()}</h4>
          </div>
        <div id="events" className='mt-10 flex gap-[100px]'>
                {details}
        </div>

        <button onClick={participateClickHandler}> Participate </button>
        </div>




    </>
  )
}

export default EventDetails