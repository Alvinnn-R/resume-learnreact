import { useState } from 'react';
import Button from './Button';

//useState Combine Components
export default function Counter({initialValue}) {

    const [count, setCount] = useState(initialValue);

    function handlerClick() {
        setCount((prevState) => prevState + 1);

        // console.log({ count });
    }

    return (
        <div>
            <h1 className='text-5xl font-bold'>{count}</h1>

            <div className='mt-5 flex items-center gap-2'>
                <Button onClick={handlerClick}>+ 1</Button>
                <Button
                    onClick={() => {
                        handlerClick();
                        handlerClick();
                        handlerClick();
                    }}>
                    + 3
                </Button>
            </div>
        </div>
    );
}
