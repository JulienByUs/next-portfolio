import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
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

export default function Articles() {

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

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://julien-api.byus.dev/api/articles')
        .then((response) => response.json())
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
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Articles</h2>
              <p className="mt-2 text-base md:text-lg leading-8 text-gray-600">
                Découvrez ma collection d'articles captivants sur le développement web. Explorez des sujets passionnants, des conseils pratiques et des astuces pour renforcer vos compétences et rester à la pointe de l'industrie. Plongez dans le monde fascinant du développement web avec mes articles soigneusement sélectionnés.
              </p>
            </div>
            <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-5 md:pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {articles.map((article) => (
                  <article key={article.id} className="py-10">
                    <div className="group relative max-w-xl">
                      <img
                          src={`https://julien-api.byus.dev/static/blog/${article.id}/${article.image}`}
                          alt=""
                          className="aspect-[7/5] w-full max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                      <time dateTime={article.published_at} className="block text-sm leading-6 text-gray-600 mt-2">
                        {article.published_at}
                      </time>
                      <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                        <a className="leading-5" href={`/article/${article.slug}`}>
                          <span className="absolute inset-0" />
                          {article.title}
                        </a>
                      </h2>
                      <p className="mt-4 text-sm leading-6 text-gray-600">{article.description}</p>
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

            <nav className="hidden flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
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
