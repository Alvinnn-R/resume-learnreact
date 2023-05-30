function Card({ children }) {
    // multiple note
    return (
        <div className='shadow rounded-lg overflow-hidden bg-white'>
            {/* <h1 className='text-2xl font-semibold'>{tittle}</h1> */}

            <div className='leading-relaxed'>{children}</div>

            {/* <div className='bg-slate-50'>{footer}</div> */}
        </div>
    );
}

function Tittle({ children }) {
    return (
        <div className='p-4 border-b'>
            <h1 className='text-xl text-gray-900'>{children}</h1>
        </div>
    );
}

function Body({ children }) {
    return <div className='leading-relaxed p-4 text-black'>{children}</div>;
}

function Footer({ children }) {
    return <div className='bg-slate-50 p-4 text-black'>{children}</div>;
}


Card.Tittle = Tittle;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
