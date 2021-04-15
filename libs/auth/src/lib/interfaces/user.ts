export interface UserLogin {
  email: string;
  password: string;
}
export interface UserRegister extends UserLogin {
  password: string;
}

export interface User {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  avatar: string;
}
