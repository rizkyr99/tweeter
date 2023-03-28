import React from 'react';
import Moment from 'react-moment';
import {
  HiArrowPath,
  HiOutlineChatBubbleLeft,
  HiOutlineTrash,
  HiOutlineHeart,
  HiOutlineBookmark,
  HiOutlinePhoto,
} from 'react-icons/hi2';

const TweetItem = () => {
  return (
    <>
      <div className='text-gray-500 text-sm mb-2 flex items-center gap-x-2'>
        <HiArrowPath className='h-4' />
        Rizky Ramadhan Retweeted
      </div>
      <div className='bg-white shadow-sm mb-4 p-4 rounded-xl'>
        <div className='flex gap-x-2 mb-4'>
          <img
            className='h-10 w-10 rounded-md'
            //   src={tweet.userImg}
            alt=''
            referrerPolicy='no-referrer'
          />
          <div className=''>
            <h3 className='font-semibold font-poppins'>Username</h3>
            <p className='text-gray-400 text-xs'>
              {/* <Moment fromNow>2023</Moment> */}
            </p>
          </div>
        </div>
        <div className='mb-4'>
          <p className='text-gray-800 mb-4'>text</p>
          <img className='w-full rounded-xl' src='image' alt='' />
          <div className='flex gap-x-2 mt-2 text-gray-500 text-xs justify-end'>
            <span>449 Comments</span>
            <span>59k Retweets</span>
            <span>234 Saved</span>
          </div>
        </div>
        <div className='flex gap-x-1 border-y border-gray-100 py-1'>
          <button className='flex flex-1 items-center justify-center gap-x-2 hover:bg-gray-100 rounded-lg text-sm font-medium p-2'>
            <HiOutlineChatBubbleLeft className='h-4' />
            <span className='hidden md:inline'>Comments</span>
          </button>
          <button className='flex flex-1 items-center justify-center gap-x-2 hover:bg-gray-100 rounded-lg text-sm font-medium p-2'>
            <>
              <HiArrowPath className='h-4' />
              <span className='hidden md:inline'>Retweets</span>
            </>
          </button>
          <button
            className={`flex flex-1 items-center justify-center gap-x-2 hover:bg-gray-100 rounded-lg text-sm  font-medium p-2`}>
            <HiOutlineHeart className='h-4' />
            <span className='hidden md:inline'>Likes</span>
          </button>

          <button className='flex flex-1 items-center justify-center gap-x-2 hover:bg-gray-100 rounded-lg text-sm font-medium p-2'>
            <HiOutlineBookmark className='h-4' />
            <span className='hidden md:inline'>Save</span>
          </button>
        </div>
        <div className='flex gap-x-2 py-2 border-b border-gray-100'>
          {/* @ts-ignore */}
          <img className='h-10 w-10 rounded-lg' alt='' />
          <div className='w-full relative'>
            <input
              className='bg-gray-50 border border-gray-100 h-10 w-full px-4 rounded-lg text-sm outline-primary'
              type='text'
              placeholder='Tweet your reply'
            />
            <HiOutlinePhoto className='h-4 absolute top-3 right-3 text-gray-400 ' />
          </div>
        </div>
        <div className='hidden'>{/* <CommentItem /> */}</div>
      </div>
    </>
  );
};

export default TweetItem;
