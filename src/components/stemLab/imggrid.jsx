import React from 'react';

function ImageGrid() {
  const imageSources = [
    'https://source.unsplash.com/collection/1346951/400x400?sig=1',
    'https://source.unsplash.com/collection/1346951/400x400?sig=2',
    'https://source.unsplash.com/collection/1346951/400x400?sig=3',
    'https://source.unsplash.com/collection/1346951/400x400?sig=4',
    'https://source.unsplash.com/collection/1346951/400x400?sig=5',
    'https://source.unsplash.com/collection/1346951/400x400?sig=6'
  ];

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
