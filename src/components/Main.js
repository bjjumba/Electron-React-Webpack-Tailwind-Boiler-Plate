import React from 'react'
import HomeScreen from '../Stacks/HomeScreen.js'
import AboutUs from '../Stacks/AboutUs.js'
import Sample from '../Stacks/Sample.js'
import {
  Routes,
  Route,
} from "react-router-dom";

const Main = () => {
   
  return (
    <>
    <main className='bg-gray-50 '>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/report" element={<Sample />} />
      </Routes> 
    </main>
    </>
  )
}

export default Main