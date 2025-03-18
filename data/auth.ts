'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { cache } from 'react';
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

export const getRoleClaim = cache(async () => {
  await new Promise(resolve => {
    return setTimeout(resolve, 1000);
  });
  return (await cookies()).get('roleClaim')?.value as RoleClaim;
});
