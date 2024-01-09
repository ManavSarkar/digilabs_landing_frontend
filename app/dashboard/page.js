'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const DashboardPage = () => {
    const [loggedIn, setloggedIn] = useState(false)
    const router = useRouter()
    const [userData, setUserData] = useState({})
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setloggedIn(true)
            const user = JSON.parse(localStorage.getItem('user'))
            setUserData(user)
        }
        else {
            router.replace('/login')
        }

    }, [])
    return (
        <div>
            <Navbar />
            <div className="my-48">
                <h1 className="text-4xl font-medium text-center">Welcome {userData.name}</h1>
                {/* display email, age, address, occupation from user data */}
                <div className="flex flex-col items-start justify-start m-8 max-w-xl mx-auto">


                    <div className="flex flex-row items-start justify-center mt-4">
                        <label htmlFor="email" className='text-lg font-medium mr-4'>Email</label>
                        <input type="email" name="email" id="email" className="border border-gray-400 w-96 p-2 rounded-lg" value={userData.email} disabled />
                    </div>

                    <div className="flex flex-row items-center justify-center mt-4">
                        <label htmlFor="age" className='text-lg font-medium mr-4'>Age</label>
                        <input type="age" name="age" id="age" className="border border-gray-400 w-96 p-2 rounded-lg" value={userData.age} disabled />
                    </div>

                    <div className="flex flex-row items-center justify-center mt-4">
                        <label htmlFor="address" className='text-lg font-medium mr-4'>Address</label>
                        <input type="address" name="address" id="address" className="border border-gray-400 w-96 p-2 rounded-lg" value={userData.address} disabled />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default DashboardPage