import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {
    const {setInput ,input} = useAppContext();
    
  return (
  <div className="mx-8 sm:mx-16 xl:mx-24 relative overflow-hidden">
      {/* Notification Badge */}
      <div className="text-center mt-20 mb-8 relative z-10">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-[#5044E5]/40 bg-[#5044E5]/10 rounded-full text-sm text-[#5044E5]">
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} alt="star" className="w-2.5" />
        </div>

        {/* Header Title */}
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-[4.5rem] text-gray-700">
          Your own <span className="text-[#5044E5]">blogging</span><br />
          platform.
        </h1>

        {/* Subtext */}
        <p className="my-6 sm:my-8 max-w-2xl mx-auto text-sm sm:text-base text-gray-600">
          This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.
        </p>

        {/* Search Form */}
        <form onSubmit={onSubmitHandler} className="flex justify-between max-w-lg mx-auto border border-gray-300 bg-white rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search for blogs"
            required
            className="w-full pl-4 outline-none text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-[#5044E5] text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all"
          >
            Search
          </button>
        </form>
      </div>

      {/* Background Gradient Image */}
      <img
        src={assets.gradientBackground}
        alt="background gradient"
        className="absolute -top-24 left-0 w-full z-[-1] opacity-50"
      />
    </div>
  )
}

export default Header
