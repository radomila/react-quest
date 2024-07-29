import styles from './Button.module.css';

interface ButtonProps {
  type: 'primary' | 'secondary';
  text: string;
  disabled: boolean;
  onClick?: () => void;
}

const Button = ({ type, text, onClick, disabled = false }: ButtonProps) => {
  const disabledButtonColor = disabled ? styles.disabled : '';
  const buttonType = type === 'primary' ? styles.primary : styles.secondary;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${disabledButtonColor} ${buttonType}`}
    >
      {text}
    </button>
  );
};

export default Button;
