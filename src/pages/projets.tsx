import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import {ArrowLongLeftIcon, ArrowLongRightIcon} from "@heroicons/react/20/solid";

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

export default function Projets() {

  interface Project {
    id: number;
    title: string;
    image: string;
    description: string;
    catchphrase: string;
    herourl: string;
    length: number;
    role: string;
    closeDescription: string;
    thumbnail: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('https://julien-api.byus.dev/api/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data));


    // Delay animation by 2 seconds
    setTimeout(() => {
      gsap.fromTo(
          '.first-class',
          {x: 100, alpha: 0},
          {x: 0, alpha: 1, duration: 1, delay: 0.5, ease: 'power1.out', stagger: 0.2}
      );
    }, 500);
/*
    const animation2 = gsap.fromTo(
        '.first-class',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1 }
    );

    // Use ScrollTrigger to create a trigger for each element
    ScrollTrigger.create({
      trigger: 'body',
      animation: animation2,
      start: 'bottom 80%',
      end: '105% 100%',
      toggleActions: 'play none none reverse'
    });
*/

    let currentPosition = 0;
    const lent = document.querySelectorAll(".first-class").length - 1;
    let clickCounterNext = 0;

    function animateElements(direction) {
      const targets = document.querySelectorAll('.first-class');
      const target = document.querySelector('.first-class');

      let distance = target.offsetWidth;

      if (direction === 'right') {
        distance = -distance;
      }

      gsap.fromTo(
          targets,
          { x: currentPosition },
          { x: "-=" + distance, duration: 1, ease: 'power1.out', stagger: 0.2 }
      );

      currentPosition -= distance;

      if (direction === 'left') {
        clickCounterNext++;
      } else {
        clickCounterNext--;
      }

    }

    const leftButton = document.querySelector('.slide-to-left');
    const rightButton = document.querySelector('.slide-to-right');

    leftButton.addEventListener('click', () => {
      console.log('left');
      if (clickCounterNext < lent) {
        animateElements('left');
      }
    });

    rightButton.addEventListener('click', () => {
      console.log('right');
      if (clickCounterNext > 0) {
        animateElements('right');
      }
    });

  }, []);


  return (
    <Layout>
      <Seo
        templateTitle='Projets'
        description="
        Découvrez mes réalisations dans le domaine du développement web et du design graphique. Sur cette page, vous pourrez explorer une variété de projets qui démontrent mon savoir-faire et mes compétences. J'ai travaillé avec divers clients pour créer des sites web, des applications et des designs graphiques personnalisés. Consultez ma page de projets pour en savoir plus sur mon travail et mes compétences.
        "
      />

      <main>
        <section className='bg-white'>

          <div className='layout relative flex flex-col py-6 text-center'>
            <div className='py-12 sm:py-20'>
              <div className='py-12 sm:py-12'>
                <div className='mx-auto max-w-7xl'>
                  <div className='mx-auto text-left'>
                    <h1 className='leading-10 tracking-tight text-[#212121] text-[38px] text-md-[54px]'>
                      Projets
                    </h1>
                  </div>
                  <div className="flex justify-end projects-navigation">
                    <ArrowLongLeftIcon
                        className='mr-3 h-5 w-5 hover:text-[#1463FF] slide-to-right buttonzsn'
                        aria-hidden='true'
                    />
                    <ArrowLongRightIcon
                        className='ml-3 h-5 w-5 hover:text-[#1463FF] slide-to-left buttonzsn'
                        aria-hidden='true'
                    />
                  </div>
                </div>
                <div className='mx-auto my-1 flow-root max-w-7xl sm:my-1'>
                  <div className='mx-auto text-left'>
                    <div className='parent sm:mt-13 lg:mt-13 relative mt-3 inline-flex justify-center overflow-hidden'>
                      {projects.map((project) => (
                        // eslint-disable-next-line react/jsx-key
                        <div key={project.id} className='opacity-0 first-class child z-20 mb-8 inline-table w-[100vw] px-6 text-[#212121] md:mb-0 md:w-[35vw] md:px-5'>
                          <div className='mx-auto'>
                            <figure className='mt-8 md:mt-16'>
                              <Link
                                title={project.title}
                                className=''
                                href={`/projet/${project.id}`}
                              >
                                <Image
                                  className='aspect-video rounded-xl bg-gray-50 object-cover'
                                  src={`https://julien-api.byus.dev/static/projects/${project.id}/${project.thumbnail}`}
                                  alt=''
                                  width={500}
                                  height={500}
                                  blurDataURL="data:..."
                                  placeholder="blur"
                                />
                              </Link>
                              <h4 className='my-2 text-3xl font-bold tracking-tight text-[#212121]'>
                                {project.title}
                              </h4>
                              <figcaption className='leading-2 mb-4 flex gap-x-2 text-sm text-gray-500 md:leading-6'>
                                {project.catchphrase}
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
