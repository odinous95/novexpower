export interface IMenuItem {
  text: string;
  url: string;
}

export interface IFAQ {
  question: string;
  answer: string;
}

export interface Iteam_members {
  name: string;
  role: string;
  message: string;
  avatar: string;
}

export interface ISocials {
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  threads?: string;
  twitter?: string;
  youtube?: string;
  x?: string;
  [key: string]: string | undefined;
}
