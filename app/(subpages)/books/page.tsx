import React from 'react';
import Book from '@/components/book';
import books from 'data/books/books';

const Books = () => {
  return (
    <div className="flex h-full w-full flex-wrap items-center gap-10 bg-light-gold px-14 py-20">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Books;
