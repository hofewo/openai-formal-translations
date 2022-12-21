import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState();
  const [text, setText] = useState();
  const [loading, setLoading] = useState(false);
  const fetchApi = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await fetch('https://api.openai.com/v1/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: 'Correct the following text to formal English: ' + text,
          temperature: 0.5,
          echo: false,
          max_tokens: 2048,
        })
      }).then(res => res.json());
    setResponse(res);
    setLoading(false);
  }
  const handleChange = (e) => {
    setText(e.target.value);
  }

  return <>
    <Head>
      <title>Translate to formal English</title>
    </Head>
    <form className="w-screen h-screen flex justify-center items-center flex-col gap-4">
      <h1>Translate to formal English</h1>
      <textarea
        onChange={handleChange}
        className="border-2 border-gray-200 w-full max-w-4xl h-64 p-4" placeholder="Input text to correct to formal English"
      />

      <button onClick={fetchApi} className='bg-gray-200 px-8 py-4 w-full max-w-xs hover:bg-gray-200'>
        {loading ? 'Transforming text..' : 'Correct to formal English'}
      </button>

      <pre className="bg-gray-100/50 w-full max-w-4xl min-h-20 p-4 whitespace-pre-wrap">
        <div className="w-full flex justify-between">
          Results:

          <button
            className="p-4 bg-gray-200 hover:bg-gray-300"
            onClick={() => navigator.clipboard.writeText(response?.choices[0]?.text)}
          >
            Copy to clipboard
          </button>
        </div>
        {response?.choices[0]?.text ?? - ''}
      </pre>
    </form>
  </>
}