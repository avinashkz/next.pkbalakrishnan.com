import Image from 'next/image'
import Link from 'next/link'

import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

import Book from '@/components/book'
import books from "data/books/books";

let gallery = ["/gallery/thumbnail/1.jpg", "/gallery/thumbnail/2.jpg", "/gallery/thumbnail/3.jpg", "/gallery/thumbnail/4.jpg"]

export default function Home() {
  return (
    <div>
      <div className='relative h-[calc(100vh-48px)] w-full'>
        <Image alt="Cover Image" src="/header.jpg" fill className='object-cover'/>
      </div>
      <div className='flex flex-col items-center bg-gold px-14 py-20 space-y-10'>
            <h1 className="text-white text-4xl pb-6 font-bold">Heart Of A Storm</h1>
            <p className='text-justify text-white'>
              A powerhouse to be reckoned with in the intellectual space of
              Kerala, Balakrishnan was an author par excellence, a committed and
              daring journalist, a fiery orator and above all a great human
              being. He authored one of best and most widely read novels of the
              language,a controversial and original history of the state ,and a
              series of studies unparalleled in their depth, understanding and
              originality of vision. He never took the beaten tracks in whatever
              he did. His vision and learning took him through unchartered
              territories which he conquered with his characteristic mastery.
            </p>
            <Link href="/about" className='bg-white p-4 font-bold rounded-full w-40 text-gold text-center'>KNOW MORE</Link>
          </div>
          <div className='flex flex-col items-center px-14 py-20 space-y-10'>
            <h1 className='pb-6 text-4xl font-bold'>Featured Books</h1>
            <div className='flex flex-wrap w-full gap-5'>
              {books.slice(0,4).map(book => <Book key={book.id} book={book} />)}
            </div>
            <Link href="/books" className='bg-dark p-4 font-bold rounded-full w-40 text-gold text-center'>MORE BOOKS</Link>
          </div>
          <div className='flex flex-col items-center px-14 py-20 gap-10 bg-dark'>
            <h1 className='pb-6 text-4xl font-bold text-gold'>Gallery</h1>
            <hr />
            <div className='flex flex-wrap items-center justify-evenly w-full gap-5'>
              {gallery.map((image, index) => (
                <div key={index} className='py-10 px-5 w-[300px] shrink-0 rounded-2xl bg-gold'> 
                <Image  alt='' src={image} height={300} width={300} />
                </div>
              ))}
            </div>
            <Link href="/gallery" className='bg-gold p-4 font-bold rounded-full w-40 text-white text-center'>VIEW MORE</Link>
          </div>
          <div className='flex flex-col items-center px-14 py-20'>
                <h1 className='heading-1'>Get In Touch!</h1>
                <hr className='h-1 w-10 bg-gold mt-5'/>
                <div className='flex w-full justify-evenly pt-10'>
                  <div className='flex flex-col items-center'>
                    <FaRegEnvelope size={50} />
                    <h3 className='heading-3 text-gold'>pkjaya@hotmail.com</h3>
                  </div>
                  <div className='flex flex-col items-center'>
                    <FaFacebookSquare size={50} />
                    <h3 className='heading-3 text-gold'>@pkbauthor</h3>
                  </div>
                </div>
          </div>       
    </div>
  )
}
