
export default function Status(){
    return (<div className="py-8 mb-8 px-24 mt-12">
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">SCION Desktop Status</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-3 md:col-span-1 status">
                    <div className="p-4 rounded-lg text-center">
                        <h2 className="text-lg font-medium">Daemon</h2>
                        <p className="text-sm">Online</p>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-1 status-down">
                    <div className="p-4 rounded-lg text-center">
                        <h2 className="text-lg font-medium">Dispatcher</h2>
                        <p className="text-sm">Online</p>
                        <div className="mt-5">
                        <a href="#" onClick={() => startBootstrap()}
                           className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Start</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}