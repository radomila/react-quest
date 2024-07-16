import './styles.css';

interface ButtonProps {
  type?: 'primary' | 'secondary';
  text: string;
  disabled: boolean;
  onClick?: () => void;
}

const Button = ({
  type = 'primary',
  text,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const disabledButtonColor = disabled ? 'disabled' : '';
  const buttonType = type === 'secondary' ? 'secondary' : 'primary';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${disabledButtonColor} ${buttonType}`}
    >
      {text}
    </button>
  );
};

export default Button;
