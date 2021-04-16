import styles from './PostForm.module.scss';

const PostForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    const { currentTarget } = e;

    const formData = Array.from(currentTarget.elements);
    const data = {};

    formData.forEach((form) => {
      if (!form.name) return;
      data[form.name] = form.value;
      form.value = '';
    });

    typeof onSubmit === 'function' && onSubmit(e, data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name='content'
        className={styles.postForm}
        aria-label='Write your post'
      ></textarea>
      <button>Shout Into The Void!</button>
    </form>
  );
};

export default PostForm;
