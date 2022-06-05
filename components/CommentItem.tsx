import { HeartIcon } from '@heroicons/react/outline';

function CommentItem() {
  return (
    <div className='grid grid-cols-[max-content,1fr] gap-x-2 mt-4'>
      <div>
        <img className='h-10 rounded-lg' src='/rizky.jpg' alt='' />
      </div>
      <div>
        <div className='bg-gray-50 py-2 px-4 rounded-lg mb-2'>
          <div className='flex items-center gap-x-2 mb-2'>
            <h2 className='font-semibold font-poppins'>Waqar Bloom</h2>
            <span className='text-sm text-gray-500'>24 August at 20:43</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum esse cupiditate illo voluptas nisi quis.</p>
        </div>
        <div className='flex items-center text-xs gap-x-2'>
          <div className='flex gap-x-1 items-center'>
            <HeartIcon className='h-4 text-gray-500' /> Like
          </div>
          <span>.</span>
          <span>12k Likes</span>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
