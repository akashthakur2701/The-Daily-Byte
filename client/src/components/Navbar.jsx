import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  
  const {navigate , token} = useAppContext();
  return (
    <nav className="w-full bg-white px-6 sm:px-12 py-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        
        {/* Logo + Name (Horizontally aligned) */}
        <div onClick={()=> navigate('/')} className="flex items-center gap-3 cursor-pointer ">
          <img src={assets.logo} alt="logo" className="h-auto max-h-12 w-auto" style={{ objectFit: 'contain' }} />
        </div>

        {/* Login Button */}
        <button onClick={()=>navigate('/user')} className="flex items-center gap-2 text-sm font-medium text-white bg-[#5044E5] px-6 py-2 rounded-full hover:bg-[#3f36c4] cursor-pointer transition duration-200">
          {token ? 'Dashboard' : 'Login'}
          <img src={assets.arrow} alt="arrow" className="w-3.5 h-3.5" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
