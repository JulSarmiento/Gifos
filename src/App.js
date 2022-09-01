import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './views/Home'
import CreateGifo from './views/CreateGifo'
import Favourites from './views/Favourites'
import MyGifos from './views/MyGifos'
import NoPageFound from './views/NoPageFound'

import Header from './components/header';
import './App.css';


function App() {
  return (

    <Router>
      <Header />
      
      <Routes>

        <Route exact path='/' element={<Home/>}/>

        <Route exact path='/CreateGifo' element={<CreateGifo/>}/>

        <Route exact path='/Favourites' element={<Favourites/>}/>

        <Route exact path='/MyGIfos' element={<MyGifos/>}/>

        <Route path="*" element={<NoPageFound/>} />

      </Routes>

    </Router>


  )
}

export default App;
