import 'server-only';

import { cookies } from 'next/headers';
import { cache } from 'react';
import type { RoleClaim } from '@/types/role';

export const getRoleClaim = cache(async () => {
  await new Promise(resolve => {
    return setTimeout(resolve, 1000);
  });
  return (await cookies()).get('roleClaim')?.value as RoleClaim;
});
