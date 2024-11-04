import { notFound } from 'next/navigation';
import React from 'react';
import { userTabSchema } from '@/types/tabs';

type Props = {
  params: Promise<{ tab: string }>;
};

export default async function UserTabPage({ params }: Props) {
  try {
    userTabSchema.parse(await params);
  } catch (e) {
    notFound();
  }

  return <>UserTabPage: {(await params).tab}</>;
}
