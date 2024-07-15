import React from 'react'
import './navbar.scss';
import {motion} from "framer-motion"
import Sidebar from './sidebar/Sidebar';


const Navbar = () => {
  return (
    <div className='navbar'>
        {/*sidebar*/}
        <Sidebar/>
      <div className='wrapper'>
      <motion.span initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      transition={{duration:0.5}}
      >StarGaze</motion.span>
        <div className='social-icons'>
        <a href="#"><img src= "/facebook.png" alt=""/></a>
        <a href="#"><img src= "/linkedin.png" alt=""/></a>
        <a href="#"><img src= "/gmail.png" alt=""/></a>

        </div>

      </div>
    </div>
  )
}

export default Navbar
