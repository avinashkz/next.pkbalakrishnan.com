import React from 'react';
import Image from 'next/image';

import books from 'data/books/books';
import { getBookById } from 'data/books/books';
import Link from 'next/link';

export const dynamicParams = false;

export function generateStaticParams() {
  return books.map((book) => ({
    id: book.id,
  }));
}

const Book = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const book = getBookById(id);

  return (
    <div className="bg-light-gold p-14">
      <div className="flex gap-10">
        <Image
          alt=""
          src={book.cover}
          width={0}
          height={0}
          sizes="500px"
          style={{ width: 'auto', height: '500px' }}
        />
        <div className="flex flex-col gap-5">
          <h1 className="heading-1">{book.title}</h1>
          <h2 className="heading-2">{book.subtitle}</h2>
          <div>{book.overview}</div>
          <span>
            <b>Publisher: </b> {book.publisher}
          </span>
          <span>
            <b>First Published: </b> {book.firstPublished}
          </span>
          <Link
            href={book.link}
            target="_blank"
            className="w-32 rounded-xl bg-dark p-3 text-center font-bold text-gold"
          >
            BUY BOOK
          </Link>
        </div>
      </div>
      <div className="pt-10">{book.contents()}</div>
    </div>
  );
};

export default Book;
