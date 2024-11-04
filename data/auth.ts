'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import type { RoleClaim } from '@/types/role';

let roleClaim: RoleClaim = 'User';

export async function setRoleClaim(newRoleClaim: RoleClaim) {
  await new Promise(resolve => {
    return setTimeout(resolve, 1000);
  });
  roleClaim = newRoleClaim;
  revalidatePath('/dashboard');
  redirect('/dashboard');
}

export async function getRoleClaim() {
  await new Promise(resolve => {
    return setTimeout(resolve, 1000);
  });
  return roleClaim;
}
