import { getEnv } from './configHelper';

export const NEXT_PUBLIC_APP_ENV: string = getEnv('NEXT_PUBLIC_APP_ENV');
export const NEXT_PUBLIC_NODE_ENV: string = getEnv('NEXT_PUBLIC_NODE_ENV');
export const NODE_ENV: string = getEnv('NODE_ENV');
