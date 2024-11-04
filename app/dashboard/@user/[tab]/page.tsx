import { notFound } from 'next/navigation';
import React from 'react';
import { userTabSchema } from '@/types/tabs';

type Props = {
  params: Promise<{ tab: string }>;
};

export default async function UserTabPage({ params }: Props) {
  const tab = (await params).tab;

  try {
    userTabSchema.parse(tab);
  } catch (e) {
    notFound();
  }

  return <>UserTabPage: {tab}</>;
}
