import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import { FaRegEnvelope } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

import Book from '@/components/book';
import books from 'data/books/books';

export const metadata: Metadata = {
  description:
    'P.K Balakrishnan was an author par excellence, a committed and daring journalist, a fiery orator and above all a great human being.He authored one of best and most widely read novels of the language, a controversial and original history of the state, and a series of studies unparalleled in their depth and understanding of the subject and originality of vision.',
  alternates: {
    canonical: `/`,
  },
};

const gallery = [
  '/gallery/thumbnail/1.jpg',
  '/gallery/thumbnail/2.jpg',
  '/gallery/thumbnail/3.jpg',
  '/gallery/thumbnail/4.jpg',
];

export default function Home() {
  return (
    <div>
      <div className="relative h-[100vh] w-full">
        <span className="relative z-[1] flex h-[100vh] items-end justify-center pb-14 text-5xl text-white">
          Critic. Historian. Novelist. Journalist
        </span>
        <Image
          alt="Cover Image"
          src="/header.jpg"
          fill
          className="object-cover"
        />
      </div>
      <div
        id="about"
        className="flex flex-col items-center space-y-10 bg-gold px-14 py-20"
      >
        <h1 className="pb-6 text-4xl font-bold text-white">Heart Of A Storm</h1>
        <p className="text-justify text-white">
          A powerhouse to be reckoned with in the intellectual space of Kerala,
          Balakrishnan was an author par excellence, a committed and daring
          journalist, a fiery orator and above all a great human being. He
          authored one of best and most widely read novels of the language,a
          controversial and original history of the state ,and a series of
          studies unparalleled in their depth, understanding and originality of
          vision. He never took the beaten tracks in whatever he did. His vision
          and learning took him through unchartered territories which he
          conquered with his characteristic mastery.
        </p>
        <Link
          href="/about"
          className="w-40 rounded-full bg-white p-4 text-center font-bold text-gold"
        >
          KNOW MORE
        </Link>
      </div>
      <div
        id="books"
        className="flex flex-col items-center space-y-10 px-14 py-20"
      >
        <h1 className="pb-6 text-4xl font-bold">Featured Books</h1>
        <div className="flex w-full flex-wrap justify-evenly gap-5">
          {books.slice(0, 3).map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>
      <div className="flex h-32 w-full items-start justify-center bg-white">
        <Link
          href="/books"
          className="h-fit w-40 rounded-full bg-dark p-4 text-center font-bold text-gold"
        >
          MORE BOOKS
        </Link>
      </div>
      <div
        id="gallery"
        className="flex flex-col items-center gap-10 bg-dark px-14 py-20"
      >
        <h1 className="pb-6 text-4xl font-bold text-gold">Gallery</h1>
        <hr />
        <div className="flex w-full flex-wrap items-center justify-evenly gap-5">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="w-[300px] shrink-0 rounded-2xl bg-gold px-5 py-10"
            >
              <Image alt="" src={image} height={300} width={300} />
            </div>
          ))}
        </div>
        <Link
          href="/gallery"
          className="w-40 rounded-full bg-gold p-4 text-center font-bold text-white"
        >
          VIEW MORE
        </Link>
      </div>
      <div id="contact" className="flex flex-col items-center px-14 py-20">
        <h1 className="heading-1">Get In Touch!</h1>
        <hr className="mt-5 h-1 w-10 bg-gold" />
        <div className="flex w-full flex-col justify-evenly gap-5 pt-10 md:flex-row md:gap-0">
          <div className="flex flex-col items-center">
            <FaRegEnvelope size={50} />
            <h3 className="heading-3 text-gold">pkjaya@hotmail.com</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaFacebookSquare size={50} />
            <h3 className="heading-3 text-gold">@pkbauthor</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
