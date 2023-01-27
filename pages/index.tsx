import React from 'react';
import Head from "next/head";
import Translator from '@/components/Translator';
import { languages } from '@/constants/languages';

export default function Home() {
  const allLanguages = languages.map(language => language).join(', ')
  return <>
    <Head>
      <title>Text To Formal - From informal to formal text</title>
      <meta
        name="description"
        key="desc"
        content="Text To Formal provides state of the art AI technology to correct and translate your informal texts to formal texts in 40+ languages."
      />
      <meta
        property="og:title"
        content="Text To Formal - AI powered translations and corrections"
      />
      <meta
        property="og:description"
        content="Text To Formal provides state of the art AI technology to correct and translate your informal texts to formal texts in 40+ languages."
      />
    </Head>

    <Translator />

    <section className='mt-16 text-sm leading-8 grid text-zinc-500 gap-8'>
      <div>
        <h1 className='uppercase tracking-wider text-xl'>
          <span className='font-extrabold'>AI powered</span> informal to formal corrections.
        </h1>
        <div className='w-8 h-[1px] my-4 bg-zinc-700' />
        Text To Formal provides state of the art AI technology to correct and translate your informal texts to formal texts in 40+ languages.
        Our translator allows companies to engage employees who do not master a language on a professional level, to convert or translate informal texts into formal,
        professional texts ready to be used in B2B and B2C environments. Continuous Machine Learning further improves our language translation
        and correction model on a daily basis, allowing our translator to correct texts to a level that cannot be distinguished from native levels.
      </div>
      <div>
        <h2 className='uppercase tracking-wider text-xl'>
          <span className='font-extrabold'>Informal to formal</span> translations in 40+ languages.
        </h2>
        <div className='w-8 h-[1px] my-4 bg-zinc-700' />
        Text To Formal currently supports formal text translations and corrections from and to more than 40 different languages. Currently supported languages are:
        <br />
        <span className='text-xs'>{allLanguages}.</span>
      </div>
    </section>
  </>
}