import { z } from 'zod';

export const userTabSchema = z.enum(['profile', 'settings', 'billing']);
export type UserTab = z.infer<typeof userTabSchema>;

export const adminTabSchema = z.enum(['users', 'settings']);
export type AdminTab = z.infer<typeof adminTabSchema>;
