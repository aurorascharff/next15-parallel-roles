import Link from 'next/link';
import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <span>AdminLayout </span>
      <Link href="/dashboard/users">Go to users</Link>
      <Link href="/dashboard/settings">Go to settings</Link>
      {children}
    </div>
  );
}
