import React from 'react';
import Head from "next/head";
import Translator from '@/components/Translator';

export default function Home() {
  return <>
    <Head>
      <title>Text To Formal</title>
    </Head>

    <Translator />
  </>
}