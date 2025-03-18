'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { RoleClaim } from '@/types/role';

export async function setRoleClaim(newRoleClaim: RoleClaim) {
  await new Promise(resolve => {
    return setTimeout(resolve, 1000);
  });
  (await cookies()).set({
    name: 'roleClaim',
    value: newRoleClaim,
  });
  redirect('/dashboard');
}
