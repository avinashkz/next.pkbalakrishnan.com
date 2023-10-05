import React from 'react';
import Book from '@/components/book';
import books from 'data/books/books';

const Books = () => {
  return (
    <div className="flex flex-wrap items-center w-full h-full px-14 py-20 gap-10">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Books;
