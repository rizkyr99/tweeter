import React from 'react';
import BottomBar from '../components/BottomBar';
import Header from '../components/Header';
import Menu from '../components/Menu';
import SearchBar from '../components/SearchBar';
import ToFollow from '../components/ToFollow';
import Trends from '../components/Trends';
import TweetList from '../components/TweetList';

const Explore = () => {
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='px-4 py-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-4 max-w-6xl mx-auto'>
          <div className='col'>
            <Menu />
          </div>
          <div className='col-span-2'>
            <SearchBar />
            <TweetList />
          </div>
        </div>
      </main>
      <BottomBar />
      {/* <Footer /> */}
    </div>
  );
};

export default Explore;
