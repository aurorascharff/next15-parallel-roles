import React, { Suspense } from 'react';
import { getRoleClaim } from '@/data/auth';

import SetRoleSwitch from './_components/SetRoleButton';

type Props = {
  admin: React.ReactNode;
  user: React.ReactNode;
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const role = getRoleClaim();

  return (
    <>
      <Suspense fallback={<div>Loading role...</div>}>
        <SetRoleSwitch roleClaimPromise={role} />
      </Suspense>
      {children}
      {/* <Suspense fallback={<div>Reloading dashboard...</div>}>
        <Dashboard admin={admin} user={user} />
      </Suspense> */}
    </>
  );
}
