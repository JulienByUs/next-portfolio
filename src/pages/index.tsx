import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useState } from 'react';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ChakraProvider } from '@chakra-ui/react';
import { Tabs } from "@chakra-ui/react";
import { TabList } from "@chakra-ui/react";
import { TabPanels } from "@chakra-ui/react";
import { TabPanel } from "@chakra-ui/react";
import { Tab } from "@chakra-ui/react";
import {
  Box,
  Text,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';


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

export default function HomePage() {
  useEffect(() => {

    const element1 = document.querySelector('.catchphrase .pb-2 div');
    const element2 = document.querySelector('.description-main .pb-2 div');
    const element3 = document.querySelector('.title-main .pb-2');
    const element4 = document.querySelector(".w-screen .absolute");
    const element0202 = document.querySelector(".css-1uw5bnh");
    const two = document.querySelector("#two");
    const feature = document.querySelector(".feature");
    const parent = document.querySelector(".parent");


    const featureAnimation = gsap.fromTo(
        feature,
        { alpha: 0, y: 50 },
        { alpha: 1, y: 0, duration: 1, ease: 'power1.out' }
    );

    const parentAnimation = gsap.fromTo(
        parent,
        { alpha: 0, y: 50 },
        { alpha: 1, y: 0, duration: 1, ease: 'power1.out' }
    );

    const timeline = gsap.timeline();

    timeline
        .add(featureAnimation)
        .add(parentAnimation, '-=0.5');

    ScrollTrigger.create({
      trigger: feature,
      animation: timeline,
      start: '-100% 80%',
      end: '100% 100%',
      toggleActions: 'play none none reverse'
    });


    const article = document.querySelector(".articles");

    const articlez = document.querySelector(".articlez");

    const featureAnimationz = gsap.fromTo(
        article,
        { alpha: 0, y: 50 },
        { alpha: 1, y: 0, duration: 1, ease: 'power1.out' }
    );

    const parentAnimationz = gsap.fromTo(
        articlez,
        { alpha: 0, y: 50 },
        { alpha: 1, y: 0, duration: 1, ease: 'power1.out' }
    );

    const timelinez = gsap.timeline();

    timelinez
        .add(featureAnimationz)
        .add(parentAnimationz, '-=0.5');

    ScrollTrigger.create({
      trigger: article,
      animation: timelinez,
      start: '-100% 80%',
      end: '100% 100%',
      toggleActions: 'play none none reverse'
    });

    gsap.fromTo(
        two,
        {rotate: "10deg", opacity: 0},
        {rotate: "0deg", opacity: 1, duration: 1, delay: 3, ease: 'power1.out'}
    );

    gsap.fromTo(
        element1,
        {y: 80},
        {y: 0, duration: 1, ease: 'power1.out'}
    );

    gsap.fromTo(
        element2,
        {y: "105%"},
        {y: 0, duration: 1.5, delay: 2, ease: 'power1.out'}
    );

    gsap.fromTo(
        element3,
        {y: "105%"},
        {y: 0, duration: 1.5, delay: 1, ease: 'power1.out'}
    );

    gsap.fromTo(
        element4,
        {x: 200, alpha: 0},
        {x: 0, alpha: 1, duration: 1, delay: 3, ease: 'power1.out'}
    );

    gsap.fromTo(
        element0202,
        {y: 30, alpha: 0},
        {y: 0, alpha: 1, duration: .5, delay: 2.5, ease: 'power1.out', yoyo: true}
    );

      gsap.fromTo(
          '.css-1ss3utg',
          {x: 100, alpha: 0},
          {x: 0, alpha: 1, duration: 1, delay: 3, ease: 'power1.out', stagger: 0.2}
      );

      gsap.fromTo(
          '.css-8atqhb',
          {y: 100, alpha: 0},
          {y: 0, alpha: 1, duration: 1, delay: 3.5, ease: 'power1.out', stagger: 0.2}
      );

    let currentPosition = 0;
    const lent = document.querySelectorAll(".child-project").length - 1;
    let clickCounterNext = 0;

    function animateElements(direction) {
      const targets = document.querySelectorAll('.child-project');
      const target = document.querySelector('.child-project');

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

    // Blog

    let currentPositionBlog = 0;
    const lentBlog = document.querySelectorAll(".child-blog").length - 1;
    let clickCounterNextB = 0;

    function animateElements(directionB) {
      const targetsB = document.querySelectorAll('.child-blog');
      const targetB = document.querySelector('.child-blog');

      let distanceB = targetB.offsetWidth;

      if (directionB === 'right') {
        distanceB = -distanceB;
      }

      gsap.fromTo(
          targetsB,
          { x: currentPositionBlog },
          { x: "-=" + distanceB, duration: 1, ease: 'power1.out', stagger: 0.2 }
      );

      currentPosition -= distanceB;

      if (directionB === 'left') {
        clickCounterNextB++;
      } else {
        clickCounterNextB--;
      }

    }

    const leftButtonB = document.querySelector('.slide-to-left-blog');
    const rightButtonB = document.querySelector('.slide-to-right-blog');

    leftButtonB.addEventListener('click', () => {
      console.log('left');
      if (clickCounterNextB < lentBlog) {
        animateElements('left');
      }
    });

    rightButtonB.addEventListener('click', () => {
      console.log('right');
      if (clickCounterNextB > 0) {
        animateElements('right');
      }
    });

  }, []); // add empty dependency array here




  interface Project {
    id: number;
    title: string;
    image: string;
    description: string;
    thumbnail: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('https://julien-api.byus.dev/api/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col py-12 text-center'>
            <div className='py-12 sm:py-20'>
              <div className='mx-auto max-w-7xl lg:px-8'>
                <div className='mx-auto max-w-2xl text-center lg:max-w-4xl'>
                  <p className='catchphrase overflow-hidden text-sm leading-10 text-gray-600'>
                    <div className='overflow-hidden pb-2'>
                      <div className='leading-6'>
                        Avec mon aide, vos idées prendront vie et se
                        concrétiseront en des projets réels et fonctionnels.
                      </div>
                    </div>

                  </p>
                  <h1 className='title-main overflow-hidden font-bold leading-10 tracking-tight text-[#212121] sm:text-6xl mt-6'>
                    <div className='overflow-hidden pb-2 text-[#0E0B3D] text-[38px] text-md-[54px] leading-[45px] leading-md-[64px]'>
                      Obtenez un site internet <span className="sub-lighted text-[38px] text-md-[54px]">professionnel</span> et <span className="sub-lighted-bis text-[38px] text-md-[54px]">performant</span>
                    </div>
                  </h1>
                  <p className='description-main text-md mt-6 overflow-hidden leading-6 text-gray-600'>
                    <div className='pb-2'>
                      <div>
                        Je suis un webdesigner/développeur et directeur
                        artistique basé à Paris. Grâce à mon expertise solide,
                        j'ai aidé diverses entreprises à se démarquer avec des
                        sites web créatifs et performants.
                      </div>
                    </div>
                  </p>
                  <ChakraProvider>
                  <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                      <Box>
                        <Icon
                            as={Arrow}
                            color={useColorModeValue('gray.800', 'gray.300')}
                            w={71}
                            position={'absolute'}
                            right={-71}
                            top={'10px'}
                        />
                        <Text
                            fontSize={'lg'}
                            fontFamily={'Caveat'}
                            position={'absolute'}
                            right={'-125px'}
                            top={'-15px'}
                            transform={'rotate(40deg)'}>
                          Disponible 🤙
                        </Text>
                      </Box>
                      <Tab>Interview</Tab>
                      <Tab>Conception</Tab>
                      <Tab>Lancement</Tab>
                      <Tab>Support</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <p>
                          Je commence toujours par effectuer une consultation préliminaire pour comprendre les besoins, les objectifs et les préférences de mon client. Cela me permet de bien cerner leurs attentes et de concevoir un site Web qui répond à leurs besoins.
                        </p>
                        <p>
                          Enfin, je discute avec mon client des éléments de design ou des fonctionnalités spécifiques qu'ils souhaitent inclure sur leur site Web. Cette étape est cruciale pour m'assurer que je crée un site Web personnalisé qui répond à leurs attentes et qui est à leur image.
                        </p>
                      </TabPanel>
                      <TabPanel>
                        <p>
                          Je commence par élaborer un plan de projet en fonction des exigences spécifiques de mon client. Cela inclut de définir les jalons clés et les échéances pour m'assurer que le projet avance selon les attentes de mon client.
                        </p>
                        <p>
                          Ensuite, je crée des maquettes ou des prototypes pour illustrer la disposition, l'interface utilisateur et la conception globale du site Web. Cela permet à mon client de visualiser l'apparence et le fonctionnement du site avant qu'il ne soit construit, et de suggérer des modifications si nécessaire.
                        </p>
                      </TabPanel>
                      <TabPanel>
                        <p>
                          Après la phase de développement, je teste minutieusement le site Web pour identifier les éventuels bugs ou problèmes. Si des problèmes sont identifiés, je les corrige immédiatement pour m'assurer que le site Web fonctionne correctement.
                        </p>
                        <p>
                          Une fois que le site est entièrement développé et testé, je le lance en le transférant sur le domaine et le fournisseur d'hébergement du client. Je veille à ce que le site soit correctement indexé par les moteurs de recherche pour qu'il soit facilement accessible aux utilisateurs. Enfin, je m'assure que mon client est satisfait du site Web et qu'il répond à toutes leurs attentes.
                        </p>
                      </TabPanel>
                      <TabPanel>
                        <p>
                          Après le lancement du site Web, j'offre une période de soutien pour aider mon client à résoudre tout problème technique ou préoccupation qui pourrait survenir. Je suis disponible pour répondre aux questions et fournir une assistance technique pour m'assurer que le site Web fonctionne correctement.
                        </p>
                        <p>
                          Je surveille régulièrement les performances du site Web en analysant les métriques telles que le temps de chargement des pages, le taux de rebond, et le nombre de visiteurs pour fournir des recommandations pour des améliorations. Je travaille en étroite collaboration avec mon client pour m'assurer que le site Web continue de répondre à leurs besoins et reste performant au fil du temps.
                        </p>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                  </ChakraProvider>
                </div>
              </div>

            </div>
          </div>

          {/* Feature section */}
          <div className='feature mx-auto mt-20 max-w-7xl px-6 sm:mt-20 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:max-w-4xl'>
              <h2 className='hidden text-3xl font-bold tracking-tight text-[#212121] sm:hidden sm:text-4xl md:block lg:block'>
                Projets
              </h2>
              <h2 className='hidden text-3xl font-bold tracking-tight text-[#1463FF] sm:hidden sm:text-4xl md:block lg:block'>
                récent
              </h2>
              <h2
                className='text-3xl font-bold tracking-tight text-[#212121] sm:text-4xl md:hidden lg:hidden'
                data-aos='fade-up'
              >
                Projets récent
              </h2>
            </div>
            <div className="flex justify-end projects-navigation mx-auto max-w-2xl lg:max-w-4xl">
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

          {/* Projects section */}
          <div className='parent sm:my-13 lg:my-13 relative mt-3 mb-36 inline-flex parentProj'>
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className='child child-project z-20 inline-table w-screen px-6 text-[#212121]'
              >
                <div className='mx-auto max-w-2xl lg:max-w-4xl'>
                  <figure className='mt-6 md:mt-16'>
                    <h4 className='mb-2 mb-0 text-xl font-bold tracking-tight text-[#212121] md:text-3xl'>
                      {project.title}
                    </h4>
                    <div className='grid grid-flow-col grid-rows-1 gap-1'>
                      <figcaption className='mb-4 flex gap-x-2 text-xs leading-4 text-gray-500 md:text-sm md:leading-6'>
                        {project.description}
                      </figcaption>
                    </div>
                    <Link title={project.title} href={`/projet/${project.id}`}>
                      <Image
                          className='aspect-video rounded-xl bg-gray-50 object-cover'
                          src={`https://julien-api.byus.dev/static/projects/${project.id}/${project.thumbnail}`}
                          alt=''
                          width={2432}
                          height={600}
                          blurDataURL="data:..."
                          placeholder="blur"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
            ))}
          </div>

          {/* Feature section */}
          <div className='articles mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:max-w-4xl'>
              <h2 className='hidden text-3xl font-bold tracking-tight text-[#212121] sm:hidden sm:text-4xl md:block lg:block'>
                Articles
              </h2>
              <h2 className='hidden text-3xl font-bold tracking-tight text-[#1463FF] sm:hidden sm:text-4xl md:block lg:block'>
                récent
              </h2>
              <h2
                className='text-3xl font-bold tracking-tight text-[#212121] sm:text-4xl md:hidden lg:hidden'
                data-aos='fade-up'
              >
                Articles récent
              </h2>
            </div>
            <div className="flex justify-end projects-navigation mx-auto max-w-2xl lg:max-w-4xl">
              <ArrowLongLeftIcon
                  className='mr-3 h-5 w-5 hover:text-[#1463FF] slide-to-right-blog buttonzsn'
                  aria-hidden='true'
              />
              <ArrowLongRightIcon
                  className='ml-3 h-5 w-5 hover:text-[#1463FF] slide-to-left-blog buttonzsn'
                  aria-hidden='true'
              />
            </div>
          </div>

          {/* Blog section */}
          <div className='articlez parent sm:my-13 lg:my-13 relative mt-3 mb-52 inline-flex'>
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className='child child-blog z-20 inline-table w-screen px-6 text-[#212121]'
              >
                <div className='mx-auto max-w-2xl lg:max-w-4xl'>
                  <figure className='mt-6 md:mt-16'>
                    <p className='mb-2 mb-0 text-xl font-bold tracking-tight text-[#212121] md:text-3xl'>
                      {project.title}
                    </p>
                    <div className='grid grid-flow-col grid-rows-1 gap-1'>
                      <figcaption className='mb-4 flex gap-x-2 text-xs leading-4 text-gray-500 md:text-sm md:leading-6'>
                        {project.description}
                      </figcaption>
                    </div>
                    <Link title={project.title} href={`/project/${project.id}`}>
                      <Image
                          className='aspect-video rounded-xl bg-gray-50 object-cover'
                          src={`https://julien-api.byus.dev/static/projects/${project.id}/${project.thumbnail}`}
                          alt=''
                          width={2432}
                          height={600}
                          blurDataURL="data:..."
                          placeholder="blur"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
      <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
          fill="currentColor"
      />
  ),
});