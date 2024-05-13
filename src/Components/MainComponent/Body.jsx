import BoxImage1 from "../../assets/box-one.webp";
import BoxImage2 from "../../assets/box-two.webp";
import BoxImage3 from "../../assets/box-threee.webp";
import BoxImage4 from "../../assets/hq720.webp";
import BoxImage5 from "../../assets/box-5.webp";
import BoxImage6 from "../../assets/box-6.webp";
import BoxImage7 from "../../assets/box-7.webp";
import BoxImage8 from "../../assets/box-8.webp";
import BoxImage9 from "../../assets/box-9.webp";
import BoxImage10 from "../../assets/box-10.webp";
import BoxImage11 from "../../assets/box-11.webp";
import BoxImage12 from "../../assets/box-12.webp";
import BoxImage13 from "../../assets/box-13.webp";
import BoxImage14 from "../../assets/box-14.webp";
import BoxImage15 from "../../assets/box-15.webp";
import BoxImage16 from "../../assets/box-16.webp";
import Profile1 from "../../assets/profile-1.jpg";
import Profile2 from "../../assets/profile-2.jpg";
import Profile3 from "../../assets/profile-3.jpg";
import Profile4 from "../../assets/profile-4.jpg";
import Profile5 from "../../assets/profile-5.jpg";
import Profile6 from "../../assets/profile-6.jpg";
import Profile7 from "../../assets/profile-7.jpg";
import Profile8 from "../../assets/profile-8.jpg";
import Profile9 from "../../assets/profile-9.jpg";
import Profile10 from "../../assets/profile-10.jpg";
import Profile12 from "../../assets/profile-12.jpg";
import Profile13 from "../../assets/profile-13.jpg";
import Profile14 from "../../assets/profile-14.jpg";
import Profile15 from "../../assets/profile-15.jpg";
import Profile16 from "../../assets/profile-16.jpg";
import HomeIcon from "../../assets/home.svg";
import SubIcon from "../../assets/subscriptions.svg";
import LibIcon from "../../assets/library.svg";
import "./Body.css";


const Body = () => {
  return (
    <section className="section-1">
      <div className="side-bar-container">
        <div className="side-bar-element-container">
          <img src={HomeIcon} alt="home" className="side-icons" />
          <p className="side-bar-text">Home</p>
        </div>
        <div className="side-bar-element-container">
          <img src={SubIcon} alt="home" className="side-icons" />
          <p className="side-bar-text">Subscriptions</p>
        </div>
        <div className="side-bar-element-container">
          <img src={LibIcon} alt="home" className="side-icons" />
          <p className="side-bar-text">You</p>
        </div>
      </div>
      <div className='video-grid'>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage1} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">33:05</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile1} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>Battle of Washington D.C. | Modern Warfare 2 Remastered...</p>
              <p className='box-text'>DraKulis Cinematic Gaming</p>
              <p className='box-text'>64K views &#183; 2 days ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage2} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">12:51</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile2} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>M4 ipad Pro Impressions: Well This is Awkward </p>
              <p className='box-text'>Marques Brownlee</p>
              <p className='box-text'>5M views &#183; 3 days ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage3} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">11:45</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile3} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>Smoking is Awesome</p>
              <p className='box-text'>Kurzgesagt - In a Nutshell </p>
              <p className='box-text'>5.8M views &#183; 4 days ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage4} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">16:21</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile4} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>Fracture Jaw | Immersive ULTRA Realistic Graphics Gameplay [4... </p>
              <p className='box-text'>RTXLobby</p>
              <p className='box-text'>1.4K views &#183; 3 days ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage5} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">8:04</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile5} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>I made GTA 6 in 150 days (Sorry Rockstar)</p>
              <p className='box-text'>12th Hour</p>
              <p className='box-text'>7.6M views &#183; 1 year ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage6} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">4:33</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile6} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>Let Me Give You My New $1,995 Course For Free</p>
              <p className='box-text'>Iman Gadzhi</p>
              <p className='box-text'>286K views &#183; 2 days ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage7} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">1:56:37</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile7} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>Alan Wake 2 - Part 1 - THIS GAME IS SERIOUSLY ...</p>
              <p className='box-text'>Hollow</p>
              <p className='box-text'>1.7M views &#183; 6 months ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage8} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">3:30:25</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile8} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>Men's Vigil || 10 May 2024 || PROPHET T.A. JEGEDE || CAC...</p>
              <p className='box-text'>Ago Adura</p>
              <p className='box-text'>202 views &#183; Streamed 14 hours ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage9} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">15:04</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile9} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>Things You Didn&apos;t Know about Koenigsegg  </p>
              <p className='box-text'>Car Clique</p>
              <p className='box-text'>136K views &#183; 3 weeks ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage10} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">10:49</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile10} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>Billionaire House Tier List</p>
              <p className='box-text'>jack pockets</p>
              <p className='box-text'>316K views &#183; 3 days ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage11} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">4:02:50</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile1} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>Call of Duty Warfare 2019 | Full Game Playthrough | Realism</p>
              <p className='box-text'>DraKulis Cinematic Gaming</p>
              <p className='box-text'>2.7M views &#183; 1 year ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage12} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">16:31</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile12} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>Most Useless Megaprojects in the World</p>
              <p className='box-text'>MegaBuilds</p>
              <p className='box-text'>48M views &#183; 2 years ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage13} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">28:02</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile13} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>Flight Simulator in 2024: RTX 4090 + INSANE GRAPHICS MO...</p>
              <p className='box-text'>max737Ifly</p>
              <p className='box-text'>1.3M views &#183; 2 months ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage14} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">33:06</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile14} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>TOM CLANCY GHOST REACON WILDLANDS Full Gameplay...</p>
              <p className='box-text'>GabeGameologyNexus</p>
              <p className='box-text'>10 views &#183; 3 days ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage15} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">10:01</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile15} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>How ThinkPads Became The Internet&apos;s Favorite Laptop</p>
              <p className='box-text'>Eric Murphy</p>
              <p className='box-text'>130K views &#183; 2 days ago </p>
            </div>
          </div>
        </div>
        <div className='video-card'>
          <div className='video-1-cont'>
            <img src={BoxImage16} alt="video-1" className='video-1' />
            <div className="video-time">
              <p className="video-time-text">16:16</p>
            </div>
          </div>
          <div className='details-contianer'>
            <div className='profile-pic-cont'>
              <img src={Profile16} alt="profile-1" className='pic-1' />
            </div>
            <div className='box-text-cont'>
              <p className='box-topic'>Sucked Into an Oil Pipe - The Paria Diving Incident</p>
              <p className='box-text'>Storified</p>
              <p className='box-text'>9.3M views &#183; 7 months ago </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Body