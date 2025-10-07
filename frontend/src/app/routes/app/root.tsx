import { Head } from '@/components/seo';
import { Link } from '@/components/ui/link';
import { TodoPanel } from '@/features/todo/component/todo-panel';

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
        <TodoPanel />
      </main>
    </>
  );
}

export default AppRoute;
