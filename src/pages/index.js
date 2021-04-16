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

  // const { user_metadata: userMetadata } = user;

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

      <main className={styles.main}>
        {user ? (
          <>
            <Bio
              headshot={user.user_metadata.avatar_url}
              name={user.user_metadata.full_name}
              tagline='This is your void.'
              role='No one can hear you shout.'
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
          </>
        ) : (
          <Bio
            headshot='https://www.pinclipart.com/picdir/big/563-5631288_megaphone-icon-megaphone-emoji-black-and-white-clipart.png'
            name='Welcome to Void Shouter'
            tagline='This could be your void.'
            role='Login with GitHub to shout.'
          />
        )}

        {!user && (
          <p>
            <button className={styles.logInBtn} onClick={logIn}>
              Login
            </button>
          </p>
        )}

        {user && (
          <p>
            <button className={styles.logInBtn} onClick={logOut}>
              Logout
            </button>
          </p>
        )}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
