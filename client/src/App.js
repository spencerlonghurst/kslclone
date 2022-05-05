// import { useEffect } from 'react';
// import axios from 'axios';

import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import Announcements from './components/Announcements';
import Appliances from './components/Appliances';
import AutoParts from './components/AutoParts';
import Baby from './components/Baby';
import BooksAndMedia from './components/Books_and_Media';
import ClothingAndApparel from './components/Clothing_and_Apparel';
import Computers from './components/Computers';
import Cycling from './components/Cycling';
import Electronics from './components/Electronics';
import FitnessEquipment from './components/Fitness_Equipment';
import ForTradeOrBarter from './components/For_Trade_or_Barter';
import Free from './components/Free';
import Furniture from './components/Furniture';
import General from './components/General';
import HomeAndGarden from './components/Home_and_Garden';
import HuntingAndFishing from './components/Hunting_and_Fishing';
import Industrial from './components/Industrial';
import Livestock from './components/Livestock';
import MusicalInstruments from './components/Musical_Instruments';
import OtherRealEstate from './components/Other_Real_Estate';
import OutdoorsAndSporting from './components/Outdoors_and_Sporting';
import Pets from './components/Pets';
import RecreationalVehicles from './components/Recreational_Vehicles';
import Services from './components/Services';
import Tickets from './components/Tickets';
import Toys from './components/Toys';
import WaterSports from './components/Water_Sports';
import Weddings from './components/Weddings';
import WinterSports from './components/Winter_Sports';


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
       <Route path='/announcements' element={<Announcements/>}></Route>
       <Route path='/appliances' element={<Appliances/>}></Route>
       <Route path='/auto-parts' element={<AutoParts/>}></Route>
       <Route path='/baby' element={<Baby/>}></Route>
       <Route path='/books-and-media' element={<BooksAndMedia/>}></Route>
       <Route path='/clothing-and-apparel' element={<ClothingAndApparel/>}></Route>
       <Route path='/computers' element={<Computers/>}></Route>
       <Route path='/cycling' element={<Cycling/>}></Route>
       <Route path='/electronics' element={<Electronics/>}></Route>
       <Route path='/fitness-equipment' element={<FitnessEquipment/>}></Route>
       <Route path='/for-trade-or-barter' element={<ForTradeOrBarter/>}></Route>
       <Route path='/free' element={<Free/>}></Route>
       <Route path='/furniture' element={<Furniture/>}></Route>
       <Route path='/general' element={<General/>}></Route>
       <Route path='/home-and-garden' element={<HomeAndGarden/>}></Route>
       <Route path='/hunting-and-fishing' element={<HuntingAndFishing/>}></Route>
       <Route path='/industrial' element={<Industrial/>}></Route>
       <Route path='/livestock' element={<Livestock/>}></Route>
       <Route path='/musical-instruments' element={<MusicalInstruments/>}></Route>
       <Route path='/other-real-estate' element={<OtherRealEstate/>}></Route>
       <Route path='/outdoors-and-sporting' element={<OutdoorsAndSporting/>}></Route>
       <Route path='/pets' element={<Pets/>}></Route>
       <Route path='/recreational-vehicles' element={<RecreationalVehicles/>}></Route>
       <Route path='/services' element={<Services/>}></Route>
       <Route path='/tickets' element={<Tickets/>}></Route>
       <Route path='/toys' element={<Toys/>}></Route>
       <Route path='/water-sports' element={<WaterSports/>}></Route>
       <Route path='/weddings' element={<Weddings/>}></Route>
       <Route path='/winter-sports' element={<WinterSports/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
