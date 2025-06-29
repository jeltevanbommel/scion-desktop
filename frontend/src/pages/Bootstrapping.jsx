import {Events} from "@wailsio/runtime";
import {useEffect, useRef, useState} from "react";
import {GreetService} from "../../bindings/changeme/index.js";


export default function Bootstrapping() {

    const [log, setLog] = useState("")
    const [spinning, setSpinning] = useState(false)
    const [success, setSuccess] = useState(false)
    // const messagesEndRef = useRef<null | HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    // useEffect(() => {
        // scrollToBottom()
    // }, [log]);

    useEffect(() => {
       return  Events.On('logevent', (entry) => {
            setLog(l=>l+entry.data)
        });
    }, []);

    useEffect(() => {
        return  Events.On('finish-bootstrapping', (entry) => {
            setSpinning(false)
            setSuccess(entry.data)
        });
    }, []);
    const startBootstrap = () => {
        setRunning(true)
        setSpinning(true)
        setSuccess(false)
        GreetService.StartBootstrapper()
    }

    const [running, setRunning] = useState(false);

    return (
        <div
            className="bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:py-10">
            <svg viewBox="0 0 1024 1024"
                 className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                 aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#ball)" fill-opacity="0.3"/>
                <defs>
                    <radialGradient id="ball">
                        <stop stop-color="#cf6eff"/>
                        <stop offset="1" stop-color="#006eb7"/>
                    </radialGradient>
                </defs>
            </svg>
            {!running &&
                <div
                    className="mx-auto w-full text-center lg:mx-4 lg:flex-auto py-12 lg:text-left">
                    <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                        SCION Bootstrapper</h2>
                    <p className="mt-6 text-lg/8 text-pretty text-gray-300">Run this to get
                        started</p>
                    <div
                        className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <a href="#" onClick={() => startBootstrap()}
                           className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Bootstrap!</a>
                    </div>
                </div>
            }
            {running &&
                <div
                    className="mx-auto w-full text-center lg:mx-4 lg:flex-auto py-12 lg:text-left">
                    {spinning && <><h2
                        className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                        Running Bootstrapper</h2>
                        <p className="mt-6 text-lg/8 text-pretty text-gray-300">Hold on, this
                            may or may not
                            work.</p></>}
                    {!spinning && success &&
                        <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                            Bootstrapper Finished</h2>}
                    {!spinning && !success &&
                        <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                            Bootstrapper Failed</h2>}

                    {spinning && <div className="mt-10 flex items-center justify-center gap-x-6">

                        <div role="status">
                            <svg aria-hidden="true"
                                 className="w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                 viewBox="0 0 100 101" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"/>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>


                    </div>}
                    <div
                        className="max-w-3xl  flex justify-end inline-block p-8 pr-8 text-base leading-relaxed text-blue-400 bg-indigo-900 rounded-lg shadow-lg mt-10 text-left max-h-[300px]">
          <pre className="mx-4 px-4 overflow-scroll" id="log-out"><span
              className="text-blue-100">{log}
          </span>
              {/*<div ref={messagesEndRef}/>*/}
</pre>

                    </div>
                </div>
            }
        </div>
    )
}