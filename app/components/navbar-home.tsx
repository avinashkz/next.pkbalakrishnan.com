'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'About', href: 'about' },
  { name: 'Books', href: 'books' },
  { name: 'Gallery', href: 'gallery' },
  { name: 'Contact', href: 'contact' },
];

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const currentPath = usePathname();

  // Add a state to track the scroll position
  const [scrolled, setScrolled] = useState(false);

  // Event listener to handle scroll
  const handleScroll = () => {
    const isScrolled = window.scrollY > window.innerHeight * 0.1;
    setScrolled(isScrolled);
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundColor = scrolled ? 'bg-white' : 'bg-transparent';
  const textColor = scrolled ? 'text-gold' : 'text-gray-100';

  // Function to handle smooth scrolling to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 56;
      const offset = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Disclosure
      as="nav"
      className={`fixed z-10 w-full ${backgroundColor} border-b-[0.01em] border-white transition-all duration-300`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-14 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    href="/"
                    className={`h-auto w-auto font-bold ${textColor}`}
                  >
                    P.K Balakrishnan
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 scroll-smooth">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={`#${item.href}`}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default link behavior
                          scrollToSection(item.href);
                        }}
                        className={classNames(
                          item.href === currentPath
                            ? 'bg-gold text-white'
                            : `${textColor} hover:bg-gray-700 hover:text-white`,
                          'rounded-md px-3 py-2 text-sm font-bold',
                        )}
                        aria-current={
                          item.href === currentPath ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  target="_blank"
                  href="https://dcbookstore.com/authors/p.-k.-balakrishnan"
                  className="relative p-1 font-bold text-gray-100"
                >
                  {/* <span className="absolute -inset-1.5" /> */}
                  <span className={`h-6 w-6 ${textColor} hover:text-white`}>
                    Buy Books
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === currentPath
                      ? 'cursor-auto bg-dark text-white'
                      : 'text-gray-100 hover:bg-dark',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.href === currentPath ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
