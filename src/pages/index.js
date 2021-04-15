import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { getAllPosts, createPost } from '../lib/postsLib';
import Head from 'next/head';
import Bio from '../components/Bio';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import styles from '../styles/Home.module.scss';

export default function Home({ posts: defaultPosts }) {
  const [posts, updatePosts] = useState(defaultPosts);

  const { user, logIn, logOut } = useAuth();

  const postsSorted = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const handleSubmit = async (e, data) => {
    e.preventDefault();

    await createPost(data);

    const posts = await getAllPosts();
    updatePosts(posts);
  };

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
          {postsSorted.map((post) => {
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

        {user && <PostForm onSubmit={handleSubmit} />}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  // const posts = await getAllPosts();
  return {
    props: {
      posts: [],
    },
  };
};
