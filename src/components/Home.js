import React from 'react'
import Nav from './Nav'
import Background from './Background'


function Home() {
  return (
    <>
    <Nav />
    <Background/>
    <div className='container'>
    <h1 className="welcome-text text-white text-shadow">
        Welcome to My Website!!!!
    </h1>
    </div>
    
    </>
  )
}

export default Home