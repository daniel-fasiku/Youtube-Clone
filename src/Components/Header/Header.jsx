import React from 'react'
import ReactLogo from "../../assets/react.svg";
import Menu from "../../assets/clarity--menu-line.svg";
import YoutubeLogo from "../../assets/yt_logo_rgb_light.png";
import Search from "../../assets/search.svg";
import Mic from "../../assets/voice-search-icon.svg";
import UploadVideo from "../../assets/upload-video.svg";
import Apps from "../../assets/youtube-apps.svg";
import Notifications from "../../assets/notifications.svg";
import ProfilePic from "../../assets/d.jpg";
import "./Header.css";

function Header() {
  return (
    <header className='hd-container'>
      <div className='lhd-section'>
        <img src={Menu} alt="Logo" className='menu' />
        <img src={YoutubeLogo} alt="Logo" className='y-logo' />
      </div>
      <div className='mhd-section'>
        <input className='search-bar' type="text" placeholder='Search' />
        <button className='search'>
          <img src={Search} alt="search" className='search-icon' />
        </button>
        <button className='mic-button'>
          <img src={Mic} alt="mic" className='mic-icon' />
        </button>
      </div>
      <div className='rhd-section'>
        <div className='icon-cont'>
          <img src={UploadVideo} alt="upload" className='icon1' />
        </div>
        <div className='icon-cont'>
          <img src={Apps} alt="youtube-apps" className='icon2' />
        </div>
        <div className='not-cont'>
          <img src={Notifications} alt="notifications" className='icon3' />
          <div className='not-num'>3+</div>
        </div>
        <div>
          <img src={ProfilePic} alt="profile-pic" className='icon4' />
        </div>
      </div>
    </header>
  )
}

export default Header
