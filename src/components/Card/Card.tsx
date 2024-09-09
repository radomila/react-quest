import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Card;
