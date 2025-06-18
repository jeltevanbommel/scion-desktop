export default function Marketplace() {

    return (<div className="py-8 mb-8 px-24 mt-12">
        <div className="container mx-auto justify-center items-center">
            <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
            <h2 className="text-xl mb-4">Install other SCION-abled applications</h2>

            <div
                className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div
                    className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">


                    <div className="p-2 flex justify-center">
                        <a href="#">
                            <img className="rounded-md"
                                 src="/quake.jpg"
                                 loading="lazy"/>
                        </a>
                    </div>

                    <div className="px-4 pb-3">
                        <div>
                            <h5
                                className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
                                QUAKE 3
                            </h5>

                            <p className="antialiased text-gray-600 dark:text-gray-400 text-sm">
                                Play the classic QUAKE game over SCION
                            </p>
                            <div className="mt-4">
                                <a href="#">
                                <span
                                    className=" py-1 px-2.5 border-none rounded bg-blue-100 text-lg text-blue-800 font-medium hover:text-blue-400 dark:hover:text-blue-300 ">Install</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">


                    <div className="p-2 flex justify-center">
                        <a href="#">
                            <img className="rounded-md"
                                 src="/ollama.png"
                                 loading="lazy"/>
                        </a>
                    </div>

                    <div className="px-4 pb-3">
                        <div>
                            <h5
                                className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
                                Ollama
                            </h5>

                            <p className="antialiased text-gray-600 dark:text-gray-400 text-sm">
                                Use SCION to fetch your AI models
                            </p>
                            <div className="mt-4">
                                <a href="#">
                                <span
                                    className=" py-1 px-2.5 border-none rounded bg-blue-100 text-lg text-blue-800 font-medium hover:text-blue-400 dark:hover:text-blue-300 ">Install</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">


                    <div className="p-2 flex justify-center">
                        <a href="#">
                            <img className="rounded-md"
                                 src="/browser_9005724.svg"
                                 loading="lazy"/>
                        </a>
                    </div>

                    <div className="px-4 pb-3">
                        <div>
                            <h5
                                className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
                                Webbrowsing Proxy
                            </h5>

                            <p className="antialiased text-gray-600 dark:text-gray-400 text-sm">
                                Install to visit webpages hosted using SCION.
                            </p>
                            <div className="mt-4">
                                {/*<a href="#">*/}
                                <span
                                    className=" py-1 px-2.5 border-none rounded bg-green-100 text-lg text-green-800 font-medium ">Installed</span>
                                {/*</a>*/}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>)

}