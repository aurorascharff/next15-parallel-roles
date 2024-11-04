import { redirect } from 'next/navigation';
import { getRoleClaim } from '@/data/auth';

export default async function AdminPage() {
  const roleClaim = await getRoleClaim();

  if (roleClaim === 'Admin') {
    redirect('/dashboard/users');
  }
}
