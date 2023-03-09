export interface AuthState {
    user: string | null;
    isAuthenticated: boolean;
    error: string | null;
  }
  
  export interface LoginPayload {
    username: string;
  }
  