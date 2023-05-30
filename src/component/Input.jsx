import { forwardRef, useEffect, useRef } from 'react';

// function Input({ type = 'text', ...props }) {
//     return (
//         <input
//             //...props digunakan untuk membongkar props by default di input
//             {...props}
//             className='text-black transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'
//             type={type}
//         />
//     );
// }

//Belajar Ref
// const Input = forwardRef({type = 'text', ...props} , ref) => {
//     return (
//         <input
//         ref={ref}
//             //...props digunakan untuk membongkar props by default di input
//             {...props}
//             className='text-black transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'
//             type={type}
//         />
//     );
// }

//forewardref yang benar
// const Input = forwardRef(({ type = 'text', ...props }, ref) => {
//     return (
//         <input
//             ref={ref}
//             //...props digunakan untuk membongkar props by default di input
//             {...props}
//             className='text-black transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'
//             type={type}
//         />
//     );
// });

const Input = ({ isFocused, type = 'text', ...props }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    });
    return (
        <input
            ref={inputRef}
            //...props digunakan untuk membongkar props by default di input
            {...props}
            className='text-black transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'
            type={type}
        />
    );
};

export default Input;
