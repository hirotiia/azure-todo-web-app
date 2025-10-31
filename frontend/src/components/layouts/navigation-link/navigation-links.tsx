import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Link } from 'react-router';
import { useRouteMatch } from './use-router-match';

export const NavigationLinks = () => {
  const currentTab = useRouteMatch(['/', '/auth/register', '/app'])?.pattern
    .path;
  return (
    <Tabs value={currentTab}>
      <Tab label="Top" value="/" to="/" component={Link} />
      <Tab
        label="新規登録"
        value="/auth/register"
        to="/auth/register"
        component={Link}
      />
      <Tab label="アプリ" value="/app" to="/app" component={Link} />
    </Tabs>
  );
};
