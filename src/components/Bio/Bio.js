import styles from './Bio.module.scss';

const Bio = ({ headshot, name, tagline, role }) => {
  return (
    <div className={styles.bio}>
      <div>
        <img src={headshot} alt={`Headshot of ${name}`} />
      </div>
      <div>
        <p>{name}</p>
        <p>{tagline}</p>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default Bio;
