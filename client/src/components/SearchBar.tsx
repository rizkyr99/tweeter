import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const SearchBar = () => {
  return (
    <div className='bg-white shadow-sm mb-4 p-4 rounded-xl grid grid-cols-[max-content,auto,max-content] space-x-2 items-center'>
      <HiMagnifyingGlass className='h-6 w-6 text-gray-300' />
      <input
        type='text'
        className='pl-4 py-1 outline-none'
        placeholder='Search'
      />
      <button className='hidden sm:block bg-primary text-white text-xs px-6 py-2 rounded hover:bg-primary/75'>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
