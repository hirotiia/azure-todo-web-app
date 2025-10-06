import { type LinkProps, Link as RouterLink } from 'react-router';

export const Link = ({ children, ...props }: LinkProps) => {
  return <RouterLink {...props}>{children}</RouterLink>;
};
