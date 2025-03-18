'use client';

import React, { use, useOptimistic, useTransition } from 'react';
import { setRoleClaim } from '@/data/actions/auth';
import type { RoleClaim } from '@/types/role';

type Props = {
  roleClaimPromise: Promise<RoleClaim>;
};
export default function SetRoleSwitch({ roleClaimPromise }: Props) {
  const roleClaim = use(roleClaimPromise);
  const [role, setRole] = useOptimistic(roleClaim);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex gap-2">
      <label className="inline-flex cursor-pointer items-center">
        <input
          className="peer sr-only"
          onChange={() => {
            const newRole = role === 'Admin' ? 'User' : 'Admin';
            startTransition(async () => {
              setRole(newRole);
              await setRoleClaim(newRole);
            });
          }}
          type="checkbox"
          checked={role === 'Admin'}
        />
        <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
        <span className="ml-2">{role}</span>
      </label>
      <span>{isPending && 'Switching role...'}</span>
    </div>
  );
}
