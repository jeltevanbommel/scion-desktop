
export default function SidebarButton({selected, icon, text, handleClick, children}) {
    return (
        <button
            type="button"
        className={selected ? 'flex min-w-full first:mt-2 py-2 px-4 items-center rounded' +
            ' hover:bg-slate-900 hover:bg-opacity-5 hover:dark:bg-slate-50 hover:dark:bg-opacity-5 bg-slate-900 bg-opacity-10 dark:bg-slate-50 dark:bg-opacity-5' : 'flex min-w-full first:mt-2 py-2 px-4 items-center rounded hover:bg-slate-900 hover:bg-opacity-5 hover:dark:bg-slate-50 hover:dark:bg-opacity-5'}
        onClick={handleClick}
        >
        <span>
        <div
    className="w-4 mr-5 text-fuchsia-700 dark:text-fuchsia-500"/>
    {icon}

        <div/>
            {children}
        </span>
    <span>{text}</span>
</button>)
}