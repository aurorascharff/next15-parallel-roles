import React, { Suspense } from 'react';
import { getRoleClaim } from '@/data/auth';
import Dashboard from './_components/Dashboard';
import SetRoleSwitch from './_components/SetRoleButton';

type Props = {
  admin: React.ReactNode;
  user: React.ReactNode;
};

export default function DashboardLayout({ admin, user }: Props) {
  const role = getRoleClaim();

  return (
    <>
      <Suspense fallback={<div>Loading role...</div>}>
        <SetRoleSwitch roleClaimPromise={role} />
      </Suspense>
      <Suspense fallback={<div>Reloading dashboard...</div>}>
        <Dashboard admin={admin} user={user} />
      </Suspense>
    </>
  );
}
