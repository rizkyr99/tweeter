import { Listbox } from '@headlessui/react';
import React, { useEffect, useRef, useState } from 'react';
import {
  HiGlobeAsiaAustralia,
  HiPhoto,
  HiUser,
  HiUsers,
  HiXMark,
} from 'react-icons/hi2';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { createPost } from '../features/post/postActions';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { resetPost } from '../features/post/postSlice';

const formSchema = yup
  .object({
    content: yup.string().required(),
    image: yup.mixed(),
  })
  .required();

type FormData = yup.InferType<typeof formSchema>;

const PostTweet = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const { loading, success } = useAppSelector((state) => state.post);

  const dispatch = useAppDispatch();

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    watch,
    setValue,
    reset,
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: yupResolver(formSchema) });

  const handleImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const newUrl = URL.createObjectURL(e.target.files[0]);

      if (newUrl !== imagePreview) {
        setImagePreview(newUrl);
      }
      setValue('image', e.target.files[0]);
      console.log(newUrl);
    }
  };

  const removeImage = () => {
    reset({ image: undefined });
    setImagePreview(null);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    dispatch(createPost(data));
    reset({ content: '' });
    removeImage();
  };

  useEffect(() => {
    if (success) {
      toast.success('Post uploaded');
      dispatch(resetPost());
    }
    console.log;
  }, [success, reset, dispatch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='col-span-2'>
        <div className='bg-white shadow-sm mb-4 p-4 rounded-xl'>
          <h2 className='text-xs text-gray-600 font-semibold font-poppins'>
            Tweet something
          </h2>
          <hr className='my-2' />
          {loading ? (
            <div className='h-24 flex items-center justify-center text-sm text-gray-400'>
              Uploading...
            </div>
          ) : (
            <div className='flex gap-x-2 mb-4'>
              {userInfo.picturePath ? (
                <img
                  className='h-10 rounded-md'
                  src={userInfo?.picturePath}
                  alt=''
                />
              ) : (
                <div className='flex items-center justify-center h-10 w-10 rounded-md bg-gray-400'>
                  <HiUser className='h-8 w-8 text-gray-100' />
                </div>
              )}
              <div className='w-full'>
                <textarea
                  id=''
                  rows={3}
                  className='w-full p-2'
                  placeholder="What's happening?"
                  {...register('content')}
                />
                {imagePreview && (
                  <div className='relative'>
                    <div
                      className='absolute top-2 left-2 bg-black/50 p-1 rounded-full hover:bg-black/60 cursor-pointer shadow'
                      onClick={removeImage}>
                      <HiXMark className=' h-4 w-4 text-white' />
                    </div>
                    <img
                      src={imagePreview}
                      alt=''
                      className='max-h-96 object-contain my-2 rounded-xl'
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          <div className='flex items-center justify-between md:ml-12'>
            <div className='flex items-center gap-x-2 text-primary'>
              <div className='cursor-pointer hover:text-primary/75'>
                <div>
                  <label htmlFor='file-input'>
                    <HiPhoto className='h-4 w-4 md:h-5 md:w-5' />
                  </label>
                  <input
                    type='file'
                    id='file-input'
                    className='hidden'
                    {...register('image', { onChange: handleImageChange })}
                  />
                </div>
              </div>
              <Listbox>
                <div className='relative'>
                  <Listbox.Button className='flex items-center gap-x-1 cursor-pointer hover:text-primary/75 text-xs'>
                    <HiGlobeAsiaAustralia className='h-4 w-4 md:h-5 md:w-5' />
                    Everyone
                  </Listbox.Button>
                  <Listbox.Options className='absolute w-[max-content] top-12 bg-white shadow-sm mb-4 p-4 rounded-lg text-black border border-gray-200 focus:outline-none'>
                    <div className='text-xs leading-5 mb-2'>
                      <p>
                        <strong>Who can reply?</strong>
                      </p>
                      Choose who can reply to this tweet
                    </div>
                    <Listbox.Option
                      className='flex items-center gap-x-2 p-2 w-full text-xs rounded-lg cursor-pointer hover:bg-gray-100'
                      value='Only'
                      disabled={false}>
                      <HiGlobeAsiaAustralia className='h-6 w-6' />
                      Everyone
                    </Listbox.Option>
                    <Listbox.Option
                      className='flex items-center gap-x-2 p-2 w-full text-xs rounded-lg cursor-pointer hover:bg-gray-100'
                      value='Only'
                      disabled={false}>
                      <HiUsers className='h-6 w-6' />
                      People you follow
                    </Listbox.Option>
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
            <button
              className='bg-primary text-white text-xs px-6 py-2 rounded hover:bg-primary/75 disabled:opacity-30'
              disabled={loading}>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostTweet;
