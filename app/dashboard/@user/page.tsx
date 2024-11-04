import { redirect } from 'next/navigation';
import { getRoleClaim } from '@/data/auth';

export default async function UserPage() {
  const roleClaim = await getRoleClaim();

  if (roleClaim === 'User') {
    redirect('/dashboard/profile');
  }
}
