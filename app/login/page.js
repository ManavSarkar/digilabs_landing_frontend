'use client'
import Announcement from '@/components/Announcement'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { SERVER_URL } from '@/constants'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginPage = () => {
    const router = useRouter();
    const loginBtnPressed = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const email = formData.get('email')
        const password = formData.get('password')

        const data = {
            email,
            password
        }
        const serverUrl = SERVER_URL;
        // send data to server
        fetch(serverUrl + '/api/user/login', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success === false) {
                    alert("Login failed")
                    return
                }
                alert('Login successful')
                localStorage.setItem('token', data.token)
                localStorage.setItem('user', JSON.stringify(data.user))
                setTimeout(() => {
                    router.replace('/')
                }
                    , 1000)
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Login failed')
            });
    }

    return (
        <div>
            {/* <Announcement message={"We are happy to announce that we raise $2 Million in Seed Funding"} /> */}
            <Navbar />
            <div className='my-24'>
                <h1 className='text-center font-medium text-2xl my-4'>Login Page</h1>
                <form onSubmit={loginBtnPressed}>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center mt-4">
                            <label htmlFor="email" className='text-lg font-medium'>Email</label>
                            <input type="email" name='email' id='email' className='border border-gray-300 rounded-md p-2 w-80' />
                        </div>
                        <div className="flex flex-col items-center justify-center mt-4">
                            <label htmlFor="password" className='text-lg font-medium'>Password</label>
                            <input type="password" name='password' id='password' className='border border-gray-300 rounded-md p-2 w-80' />
                        </div>
                        <button type='submit' className='bg-blue-500 text-white rounded-md p-2 w-80 my-4'>Login</button>
                    </div>
                </form>
                <Link href='/register'>
                    <p className='text-center text-blue-500'>Don't have an account? Register here</p>
                </Link>
            </div>
            <hr className="text-slate-400 w-full my-24" />

            <Footer />
        </div>
    )
}

export default LoginPage