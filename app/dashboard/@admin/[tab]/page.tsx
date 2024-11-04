import { notFound } from 'next/navigation';
import React from 'react';
import { adminTabSchema } from '@/types/tabs';

type Props = {
  params: Promise<{ tab: string }>;
};

export default async function AdminTabPage({ params }: Props) {
  const tab = (await params).tab;

  try {
    adminTabSchema.parse(tab);
  } catch (e) {
    notFound();
  }

  return <>AdminTabPage: {tab}</>;
}
