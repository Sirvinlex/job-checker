import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>
                    Job <span>tracking</span> appp
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
        </div>
    </Wrapper>
  )
};


export default Landing