import { FaHeart } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';
import styles from './Post.module.scss';

const Post = ({ content, date }) => {
  return (
    <>
      <p className={styles.postsContent}>{content}</p>
      <ul>
        <li>
          <FaHeart />0
        </li>
        <li>
          <FaShareAlt />
          Can't Share
        </li>
        <li>{date}</li>
      </ul>
    </>
  );
};

export default Post;
