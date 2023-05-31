import clsx from "clsx";

function Button(props) {

    const { className="bg-black", children, text, type = 'submit' } = props;

    return (
        // <button {...props} className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 [&>svg]:mt-1 flex item-center text-white gap-x-2 px-4 py-2 rounded`}>
        //     {children || text}
        // </button>

        <button
            {...props}
            type={type}
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 text-white font-medium whitespace-nowrap inline-flex justify-center items-center gap-x-2 px-4 h-10 rounded-lg'
            )}>
            {children || text}
        </button>
    );
}
 export default Button;