import { HiUserPlus } from 'react-icons/hi2';

const ToFollow = () => {
  return (
    <div className='mt-6'>
      <div className='bg-white shadow-sm mb-4 p-4 rounded-xl'>
        <h2 className='text-xs text-gray-600 font-semibold font-poppins'>
          Who to follow
        </h2>
        <hr className='my-2' />
        <div className='py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex space-x-2 items-center'>
              <img src='/rizky.jpg' className='h-10 w-10 rounded-md' alt='' />
              <div>
                <h3 className='font-poppins font-medium'>Rizky Ramadhan</h3>
                <span className='text-xs text-gray-500'>120k followers</span>
              </div>
            </div>
            <button className='text-xs text-white bg-primary px-4 py-1.5 justify-self-end flex items-center rounded gap-x-1'>
              <HiUserPlus className='h-4 w-4' /> Follow
            </button>
          </div>
          <p className='text-gray-500 py-4'>
            Fullstack Web Developer based in Palembang, Indonesia
          </p>
          <img
            src='/cover.jpg'
            className='h-24 w-full object-cover rounded'
            alt=''
          />
        </div>
        <hr className='my-2' />
        <div className='py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex space-x-2 items-center'>
              <img src='/rizky.jpg' className='h-10 w-10 rounded-md' alt='' />
              <div>
                <h3 className='font-poppins font-medium'>Rizky Ramadhan</h3>
                <span className='text-xs text-gray-500'>120k followers</span>
              </div>
            </div>
            <button className='text-xs text-white bg-primary px-4 py-1.5 justify-self-end flex items-center rounded gap-x-1'>
              <HiUserPlus className='h-4 w-4' /> Follow
            </button>
          </div>
          <p className='text-gray-500 py-4'>
            Fullstack Web Developer based in Palembang, Indonesia
          </p>
          <img
            src='/cover.jpg'
            className='h-24 w-full object-cover rounded'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default ToFollow;
