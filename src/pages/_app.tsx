import { AppProps } from 'next/app';
import '@/scripts/global.js';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import {useEffect} from "react";
import SmoothScroll from "@/components/layout/SmoothScroll.initial";

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {

    useEffect(() => {

        const a = document.querySelectorAll('a');

        document.addEventListener('mousemove', function(e) {
            const cursor = document.querySelector('.cursor') as HTMLElement; // Get the cursor element
            if (cursor) {
                cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
            }
        });

        document.addEventListener('mousemove', function(e) {
            const cursorinner = document.querySelector('.cursor2') as HTMLElement;
            if (cursorinner) {
                cursorinner.style.left = e.clientX + 'px';
                cursorinner.style.top = e.clientY + 'px';
            }
        });

        document.addEventListener('mousedown', function() {
            const cursor = document.querySelector('.cursor') as HTMLElement; // Get the cursor element
            const cursorinner = document.querySelector('.cursor2') as HTMLElement;
            if (cursorinner && cursor) {
                cursor.classList.add('click');
                cursorinner.classList.add('cursorinnerhover');
            }
        });

        document.addEventListener('mouseup', function() {
            const cursor = document.querySelector('.cursor') as HTMLElement; // Get the cursor element
            const cursorinner = document.querySelector('.cursor2') as HTMLElement;
            if (cursorinner && cursor) {
                cursor.classList.remove('click');
                cursorinner.classList.remove('cursorinnerhover');
            }
        });

        a.forEach(item => {
            item.addEventListener('mouseover', () => {
                const cursor = document.querySelector('.cursor') as HTMLElement; // Get the cursor element
                if (cursor) {
                    cursor.classList.add('hover');
                }
            });
            item.addEventListener('mouseleave', () => {
                const cursor = document.querySelector('.cursor') as HTMLElement; // Get the cursor element
                if (cursor) {
                    cursor.classList.remove('hover');
                }
            });
        });

    }, []);


  return (
      <SmoothScroll>
    <div className='overflow-x-hidden'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
      </SmoothScroll>
  );
}

export default MyApp;
