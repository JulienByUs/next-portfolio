import * as React from 'react';
import UnstyledLink from "@/components/links/UnstyledLink";
import Fav from "~/svg/Fav.svg";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-white mt-10 md:mt-20">
      <div className="flex justify-center items-center flex-col md:flex-row mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="order-2 md:order-1 text-center space-x-6 md:order-2">
          <p className="text-sm leading-6 text-gray-600">Tous les droits sont réservés © Julien Estanis (JJDE)  {currentYear}.</p>
        </div>
        <div className="order-1 md:order-2 mt-8 mb-3 m:dmb-0 md:order-1 md:mt-0">
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
