import Head from 'next/head';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Void Shouter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Void Shouter</h1>

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

        <form>
          {/* <textarea
            className={styles.postForm}
            aria-label='Write your post'
          ></textarea> */}
          <button>Add New Post</button>
        </form>
      </main>
    </div>
  );
}
