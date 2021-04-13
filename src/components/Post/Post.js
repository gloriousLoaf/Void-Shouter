import styles from './Post.module.scss';

const Post = ({ content, date }) => {
  return (
    <>
      <p className={styles.postsContent}>{content}</p>
      <p>{date} </p>
    </>
  );
};

export default Post;
