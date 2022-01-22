export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUserInfo {
  id: number;
  email: string;
  name: string;
  image: null | string;
  title: null | string;
  description: null | string;
}