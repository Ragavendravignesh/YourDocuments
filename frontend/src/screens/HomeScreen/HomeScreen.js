import React from 'react'
import Meta from '../../components/Meta';
import './homescreen.css'

const HomeScreen = () => {
  return (
    <div>
      <Meta/>
      <div className='top-banner'>
        <div className='content'>
          <h1>P Swaminathan</h1>
          <p>Stamp vendor, Trichy - 02</p>
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
      <div id="info" className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d244.92658458401914!2d78.69619460740755!3d10.824673709205687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1631121898380!5m2!1sen!2sin" title="map" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
      </div>
      <div className="whatwedo">
        <h3>"Give it a better start"</h3>
        <p>We sell stamp papers for registration and other legal documentation purpose. We are doing this business for three generations and authorised by Government. Buying a land or giving debt is risky, It is always recommended to document it and we are here to help with that. For further information and consultation please contact us. </p>
      </div>
    </div>
  )
}

export default HomeScreen
