// import { useEffect } from 'react';
// import axios from 'axios';

import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Auctions from './components/Auctions';
import BandsSeeking from './components/BandsSeeking';
import Boutiques from './components/Boutiques';
import Charity from './components/Charity';

function App() {

  // useEffect (() => {
  //   nameofthehook()
  // }, []) 

  // const nameofthehook = () => {
  //   axios.get(`http://localhost:9000/users`)
  //   .then(res => {
  //     return console.log(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }


  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Login/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/auctions' element={<Auctions/>}></Route>
       <Route path='/bands-seeking-members' element={<BandsSeeking/>}></Route>
       <Route path='/boutiques' element={<Boutiques/>}></Route>
       <Route path='/charity' element={<Charity/>}></Route>
       <Route path='/' element={<Login/>}></Route>
       <Route path='/' element={<Login/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
