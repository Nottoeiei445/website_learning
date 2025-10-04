import React from 'react'
import Nav from './Nav'
import Background from './Background'
import ImgProfile from './ImgProfile'

function Contact() {
  return (
    <>
      <Nav/>
      <Background/>
      <ImgProfile/>
      <div className="bg-slate-800 border-2 border-slate-50 rounded-md  shadow-lg backdrop-blur-sm bg-opacity-30 relative bgblur">
        <div className="text-center text-white font-bold text-4xl mb-4">
          <h1>CONTACT</h1>
        </div>
        <div className='text-white font-bold text-1xl'>
          <h1>Address: 24/5 Srangming, Loengnoktha, Yasothon, Thailand</h1>
          <h5>Email: nottojung2547@gmail.com</h5>
          <h2>Facebook: Notto</h2>
          <h3>Instagram: _nottolazy_</h3>
          <h4>Line ID: notza445</h4>
        </div>

      </div>
    </>
  )
}

export default Contact