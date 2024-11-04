import { notFound } from 'next/navigation';
import React from 'react';
import { adminTabSchema } from '@/types/tabs';

type Props = {
  params: Promise<{ tab: string }>;
};

export default async function AdminTabPage({ params }: Props) {
  try {
    adminTabSchema.parse(await params);
  } catch (e) {
    notFound();
  }

  return <>AdminTabPage: {(await params).tab}</>;
}
