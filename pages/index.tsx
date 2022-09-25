import type { NextPage } from 'next';
import Head from 'next/head';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import VideoPlayer from '../components/VideoPlayer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import AddVideo from '../components/AddVideo';
import videos from '../videos';

const Home: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <></>;
  }
  if (status === 'unauthenticated') {
    router.push('/login');
    return <></>;
  }

  return (
    <>
      <Head>
        <title>Lolipop</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Navbar />
        {session?.user ? (
          <>
            <ul className='container wrapper'>
              {videos?.map((video, index) => {
                return (
                  <li key={index} className=''>
                    <Card video={video} />
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

export default Home;
