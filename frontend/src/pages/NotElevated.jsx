import {GreetService} from "../../bindings/changeme/index.js";


export default function NotElevated() {
    const onPressQuit = () => {
        GreetService.Exit()
    }
    return (<div
            className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:py-10">
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
            <div className="mx-auto max-w-md text-center lg:mx-4 lg:flex-auto py-12 lg:text-left">
                <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                    SCION Desktop is not running as administrator.</h2>
                <p className="mt-6 text-lg/8 text-pretty text-gray-300">We require administrator
                    privileges to be able to start SCION's bootstrapping process.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                    <a href="#" onClick={()=>onPressQuit()}
                       className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Quit</a>
                    <a href="#" className="text-sm/6 font-semibold text-white">Need help?<span
                        aria-hidden="true">→</span></a>
                </div>
            </div>
        </div>)
}