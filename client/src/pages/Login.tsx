import React, { useState } from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { HiEnvelope, HiLockClosed } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState(false);
  return (
    <div className='bg-gray-100 flex h-screen items-center justify-center p-4'>
      <div className='bg-white w-full sm:w-2/3 lg:w-1/3 shadow-sm mb-4 p-8 rounded-xl'>
        <img src='logo.png' className='w-12 text-center mx-auto' alt='' />
        <h1 className='my-4 text-center font-semibold'>Register</h1>
        {error && (
          <p className='text-red-500 text-xs text-center mb-2'>{error}</p>
        )}
        <form>
          <div className='relative mb-3'>
            <HiEnvelope className='h-5 w-5 absolute top-2 left-2 text-gray-400' />
            <input
              type='email'
              className='d-block w-full border rounded text-sm p-2 pl-8'
              placeholder='Email'
            />
          </div>
          <div className='relative mb-3'>
            <HiLockClosed className='h-5 w-5 absolute top-2 left-2 text-gray-400' />
            <input
              type='password'
              className='d-block w-full border rounded text-sm p-2 pl-8'
              placeholder='Password'
            />
          </div>
          <input
            type='submit'
            value='Register'
            className='block w-full bg-primary text-white rounded text-sm p-2 mb-3'
          />
        </form>
        <p className='text-xs text-gray-500 text-center my-2'>
          or continue with these social profile
        </p>
        <div className='flex gap-x-3 justify-center items-center py-4'>
          <button className='flex justify-center items-center w-10 h-10 border border-gray-300 rounded-full'>
            <FaGoogle className='w-4 h-4 text-gray-500' />
          </button>
          <button className='flex justify-center items-center w-10 h-10 border border-gray-300 rounded-full'>
            <FaFacebookF className='w-4 h-4 text-gray-500' />
          </button>
          <button className='flex justify-center items-center w-10 h-10 border border-gray-300 rounded-full'>
            <FaTwitter className='w-4 h-4 text-gray-500' />
          </button>
          <button className='flex justify-center items-center w-10 h-10 border border-gray-300 rounded-full'>
            <FaGithub className='w-4 h-4 text-gray-500' />
          </button>
        </div>

        <p className='text-center text-xs text-gray-500 mt-4'>
          Don't have an account yet?{' '}
          <Link to='/register'>
            <a className='text-primary'>Register</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
