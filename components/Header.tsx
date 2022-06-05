import Link from 'next/link';

function Header() {
  return (
    <div className='sticky top-0 z-50 h-16 px-4 flex items-center justify-between shadow-sm bg-white'>
      <div className='flex items-center gap-x-2'>
        <img className='h-10' src='/logo.png' alt='' />
        <span className='hidden md:inline font-bold'>Tweeter</span>
      </div>
      <div className='hidden md:flex space-x-12 font-poppins font-medium text-gray-500'>
        <Link href='/'>Home</Link>
        <Link href='/'>Explore</Link>
        <Link href='/'>Bookmarks</Link>
      </div>
      <button className='flex items-center gap-x-2'>
        <img className='h-8 rounded-md' src='/rizky.jpg' alt='' />
        <span className='hidden md:inline font-semibold'>Rizky Ramadhan</span>
      </button>
    </div>
  );
}

export default Header;
