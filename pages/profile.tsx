import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import About from '../components/About';
import Menu from '../components/Menu';
import Tweet from '../components/Tweet';
import Footer from '../components/Footer';

const Profile: NextPage = () => {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Tweeter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <About />
      <main className='px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-4 max-w-6xl mx-auto'>
          <Menu />
          <Tweet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
