import React from 'react';
import './App.css';
import Feed from './components/Feed';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




import hands from './assets/hands.png';
import EventDetails from './components/EventDetails';
function App() {



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


    </Routes>
    </Router>
  );
}

export default App;
