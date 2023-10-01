import React from 'react'
import Image from 'next/image'

import books from "data/books/books";
import { getBookById }  from "data/books/books";
import Link from 'next/link';

export const dynamicParams = false

export function generateStaticParams() {
    return books.map((book) => ({
        id: book.id
      }))
}
   

const Book = ({ params }: { params: { id: string } }) => {
    const { id } = params
    const book = getBookById(id)
    
    return (
        <div className='p-14 bg-light-gold'>
            <div className='flex gap-10'>
                <Image alt='' src={book.cover} width={500} height={500} />
                <div className='flex flex-col gap-5'>
                    <h1 className='heading-1'>{book.title}</h1>
                    <h2 className='heading-2'>{book.subtitle}</h2>
                    <div>{book.overview}</div>
                    <b>Publisher: </b>
                    <b>First Published: </b>
                    <Link 
                        href={book.link} 
                        target="_blank"
                        className='bg-dark p-4 font-bold rounded-xl w-40 text-gold text-center'
                    >
                        BUY BOOK
                    </Link>
                </div>
                </div>
            <div className='pt-10'>{book.contents()}</div>
        </div>
    )
}

export default Book