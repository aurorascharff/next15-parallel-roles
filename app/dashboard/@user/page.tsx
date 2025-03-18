import { redirect } from 'next/navigation';
import { getRoleClaim } from '@/data/services/auth';

export default async function UserPage() {
  const roleClaim = await getRoleClaim();

  return (
    <div>
      <h1>User Page</h1>
    </div>
  );

  if (roleClaim === 'User') {
    redirect('/dashboard/profile');
  }
}
