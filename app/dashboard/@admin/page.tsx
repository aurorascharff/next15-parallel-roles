import { redirect } from 'next/navigation';
import { getRoleClaim } from '@/data/services/auth';

export default async function AdminPage() {
  const roleClaim = await getRoleClaim();

  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );

  if (roleClaim === 'Admin') {
    redirect('/dashboard/users');
  }
}
