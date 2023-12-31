import { ReactNode } from 'react';

type Book = {
  id: string;
  title: string;
  shortTitle?: string;
  subtitle: string;
  overview: string;
  description: string;
  firstPublished?: number | string;
  publisher: string;
  link: string;
  thumbnail: string;
  cover: string;
  contents: () => ReactNode;
};

export default Book;
