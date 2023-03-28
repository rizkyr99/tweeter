import Header from '../components/Header';
import PostTweet from '../components/PostTweet';
import ToFollow from '../components/ToFollow';
import Trends from '../components/Trends';
import TweetList from '../components/TweetList';

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='px-4 py-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-4 max-w-6xl mx-auto'>
          <div className='col-span-2'>
            <PostTweet />
            <TweetList />
          </div>
          <div>
            <Trends />
            <ToFollow />
          </div>
        </div>
      </main>
      {/* <BottomBar /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
