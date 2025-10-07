import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

export const TodoAddForm = () => {
  return (
    <Stack
      component="form"
      noValidate
      autoComplete="off"
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      sx={{ marginTop: '40px' }}
    >
      <TextField fullWidth label="新しいTODOを追加" id="Task" color="primary" />
      <Tooltip title="TODOを追加する">
        <Fab
          type="submit"
          color="primary"
          aria-label="create"
          sx={{ flexShrink: 0 }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </Stack>
  );
};
