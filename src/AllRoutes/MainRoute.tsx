import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Components/Homepage'
import Trending from '../Components/Trending'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/trending' element={<Trending/>}/>
    </Routes>
  )
}

export default MainRoute