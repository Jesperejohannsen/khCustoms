import { Link } from 'react-router-dom';
import './button.css';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ to, children }: ButtonProps) => {
  return (
    <Link to={to} className="button">
      {children}
    </Link>
  );
};

export default Button;