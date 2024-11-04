'use client';

import React, { useOptimistic, useTransition } from 'react';
import { setRoleClaim } from '@/data/auth';
import type { RoleClaim } from '@/types/role';

type Props = {
  roleClaim: RoleClaim;
};
export default function SetRoleSwitch({ roleClaim }: Props) {
  const [role, setRole] = useOptimistic(roleClaim);
  const [isPending, startTransition] = useTransition();

  return (
    <label>
      Set Role
      <span>Current role: {role}</span>
      <input
        onChange={event => {
          startTransition(async () => {
            setRole(event.target.checked ? 'Admin' : 'User');
            await setRoleClaim(event.target.checked ? 'Admin' : 'User');
          });
        }}
        type="checkbox"
      />
      {isPending ? ' Setting...' : ''}
    </label>
  );
}
