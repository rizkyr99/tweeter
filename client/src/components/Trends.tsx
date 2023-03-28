const Trends = () => {
  return (
    <div>
      <div className='bg-white shadow-sm mb-4 p-4 rounded-xl'>
        <h2 className='text-xs text-gray-600 font-semibold font-poppins'>
          Trends for you
        </h2>
        <hr className='my-2' />
        <ul className='py-2 space-y-4'>
          <li className='space-y-1'>
            <a href='' className='font-semibold hover:text-primary'>
              #programming
            </a>
            <p className='text-xs text-gray-500'>213k Tweets</p>
          </li>
          <li className='space-y-1'>
            <a href='' className='font-semibold hover:text-primary'>
              #devchallenges
            </a>
            <p className='text-xs text-gray-500'>123k Tweets</p>
          </li>
          <li className='space-y-1'>
            <a href='' className='font-semibold hover:text-primary'>
              #frontend
            </a>
            <p className='text-xs text-gray-500'>34k Tweets</p>
          </li>
          <li className='space-y-1'>
            <a href='' className='font-semibold hover:text-primary'>
              #programming
            </a>
            <p className='text-xs text-gray-500'>213k Tweets</p>
          </li>
          <li className='space-y-1'>
            <a href='' className='font-semibold hover:text-primary'>
              #programming
            </a>
            <p className='text-xs text-gray-500'>213k Tweets</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Trends;
