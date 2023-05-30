import { IconBrandGithub } from '@tabler/icons-react';
import Button from './component/Button';
import Card from './component/Card';
import PleaceContentCenter from './component/PleaceContentCenter';
import { useEffect, useRef, useState } from 'react';
// import Counter from './component/Counter';
import Input from './component/Input';
import Label from './component/Label';
import Todo from './component/Todo';
import axios, { Axios } from 'axios';

// function App() {
//     const type = 'submit';
//     const onClick = () => console.log('you login in component style!!');

//     return (
//         <div className='bg-slate-100 text-slate-800 antialiased flex items-center justify-center min-h-screen tracking-tight'>
//             <div className='max-w-md w-full'>
//                 {/* Digunakan saat value dan propertinya sama */}
//                 {/* <Button {...{ type, onClick }}>
//                     <IconLogout />
//                     Sign In
//                 </Button> */}

//                 {/* Use Text */}
//                 {/* <Button
//                     text={
//                         <>
//                             <IconBrandTwitter />
//                             Login
//                         </>

//                     }
//                 /> */}

//                 {/* Use Children */}
//                 {/* <Button className='bg-sky-600' onClick={() => console.log('You Sign Up')} type='button'>
//                     <IconLogin />
//                     Sign Up
//                 </Button>

//                 <Button className='bg-black' onClick={() => console.log('You Register')}>
//                     <IconLogin />
//                     Regsiter
//                 </Button> */}

//                 {/* learn component */}
//                 {/* <Card tittle={'Hello Alvinnn'} footer={<Button>Submit</Button>}> */}
//                 <Card>
//                     <Card.Tittle>Hallo Alvin</Card.Tittle>

//                     <Card.Body>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tempora ab possimus eligendi sit eius nulla repellat, dicta
//                     soluta reprehenderit! Fugit similique iusto dolores pariatur sequi. Laudantium tenetur libero culpa.</Card.Body>

//                     <Card.Footer>
//                         <Button>Submit</Button>
//                     </Card.Footer>
//                 </Card>
//             </div>
//         </div>
//     );
// }

// learn UseState

// function App() {
//     // let name = 'Alvin';
//     // const [name, setName] = useState('Taylor');

//     const [count, setCount] = useState(0);

//     function handlerClick() {
//         // name = 'taylor';
//         // setName('Taylor');

//         // const nextName = 'Alvin';
//         // setName(nextName);

//         // console.log({ name, nextName });

//         // setCount(count + 1);

//         // const nextCount = count + 1;
//         // setCount(nextCount);
//         // console.log({ count, nextCount });

//         setCount((prevState) => prevState + 1);

//         console.log({count});
//     }

//     return (
//         <PleaceContentCenter>
//             <div className='text-5xl font-bold'>{count}</div>

//             <div className='mt-5 flex items-center gap-2'>
//                 <Button onClick={handlerClick}>+ 1</Button>
//                 <Button
//                     onClick={() => {
//                         handlerClick();
//                         handlerClick();
//                         handlerClick();
//                     }}>
//                     + 3
//                 </Button>
//             </div>
//         </PleaceContentCenter>
//     );
// }

// useState Combine In Components
// function App() {

//     // const [count, setCount] = useState(0);

//     return (
//         <PleaceContentCenter>
//             {/* <Counter count={count} setCount={setCount} ></Counter> */}
//             <Counter initialValue={10} />
//         </PleaceContentCenter>
//     );
// }

// function App() {
//     // const [name, setName] = useState('');
//     // const [email, setEmail] = useState('');

//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//     });

//     function onChange(event) {
//         setForm({ ...form, [event.target.name]: event.target.value });
//     }

//     function submit(event) {
//         event.preventDefault();

//         console.log(form);
//     }

//     return (
//         <PleaceContentCenter>
//             <Card>
//                 <Card.Tittle>Sign Up For New Account!</Card.Tittle>
//                 <form action='' onSubmit={submit}>
//                     <Card.Body>
//                         <div className='mb-5 text-black border rounded p-3'>
//                             <p>Name : {form.name || '----'}</p>
//                             <p>Email : {form.email || '----'}</p>
//                         </div>
//                         {/* <div className='mb-6'>
//                         <Label htmlFor='name' value={'Name'} />
//                         //contoh 2
//                         <Input value={name} onChange={(event) => setName(event.target.value)} id={'name'} name={'name'}></Input>

//                         <Input
//                             value={form.name}
//                             onChange={(event) =>
//                                 setForm((form) => ({
//                                     ...form,
//                                     name: event.target.value,
//                                 }))
//                             }
//                             id={'name'}
//                             name={'name'}
//                         />
//                     </div> */}

//                         <div className='mb-6'>
//                             <Label htmlFor='name' value={'Name'} />
//                             <Input value={form.name} onChange={onChange} id={'name'} name={'name'} />
//                         </div>

//                         <div className=''>
//                             <Label htmlFor='email' value={'Email'} />
//                             {/* <Input
//                             value={form.email}
//                             onChange={(event) =>
//                                 setForm((form) => ({
//                                     ...form,
//                                     email: event.target.value,
//                                 }))
//                             }
//                             id={'email'}
//                             name={'email'}
//                         /> */}

//                             <Input value={form.email} onChange={onChange} id={'email'} name={'email'} />
//                         </div>
//                     </Card.Body>
//                     <Card.Footer>
//                         <Button>
//                             <IconBrandGithub />
//                             Register
//                         </Button>
//                     </Card.Footer>
//                 </form>
//             </Card>
//         </PleaceContentCenter>
//     );
// }

// Learn Todo
// function App() {
//     return (
//         <PleaceContentCenter>
//             <Todo></Todo>
//         </PleaceContentCenter>
//     );
// }

// useRef Hooks
// function App() {
//     //useState digunakan supaya state rerender
//     // const [Ticks, setTicks] = useState(0);

//     // Useref digunakan khusus state tidak rerender
//     // const Ticks = useRef(0);

//     // Ref fungis yang sama seperti document.getElementById()
//     const inputRef = useRef(null);

//     function handleTicks() {
//         inputRef.current.focus();
//         // const tesTicks = Ticks + 1;
//         // setTicks(tesTicks);
//         // console.log(tesTicks);

//         // Ticks.current = Ticks.current + 1;

//         // console.log(inputRef);
//     }
//     return (
//         <PleaceContentCenter>
//             <Card>
//                 <Card.Tittle>useRef Hooks</Card.Tittle>
//                 <Card.Body>
//                     {/* <Input className={'border border-slate-500'} ref={inputRef}/> */}
//                     <Input placeholder='Email' isFocused className={'border border-slate-500'} />
//                     <Input placeholder='Password' className={'border border-slate-500'} />
//                     <Button onClick={handleTicks}>Ticks</Button>
//                 </Card.Body>
//                 <Card.Footer>You clickes {} times.</Card.Footer>
//             </Card>
//         </PleaceContentCenter>
//     );
// }

//Learn Use Effect
// function App(props) {
//     const [name, setName] = useState('');
//     const [online, setOnline] = useState('');
//     const [scrollPosition, setScrollPosition] = useState(window.scroll);

//     //Macam" penulisan use effect
//     //UseEffect akan selalu dipanggil diawal
//     useEffect(() => {
//         //Ini akan selalu dipanggil jika render terjadi
//         // console.log('I always rendered.');
//     });

//     useEffect(
//         () => {
//             //Dia akan rerender di firs render
//             // console.log('First render.');
//         },
//         /*depc:*/ []
//     );

//     useEffect(
//         () => {
//             //Ini akan dipanggil ketika state/props/online itu berubah
//             // console.log(`I am now ${online ? 'online' : 'offline'}`);
//         },
//         /*depc:*/ [/*state*/ online]
//     );

//     function updateScrollPosition() {
//         const windowScrolling = window.scrollY;
//         console.log(`Window scroll postion: ${windowScrolling}`);
//         setScrollPosition(windowScrolling);
//     }

//     useEffect(() => {
//         // console.log('Attaching');
//         window.addEventListener('scroll', updateScrollPosition);

//         //Kita perlu menggunakan remove event listener
//         // window.addEventListener('keydown', function (e) {
//         //     console.log(e.code);
//         // });

//         //cleanup function
//         // return () => {
//         //     console.log('Detaching');
//         //     window.removeEventListener('scroll', updateScrollPosition);
//         // };
//     }, []);

//     return (
//         <div className={'h-[4000px]'}>
//             <Input value={name} onChange={(e) => setName(e.target.value)} />
//             <Button onClick={() => setOnline((online) => !online)}>Set Online</Button>
//         </div>
//     );
// }

//AJAX dan API
function App(props) {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            setLoading(true);
            // const { data } = await axios('https://jsonplaceholder.typicode.com/users');
            // const data = await response.json();
            // console.log(data);

            //Dengan axios
            // setUsers(data);

            //Try catch
            try {
                const { data } = await axios('https://jsonplaceholder.typicode.com/users');
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.log('something went wrong.');
                setLoading(false);
            }
        }
        getUsers().then((r) => r);
    }, []);

    return (
        <PleaceContentCenter>
            <Card>
                <Card.Tittle>Users: {users.length}</Card.Tittle>
                <Card.Body>
                    {/* Loading Views */}
                    {loading ? (
                        <div>Loading ....</div>
                    ) : (
                        <ol>
                            {users.map((users) => (
                                <li key={users.id}>
                                    {users.name} ({users.username})
                                </li>
                            ))}
                        </ol>
                    )}

                    {/* {users.length ? (
                        <ol>
                            {users.map((users) => (
                                <li key={users.id}>
                                    {users.name} ({users.username})
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <div>There are no users.</div>
                    )} */}
                </Card.Body>
            </Card>
        </PleaceContentCenter>
    );
}

// const tittle = () => (
//     <>
//     <h1>Hello World!!</h1>
//     <h4>Welcome</h4>
//     </>
// )

export default App;
