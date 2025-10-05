import Button from '@mui/material/Button';

type ButtonProps = {
  children: string;
  disabled?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
};

export const ButtonUsage = ({
  variant = 'contained',
  color = 'primary',
  children,
  disabled,
  size = 'medium',
  startIcon,
  endIcon,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      color={color}
      disabled={disabled}
      onClick={onClick}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </Button>
  );
};
