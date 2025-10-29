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
      <main>{children}</main>
    </div>
  );
}
