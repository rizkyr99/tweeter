const Menu = () => {
  return (
    <div className='flex flex-col gap-y-2 bg-white shadow-sm rounded-xl py-4 mb-4 h-fit'>
      <a
        className='text-sm font-semibold font-poppins text-primary py-2 px-5 border-l-4 border-primary'
        href='/'>
        Tweets
      </a>
      <a
        className='text-sm font-semibold font-poppins text-gray-500 py-2 px-5 border-l-4 border-transparent'
        href='/'>
        Tweets & Replies
      </a>
      <a
        className='text-sm font-semibold font-poppins text-gray-500 py-2 px-5 border-l-4 border-transparent'
        href='/'>
        Media
      </a>
      <a
        className='text-sm font-semibold font-poppins text-gray-500 py-2 px-5 border-l-4 border-transparent'
        href='/'>
        Likes
      </a>
    </div>
  );
};

export default Menu;
