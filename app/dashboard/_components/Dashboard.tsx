import React from 'react';
import { getRoleClaim } from '@/data/auth';

type Props = {
  admin: React.ReactNode;
  user: React.ReactNode;
};

export default async function Dashboard({ admin, user }: Props) {
  const role = await getRoleClaim();

  return (
    <>
      {role === 'Admin' && <div>Here is content visible only to Admin</div>}
      {role === 'User' && <div>Here is content visible only to User</div>}
      {role === 'Admin' ? admin : user}
    </>
  );
}
