import React, { useEffect } from 'react'
import { event } from './EventCard'
import { useParams, useLocation } from 'react-router-dom'


function EventDetails(this: any, {eventPictureUrl, name, mainActivity, date, location, numberOfNeededVolunteers, pointsPerVolunteer, details, id} : event) {




    const loc=useLocation()





// Getting event details from the event card
// *********
    eventPictureUrl=loc.state.eventPictureUrl;
    name=loc.state.name;
    mainActivity=loc.state.mainActivity;
    date=loc.state.date;
    location=loc.state.location;
    numberOfNeededVolunteers=loc.state.numberOfNeededVolunteers;
    pointsPerVolunteer=loc.state.pointsPerVolunteer;
    details=loc.state.details;
// **********

    
  return (
    <>
        <div className="flex bg-[#30017E] justify-center gap-[100px] rounded-t-[100px] h-[500px] min-w-full pr-[150px]">


        <div id="events" className='mt-10 flex gap-[100px]'>
                {details}
        </div>
        </div>




    </>
  )
}

export default EventDetails