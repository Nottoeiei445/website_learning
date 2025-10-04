import React from 'react'
import Nav from './Nav'
import ImgProfile from './ImgProfile'
import Background from './Background'

function About() {
  return (
    <>
    <Nav/>
    <Background/>
    <ImgProfile/>
    <div className="bg-slate-800 border-2 border-slate-50 rounded-md  shadow-lg backdrop-blur-sm bg-opacity-30 relative bgblur">
      <div className="text-center text-white font-bold text-4xl mb-4">
          <h1>INFORMATION</h1>
      </div>
      <div className='text-white font-bold text-1xl'>
        <h1>Name: Mr. Chaiwat Payungwong</h1>
        <h2>Age: 20</h2>
        <h3>Birthday: 8 march 2004</h3>
        <h4>College: Naresuan University</h4>
        <h5>Facutly: Engineering</h5>
        <h6>Motto: Nothing is impossible</h6>
      </div>
    </div>
    </>
  )
}

export default About