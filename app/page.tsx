import Image from 'next/image'

export default function Home() {
  return (
    <div className='relative h-[calc(100vh-48px)] w-full'>
      <Image alt="Cover Image" src="/header.jpg" fill objectFit='cover'/>
    </div>
  )
}
