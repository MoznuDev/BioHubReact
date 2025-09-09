import React from 'react'
import Button from '../Button'
import Image from '../Image'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div className="bg-bg1Color py-4">
     <div className='max-w-mContainer m-auto '>
        <div className="navbar  text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <Link to={"/"} className='text-[16px] font-medium px-4 hover:text-blue-700 '>Home</Link>
      <Link to={"/service"} className='text-[16px] font-medium px-4 hover:text-blue-700 '>Service</Link>
      <Link to={"/portfolio"} className='text-[16px] font-medium px-4 hover:text-blue-700 '>Portfolio</Link>
      <Link to={"/myskills"} className='text-[16px] font-medium px-4 hover:text-blue-700 '>My Skills</Link>
      <Link to={"/testimonials"} className='text-[16px] font-medium px-4 hover:text-blue-700 '>Testimonials</Link>
      <Link to={"/blog"} className='text-[16px] font-medium px-4 hover:text-blue-700 '>Blog</Link>
      <Link to={"/contract"} className='text-[16px] font-medium px-4 hover:text-blue-700 '>Contact</Link>
      </ul>
    </div>
    <div className="">
        <Link to={"/http://localhost:5173"}>
        <h1 className='text-2xl font-bold hover:text-blue-700'>Moznur Rahman</h1>
        </Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link to={"/"} className='text-[16px] font-medium px-4 hover:text-blue-700 '>Home</Link>
      <Link to={"/service"} className='text-[16px] font-medium px-4 hover:text-blue-700 '>Service</Link>
      <Link to={"/portfolio"} className='text-[16px] font-medium px-4 hover:text-blue-700 '>Portfolio</Link>
      <Link to={"/myskills"} className='text-[16px] font-medium px-4 hover:text-blue-700 '>My Skills</Link>
      <Link to={"/testimonials"} className='text-[16px] font-medium px-4 hover:text-blue-700 '>Testimonials</Link>
      <Link to={"/blog"} className='text-[16px] font-medium px-4 hover:text-blue-700 '>Blog</Link>
      <Link to={"/contract"} className='text-[16px] font-medium px-4 hover:text-blue-700 '>Contact</Link>
    </ul>
  </div>
  <div className="navbar-end">
    <Button className={"py-2 px-5  rounded-2xl text-[16px] border-2 border-b-white "} text={"Let's Talk"}/>
    <Button className={"py-2 px-5 border-2 border-gray-500 rounded-2xl ml-4 text-[16px] hover:text-blue-700"} text={"Buy now"}/>
  </div>
</div>
    </div>
   </div>
  )
}

export default Header





