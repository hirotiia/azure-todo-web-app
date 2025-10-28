import Button from '@mui/material/Button';
import { TodoAddForm } from './todo-add-form';
import { EnhancedTable } from './todo-tabale';

export const TodoPanel = () => {
  return (
    <>
      <Button
        sx={{
          color: 'neutral.dark',
          bgcolor: 'neutral.light',
          '&:hover': { bgcolor: 'neutral.main', color: 'neutral.contrastText' },
        }}
        variant="outlined"
      >
        Add Todo
      </Button>
      <TodoAddForm />
      <EnhancedTable />
    </>
  );
};
