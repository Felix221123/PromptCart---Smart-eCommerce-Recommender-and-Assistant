export interface RegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LogInProps {
  email: string;
  password: string;
}