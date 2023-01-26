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
        </Head>

        <ToastContainer />

        <header className='w-full flex justify-center p-4 max-w-8xl mx-auto'>
            <Link href='/' className='flex gap-4 items-center'>
                <img src="/images/text-to-formal-logo-2023.svg" className='h-12' />
            </Link>
        </header>

        <main className="flex flex-col max-w-8xl mx-auto lg:mt-8 p-4">
            {children}
        </main>
    </>
}