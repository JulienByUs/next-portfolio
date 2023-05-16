import * as React from 'react';
import UnstyledLink from "@/components/links/UnstyledLink";
import Fav from "~/svg/Fav.svg";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-white mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <p className="text-sm leading-6 text-gray-600">Tous les droits sont réservés © Julien Estanis (JJDE) ${currentYear}.</p>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <nav>
            <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
              <Fav className='text-3xl' />
            </UnstyledLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
