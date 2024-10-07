import { atom } from 'jotai';
import { User } from '@supabase/supabase-js';

export const userAtom = atom<User | null>(null);
export const isAuthenticatedAtom = atom((get) => get(userAtom) !== null);
export const signupEmailAtom = atom<string>('');
