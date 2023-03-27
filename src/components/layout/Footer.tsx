import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

const currentYear = new Date().getFullYear();

const companyName = `© ${currentYear} JJDE, Inc. Tous les droits sont réservés.`;

const footerLinks = {
  items: [
    { name: 'Julien Estanis' },
    { name: 'estanisj@outlook.fr' },
    { name: 'Based in Paris' },
    { name: companyName },
  ],
};

export default function Footer() {
  return (
    <footer
      className='relative z-10 mt-[-100px]'
      aria-labelledby='footer-heading'
    >
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Travaillons
            </h2>
            <h2 className='text-3xl font-bold tracking-tight text-[#1463FF] sm:text-4xl'>
              Ensemble <span className='text-white text-3xl font-bold tracking-tight text-[#1463FF] sm:text-4xl' >?</span>
            </h2>
          </div>
          <div className='mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  Contactez-moi
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {footerLinks.items.map((item) => (
                    <li key={item.name}>
                      <p className='text-sm leading-6 text-gray-300 hover:text-white'>
                        {item.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  Prêt ?
                </h3>
                <ul className='mt-6 space-y-4'>
                  <p className='text-sm leading-6 text-gray-300 hover:text-white'>
                    Réservez une consultation avec moi, expert en conception et
                    développement de sites web, pour créer un site web
                    professionnel et attractif qui mettra en valeur votre
                    entreprise et vous démarquera de la concurrence.
                  </p>
                  <li key=''>
                    <UnderlineLink
                      href=''
                      className='text-sm leading-6 text-white font-bold'
                    >
                      Programmer un appel ici
                    </UnderlineLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
