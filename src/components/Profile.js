import React from 'react'
import pic from '../media/francis.png'
import '../App.css'

export default function Profile() {
  return (
    <div>
        <img src={pic} alt="Franc smiling" className='img-avatar' id="profile_img"/>
        <h1 className='title' id="twitter">@coderite_</h1>
        <h3 id="slack">Franc</h3>
    </div>
  )
}