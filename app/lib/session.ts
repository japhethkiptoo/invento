import { appConfig } from '@/config/app';
import { useSession } from '@tanstack/start/server';

type AuthSession = {
  auth: boolean;
  user: any;
};

export function useAppSession() {
  return useSession<AuthSession>({
    password: appConfig.session_password,
  });
}
