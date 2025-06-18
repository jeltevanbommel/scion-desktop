import Sidebar from "../components/Sidebar.jsx";
import {useState} from "react";
import NotElevated from "../pages/NotElevated.jsx";
import Bootstrapping from "../pages/Bootstrapping.jsx";
import Status from "../pages/Status.jsx";
import Marketplace from "../pages/Marketplace.jsx";

export default function Dashboard() {
    const [currentPage, setCurrentPage] = useState("bootstrapping")

    return (
        <section className="h-full flex bg-gray-900 w-full relative isolate overflow-hidden ">

            <Sidebar onPageChange={page => setCurrentPage(page)}></Sidebar>
            {/*TODO: should not be in layout*/}
            <div className={"w-full"}>
                {/*todo: ewww:*/}
                {currentPage === "status" && <Status></Status>}
                {currentPage === "bootstrapping" && <Bootstrapping></Bootstrapping>}
                {currentPage === "marketplace" && <Marketplace></Marketplace>}
            </div>

        </section>
    )
}