import React from 'react'
import './homescreen.css'

const HomeScreen = () => {
  return (
    <div>
      <div className='top-banner'>
        <div className='content'>
          <h1>P Swaminathan</h1>
          <p>Stam vendor, Trichy - 02</p>
        </div>
      </div>

      <div id='about' className="about-us">
        <div className='align-items'>
          <div>
            <i className='fa fa-phone fa-3x'></i>
            <div>
              <h3>Contact</h3>
              <p>9543545187</p>
            </div>
          </div>
          <div>
            <i className='fas fa-clock fa-3x'></i>
            <div>
              <h3>Business Hours</h3>
              <p>We are available between 9am - 8pm all days of week.</p>
            </div>
          </div>
          <div>
            <i className='fa fa-address-card fa-3x'></i>
            <div>
              <h3>Address</h3>
              <ul>
                <li>Opposite to Town hall police station</li>
                <li>Town hall</li>
                <li>Trichy - 02</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
