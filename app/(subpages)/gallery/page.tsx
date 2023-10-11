import Image from 'next/image';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photographs of P.K Balakrishnan, family and friends.',
  alternates: {
    canonical: '/gallery',
  },
};

const gallery = {
  '1940s': [
    '/gallery/3x4/1.jpg',
    '/gallery/3x4/2.jpg',
    '/gallery/3x4/3.jpg',
    '/gallery/3x4/5.jpg',
  ],
  '1950s': ['/gallery/3x4/4.jpg'],
  '1960s': ['/gallery/3x4/6.jpg'],
  '1970s': ['/gallery/3x4/7.jpg'],
  '1980s': [
    '/gallery/3x4/8.jpg',
    '/gallery/3x4/9.jpg',
    '/gallery/3x4/10.jpg',
    '/gallery/3x4/11.jpg',
    '/gallery/3x4/12.jpg',
    '/gallery/3x4/13.jpg',
    '/gallery/3x4/14.jpg',
  ],
};

const Gallery = () => {
  return (
    <div className="bg-light-gold p-14">
      {Object.entries(gallery).map(([title, images]) => (
        <div key={title}>
          <h1 className="heading-1">{title}</h1>
          <div className="justify-left mb-5 mt-2 flex grow flex-wrap items-center gap-5">
            {images.map((image, index) => (
              <Image key={index} alt="" src={image} width={310} height={300} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
