import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useJokes(name) {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        const getJoke = async () => {
            const { data } = await axios(`https://api.chucknorris.io/jokes/random?name=${name}`);
            // console.log(data);

            setJoke(data);
        };
        getJoke().then((r) => r);
    }, [name]);
    return joke;
}
