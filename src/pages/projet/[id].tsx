import { Spinner } from '@chakra-ui/react';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import UnderlineLink from "@/components/links/UnderlineLink";

gsap.registerPlugin(ScrollTrigger);

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function SingleProjet() {
  interface Project {
    id: number;
    title: string;
    description: string;
    catchphrase: string;
    heroUrl: string;
    logoUrl: string;
    length: number;
    role: string;
    closeDescription: string;
    overviewUrl: string;
    url: string;
  }

  const [project, setProject] = useState<Project | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    fetch(`https://julien-api.byus.dev/api/projects/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Project not found: ${id}`);
          }
          return response.json();
        })
        .then((data) => setProject(data))
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
          router.push('/404');
        });
  }, [id, router]);

  useEffect(() => {
    if (!id || !project || project.length === 0) return;
    document.title = `Julien Estanis | ${project.title} | Paris`;
  }, [id, project]);

  const handlePreviousClick = () => {
    const previousId = Number(id) - 1;
    router.push(`/projet/${previousId}`);
  };

  const handleNextClick = () => {
    const nextId = Number(id) + 1;
    router.push(`/projet/${nextId}`);
  };

  //GSAP
  useEffect(() => {
    const element1 = document.querySelector('.about-project .text-4xl');
    const element2 = document.querySelector('.about-project .text-2sm');
    const element3 = document.querySelector('.img-project-logo');
    const element4 = document.querySelector('.hero-img');

    const element5 = document.querySelector('.role');
    const element7 = document.querySelector('.project-role');

    const element10 = document.querySelector('.close-up');
    const element11 = document.querySelector('.project-text-close');
    const element12 = document.querySelector('.project-img-close');

    const element13 = document.querySelector('.about-project .visit-link');


    gsap.fromTo(
        element1,
        {x: -50, alpha: 0},
        {x: 0, alpha: 1, duration: 1}
    );

    gsap.fromTo(
        element2,
        {x: -50, alpha: 0},
        {x: 0, alpha: 1, duration: 1, delay: 1}
    );

    gsap.fromTo(
        element13,
        {x: -50, alpha: 0},
        {x: 0, alpha: 1, duration: 1, delay: 2}
    );


    gsap.fromTo(
        element3,
        {x: 50, alpha: 0},
        {x: 0, alpha: 1, duration: 1, delay: 3}
    );


    gsap.fromTo(
        element4,
        {y: 100, alpha: 0},
        {y: 0, alpha: 1, duration: 1, delay: 4}
    );

    const animation = gsap.fromTo(
        element5,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 }
    );

    // Use ScrollTrigger to create a trigger for each element
    ScrollTrigger.create({
      trigger: element4,
      animation: animation,
      start: 'top top',
      end: '100% 100%'
    });

    const animation2 = gsap.fromTo(
        element7,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1 }
    );

    // Use ScrollTrigger to create a trigger for each element
    ScrollTrigger.create({
      trigger: element4,
      animation: animation2,
      start: 'top top',
      end: '100% 100%',
    });

    const animation5 = gsap.fromTo(
        element10,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 }
    );

    // Use ScrollTrigger to create a trigger for each element
    ScrollTrigger.create({
      trigger: element7,
      animation: animation5,
      start: 'bottom 80%',
      end: '105% 100%'
    });


    const animation6 = gsap.fromTo(
        element12,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
    );

    // Use ScrollTrigger to create a trigger for each element
    ScrollTrigger.create({
      trigger: element11,
      animation: animation6,
      start: '55% 80%',
      end: '120% 100%'
    });

    const animation7 = gsap.fromTo(
        element11,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
    );

    // Use ScrollTrigger to create a trigger for each element
    ScrollTrigger.create({
      trigger: element10,
      animation: animation7,
      start: '50% 80%',
      end: '120% 100%'
    });


  }, [project]);

  if (!project) {
    return (
        <main className='isolate'>
          <div className='relative'>
            <Spinner />
          </div>
        </main>
    );
  }

  return (
    <Layout>
      <Seo
        templateTitle='Projets'
        description={project.description}
      />

      <main className='isolate'>
        <section className='bg-white'>
          <div>
            <div className='py-24 sm:py-32'>
              <div className='about-project layout px-6 lg:px-8'>
                {project && (
                  <div>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                      <div className="w-full md:w-[50%]">
                        <h1 className='text-4xl font-bold leading-10 tracking-tight text-[#0E0B3D] sm:text-3xl'>
                          {project.catchphrase}
                        </h1>
                        <p className='leading-6 text-2sm mt-5 font-light tracking-tight text-[#212121] leading-6 md:text-sm'>
                          {project.description}
                        </p>
                        <UnderlineLink
                            href={project.url}
                            className='text-sm leading-6 text-[#0E0B3D] font-bold visit-link'
                        >
                          Visiter le site
                        </UnderlineLink>
                      </div>
                      <Image
                        className='img-project-logo col-span-2 w-[150px] object-contain lg:col-span-1'
                        src={`https://julien-api.byus.dev/static/projects/${project.id}/${project.logoUrl}`}
                        alt='logo'
                        width={150}
                        height={150}
                      />
                    </div>
                  </div>
                )}
              </div>
              <Image
                  src={`https://julien-api.byus.dev/static/projects/${project.id}/${project.heroUrl}`}
                alt='App screenshot'
                width={2432}
                height={600}
                className='my-20 md:my-44 hero-img'
              />
              <div className='layout px-6 lg:px-8'>
                <div className='text-left'>
                  <div className='grid grid-cols-1 items-center items-baseline gap-x-8 sm:gap-y-0 lg:grid-cols-2 lg:gap-y-16'>
                    <div>
                      <h2 className='role text-3xl font-bold tracking-tight text-[#0E0B3D] sm:text-4xl'>
                        Role
                      </h2>
                    </div>
                    <p className='text-2sm project-role mt-5 font-light tracking-tight text-[#212121] leading-6 md:text-sm'>
                      {project.role}
                    </p>
                  </div>

                  <div className='my-20 md:my-44'>
                    <h3 className='close-up mb-5 text-3xl font-bold tracking-tight text-[#0E0B3D] sm:text-4xl'>
                      Détails
                    </h3>
                    <p className='project-text-close text-2sm my-5 font-light tracking-tight text-[#212121] leading-6 md:text-sm'>
                      {project.closeDescription}
                    </p>
                    <Image
                        src={`https://julien-api.byus.dev/static/projects/${project.id}/${project.overviewUrl}`}
                      alt='App screenshot'
                      width={2432}
                      height={600}
                      className='project-img-close ring-1 ring-gray-900/10'
                    />
                  </div>

                  <div>
                    <nav className='my-20 flex items-center justify-between px-4 sm:px-0 md:my-10'>
                      <div className='-mt-px flex w-0 flex-1'>
                        <button
                          onClick={handlePreviousClick}
                          disabled={Number(id) === 1}
                          className='inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-[#1463FF] hover:text-[#1463FF]'
                        >
                          <ArrowLongLeftIcon
                            className='mr-3 h-5 w-5 hover:text-[#1463FF]'
                            aria-hidden='true'
                          />
                          Précédent
                        </button>
                      </div>

                      <div className='-mt-px flex w-0 flex-1 justify-end'>
                        <button
                          onClick={handleNextClick}
                          className='inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-[#1463FF] hover:text-[#00AB6D]'
                        >
                          Suivant
                          <ArrowLongRightIcon
                            className='ml-3 h-5 w-5 hover:text-[#1463FF]'
                            aria-hidden='true'
                          />
                        </button>
                      </div>
                    </nav>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
