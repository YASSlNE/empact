import React, { useState } from 'react';
import './App.css';
import Feed from './components/Feed';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




import hands from './assets/hands.png';
import EventDetails from './components/EventDetails';
import Registration from './components/Registration';
import Login from './components/Login';
import AddEvent from './components/AddEvent';
import UserScoreBoard from './components/UserScoreboard';
import { Score } from './utils/scoreDto';
import TopEnterprises from './components/TopEnterprises';

function App() {

  const [userScores, setUserscores] = useState([] as Score[])
  const [enterpriseScores, setenterpriseScores] = useState([] as Score[])

  const bgSettings={
    backgroundImage: `url(${hands})`,
    backgroundSize: 'auto 90%',
  }

  return (


    <Router>

    <Routes>
    <Route path='/' element={

        <>
          <div className='flex min-h-screen items-end' style={bgSettings} >
              <Feed />
          </div>

        </>
    }/>

    <Route path='/cardDetails/*' element={
      <>
        <div className='flex min-h-screen items-end' style={bgSettings} >
          <EventDetails/>
        </div>
      </>
    }>

    </Route>


    <Route path='/registration' element={
    
        <div className='flex min-h-screen justify-center' style={{
          backgroundImage: `url(${hands})`,
          backgroundSize: 'cover',
        }} >

          <Registration/>
        </div>
    
      }
      
    />

<Route path='/login' element={
    
    <div className='flex min-h-screen justify-center' style={{
      backgroundImage: `url(${hands})`,
      backgroundSize: 'cover',
    }} >

      <Login/>
    </div>

  }
  
/>


<Route path='/addEvent' element={
    
    <div className='flex min-h-screen justify-center' style={{
      backgroundImage: `url(${hands})`,
      backgroundSize: 'cover',
    }} >

      <AddEvent/>
    </div>

  }
  
/>
<Route path='/users/scoreboard' element={
    
    <div className='flex min-h-screen justify-center' style={{
      backgroundImage: `url(${hands})`,
      backgroundSize: 'cover',
    }} >

      <UserScoreBoard scores={userScores}/>
    </div>

  }
  
/>
<Route path='/enterprises/scoreboard' element={
    
    <div className='flex min-h-screen justify-center' style={{
      backgroundImage: `url(${hands})`,
      backgroundSize: 'cover',
    }} >

      <TopEnterprises scores={enterpriseScores}/>
    </div>

  }
  
/>






    </Routes>
    </Router>
  );
}

export default App;
