import Head from 'next/head';
import Link from 'next/link';
import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UIContext } from './context/UIProvider';

export default function Layout({ children }) {
    const { notification } = useContext(UIContext)
    const notify = () => toast(notification);

    return <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            <style dangerouslySetInnerHTML={{
                __html:
                    `.spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}`
            }} />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
        </Head>

        <ToastContainer />

        <header className='w-full flex justify-center p-4 max-w-8xl mx-auto'>
            <Link href='/' className='flex gap-4 items-center'>
                <img src="/images/text-to-formal-logo-2023.svg" className='h-12 lg:h-16' />
            </Link>
        </header>

        <main className="flex flex-col max-w-8xl mx-auto lg:mt-8 p-4">
            {children}
        </main>

        <footer className='flex max-w-8xl mx-auto p-4 lg:mt-8 text-xxs lg:text-xs text-zinc-500 justify-between'>
            © Copyright Text To Formal 2023. All rights reserved.

            <div>
                Privacy policy | Cookie policy | Terms and conditions.
            </div>
        </footer>
    </>
}