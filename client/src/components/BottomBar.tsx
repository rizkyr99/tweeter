import React from 'react';
import { HiBookmark, HiHome, HiMagnifyingGlass } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

const BottomBar = () => {
  const navLinkClassName = ({ isActive }: { isActive: boolean }): string => {
    return '';
  };
  return (
    <div className='md:hidden fixed bottom-0 left-0 bg-white w-full grid grid-cols-3 z-50 gap-x-2 p-3'>
      <NavLink to='/'>
        {({ isActive }) => (
          <div
            className={`${
              isActive ? 'text-primary' : ''
            } flex items-center justify-center p-2 rounded-md hover:bg-gray-100`}>
            <HiHome className='h-5 w-5' />
          </div>
        )}
      </NavLink>
      <NavLink to='/explore'>
        {({ isActive }) => (
          <div
            className={`${
              isActive ? 'text-primary' : ''
            } flex items-center justify-center p-2 rounded-md hover:bg-gray-100`}>
            <HiMagnifyingGlass className='h-5 w-5' />
          </div>
        )}
      </NavLink>
      <NavLink to='/bookmarks'>
        {({ isActive }) => (
          <div
            className={`${
              isActive ? 'text-primary' : ''
            } flex items-center justify-center p-2 rounded-md hover:bg-gray-100`}>
            <HiBookmark className='h-5 w-5' />
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default BottomBar;
