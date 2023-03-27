import * as React from 'react';
import { useEffect} from 'react';
import { gsap } from 'gsap';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/projets', label: 'Projets' },
  { href: 'https://www.blog.julienestanis.fr/', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

import Fav from '~/svg/Fav.svg';

export default function Header() {

  useEffect(() => {
    const secondPath = document.querySelector("path:nth-child(2)");
    const header1 = document.querySelector("header nav:nth-child(1)");
    const header2 = document.querySelector("header nav:nth-child(2)");
    const header3 = document.querySelector("header nav:nth-child(3)");

    gsap.fromTo(
        header1,
        {x: -55},
        {x: 0, duration: 1, ease: 'power4.ease'}
    );

    gsap.fromTo(
        header2,
        {y: -55},
        {y: 0, duration: 1, ease: 'power4.ease'}
    );

    gsap.fromTo(
        header3,
        {x: 55},
        {x: 0, duration: 1, ease: 'power4.ease'}
    );

    setTimeout(() => {
      gsap.to(secondPath, {opacity: 0, duration: 2, repeat: -1, delay: 2, ease: "easeOut"});
    }, 2000)

  }, []);
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='layout flex h-14 items-center justify-between'>
        <nav>
          <UnstyledLink
              href="/projets"
              className='fheWxZ hover:text-gray-600'
          >
            Projets
          </UnstyledLink>
        </nav>
        <nav>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <Fav className='text-3xl' />
        </UnstyledLink>
        </nav>
        <nav>
          <UnstyledLink
              href="https://www.blog.julienestanis.fr/"
              className='fheWxZ hover:text-gray-600'
          >
            Blog
          </UnstyledLink>
        </nav>
      </div>
    </header>
  );
}
