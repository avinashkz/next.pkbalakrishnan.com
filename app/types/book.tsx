import { ReactNode } from 'react';

type Book = {
  id: string;
  title: string;
  shortTitle?: string;
  subtitle: string;
  overview: string;
  description: string;
  link: string;
  thumbnail: string;
  cover: string;
  contents: () => ReactNode;
};

export default Book;
