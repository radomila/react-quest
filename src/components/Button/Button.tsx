import './styles.css';

interface ButtonProps {
  text: string;
  disabled: boolean;
  onClick: () => void;
}

const Button = ({ text, onClick, disabled }: ButtonProps) => {
  const disabledButtonColor = disabled && 'disabled';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button-${disabledButtonColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
