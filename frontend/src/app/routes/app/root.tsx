import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Outlet } from 'react-router';

function AppRoute() {
  return (
    <>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </>
  );
}

export default AppRoute;
