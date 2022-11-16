import * as React from 'react';
import { Score } from '../utils/scoreDto';

interface IUserScoreBoardProps {
  scores: Score[]
}

const UserScoreBoard: React.FunctionComponent<IUserScoreBoardProps> = (props) => {
  return (
    <div>
    <h1>UserScoreBoard</h1>
    <div className='flex flex-col items-center'>
      {props.scores.map(s => <div className='flex flex-row items-center justify-between'>
        <h1>{s.name}</h1>
        <h1>{s.score}</h1>
      </div>)}
    </div>
    </div>
  );
};

export default UserScoreBoard;
