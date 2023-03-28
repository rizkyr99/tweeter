import React from 'react';
import { HiGlobeAsiaAustralia, HiPhoto, HiUsers } from 'react-icons/hi2';

const PostTweet = () => {
  const loading = false;

  return (
    <div className='col-span-2'>
      <div className='bg-white shadow-sm mb-4 p-4 rounded-xl'>
        <h2 className='text-xs text-gray-600 font-semibold font-poppins'>
          Tweet something
        </h2>
        <hr className='my-2' />
        {loading ? (
          <div className='text-sm text-gray-400'>Uploading...</div>
        ) : (
          <div className='flex gap-x-2 mb-4'>
            {/* @ts-ignore */}
            <img className='h-10 rounded-md' alt='' />
            <div className='w-full'>
              <textarea
                name=''
                id=''
                rows={3}
                className='w-full p-2'
                placeholder="What's happening?"
              />
              {/* {selectedFile && (
                <div className='relative'>
                  <div
                    className='absolute top-2 left-2 bg-black/50 p-1 rounded-full hover:bg-black/60 cursor-pointer shadow'
                    onClick={() => setSelectedFile(null)}>
                    <XIcon className=' h-4 w-4 text-white' />
                  </div>
                  <img
                    src={selectedFile}
                    alt=''
                    className='max-h-96 object-contain my-2 rounded-xl'
                  />
                </div>
              )} */}
            </div>
          </div>
        )}
        <div className='flex items-center justify-between md:ml-12'>
          <div className='flex items-center gap-x-2 text-primary'>
            <div className='cursor-pointer hover:text-primary/75'>
              <HiPhoto className='h-4 w-4 md:h-5 md:w-5' />
              <input type='file' className='hidden' />
            </div>
            <div className='relative'>
              <div className='flex items-center gap-x-1 cursor-pointer hover:text-primary/75'>
                <HiGlobeAsiaAustralia className='h-4 w-4 md:h-5 md:w-5' />
                <span className='text-xs font-medium'>Everyone can reply</span>
              </div>
              <div
                className='hidden absolute w-[max-content] top-12 bg-white shadow-sm mb-4 p-4 rounded-lg text-black'
                id='reply-option'>
                <h3 className='text-black text-xs font-semibold font-poppins'>
                  Who can reply?
                </h3>
                <p className='text-xs text-gray-500'>
                  Choose who can reply to this tweet
                </p>
                <button
                  className={`flex items-center gap-x-2 p-2 w-full text-sm rounded-lg mt-2`}>
                  <HiGlobeAsiaAustralia className='h-6 w-6' />
                  Everyone
                </button>
                <button
                  className={`flex items-center gap-x-2 p-2 w-full text-sm rounded-lg mt-2`}>
                  <HiUsers className='h-6 w-6' />
                  People you follow
                </button>
              </div>
            </div>
          </div>
          <button className='bg-primary text-white text-xs px-6 py-2 rounded hover:bg-primary/75'>
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostTweet;
