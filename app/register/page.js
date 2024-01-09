'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { SERVER_URL } from '@/constants'
import { useRouter } from 'next/navigation'
import React from 'react'

const RegisterPage = () => {
    const router = useRouter()

    const registrationSubmit = (e) => {
        e.preventDefault()
        console.log('Registration button pressed')
        const formData = new FormData(e.target)
        const name = formData.get('name')
        const email = formData.get('email')
        const age = formData.get('age')
        const address = formData.get('address')
        const occupation = formData.get('occupation')
        const password = formData.get('password')
        const confirmPassword = formData.get('confirmPassowrd')
        if (password !== confirmPassword) {
            alert('Password and Confirm Password do not match')
            return
        }

        const data = {
            name,
            email,
            age,
            address,
            occupation,
            password
        }
        const serverUrl = SERVER_URL;
        // send data to server
        fetch(serverUrl + '/api/user/register', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                alert('Registration successful')
                setTimeout(() => {
                    router.replace('/login')
                }
                    , 1000)
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Registration failed')
            });
    }
    return (
        <div>
            <Navbar />
            <div className='my-24'>
                <h1 className='text-center font-medium text-2xl my-4'>Register Here</h1>
                <form onSubmit={registrationSubmit}>
                    <div className="flex flex-col items-center justify-center">
                        {/* name */}
                        <div className="flex flex-col items-start justify-center mt-4">
                            <label htmlFor="name" className='text-lg font-medium'>Name</label>
                            <input required type="name" name='name' id='name' className='border border-gray-300 rounded-md p-2 w-80' />
                        </div>
                        {/* email */}
                        <div className="flex flex-col items-start justify-center mt-4">
                            <label htmlFor="email" className='text-lg font-medium'>Email</label>
                            <input required type="email" name='email' id='email' className='border border-gray-300 rounded-md p-2 w-80' />
                        </div>
                        {/* age */}
                        <div className="flex flex-col items-start justify-center mt-4">
                            <label htmlFor="age" className='text-lg font-medium'>Age</label>
                            <input required type="age" name='age' id='age' className='border border-gray-300 rounded-md p-2 w-80' />
                        </div>

                        {/* address */}
                        <div className="flex flex-col items-start justify-center mt-4">
                            <label htmlFor="address" className='text-lg font-medium'>Address</label>
                            <input required type="address" name='address' id='address' className='border border-gray-300 rounded-md p-2 w-80' />
                        </div>
                        {/* occupation */}
                        <div className="flex flex-col items-start justify-center mt-4">
                            <label htmlFor="occupation" className='text-lg font-medium'>Occupation</label>
                            <input required type="occupation" name='occupation' id='occupation' className='border border-gray-300 rounded-md p-2 w-80' />
                        </div>
                        {/* password */}
                        <div className="flex flex-col items-start justify-center mt-4">
                            <label htmlFor="password" className='text-lg font-medium'>Password</label>
                            <input required type="password" name='password' id='password' className='border border-gray-300 rounded-md p-2 w-80' />
                        </div>
                        {/* confirm password */}
                        <div className="flex flex-col items-start justify-center mt-4">
                            <label htmlFor="confirmPassowrd" className='text-lg font-medium'>Confirm Password</label>
                            <input required type="password" name='confirmPassowrd' id='password' className='border border-gray-300 rounded-md p-2 w-80' />
                        </div>
                        <button type='submit' className='bg-blue-500 text-white rounded-md p-2 w-80 my-4'>Register</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default RegisterPage