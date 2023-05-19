import {CheckCircleIcon, InformationCircleIcon} from '@heroicons/react/20/solid'
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import {useRouter} from 'next/router';
import * as React from 'react';
import {useEffect, useState} from 'react';
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

export default function SingleArticle() {
    interface Article {
        id: number;
        title: string;
        body: string;
        description: string;
        image: string;
        published_at: string;
    }

    const [article, setProject] = useState<Article | null>(null);
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        if (!slug) return;

        fetch(`https://julien-api.byus.dev/api/article/${slug}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Project not found: ${slug}`);
                }
                return response.json();
            })
            .then((data) => setProject(data))
            .catch((error) => {
                console.error(error);
                router.push('/404');
            });
    }, [slug, router]);


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


    return (
        <Layout>
            <Seo
                templateTitle='Projet'
                description=''
            />

            <main className='isolate'>
                <section className='bg-white'>
                    <div id="hero-id" className="md:h-[700px] overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                            width="3000"
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                    <section>
                        {/* Hero section */}
                        <div className="absolute w-full isolate top-0 md:top-[250px]">
                            <div className="overflow-hidden">
                                <div className="mx-auto md:max-w-[1280px] px-6 md:px-6 pb-12 md:pb-32 pt-20 md:pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                                    <div className="py-2 md:py-10 pl-4 md:pl-10 pr-4 md:pr-0 md:pr-[20rem]">
                                        <time dateTime="2020-03-16" className="block text-sm leading-6 text-white mb-2">
                                            Mar 16, 2020
                                        </time>
                                        <h1 className="text-sm md:text-4xl leading-6 md:leading-10 text-white bold leading-6 mb-3">Flowbite Blocks Tutorial - Learn how to get
                                            started with custom sections using the Flowbite Blocks</h1>
                                        <p className="text-sm leading-6 md:text-xl text-white light">This is an article that talks about
                                            introduction. Whatever this is a dummy text.</p>
                                    </div>
                                    <section
                                        className="flex flex-col md:flex-row inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 bg-white w-full h-full pl-4 pr-4 md:pl-10 py-5 md:py-10">
                                        <div className="mb-5 text-base leading-7 text-gray-700 w-full md:w-[70%]">
                                            <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
                                            <h2 className="mt-2 font-bold tracking-tight text-gray-900 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 leading-7">JavaScript
                                                for Beginners</h2>
                                            <p className="mt-6 text-sm leading-6 md:text-base">
                                                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
                                                arcu, sit dui mi, nibh dui, diam eget
                                                aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in
                                                viverra scelerisque eget. Eleifend
                                                egestas fringilla sapien.
                                            </p>
                                            <div className="mt-4 md:mt-10 max-w-2xl">
                                                <p className="text-sm leading-6 md:text-base">
                                                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
                                                    enim. Mattis mauris semper sed amet vitae
                                                    sed turpis id. Id dolor praesent donec est. Odio penatibus risus
                                                    viverra tellus varius sit neque erat velit.
                                                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
                                                    enim. Mattis mauris semper sed amet vitae
                                                    sed turpis id.
                                                </p>
                                                <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                                                    <li className="flex gap-x-3">
                                                        <CheckCircleIcon
                                                            className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                            aria-hidden="true"/>
                                                        <span className="md:text-md text-base">
                <strong className="font-semibold text-gray-900">Data types.</strong> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                blanditiis ratione.
              </span>
                                                    </li>
                                                    <li className="flex gap-x-3">
                                                        <CheckCircleIcon
                                                            className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                            aria-hidden="true"/>
                                                        <span className="md:text-sm leading-6 text-base">
                <strong className="font-semibold text-gray-900">Loops.</strong> Anim aute id magna aliqua ad ad non
                deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </span>
                                                    </li>
                                                    <li className="flex gap-x-3">
                                                        <CheckCircleIcon
                                                            className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                            aria-hidden="true"/>
                                                        <span className="md:text-md text-base">
                <strong className="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien vehicula erat
                auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </span>
                                                    </li>
                                                </ul>
                                                <p className="mt-4 md:mt-8 md:text-base text-sm leading-6">
                                                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                                                    odio id et. Id blandit molestie auctor
                                                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                                                    varius vulputate et ultrices hac
                                                    adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel
                                                    integer orci.
                                                </p>
                                                <h2 className="mt-8 md:mt-16 text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">From
                                                    beginner to expert in 3 hours</h2>
                                                <p className="mt-3 md:mt-6 md:text-base text-sm leading-6">
                                                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat
                                                    in. Convallis arcu ipsum urna nibh.
                                                    Pharetra, euismod vitae interdum mauris enim, consequat vulputate
                                                    nibh. Maecenas pellentesque id sed tellus
                                                    mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
                                                    Pellentesque nam sed nullam sed diam turpis
                                                    ipsum eu a sed convallis diam.
                                                </p>
                                                <figure className="mt-10 border-l border-indigo-600 pl-9">
                                                    <blockquote className="font-semibold text-gray-900">
                                                        <p>
                                                            “Vel ultricies morbi odio facilisi ultrices accumsan donec
                                                            lacus purus. Lectus nibh ullamcorper ac
                                                            dictum justo in euismod. Risus aenean ut elit massa. In amet
                                                            aliquet eget cras. Sem volutpat enim
                                                            tristique.”
                                                        </p>
                                                    </blockquote>
                                                    <figcaption className="mt-6 flex gap-x-4">
                                                        <img
                                                            className="h-6 w-6 flex-none rounded-full bg-gray-50"
                                                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt=""
                                                        />
                                                        <div className="text-sm leading-6">
                                                            <strong className="font-semibold text-gray-900">Maria
                                                                Hill</strong> – Marketing Manager
                                                        </div>
                                                    </figcaption>
                                                </figure>
                                                <p className="mt-4 md:mt-8 md:text-base text-sm leading-6">
                                                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
                                                    enim. Mattis mauris semper sed amet vitae
                                                    sed turpis id. Id dolor praesent donec est. Odio penatibus risus
                                                    viverra tellus varius sit neque erat velit.
                                                </p>
                                            </div>
                                            <figure className="mt-16">
                                                <img
                                                    className="aspect-video rounded-xl bg-gray-50 object-cover"
                                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                                                    alt=""
                                                />
                                                <figcaption
                                                    className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                                                    <InformationCircleIcon
                                                        className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                                                        aria-hidden="true"/>
                                                    Faucibus commodo massa rhoncus, volutpat.
                                                </figcaption>
                                            </figure>
                                            <div className="mt-16 max-w-2xl">
                                                <h2 className="text-md md:text-2xl font-bold tracking-tight text-gray-900 leading-7">Everything
                                                    you need to get up and running</h2>
                                                <p className="mt-3 md:mt-6 md:text-base text-sm leading-6">
                                                    Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam
                                                    varius orci dapibus volutpat cras. In
                                                    amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus
                                                    ut viverra ridiculus non molestie.
                                                    Gravida quis fringilla amet eget dui tempor dignissim. Facilisis
                                                    auctor venenatis varius nunc, congue erat
                                                    ac. Cras fermentum convallis quam.
                                                </p>
                                                <p className="mt-4 md:mt-8 md:text-base text-sm leading-6">
                                                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
                                                    enim. Mattis mauris semper sed amet vitae
                                                    sed turpis id. Id dolor praesent donec est. Odio penatibus risus
                                                    viverra tellus varius sit neque erat velit.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-base leading-7 text-gray-700 p-0 md:p-10 pb-5 w-full md:w-[30%]">
                                            <div className="w-full  border-t border-gray-900/10 md:pt-0 pt-3 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
                                                <p className="text-md font-bold tracking-tight text-indigo-600 sm:text-sm">
                                                    Envie de suivre les dernières tendances du développement web ?
                                                </p>
                                                <p className="relative mt-3 text-sm leading-6 text-gray-600 lg:max-w-none">
                                                    Abonnez-vous à ma newsletter et recevez du contenu exclusif directement dans votre boîte mail ! Ne manquez pas cette occasion - inscrivez-vous dès maintenant !
                                                </p>
                                                <form className="my-6 flex max-w-md gap-x-1">
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
                                                <p className="text-base font-semibold leading-7 text-[#0E0B3D]">Articles récents</p>
                                                <div className="-my-8 divide-y divide-gray-900/10">
                                                    {posts.map((post) => (
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
                                                    ))}
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
