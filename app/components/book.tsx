import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { TiShoppingCart } from 'react-icons/ti';
import { HiOutlineArrowsExpand } from 'react-icons/hi';

const Book = ({
  book,
}: {
  book: {
    id: string;
    title: string;
    cover: string;
    overview: string;
    link: string;
  };
}) => {
  return (
    <div className="flex h-[520px] w-80 shrink-0 flex-col items-center space-y-5">
      <Image
        alt={book.title + 'Image'}
        className="h-56 w-auto"
        src={book.cover}
        width={200}
        height={200}
      />
      <div className="h-56">
        <h3 className="heading-3">{book.title}</h3>
        <p className="line-clamp-6 text-justify text-gray-500">
          {book.overview}
        </p>
      </div>
      <div className="!mt-auto flex space-x-16 text-gray-500">
        <Link href={book.link} target="_blank">
          <TiShoppingCart size={25} />
        </Link>
        <Link href={`/books/${book.id}/`}>
          <HiOutlineArrowsExpand size={25} />
        </Link>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    shortTitle: PropTypes.string,
    overview: PropTypes.string,
    cover: PropTypes.string,
  }).isRequired,
};

export default Book;
