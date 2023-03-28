import React from 'react';
import { Link } from 'react-router-dom';
import { HiUser } from 'react-icons/hi2';
import { Menu } from '@headlessui/react';

const Header = () => {
  return (
    <div className='sticky top-0 z-50 h-16 px-4 lg:px-16 flex items-center justify-between shadow-sm bg-white'>
      <div className='flex items-center gap-x-2'>
        <img className='h-10' src='/logo.png' alt='' />
        <span className='hidden md:inline font-bold'>Tweeter</span>
      </div>
      <div className='hidden md:flex space-x-12 text-sm font-poppins font-medium text-gray-500 h-full items-center'>
        <Link to='/' className={`h-full flex items-center`}>
          Home
        </Link>
        <Link to='/explore' className={`h-full flex items-center`}>
          Explore
        </Link>
        <Link to='/bookmarks' className={`h-full flex items-center`}>
          Bookmarks
        </Link>
      </div>

      <Menu as='div' className='relative'>
        <Menu.Button>Rizky Ramadhan</Menu.Button>
        <Menu.Items className='absolute right-0 mt-4 w-48 bg-white border border-gray-200 rounded-xl origin-top-right'>
          <div className='px-3 py-4'>
            <Menu.Item>
              {({ active }) => (
                <Link className={`${active && 'bg-blue-500'}`} to='/profile'>
                  My Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link className={`${active && 'bg-blue-500'}`} to='/profile'>
                  Group Chat
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link className={`${active && 'bg-blue-500'}`} to='/profile'>
                  Settings
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>

      {/* <Link to='/profile' className='flex items-center gap-x-2'>
        <div className='flex items-center justify-center h-8 w-8 rounded-md bg-gray-400'>
          <HiUser className='h-6 w-6 text-gray-100' />
        </div>
        <span className='hidden md:inline text-sm font-semibold'>
          Rizky Ramadhan
        </span>
      </Link> */}
    </div>
  );
};

export default Header;
