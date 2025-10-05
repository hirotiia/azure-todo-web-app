import { Head } from '@/components/seo';
import { Button } from '@mui/material';

function LandingRoute() {
  return (
    <>
      <Head title="Landing Page" description="Welcome to the Azure Todo App" />
      <main>
        <h1>Azure Todo App</h1>
        <a href="/auth/register">サインアップ</a>
        <Button variant="contained" color="error">
          error
        </Button>
      </main>
    </>
  );
}

export default LandingRoute;
