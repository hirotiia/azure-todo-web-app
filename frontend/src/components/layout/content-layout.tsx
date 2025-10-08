import Typography from '@mui/material/Typography';
import { Head } from '../seo';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export function ContentLayout({
  children,
  title,
  description,
}: ContentLayoutProps) {
  return (
    <div>
      <Head title={title} description={description} />
      <div>
        <Typography variant="h2" component="h1">
          {title}
        </Typography>
      </div>
      <div>{children}</div>
    </div>
  );
}
