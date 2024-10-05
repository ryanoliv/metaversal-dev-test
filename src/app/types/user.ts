export interface User {
  id: number | string;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string;
  address?: {
    state: string;
    country: string;
  };
  company?: {
    department: string;
  };
}
