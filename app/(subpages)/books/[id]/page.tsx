import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

import books from 'data/books/books';
import { getBookById } from 'data/books/books';
import Link from 'next/link';

export const dynamicParams = false;

type Props = {
  params: { id: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const book = getBookById(params.id);
  return {
    title: `${book.title}`,
    description: book.description || book.overview,
    alternates: {
      canonical: `books/${params.id}`,
    },
  };
}

export function generateStaticParams() {
  return books.map((book) => ({
    id: book.id,
  }));
}

const Book = ({ params }: Props) => {
  const book = getBookById(params.id);

  return (
    <div className="flex flex-col bg-light-gold p-14 leading-loose">
      <div className="flex flex-col gap-10 md:flex-row">
        <Image
          alt=""
          src={book.cover}
          width={0}
          height={0}
          sizes="500px"
          className="h-[500px] w-min"
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
      <h2 className="self-start pt-10 text-3xl">Overview</h2>
      <div>{book.contents()}</div>
    </div>
  );
};

export default Book;
