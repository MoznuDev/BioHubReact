
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './Components/Layout/RootLayout'
import Home from './Components/Page/Home'
import About from './Components/Page/About'
import Contract from './Components/Page/Contract'
import Service from './Components/Layout/Service'
import MySkills from './Components/Page/MySkills';
import Portfolio from './Components/Page/Portfolio'
import Testimonials from './Components/Page/Testimonials'
import Blog from './Components/Page/Blog'






function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/mySkills" element={<MySkills/>} />
        <Route path="/contract" element={<Contract/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
