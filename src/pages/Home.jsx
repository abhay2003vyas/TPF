import React from 'react';
import InstagramGallery from '../components/InstagramGallery';

function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-[#f1b621] mb-4">Welcome to TPF Photography 📸</h1>
      <p className="text-lg text-gray-700">Capturing moments that last forever.</p>

      {/* Instagram Gallery */}
      <InstagramGallery />
    </div>
  );
}

export default Home;
