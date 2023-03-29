import React from 'react';
import { Link } from 'react-router-dom';
import {
  HiUser,
  HiChevronDown,
  HiUserCircle,
  HiCog6Tooth,
  HiUsers,
  HiOutlineArrowRightOnRectangle,
} from 'react-icons/hi2';
import { Menu } from '@headlessui/react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { logout } from '../features/auth/authSlice';
import logo from '../assets/logo.png';

const Header = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className='sticky top-0 z-50 h-16 px-4 lg:px-16 flex items-center justify-between shadow-sm bg-white'>
      <div className='flex items-center gap-x-2'>
        <img className='h-10' src={logo} alt='' />
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
        <Menu.Button className='flex items-center'>
          <div className='flex items-center justify-center h-8 w-8 rounded-md bg-gray-400 mr-2'>
            <HiUser className='h-6 w-6 text-gray-100' />
          </div>
          <div className='hidden md:flex items-center gap-x-4'>
            <span className=' text-sm font-semibold'>{`${userInfo.firstName} ${userInfo.lastName}`}</span>
            <HiChevronDown className='w-4 h-4' />
          </div>
        </Menu.Button>
        <Menu.Items className='absolute right-0 mt-8 w-48 px-3 py-4 bg-white border border-gray-200 rounded-xl origin-top-right divide-y divide-gray-100 space-y-2'>
          <div>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`flex w-full items-center gap-x-3 px-4 py-3 hover:bg-gray-100 text-sm rounded-lg`}
                  to='/profile'>
                  <HiUserCircle className='w-5 h-5 text-gray-700' />
                  My Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`flex w-full items-center gap-x-3 px-4 py-3 hover:bg-gray-100 text-sm rounded-lg`}
                  to='/profile'>
                  <HiUsers className='w-5 h-5 text-gray-700' />
                  Group Chat
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`flex w-full items-center gap-x-3 px-4 py-3 hover:bg-gray-100 text-sm rounded-lg`}
                  to='/profile'>
                  <HiCog6Tooth className='w-5 h-5 text-gray-700' />
                  Settings
                </Link>
              )}
            </Menu.Item>
          </div>
          <div>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`group flex w-full items-center gap-x-3 px-4 py-3 hover:bg-red-500 text-red-500 hover:text-white text-sm rounded-lg`}
                  onClick={logoutHandler}>
                  <HiOutlineArrowRightOnRectangle className='w-5 h-5 text-red-500 group-hover:text-white' />
                  Logout
                </button>
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
