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
  contents: () => void;
};

export default Book;
