import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import Head from 'next/head';
import Bio from '../components/Bio';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import styles from '../styles/Home.module.scss';

export default function Home({ posts: defaultPosts }) {
  const [posts, updatePosts] = useState(defaultPosts);

  useEffect(() => {
    const run = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`
      );
      const { posts } = await response.json();
      updatePosts(posts);
    };
    run();
  }, []);

  const { user, logIn, logOut } = useAuth();

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
          {posts.map((post) => {
            const { content, id, date } = post;
            return (
              <li key={id}>
                <Post
                  content={content}
                  date={new Intl.DateTimeFormat('en-US', {
                    dateStyle: 'short',
                    timeStyle: 'short',
                  }).format(new Date(date))}
                />
              </li>
            );
          })}
        </ul>

        {user && <PostForm />}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`
  );
  const { posts } = await response.json();

  return {
    props: {
      posts,
    },
  };
};
