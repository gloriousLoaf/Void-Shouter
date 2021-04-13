import styles from './PostForm.module.scss';

const PostForm = () => {
  return (
    <form>
      <textarea
        className={styles.postForm}
        aria-label='Write your post'
      ></textarea>
      <button>Add New Post</button>
    </form>
  );
};

export default PostForm;
