import { ContentLayout } from '@/components/layouts/content-layout';
import { Head } from '@/components/seo';
import { TodoPanel } from '@/features/todo/component/todo-panel';

function TodoRoute() {
  return (
    <ContentLayout title="Todo" description="Manage your tasks">
      <Head
        title="App route page"
        description="Welcome to the Azure Todo App"
      />
      <main>
        <TodoPanel />
      </main>
    </ContentLayout>
  );
}

export default TodoRoute;
