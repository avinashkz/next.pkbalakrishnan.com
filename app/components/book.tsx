import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { TiShoppingCart } from "react-icons/ti";
import { HiOutlineArrowsExpand } from "react-icons/hi"


const Book = ({book}: { book: {id: string, title: string, cover: string, overview: string, link: string}}) => {

  return (
    <div className='flex flex-col shrink-0 grow w-96 h-[620px] items-center space-y-5'>
        <Image alt={book.title + 'Image'} src={book.cover} width={200} height={200}/>
        <h3 className='heading-3'>{book.title}</h3>
        <p className='text-gray-400 text-center w-96'>{book.overview.slice(0,300)}</p>
        <div className='flex !mt-auto space-x-16 text-gray-400'>
          <Link href={book.link} 
            target="_blank"
          >
            <TiShoppingCart size={25} /></Link>
          <Link href={`/books/${book.id}/`}><HiOutlineArrowsExpand size={25} /></Link>
        </div>
    </div>
  )
}

Book.propTypes = {
    book: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      shortTitle: PropTypes.string,
      overview: PropTypes.string,
      cover: PropTypes.string,
    }).isRequired,
  }

export default Book