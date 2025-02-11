import React from "react";
import './Home.css'
import Logo from './ibrohim.JPG'
import Telegram from './telegram.png'
import car from './car.PNG'
import Instagram from './social.png'
import signup from './writing.png'
import carpng from './car-png.jpg'
function Home() {
    return(
    <div className="Home-Container">
      <div className="Center1">
        <div className="Center2">
          <div className="Logo">  
            <img className="Logo-img" src={Logo} alt="Logo" />
          </div>
          <div className="Text">
            <p>Ibrohim Muhiddinov</p>
          </div>
          <div className="About">
            <p className="About-p">
              Student from👨‍🎓{" "}
              <a href="https://www.instagram.com/kasbmarkazi">
                @kasbmarkazi
              </a>{" "}
              <br /> Автор видео mobilography // automotive // fashion videos
              <br /> Shot on iPhone  | Tashkent 🇺🇿
            </p>
          </div>

          <a href="https://www.instagram.com/reel/DFzxuwJsQYp">
            <div className="img-card">
              <img src={car} alt="Car" className="car-img" />
              <p>Click to watch my short video</p>
            </div>
          </a>

          <a href="https://t.me/faruxovich_media">
            <div className="Card1">
              <div className="cardflex">
                <img src={carpng} alt="Car Icon" className="icon" />
                <p>Join my Telegram channel</p>
                <img src={Telegram} alt="Telegram" className="icon" />
              </div>
            </div>
          </a>

          <a href="https://www.instagram.com/faruxovich_media">
            <div className="Card1">
              <div className="cardflex">
                <img src={Logo} alt="Logo" className="icon" />
                <p>Join my Instagram channel</p>
                <img src={Instagram} alt="Instagram" className="icon" />
              </div>
            </div>
          </a>

          <a href="/contactus">
            <div className="Card2">
              <div className="cardflex">
                <span className="responsive-text">Click here to sign up for the course and sign up.</span>
                <img src={signup} alt="Sign Up" className="icon-small" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    )
}

export default Home;