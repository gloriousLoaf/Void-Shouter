import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Void Shouter</h1>

        <ul className={styles.posts}>
          <li>
            <p className={styles.postsContent}>I'm tring to learn Figma!</p>
            <p>4/13/2021</p>
          </li>
          <li>
            <p className={styles.postsContent}>Here is another message.</p>
            <p>4/13/2021</p>
          </li>
          <li>
            <p className={styles.postsContent}>
              And yet another message. Super exciting content.
            </p>
            <p>4/13/2021</p>
          </li>
        </ul>

        <form>
          <textarea
            className={styles.postText}
            aria-label='Write your post'
          ></textarea>
          <button>Add New Post</button>
        </form>
      </main>
    </div>
  );
}
