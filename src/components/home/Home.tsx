import React from 'react';


import video from '../../assets/video.mp4';
import aeroplane from '../../assets/takeOff.png';

export const Home: React.FC = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>
        <img src={aeroplane} className="plane" alt="Image" />
      </div>
    </div>
  );
}

