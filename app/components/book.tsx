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
    <div className="flex h-[620px] w-60 shrink-0 grow flex-col items-center space-y-5">
      <Image
        alt={book.title + 'Image'}
        src={book.cover}
        width={200}
        height={200}
      />
      <h3 className="heading-3">{book.title}</h3>
      <p className="w-72 text-center text-gray-500">
        {book.overview.slice(0, 250)}
      </p>
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
