import React from "react";
import SidebarButton from "./SidebarButton.jsx";
import { Icon } from "@iconify/react";

export default function Sidebar({onPageChange}) {


    const routes = [
            {icon: null, text: 'SCION Desktop', to: '', selected: false},
        {icon: <Icon className="w-4 h-4" icon="streamline-plump-color:dashboard-gauge-2-flat" />, text: 'Status', to: 'status', selected: false},
        {icon: <Icon className="w-4 h-4" icon="noto:mans-shoe" />, text: 'Bootstrapping', to: 'bootstrapping', selected: false},

        {icon: <Icon className="w-4 h-4" icon="streamline-plump-color:shopping-basket-1-flat" />, text: 'Marketplace', to: 'marketplace', selected: false},
        {icon: null, text: 'Tools', to: '', selected: false},
        {icon: <Icon className="w-4 h-4" icon="noto:ping-pong" />, text: 'Ping', to: 'marketplace', selected: false},
        {icon: <Icon className="w-4 h-4" icon="solar:branching-paths-up-bold-duotone" />, text: 'Showpaths', to: 'marketplace', selected: false},

        {icon: null, text: 'Proxy', to: '', selected: false},
        {icon: <Icon className="w-4 h-4" icon="streamline-color:cog" />, text: 'Options', to: 'marketplace', selected: false},

    ]

    return (
        <aside
            className="h-full overflow-auto scrollbar-none border-r border-slate-900 border-opacity-10 dark:border-slate-50 dark:border-opacity-10">
            <nav
                className="p-4 xl:p-8 text-left text-sm text-slate-900 text-opacity-80 dark:text-slate-50 dark:text-opacity-80;">
                <ul>
                    {routes.map(route => (
                        <li>
                            {route.icon === null ?
                                <h2 className="mt-6 px-4 text-xs opacity-60 dark:opacity-40 font-bold">{route.text}</h2>
                                :
                                <SidebarButton selected={route.selected} text={route.text} icon={route.icon}
                                               handleClick={() => onPageChange(route.to)}/>
                            }
                        </li>

                    ))}

                </ul>
            </nav>
        </aside>)
}