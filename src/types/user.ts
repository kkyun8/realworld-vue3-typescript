export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  image: null | string;
  title: null | string;
  description: null | string;
  isFollower?: boolean;
  isFollowing?: boolean;
}
