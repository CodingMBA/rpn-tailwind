import React from 'react';
import background from '../../img/babysitting.jpg';

function Home() {
  return (
    <div
      className="bg-cover bg-center h-screen bg-no-repeat flex justify-center"
      style={{
        'background-image': `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
        url(${background})`,
      }}
    >
      <div>
        <h1 className="text-5xl text-white mt-40 leading-loose">
          Find a Trusted Nanny
        </h1>
        <div className="w-600px">
          <input
            type="text"
            placeholder="Select a Date and Time"
            className="rounded w-full h-12 p-3 text-xl focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
