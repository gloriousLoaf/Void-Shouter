import { useAuth } from '../hooks/useAuth';
import Head from 'next/head';
import Bio from '../components/Bio';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const { user, logIn, logOut } = useAuth();

  console.log('user', user);

  return (
    <div className={styles.container}>
      <Head>
        <title>Void Shouter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {!user && (
        <p>
          <button onClick={logIn}>login</button>
        </p>
      )}

      {user && (
        <p>
          <button onClick={logOut}>logout</button>
        </p>
      )}

      <main className={styles.main}>
        <Bio
          headshot='https://pbs.twimg.com/profile_images/1289388663311175680/oMuZZv67_400x400.jpg'
          name='David Metcalf'
          tagline='web developer'
          role='frontend @ MLtwist.com'
        />

        <ul className={styles.posts}>
          <li>
            <Post
              content='Yo! This is a post. Writing a longer post to spread things out, hopefully?'
              date='4/13/2021'
            />
          </li>
          <li>
            <Post content='Here is another post.' date='4/13/2021' />
          </li>
          <li>
            <Post content='And some more shit.' date='4/13/2021' />
          </li>
        </ul>

        {user && <PostForm />}
      </main>
    </div>
  );
}
