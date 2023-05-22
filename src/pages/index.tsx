import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';

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
    slug: string;
  }

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('https://julien-api.byus.dev/api/articles')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch articles');
          }
          return response.json();
        })
        .then((data) => {
          // Format the published_at date in French for each article
          const formattedArticles = data.map((article) => {
            const formattedDate = format(new Date(article.published_at), 'dd MMMM, yyyy', { locale: fr });
            return { ...article, published_at: formattedDate };
          });

          // Update the articles state with the formatted dates
          setArticles(formattedArticles);
        });
  }, []);


  useEffect(() => {
    const heroh = document.querySelector('.hero-card-el h1');
    const herop = document.querySelector('.hero-card-el p');
    const heroform = document.querySelector('.hero-card-el form');
    const home1 = document.querySelector("#home1");
    const home2 = document.querySelector("#home2");
    const home3 = document.querySelector("#home3");
    const home4 = document.querySelector("#home4");
    const home5 = document.querySelector("#home5");

    gsap.to(heroh, {opacity: 1, y: 0, duration: 2, delay: .5, ease: "power4.out"});
    gsap.to(herop, {opacity: 1, y: 0, duration: 2, delay: 2, ease: "power4.out"});
    gsap.to(heroform, {opacity: 1, y: 0, duration: 2, delay: 3, ease: "power4.out"});

    gsap.to(home1, {opacity: 1, duration: 2, delay: 1, ease: "power4.out"});
    gsap.to(home2, {opacity: 1, duration: 2, delay: 2, ease: "power4.out"});
    gsap.to(home3, {opacity: 1, duration: 2, delay: 4, ease: "power4.out"});
    gsap.to(home4, {opacity: 1, duration: 2, delay: 3, ease: "power4.out"});
    gsap.to(home5, {opacity: 1, duration: 2, delay: 5, ease: "power4.out"});

  }, []);


  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef<HTMLInputElement | null>(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();


    if (!inputEl.current) {
      return; // Add a null check to handle the case when inputEl.current is null
    }

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);
      setMessage('Succès! 🎉 Vous êtes maintenant inscrit à la newsletter');
      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Succès! 🎉 Vous êtes maintenant inscrit à la newsletter');
  };


  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className=''>
        {/* Hero section */}
        <div className="relative isolate">
          <div className="overflow-hidden">
            <div className="hero-card-el mx-auto max-w-7xl px-6 pb-20 md:pb-32 pt-20 md:pt-36 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-[#0E0B3D] sm:text-6xl">
                    Envie de suivre les dernières tendances du développement web ?
                  </h1>
                  <p className="relative mt-6 text-base md:text-lg leading-6 md:leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Abonnez-vous à ma newsletter et recevez du contenu exclusif directement dans votre boîte mail ! Ne manquez pas cette occasion - inscrivez-vous dès maintenant !
                  </p>

                  <form className="my-6 flex max-w-md gap-x-1" onSubmit={subscribe}>
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
                        ref={inputEl}
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
                  <div id="home1" className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                          src="/images/home1.png"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div id="home2" className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                          src="/images/home2.png"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div id="home3" className="relative">
                      <img
                          src="/images/home3.png"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div id="home4" className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                          src="/images/home4.png"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div id="home5" className="relative">
                      <img
                          src="/images/home5.png"
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
            <div className="max-w-7xl px-6 lg:px-8 pb-10 lg:pb-12">
            <h2 className="text-4xl font-bold tracking-tight text-[#0E0B3D] sm:text-6xl">Articles récents</h2>
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
              {articles.map((article) => (
              <article key={articles[0].id} className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
                  <img
                      src={`https://julien-api.byus.dev/static/blog/${article.id}/${article.image}`}
                      alt=""
                      className="aspect-[7/5] w-full max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                <time dateTime={article.published_at} className="block text-sm leading-6 text-gray-600 mt-2">
                  {article.published_at}
                </time>
                {article.title.length > 33 ? (
                    <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {`${article.title.slice(0, 33)}...`}
                    </h2>
                ) : (
                    <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {article.title}
                    </h2>
                )}
                <p className="mt-4 text-sm leading-6 text-gray-600">{article.description}</p>
                <div className="relative mt-4 flex items-center gap-x-4">
                         <span className="inline-flex items-center gap-x-1.5 rounded-lg px-2 py-1 text-xs font-medium text-[#0E0B3D] ring-1 ring-inset ring-[#0E0B3D]">
                          Web
                        </span>
                  <span className="inline-flex items-center gap-x-1.5 rounded-lg px-2 py-1 text-xs font-medium text-[#0E0B3D] ring-1 ring-inset ring-[#0E0B3D]">
                          Digital
                        </span>
                </div>
                <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                  <div className="flex">
                    <a
                        href={`/article/${article.slug}`}
                        className="text-sm font-semibold leading-6 text-indigo-600"
                        aria-describedby="featured-post"
                    >
                      Consulter <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </article>
              ))}
            </div>
          </div>

        </section>
      </main>
    </Layout>
  );
}