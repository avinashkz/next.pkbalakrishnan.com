import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='h-12 bg-dark text-gold flex justify-end text-lg font-bold'>
        <Link className='mr-auto p-3' href="#">P.K Balakrishnan</Link>
        <Link className='p-3' href="#">Buy Books</Link>
        <Link className='p-3' href="#">About</Link>
        <Link className='p-3' href="#">Books</Link>
        <Link className='p-3' href="#">Gallery</Link>
    </div>
  )
}

export default Navbar
