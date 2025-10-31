import { NavigationLinks } from './navigation-link';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Settings</li>
            <li>Profile</li>
          </ul>
        </nav>
      </header>
      <NavigationLinks />
      <main>{children}</main>
    </div>
  );
}
