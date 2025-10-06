import { Head } from '@/components/seo';
import { Link } from '@/components/ui/link';

function LandingRoute() {
  return (
    <>
      <Head title="Landing Page" description="Welcome to the Azure Todo App" />
      <main>
        <h1>Azure Todo App</h1>
        <Link to="/auth/register">サインアップ</Link>
        <Link to="/app/">アプリへ</Link>
      </main>
    </>
  );
}

export default LandingRoute;
