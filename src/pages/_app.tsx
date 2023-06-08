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

        // UPDATE: I was able to get this working again... Enjoy!

        const cursor = document.querySelector('.cursor');
        const cursorinner = document.querySelector('.cursor2');
        const a = document.querySelectorAll('a');

        document.addEventListener('mousemove', function(e){
            let x = e.clientX;
            let y = e.clientY;
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
        });

        document.addEventListener('mousemove', function(e){
            let x = e.clientX;
            let y = e.clientY;
            cursorinner.style.left = x + 'px';
            cursorinner.style.top = y + 'px';
        });

        document.addEventListener('mousedown', function(){
            cursor.classList.add('click');
            cursorinner.classList.add('cursorinnerhover')
        });

        document.addEventListener('mouseup', function(){
            cursor.classList.remove('click')
            cursorinner.classList.remove('cursorinnerhover')
        });

        a.forEach(item => {
            item.addEventListener('mouseover', () => {
                cursor.classList.add('hover');
            });
            item.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        })

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
