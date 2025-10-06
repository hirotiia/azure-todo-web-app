import { Head } from '@/components/seo';
import { Link } from '@/components/ui/link';
import { Button } from '@mui/material';

function AppRoute() {
  return (
    <>
      <Head
        title="App route page"
        description="Welcome to the Azure Todo App"
      />
      <main>
        <h1>Azure Todo App</h1>
        <Link to="/auth/register">サインアップ</Link>
        <Button variant="contained" color="error">
          error
        </Button>
      </main>
    </>
  );
}

export default AppRoute;
