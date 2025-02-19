import React from 'react';
import eventimg from '../../assets/eventimg.jpg';
import PictureGrid from './PictureCards';


const showcase = () => {
  return (
    <div className="pt-20">
    <div
      className="h-[65vh] top-0 relative"
      style={{
        backgroundImage: `url(${eventimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col">
        <div className="px-12 py-40 contrast-200 h-[65vh]">
          <h1 className="text-6xl font-bold text-white animate-slideInLeft">
          Join the Journey, </h1>
            <h2 className=" text-6xl font-bold animate-slideInRight text-green-600">
            Create the Story
            </h2>
        </div>
      </div>
    </div>
    <PictureGrid/>

    </div>
   
  )
}

export default showcase
