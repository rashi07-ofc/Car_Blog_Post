export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type User = {
  id: number;
  name:string,
  username: string;
  website: string;
};

export type CardDetail = {
  imgUrl: string;
  title: string;
  desc: string;
  username: string;
  website: string;
};



export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};