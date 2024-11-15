'use server';

import { redirect } from 'next/navigation';
import { cache } from 'react';
import type { RoleClaim } from '@/types/role';

let roleClaim: RoleClaim = 'User';

export async function setRoleClaim(newRoleClaim: RoleClaim) {
  await new Promise(resolve => {
    return setTimeout(resolve, 1000);
  });
  roleClaim = newRoleClaim;
  redirect('/dashboard');
}

export const getRoleClaim = cache(async () => {
  await new Promise(resolve => {
    return setTimeout(resolve, 1000);
  });
  return roleClaim;
});
