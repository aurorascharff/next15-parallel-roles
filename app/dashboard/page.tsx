import { getRoleClaim } from '@/data/services/auth';

export default async function DashboardPage() {
  const roleClaim = await getRoleClaim();

  return (
    <div>
      <h1>Admin Page</h1>
      {roleClaim}
    </div>
  );
}
