import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex h-12 justify-end bg-dark text-lg font-bold text-gold">
      <Link className="mr-auto min-w-fit p-3" href="/">
        P.K Balakrishnan
      </Link>
      <Link
        className="min-w-fit p-3"
        target="_blank"
        href="https://dcbookstore.com/authors/p.-k.-balakrishnan"
      >
        Buy Books
      </Link>
      <Link className="p-3" href="/about">
        About
      </Link>
      <Link className="p-3" href="/books">
        Books
      </Link>
      <Link className="p-3" href="/gallery">
        Gallery
      </Link>
    </div>
  );
}

export default Navbar;
