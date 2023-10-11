import React from 'react';
import Book from '@/components/book';
import books from 'data/books/books';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Books',
  description:
    'Balakrishnan has 13 books to his credit.  His works includes Ini Njan Urangatte his best known novel, history books like “Jaathivyavasthitium Kerala Charitravum, Tippu Sultan etc, full length studies on Narayanaguru, Kumaranasan, O Chandu Menon etc, several insightful criticisms and collection of essays.',
  alternates: {
    canonical: '/books',
  },
};

const Books = () => {
  return (
    <div className="bg-light-gold px-14 py-20">
      <div className="flex items-end">
        <h1 className="min-w-fit text-4xl">Life Works</h1>
        <h2 className="min-w-fit text-2xl text-gray-600">
          ...Books by PK Balakrishnan
        </h2>
      </div>
      <div className="flex h-full w-full flex-wrap items-center gap-10 pt-10">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
