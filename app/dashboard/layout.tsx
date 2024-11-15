import React from 'react';
import { getRoleClaim } from '@/data/auth';
import SetRoleSwitch from './_components/SetRoleButton';

type Props = {
  admin: React.ReactNode;
  user: React.ReactNode;
};

export default async function DashboardLayout({ admin, user }: Props) {
  const role = await getRoleClaim();

  return (
    <>
      Current role: {role}
      {role === 'Admin' && <div>Here is content visible only to Admin</div>}
      {role === 'User' && <div>Here is content visible only to User</div>}
      <div>
        <SetRoleSwitch roleClaim={role} />
        {role === 'Admin' ? admin : user}
      </div>
    </>
  );
}
