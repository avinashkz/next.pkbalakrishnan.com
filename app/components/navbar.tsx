import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='h-12 bg-dark text-gold flex justify-end text-lg font-bold'>
        <Link className='mr-auto p-3' href="/">P.K Balakrishnan</Link>
        <Link className='p-3'
            target="_blank"
            href="https://dcbookstore.com/authors/p.-k.-balakrishnan"
        >
          Buy Books
        </Link>
        <Link className='p-3' href="/about">About</Link>
        <Link className='p-3' href="/books">Books</Link>
        <Link className='p-3' href="/gallery">Gallery</Link>
    </div>
  )
}

export default Navbar
