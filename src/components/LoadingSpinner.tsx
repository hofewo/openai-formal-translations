export default function LoadingSpinner(props) {
    let { loading, inset, text, className } = props
    if (typeof loading == 'undefined') loading = true;
    if (typeof loading !== 'undefined' && !loading) return <></>
    return <>
        <div className={inset ? "absolute inset-0 flex flex-auto items-center justify-center" : ""}>
            <svg width="32" height="32" stroke="currentColor" className={"text-blue-300 " + className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g className="spinner_V8m1">
                    <circle cx="12" cy="12" r="9.5" fill="none" stroke-width="2" />
                </g>
            </svg>

            <span className={`ml-2 text-sm text-gray-700 ${typeof text == 'undefined' ? 'hidden' : ''}`}>
                {text}
            </span>
        </div>
    </>
}