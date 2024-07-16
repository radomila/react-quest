import './styles.css';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="card">
      <div className="card-container">{children}</div>
    </div>
  );
};

export default Card;
