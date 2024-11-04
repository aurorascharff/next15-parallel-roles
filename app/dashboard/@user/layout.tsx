import Link from 'next/link';
import React from 'react';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <span>UserLayout </span>
      <Link href="/dashboard/profile">Go to profile</Link>
      <Link href="/dashboard/settings">Go to settings</Link>
      <Link href="/dashboard/billing">Go to billing</Link>
      {children}
    </div>
  );
}
