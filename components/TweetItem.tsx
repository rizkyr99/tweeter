import {
  BookmarkIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  HeartIcon,
  PhotographIcon,
  RefreshIcon,
} from '@heroicons/react/outline';
import CommentItem from './CommentItem';

function TweetItem() {
  return (
    <>
      <div className='text-gray-500 text-sm mb-2 flex items-center gap-x-2'>
        <RefreshIcon className='h-4' />
        Rizky Ramadhan Retweeted
      </div>
      <div className='bg-white shadow-sm mb-4 p-4 rounded-xl'>
        <div className='flex gap-x-2 mb-4'>
          <img className='h-10 rounded-md' src='/elon.jpeg' alt='' />
          <div className=''>
            <h2 className='font-semibold font-poppins'>Elon Musk</h2>
            <p className='text-gray-400 text-xs'>24 August at 20:43</p>
          </div>
        </div>
        <div className='mb-4'>
          <p className='text-gray-800 mb-4'>
            To be clear, Im spending but actually of my time on the Twitter acquisition. It ain’t rocket science!
            Yesterday was Giga Texas, today is Starbase. Tesla is on my mind 24/7. <br />
            <br /> So may seem like below, but not true.
          </p>
          <img className='rounded-xl' src='/tweet1.jpg' alt='' />
          <div className='flex gap-x-2 mt-2 text-gray-500 text-xs justify-end'>
            <span>449 Comments</span>
            <span>59k Retweets</span>
            <span>234 Saved</span>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-x-1 border-y border-gray-100 py-1'>
          <button className='flex items-center justify-center gap-x-2 hover:bg-gray-100 rounded-lg text-sm font-medium p-2'>
            <ChatAltIcon className='h-4' />
            <span className='hidden md:inline'>Comments</span>
          </button>
          <button className='flex items-center justify-center gap-x-2 hover:bg-gray-100 rounded-lg text-sm font-medium p-2'>
            <RefreshIcon className='h-4' />
            <span className='hidden md:inline'>Retweets</span>
          </button>
          <button className='flex items-center justify-center gap-x-2 hover:bg-gray-100 rounded-lg text-sm font-medium p-2'>
            <HeartIcon className='h-4' />
            <span className='hidden md:inline'>Likes</span>
          </button>
          <button className='flex items-center justify-center gap-x-2 hover:bg-gray-100 rounded-lg text-sm font-medium p-2'>
            <BookmarkIcon className='h-4' />
            <span className='hidden md:inline'>Save</span>
          </button>
        </div>
        <div className='flex gap-x-2 py-2 border-b border-gray-100'>
          <img className='h-10 rounded-lg' src='/rizky.jpg' alt='' />
          <div className='w-full relative'>
            <input
              className='bg-gray-50 border border-gray-100 h-10 w-full px-4 rounded-lg text-sm'
              type='text'
              placeholder='Tweet your reply'
            />
            <PhotographIcon className='h-4 absolute top-3 right-3 text-gray-400 ' />
          </div>
        </div>
        <div>
          <CommentItem />
          <CommentItem />
        </div>
      </div>
    </>
  );
}

export default TweetItem;
