import { useState } from "react";
import { ArrowRightCircleIcon, ArrowRightIcon, ArrowRightOnRectangleIcon, BeakerIcon, CheckIcon, ChevronDownIcon, ChevronRightIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import LoadingSpinner from "./LoadingSpinner";

export default function Translator() {
    const [response, setResponse] = useState('Formal translation');
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [translateTo, setTranslateTo] = useState('English');
    const [openTranslateTo, setOpenTranslateTo] = useState(false);
    const handleTranslate = async (e) => {
        e.preventDefault();
        if (input.length < 3) return;
        setResponse('');
        setLoading(true);
        const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
        const res = await fetch('https://api.openai.com/v1/completions',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: 'text-davinci-003',
                    prompt: `Correct the following text to formal ${translateTo}: ${input}`,
                    temperature: 0.5,
                    echo: false,
                    max_tokens: 2048,
                })
            }).then(res => res.json());
        setResponse(res?.choices[0]?.text);
        setLoading(false);
    }
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleClear = (e) => {
        e.preventDefault()
        const input = document.getElementById('input-text') as HTMLInputElement
        setInput('')
        input.value = ''
        setResponse('Formal translation')
        input.focus()
    }
    const [copied, setCopied] = useState(false)
    const copyToClipboard = (e) => {
        e.preventDefault()
        navigator.clipboard.writeText(response)
        setCopied(true);
        window.setTimeout(() => setCopied(false), 3000)
    }
    return <>

        <section className="grid lg:grid-cols-2 w-full h-[50vh] min-h-[480px] gap-4 h">

            <form className="relative w-full h-full rounded-xl" onSubmit={handleTranslate}>
                <span className="absolute top-4 right-4 text-sm rounded-lg bg-zinc-100 px-2 h-10 flex items-center text-zinc-500">
                    Auto-detect language
                </span>
                <textarea
                    onChange={handleChange}
                    className="border w-full h-full border-zinc-200 focus:border-zinc-100 outline-none p-8 rounded-xl ring-blue-400 ring-offset-2 focus:ring-2 text-xl"
                    placeholder="Your informal text.."
                    autoFocus={true}
                    id="input-text"
                    required
                />
                <div className="absolute z-10 bottom-4 left-4 flex items-center gap-2">
                    <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white text-sm p-4 max-w-xs rounded-xl font-bold uppercase tracking-wide flex items-center focus:ring-4 ring-blue-300'>
                        {loading
                            ? <>
                                <LoadingSpinner loading={loading} className='w-5 h-5 mr-2' />
                                Translating..
                            </>
                            : <>
                                Text to formal
                                <ArrowRightCircleIcon className="w-5 h-5 ml-1" strokeWidth={2} />
                            </>
                        }
                    </button>
                    <button type='button' className='bg-white hover:bg-zinc-100 text-gray-500 text-sm p-4 max-w-xs rounded-xl font-bold uppercase tracking-wide flex items-center' onClick={handleClear}>
                        Clear text
                    </button>
                </div>
            </form>

            <div className="bg-blue-50 w-full h-full p-8 whitespace-pre-wrap rounded-xl text-xl relative">
                <button
                    type='button'
                    className="absolute top-4 right-4 text-sm rounded-lg bg-blue-900/10 backdrop-blur-2xl px-2 flex items-center text-zinc-500 flex-col z-10"
                    onClick={() => setOpenTranslateTo(oldValue => !oldValue)}
                    onBlur={() => setOpenTranslateTo(false)}
                >
                    <span className="flex flex-row items-center h-10">
                        Formal {translateTo}
                        <ChevronDownIcon className="w-4 h-4 ml-1" />
                    </span>

                    {openTranslateTo
                        ? <nav className="top-10 rounded-lg p-2 text-sm bg-white text-left w-full mb-2 shadow-lg">
                            {languages.map(language =>
                                <menu
                                    key={language}
                                    className={`hover:bg-zinc-100 px-2 py-1 rounded-md ${translateTo == language ? 'bg-zinc-200' : ''}`}
                                    onClick={() => setTranslateTo(language)}
                                >
                                    {language}
                                </menu>
                            )}
                        </nav>
                        : <></>
                    }
                </button>

                {response}

                <button
                    className="p-4 bg-white hover:bg-zinc-100 focus:bg-zinc-100 ring-offset-transparent text-zinc-500 text-sm rounded-xl font-bold absolute bottom-4 right-4 flex items-center uppercase tracking-wide focus:ring-4 ring-blue-300"
                    onClick={copyToClipboard}
                >
                    {
                        copied
                            ? <>
                                <CheckIcon className="w-5 h-5 mr-1" /> Copied!
                            </>
                            : <>
                                <ClipboardDocumentIcon className="w-5 h-5 mr-1" /> Copy
                            </>
                    }
                </button>
                <LoadingSpinner loading={loading} inset={true} text='Converting to formal text..' />
            </div>

        </section>

    </>
}

const languages = [
    'English',
    'French',
    'German',
    'Dutch',
    'Chinese',
    'Korean',
    'Arabic',
]