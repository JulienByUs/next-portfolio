import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as React from 'react';
import { useEffect, useState } from 'react';

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

export default function HomePage() {

  const featuredPost = {
    id: 1,
    title: 'We’re incredibly proud to announce we have secured $75m in Series B',
    href: '#',
    description:
        'Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      href: '#',
      imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }
  const posts = [
    {
      id: 2,
      title: 'Boost your conversion rate',
      href: '#',
      description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-16',
      author: {
        name: 'Lindsay Walton',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 3,
      title: 'Boost your conversion rate',
      href: '#',
      description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-16',
      author: {
        name: 'Lindsay Walton',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
  ]

  interface Article {
    id: number;
    title: string;
    body_one: string;
    body_two: string;
    body_three: string;
    body_one_title: string;
    body_two_title: string;
    body_three_title: string;
    key_one: string;
    key_two: string;
    key_three: string;
    description: string;
    image: string;
    hero: string;
    published_at: string;
  }

  const [article, setProject] = useState<Article | null>(null);


  useEffect(() => {
    fetch('https://julien-api.byus.dev/api/articles')
        .then((response) => response.json())
        .then((data) => setProject(data));
  }, []);      //Listing

  useEffect(() => {
  //
  }, []);




  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className=''>
        {/* Hero section */}
        <div className="relative isolate">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-[#0E0B3D] sm:text-6xl">
                    Envie de suivre les dernières tendances du développement web ?
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Abonnez-vous à ma newsletter et recevez du contenu exclusif directement dans votre boîte mail ! Ne manquez pas cette occasion - inscrivez-vous dès maintenant !
                  </p>

                  <form className="mt-10 flex max-w-md gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                      Votre précieux email
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#171531]/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                        placeholder="Votre précieux email (promis pas de spam)"
                    />
                    <button
                        type="submit"
                        className="bg-[#171531] flex-none rounded-md px-3.5 py-2.5 text-sm text-white  hover:bg-[#171531]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Me notifier
                    </button>
                  </form>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                          src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                          src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                          src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



          {/* Articles section */}
          <div className='mx-auto mt-20 max-w-7xl px-6 sm:mt-20 lg:px-8'>
            <div className="max-w-7xl px-6 lg:px-8 py-6 lg:py-8">
            <h2>Articles récents</h2>
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
              {articles.slice(0, 3).map((article) => (
              <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
                  <img
                      src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1152&amp;h=842&amp;q=80"
                      alt=""
                      className="aspect-[7/5] w-full max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                <time dateTime={featuredPost.datetime} className="block text-sm leading-6 text-gray-600 mt-2">
                  {featuredPost.date}
                </time>
                <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {article.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-gray-600">{featuredPost.description}</p>
                <div className="relative mt-4 flex items-center gap-x-4">
                         <span className="inline-flex items-center gap-x-1.5 rounded-lg px-2 py-1 text-xs font-medium text-[#0E0B3D] ring-1 ring-inset ring-[#0E0B3D]">
                          Design
                        </span>
                  <span className="inline-flex items-center gap-x-1.5 rounded-lg px-2 py-1 text-xs font-medium text-[#0E0B3D] ring-1 ring-inset ring-[#0E0B3D]">
                          Research
                        </span>
                </div>
                <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                  <div className="flex">
                    <a
                        href={featuredPost.href}
                        className="text-sm font-semibold leading-6 text-indigo-600"
                        aria-describedby="featured-post"
                    >
                      Consulter <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </article>
              ))}
              <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
                <div className="-my-12 divide-y divide-gray-900/10">
                  {posts.map((post) => (
                      <article key={post.id} className="py-10">
                        <div className="group relative max-w-xl">
                          <time dateTime={post.datetime} className="block text-sm leading-6 text-gray-600">
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
              </div>
            </div>
          </div>

        </section>
      </main>
    </Layout>
  );
}