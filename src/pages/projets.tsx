import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';

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
  }, []);

  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'Boost your conversion rate',
      href: '#',
      description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
  ]




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
          <div className="mx-auto max-w-7xl px-6 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Articles</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                  <article key={post.id} className="py-10">
                    <div className="group relative max-w-xl">
                      <img
                          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1152&amp;h=842&amp;q=80"
                          alt=""
                          className="aspect-[7/5] w-full max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                      <time dateTime={post.datetime} className="block text-sm leading-6 text-gray-600 mt-2">
                        {post.date}
                      </time>
                      <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h2>
                      <p className="mt-4 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                    <div className="mt-4 flex">
                      <div className="relative mt-4 flex items-center gap-x-4">
                         <span className="inline-flex items-center gap-x-1.5 rounded-lg px-2 py-1 text-xs font-medium text-[#0E0B3D] ring-1 ring-inset ring-[#0E0B3D]">
                          Design
                        </span>
                        <span className="inline-flex items-center gap-x-1.5 rounded-lg px-2 py-1 text-xs font-medium text-[#0E0B3D] ring-1 ring-inset ring-[#0E0B3D]">
                          Research
                        </span>
                      </div>
                    </div>
                  </article>
              ))}
            </div>

            <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
              <div className="-mt-px flex w-0 flex-1">
                <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Previous
                </a>
              </div>
              <div className="hidden md:-mt-px md:flex">
                <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  1
                </a>
                {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
                <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
                    aria-current="page"
                >
                  2
                </a>
                <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  3
                </a>
                <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
          ...
        </span>
                <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  8
                </a>
                <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  9
                </a>
                <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  10
                </a>
              </div>
              <div className="-mt-px flex w-0 flex-1 justify-end">
                <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Next
                  <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </a>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}
