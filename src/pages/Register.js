import React from 'react';
import { useState, useEffect } from 'react';
import { Logo,FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
 



const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
const [values, setValues] = useState(initialState);
const { user, isLoading } = useSelector(store => store.user);
const dispatch = useDispatch();
const navigate = useNavigate();

const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setValues({ ...values, [name]: value });
};

const onSubmit = (e) => {
  e.preventDefault();
  const { name, email, password, isMember } = values;
  if (!email || !password || (!isMember && !name)) {
    toast.error('Please Fill Out All Fields');
    return;
  }
  if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
};

const toggleMember = () => {
  setValues({ ...values, isMember: !values.isMember });
};

useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className='form'>
      <form onSubmit={onSubmit} className='form'>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {/* name field */}
        { !values.isMember && <FormRow type='text' name='name' value={values.name} handleChange={handleChange} /> }
        {/* email field */}
        <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />
        {/* Password field */}
        <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />
        
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading? 'Loading...' : 'Submit'}
        </button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}

          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register