import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import About from '../components/About';

const Profile: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Tweeter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <About />
    </div>
  );
};

export default Profile;
