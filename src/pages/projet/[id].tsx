import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

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
    thumbnail: string;
  }

  const [project, setProject] = useState<Project | null>(null);
  const router = useRouter();
  const { id } = router.query;

  //GSAP
  useEffect(() => {
    const element1 = document.querySelector('.about-project .text-4xl');
    const element2 = document.querySelector('.about-project .text-2sm');
    const element3 = document.querySelector('.about-project img');
    const element4 = document.querySelector('.ring-img-g');

    const element5 = document.querySelector('.role');
    const element6 = document.querySelector('.ring-img-g');
    const element7 = document.querySelector('.project-role');

    const element8 = document.querySelector('.overview');
    const element9 = document.querySelector('.project-overview');

    const element10 = document.querySelector('.close-up');
    const element11 = document.querySelector('.project-text-close');
    const element12 = document.querySelector('.project-img-close');


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
        element3,
        {x: 50, alpha: 0},
        {x: 0, alpha: 1, duration: 1, delay: 2}
    );

    gsap.fromTo(
        element4,
        {y: 50, alpha: 0},
        {y: 0, alpha: 1, duration: 1, delay: 3}
    );

    const animation = gsap.fromTo(
        element5,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 }
    );

    // Use ScrollTrigger to create a trigger for each element
    ScrollTrigger.create({
      trigger: element6,
      animation: animation,
      start: 'bottom 80%',
      end: '105% 100%'
    });

    const animation2 = gsap.fromTo(
        element7,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1 }
    );

    // Use ScrollTrigger to create a trigger for each element
    ScrollTrigger.create({
      trigger: element6,
      animation: animation2,
      start: 'bottom 80%',
      end: '105% 100%'
    });

    const animation3 = gsap.fromTo(
        element8,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 }
    );

    // Use ScrollTrigger to create a trigger for each element
    ScrollTrigger.create({
      trigger: element7,
      animation: animation3,
      start: 'bottom 80%',
      end: '105% 100%'
    });


    const animation4 = gsap.fromTo(
        element9,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
    );

    // Use ScrollTrigger to create a trigger for each element
    ScrollTrigger.create({
      trigger: element8,
      animation: animation4,
      start: '50% 80%',
      end: '120% 100%'
    });


    const animation5 = gsap.fromTo(
        element10,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 }
    );

    // Use ScrollTrigger to create a trigger for each element
    ScrollTrigger.create({
      trigger: element9,
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


  }, []);



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
    router.push(`/project/${previousId}`);
  };

  const handleNextClick = () => {
    const nextId = Number(id) + 1;
    router.push(`/project/${nextId}`);
  };

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
        description="
                Découvrez mes réalisations dans le domaine du développement web et du design graphique. Sur cette page, vous pourrez explorer une variété de projets qui démontrent mon savoir-faire et mes compétences. J'ai travaillé avec divers clients pour créer des sites web, des applications et des designs graphiques personnalisés. Consultez ma page de projets pour en savoir plus sur mon travail et mes compétences.
                "
      />

      <main className='isolate'>
        <section className='bg-white'>
          <div>
            <div className='py-24 sm:py-32'>
              <div className='about-project layout px-6 lg:px-8'>
                {project && (
                  <div>
                    <div className='grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2'>
                      <div>
                        <h1 className='text-4xl font-bold leading-10 tracking-tight text-[#0E0B3D] sm:text-3xl'>
                          {project.catchphrase}
                        </h1>
                        <p className='leading-6 text-2sm mt-5 font-light tracking-tight text-[#212121] leading-6 md:text-sm'>
                          {project.description}
                        </p>
                      </div>
                      <Image
                        className='col-span-2 w-full object-contain lg:col-span-1'
                        src={`https://julien-api.byus.dev/static/projects/${project.id}/${project.logoUrl}`}
                        alt='logo'
                        width={316}
                        height={96}
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
                className='ring-img-g my-20 ring-1 ring-gray-900/10 md:my-44'
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
                    <h3 className='overview mb-10 text-3xl font-bold tracking-tight text-[#0E0B3D] sm:text-4xl'>
                      Overview
                    </h3>
                    <Image
                        src={`https://julien-api.byus.dev/static/projects/${project.id}/${project.thumbnail}`}
                      alt='App screenshot'
                      width={2432}
                      height={600}
                      className='project-overview ring-1 ring-gray-900/10'
                    />
                  </div>
                  <div className='my-20 md:my-44'>
                    <h3 className='close-up mb-5 text-3xl font-bold tracking-tight text-[#0E0B3D] sm:text-4xl'>
                      Close up look
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
                          Previous
                        </button>
                      </div>

                      <div className='-mt-px flex w-0 flex-1 justify-end'>
                        <button
                          onClick={handleNextClick}
                          className='inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-[#1463FF] hover:text-[#00AB6D]'
                        >
                          Next
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
