import {CheckCircleIcon, InformationCircleIcon} from '@heroicons/react/20/solid'
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import {useRouter} from 'next/router';
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';

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

export default function SingleArticle() {
    interface Article {
        id: number;
        title: string;
        body_one: string;
        body_two: string;
        body_three: string;
        body_four: string;
        body_five: string;
        body_six: string;
        body_seven: string;
        body_eight: string;
        body_nine: string;
        body_ten: string;
        body_twelve: string;
        body_thirteen: string;
        body_fourteen: string;
        body_fifteen: string;
        body_sixteen: string;
        body_seventeen: string;
        body_eighteen: string;
        body_one_title: string;
        body_two_title: string;
        body_three_title: string;
        body_four_title: string;
        body_five_title: string;
        body_six_title: string;
        body_seven_title: string;
        body_eight_title: string;
        body_nine_title: string;
        body_ten_title: string;
        body_twelve_title: string;
        body_thirteen_title: string;
        body_fourteen_title: string;
        body_fifteen_title: string;
        body_sixteen_title: string;
        body_seventeen_title: string;
        body_eighteen_title: string;
        description: string;
        image: string;
        hero: string;
        published_at: string;
    }

    const [article, setArticle] = useState<Article | null>(null);
    const router = useRouter();
    const {id} = router.query;
    const {slug} = router.query;

    // Assuming the slug is used to identify the article ID in the URL
    const currentArticleId = id ? id[0] : null;

    useEffect(() => {
        if (!slug) return;

        fetch(`https://julien-api.byus.dev/api/article/${slug}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Project not found: ${slug}`);
                }
                return response.json();
            })
            .then((data) => {
                // Format the published_at date in French
                const formattedDate = format(new Date(data.published_at), 'dd MMMM, yyyy', {locale: fr});

                // Update the project state with the formatted date
                setArticle({...data, published_at: formattedDate});
            })
            .catch((error) => {
                console.error(error);
                router.push('/404');
            });
    }, [slug, router]);


    const posts = [
        {
            id: "2",
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
        }
        // More posts...
    ]

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
            {article && (
                <Seo
                    templateTitle={article.title}
                    description={article.description}
                />
            )}

            <main className='isolate'>
                <section className='bg-white'>
                    <div id="hero-id" className="md:h-[700px] overflow-hidden">
                        {article && (
                        <Image
                            src={`https://julien-api.byus.dev/static/blog/${article.id}/${article.hero}`}
                            width="3000"
                            height={500}
                            alt="Picture of the author"
                        />
                        )}
                    </div>
                    <section>
                        {/* Hero section */}
                        <div className="absolute w-full isolate top-0 md:top-[250px]">
                            <div className="overflow-hidden">
                                <div
                                    className="mx-auto md:max-w-[1280px] px-6 md:px-6 pb-12 md:pb-32 pt-20 md:pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                                    {article && (
                                        <div className="py-2 md:py-10 pl-4 md:pl-10 pr-4 md:pr-0 md:pr-[20rem]">
                                            <time dateTime="2020-03-16"
                                                  className="block text-sm leading-6 text-white mb-2">
                                                {article.published_at}
                                            </time>
                                            <h1 className="text-sm md:text-4xl leading-6 md:leading-10 text-white bold leading-6 mb-3">{article.title}</h1>
                                            <p className="text-sm leading-6 md:text-xl text-white light">{article.description}</p>
                                        </div>
                                    )}


                                    <section
                                        className="flex flex-col md:flex-row inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 bg-white w-full h-full pl-4 pr-4 md:pl-10 py-5 md:py-10">
                                        {article && (
                                            <div className="mb-5 text-base leading-7 text-gray-700 w-full md:w-[70%]">
                                                <p className="text-base font-semibold leading-7 text-indigo-600">Introduction</p>
                                                <h2 className="mt-2 font-bold tracking-tight text-gray-900 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 leading-7">{article.body_one_title}</h2>
                                                <p className="mt-6 text-sm leading-6 md:text-base">
                                                    {article.body_one}
                                                </p>
                                                <div className="mt-4 md:mt-10 max-w-2xl">
                                                    <h3 className="mt-8 md:mt-16 text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_two_title}</h3>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_two}}>
                                                    </p>
                                                </div>
                                                <div className="mt-4 max-w-2xl">
                                                    <h3 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_three_title}</h3>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_three}}>
                                                    </p>
                                                </div>
                                                <div className="mt-4 max-w-2xl">
                                                    <h3 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_four_title}</h3>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_four}}>
                                                    </p>
                                                </div>
                                                <div className="mt-4 max-w-2xl">
                                                    <h3 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_five_title}</h3>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_five}}>
                                                    </p>
                                                </div>
                                                <div className="mt-4 max-w-2xl">
                                                    <h3 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_six_title}</h3>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_six}}>
                                                    </p>
                                                </div>
                                                <figure className="mt-16">
                                                    <Image
                                                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                                                        width={500}
                                                        height={500}
                                                        src={`https://julien-api.byus.dev/static/blog/${article.id}/${article.image}`}
                                                        alt=""
                                                    />
                                                </figure>
                                                <div className="mt-16 max-w-2xl">
                                                    <h4 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_seven_title}</h4>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_seven}}>
                                                    </p>
                                                </div>
                                                <div className="mt-4 max-w-2xl">
                                                    <h5 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_eight_title}</h5>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_eight}}>
                                                    </p>
                                                </div>
                                                <div className="mt-4 max-w-2xl">
                                                    <h5 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_nine_title}</h5>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_nine}}>
                                                    </p>
                                                </div>
                                                <div className="mt-4 max-w-2xl">
                                                    <h5 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_ten_title}</h5>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_ten}}>
                                                    </p>
                                                </div>
                                                <div className="mt-4 max-w-2xl">
                                                    <h5 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_twelve_title}</h5>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_twelve}}>
                                                    </p>
                                                </div>
                                                <div className="mt-4 max-w-2xl">
                                                    <h5 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_thirteen_title}</h5>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_thirteen}}>
                                                    </p>
                                                </div>
                                                <div className="mt-4 max-w-2xl">
                                                    <h5 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_fourteen_title}</h5>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_fourteen}}>
                                                    </p>
                                                </div>
                                                <div className="mt-4 max-w-2xl">
                                                    <h5 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_fifteen_title}</h5>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_fifteen}}>
                                                    </p>
                                                </div>
                                                <div className="mt-4 max-w-2xl">
                                                    <h5 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_sixteen_title}</h5>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_sixteen}}>
                                                    </p>
                                                </div>
                                                <div className="mt-4 max-w-2xl">
                                                    <h5 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_seventeen_title}</h5>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_seventeen}}>
                                                    </p>
                                                </div>
                                                <div className="mt-4 max-w-2xl">
                                                    <h6 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">{article.body_eighteen_title}</h6>
                                                    <p className="mt-3 md:mt-6 md:text-base text-sm leading-6"
                                                       dangerouslySetInnerHTML={{__html: article.body_eighteen}}>
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                        <div
                                            className="text-base leading-7 text-gray-700 p-0 md:p-10 pb-5 w-full md:w-[30%]">
                                            <div
                                                className="w-full  border-t border-gray-900/10 md:pt-0 pt-3 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
                                                <p className="text-md font-bold tracking-tight text-indigo-600 sm:text-sm">
                                                    Envie de suivre les dernières tendances du développement web ?
                                                </p>
                                                <p className="relative mt-3 text-sm leading-6 text-gray-600 lg:max-w-none">
                                                    Abonnez-vous à ma newsletter et recevez du contenu exclusif
                                                    directement dans votre boîte mail ! Ne manquez pas cette occasion -
                                                    inscrivez-vous dès maintenant !
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
                                                <p className="hidden text-base font-semibold leading-7 text-[#0E0B3D]">Articles
                                                    récents</p>
                                                <div className="hidden -my-8 divide-y divide-gray-900/10">
                                                    {posts.map((post) => {
                                                        // Check if the post ID matches the ID of the current article being viewed
                                                        if (post.id === currentArticleId) {
                                                            return null; // Skip rendering the current article
                                                        }

                                                        return (
                                                            <article key={post.id} className="py-10">
                                                                <div className="group relative max-w-xl">
                                                                    <time dateTime={post.datetime}
                                                                          className="block text-sm leading-6 text-gray-600">
                                                                        {post.date}
                                                                    </time>
                                                                    <h2 className="mt-2 text-sm font-semibold text-gray-900 group-hover:text-gray-600">
                                                                        <a href={post.href}>
                                                                            <span className="absolute inset-0"/>
                                                                            {post.title}
                                                                        </a>
                                                                    </h2>
                                                                    <p className="mt-4 text-sm leading-6 text-gray-600">{post.description}</p>
                                                                </div>
                                                                <div className="mt-4 flex">
                                                                    <div
                                                                        className="relative mt-4 flex items-center gap-x-4">
                                                  <span
                                                      className="inline-flex items-center gap-x-1.5 rounded-lg px-2 py-1 text-xs font-medium text-[#0E0B3D] ring-1 ring-inset ring-[#0E0B3D]">
                                                    Design
                                                  </span>
                                                                        <span
                                                                            className="inline-flex items-center gap-x-1.5 rounded-lg px-2 py-1 text-xs font-medium text-[#0E0B3D] ring-1 ring-inset ring-[#0E0B3D]">
                                                    Research
                                                  </span>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        );
                                                    })}

                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>
            </main>
        </Layout>
    );
}
