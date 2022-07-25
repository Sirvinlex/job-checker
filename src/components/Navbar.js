import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { FaHome, FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';


const Navbar = () => {
  return (
    <Wrapper>
      <h2>Navbar</h2>
      <FaHome />
    </Wrapper>
  )
}

export default Navbar