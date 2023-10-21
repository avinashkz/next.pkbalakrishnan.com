import Book from '@/types/book';

const Contents = () => {
  return (
    <div>
      <p className="mt-5">
        In Kavyakala Kumaranasaniloode, PK Balakrishnan studies the works of
        Kumaranasan as a medium for discourse on the art of poetry. The
        foundation of this book is the consideration of fundamentals and basic
        expressions of poetry as an art. The intention of the author is not to
        write a comprehensive work on the life and works of the great Malayalam
        poet Kumaranasan.
      </p>
      <p className="mt-5">
        Those studying about the art of poetry in general and the works of
        Kumaranasan in particular will find a lot of unexplored areas through
        this book. This book is not just a collection of articles but a book
        with an integrated design.
      </p>
      <p className="mt-5">
        This book not only studies the general nature of a genius in the realm
        of poetic art through the life of the poet, it also sheds light into the
        beautiful world of Asan&apos;s poetry. By re-evaluating some of the
        poetic works with this rare insight, this book elevates itself to the
        realm of original literature.
      </p>
      <p className="mt-5">
        The preface to the book is written by the author&apos;s friend Prof. M.
        Gangadharan.
      </p>
      <p className="mt-5">
        The book is dedicated to his friend Sarkar Mohammed.
      </p>
    </div>
  );
};
const kavyakalaKumaranasaniloode: Book = {
  id: 'kavyakala-kumaranasaniloode',
  title: 'Kavyakala Kumaranasaniloode',
  subtitle: 'Category : STUDY',
  overview:
    'A critical study of Kumaran Asan and his poetical works.  It is a discourse on the art of poetry as revealed through the works of the great Malayalam poet.',
  description: '',
  link: 'https://dcbookstore.com/books/kavyakala-kumaranasaniloode',
  thumbnail: '/books-thumbnail/kavyakala-kumaranasaniloode.jpg',
  cover: '/books-cover/kavyakala-kumaranasaniloode.jpg',
  contents: Contents,
  firstPublished: 1970,
  publisher: 'D.C Books',
};

export default kavyakalaKumaranasaniloode;
