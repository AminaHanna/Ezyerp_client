import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../External Files/Toast/toast';
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import officeIcon from "../External Files/Icons/left-and-right.png";
import { useAuth } from './Auth/AuthContext';
import { loginUser } from '../External Files/api/api';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [officecode, setOfficecode] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { login } = useAuth();


    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
    
        const formdata = [
            { key: "username", value: username },
            { key: "password", value: password },
            { key: "officecode", value: officecode },
        ];
        try {
            const response =await loginUser(formdata);
            successToast('Login Succeffull !');
            login();
            navigate('/counter');
    
        } catch (err) {
            setError('An error occurred. Please try again later.');
            console.error('Error:', err);
            errorToast(err);
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Login
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="officecode" className="block text-sm font-medium leading-6 text-gray-900">
                            Office Code
                        </label>
                        <div className="mt-2 relative">
                            <span className="absolute p-1 mt-2 left-3">
                                <img className='w-4' src={officeIcon} alt="Office Icon" />
                            </span>
                            <input
                                id="officecode"
                                name="officecode"
                                type="text"
                                placeholder='Code'
                                value={officecode}
                                onChange={(e) => setOfficecode(e.target.value)}
                                required
                                className="block w-full px-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Username
                        </label>
                        <div className="mt-2 relative">
                            <span className="absolute p-1 mt-2 left-3">
                                <FaRegUser />
                            </span>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                placeholder='Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="block w-full px-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2 relative">
                            <span className="absolute p-1 mt-2 left-3">
                                <MdLockOutline />
                            </span>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="current-password"
                                className="block w-full px-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login
                        </button>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default SignIn;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { errorToast, successToast } from '../External Files/Toast/toast';
// import { FaRegUser } from "react-icons/fa";
// import { MdLockOutline } from "react-icons/md";
// import officeIcon from "../External Files/Icons/left-and-right.png";
// import axios from 'axios';
// import { useAuth } from './Auth/AuthContext';

// function SignIn() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [officecode, setOfficecode] = useState('');
//     const navigate = useNavigate();
//     const [error, setError] = useState('');
//     const { login } = useAuth();


//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');
    
//         try {
//             const formdata = new FormData();
//             formdata.append("username", username);
//             formdata.append("password", password);
//             formdata.append("officecode", officecode);
    
//             const response = await axios.post('http://app.ezyerp.live/login.php', formdata, {
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                     'Accept': 'application/json',
//                 },
//             });
    
//             const { flag, msg } = response.data;
    
//             if (flag) {
//                 successToast('Login successful!');
//                 login();
//                 navigate('/counter');
//             } else {
//                 setError(msg || 'Login failed. Please try again.');
//                 errorToast(msg || 'Login failed. Please try again.');
//             }
    
//         } catch (err) {
//             setError('An error occurred. Please try again later.');
//             console.error('Error:', err);
//             errorToast('An error occurred. Please try again later.');
//         }
//     };


//     // const handleLogin = async (e) => {
//     //     e.preventDefault();
//     //     setError('');

//     //  try {

//     //         const formdata = new FormData();
//     //         formdata.append("username", username);
//     //         formdata.append("password", password);
//     //         formdata.append("officecode", officecode);

//     //         console.log('Form Data:', { username, password, officecode });

//     //         const response = await axios.post('http://app.ezyerp.live/login.php', formdata, {
//     //             headers: {
//     //                 'Content-Type': 'application/x-www-form-urlencoded',
//     //                 'Accept': 'application/json',
//     //             },
//     //         });
    
//     //         console.log(response.data);
//     //         successToast('Login successful!');
//     //         // navigate('/admin')

  
//     //     } catch (err) {
//     //         setError(err.message || 'Login failed');
//     //         console.error('Error:', err);
//     //     } 
//     // };

//     return (
//         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//             <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                 <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//                     Login
//                 </h2>
//             </div>

//             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                 <form onSubmit={handleLogin} className="space-y-6">
//                     <div>
//                         <label htmlFor="officecode" className="block text-sm font-medium leading-6 text-gray-900">
//                             Office Code
//                         </label>
//                         <div className="mt-2 relative">
//                             <span className="absolute p-1 mt-2 left-3">
//                                 <img className='w-4' src={officeIcon} alt="Office Icon" />
//                             </span>
//                             <input
//                                 id="officecode"
//                                 name="officecode"
//                                 type="text"
//                                 placeholder='Code'
//                                 value={officecode}
//                                 onChange={(e) => setOfficecode(e.target.value)}
//                                 required
//                                 className="block w-full px-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
//                             Username
//                         </label>
//                         <div className="mt-2 relative">
//                             <span className="absolute p-1 mt-2 left-3">
//                                 <FaRegUser />
//                             </span>
//                             <input
//                                 id="username"
//                                 name="username"
//                                 type="text"
//                                 placeholder='Username'
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 required
//                                 className="block w-full px-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <div className="flex items-center justify-between">
//                             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                                 Password
//                             </label>
//                             <div className="text-sm">
//                                 <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                                     Forgot password?
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="mt-2 relative">
//                             <span className="absolute p-1 mt-2 left-3">
//                                 <MdLockOutline />
//                             </span>
//                             <input
//                                 id="password"
//                                 name="password"
//                                 type="password"
//                                 placeholder='Password'
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                                 autoComplete="current-password"
//                                 className="block w-full px-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <button
//                             type="submit"
//                             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                         >
//                             Login
//                         </button>
//                     </div>
//                     {error && <p style={{ color: 'red' }}>{error}</p>}
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default SignIn;
