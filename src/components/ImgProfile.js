import React from 'react'
import myImage from './Pic/proflie.jfif'

function ImgProfile() {
  return (
    <div>
        <img src={myImage} alt="My Website" className="profile" />
    </div>
  )
}

export default ImgProfile