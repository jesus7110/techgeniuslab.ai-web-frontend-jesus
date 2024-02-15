import React from 'react';
import L1 from '../../assets/labinsight1.png'
import L2 from '../../assets/labinsight2.jpg'
import L3 from '../../assets/labinsight3.jpg'
import L4 from '../../assets/labinsight4.webp'
import L5 from '../../assets/labinsight5.jpg'
import L6 from '../../assets/labinsight6.jpg'

function ImageGrid() {
  const imageSources = [ L1,L2,L3,L4,L6,L5 ];

  return (
    <div className="flex flex-col items-center pb-28">
      <div className="bg-white p-4 w-full max-w-[400px] md:max-w-[600px] text-center">
      <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl ">Insights of Lab</h2>
        <p className="text-gray-600">Check out these stunning images!</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 max-w-[800px] md:max-w-[1200px] place-items-center">
        {imageSources.map((source, index) => (
          <img
            key={index}
            className="hover:opacity-75 max-w-[300px] max-h-[300px]"
            src={source}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
