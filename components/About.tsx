import Image from 'next/image';
import { UserAddIcon } from '@heroicons/react/solid';

function About() {
  return (
    <div>
      <div className='h-36 md:h-48 lg:h-72 bg-[url("/cover.jpg")] bg-cover bg-center px-3'></div>
      <div className='p-4'>
        <div className='-mt-12 relative flex flex-col md:items-start md:flex-row bg-white p-5 rounded-xl shadow-sm lg:max-w-6xl lg:mx-auto'>
          <div className='-mt-20 md:-mt-12 h-24 w-24 p-[4px] bg-white rounded-xl mx-auto md:ml-0 md:mr-2'>
            <img className='object-cover rounded-lg' src='/rizky.jpg' alt='' />
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col md:flex-row md:gap-x-8 items-center'>
              <h1 className='text-2xl font-poppins font-semibold text-center mt-8 md:text-left md:mt-0'>
                Rizky Ramadhan
              </h1>
              <div className='flex gap-x-8 justify-center text-xs text-gray-500 font-poppins mt-2'>
                <div>
                  <span className='font-semibold text-black'>2,569 </span>
                  Following
                </div>
                <div>
                  <span className='font-semibold text-black'>2,569 </span>
                  Following
                </div>
              </div>
            </div>
            <p className='text-center md:text-left text-gray-500 py-4'>
              Fullstack Developer, based in Palembang, Indonesia
            </p>
          </div>
          <button className='flex items-center md:absolute md:right-4 gap-x-1 text-xs bg-primary py-2 px-4 text-white mx-auto rounded-md'>
            <UserAddIcon className='h-4' /> Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
