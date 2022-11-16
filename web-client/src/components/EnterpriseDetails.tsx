import * as React from 'react';
import { enterpriseDetailsDto } from '../utils/enterpriseDetailsDto';

interface IEnterpriseDetailsProps {
  details: enterpriseDetailsDto
}

const EnterpriseDetails: React.FunctionComponent<IEnterpriseDetailsProps> = (props) => {
  return (
    <div>
      <div className='flex flex-col items-center justify-evenly'>
        <img src={props.details.photoUrl}></img>
        <h1 className='text-white text-xl'>{props.details.name}</h1>
      </div>
      <div className='flex flex-row justify-between items-start'>
        <h1 className='text-white text-xl'>Location</h1>
        <p className='text-white text-xl'>{props.details.location}</p>
      </div>
      <div className='flex flex-row justify-between items-start'>
        <h1 className='text-white text-xl'>Main Activity</h1>
        <p className='text-white text-xl'>{props.details.mainActivity}</p>
      </div>
      <div className='flex flex-row justify-between items-start'>
        <h1 className='text-white text-xl'>Total Number Of Points</h1>
        <p className='text-white text-xl'>{props.details.totalNumberOfPoints}</p>
      </div>
    </div>
  );
};

export default EnterpriseDetails;
