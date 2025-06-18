import { useEffect, useState } from 'react';

import {GreetService} from "../bindings/changeme";
import {Events} from "@wailsio/runtime";
import NotElevated from "./pages/NotElevated.jsx";
import Dashboard from "./layout/Dashboard.jsx";

function App() {
    const [isElevated, setIsElevated] = useState(false)

    useEffect(() => {
        GreetService.IsAdmin().then(status => setIsElevated(status))
    }, []);

    return (
        <div id="App" className={"h-screen w-screen  bg-gray-900"}>
            {!isElevated ? <NotElevated></NotElevated> : <Dashboard></Dashboard>}
        </div>
    )
}

export default App