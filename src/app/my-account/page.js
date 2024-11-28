"use client"

import Image from 'next/image'
import { useState } from 'react'
import { FaUser, FaSearch, FaChevronDown, FaCoins, FaLock } from 'react-icons/fa'

export default function MyAccount() {
    const [isAccountOpen, setIsAccountOpen] = useState(false)

    const searches = [
        { name: 'VALENTINA', status: 'in-progress' },
        { name: 'LAURA', status: 'finished' },
        { name: 'STEASSY', status: 'finished' }
    ]

    return (
        <div className="min-h-screen bg-[#1C1C1C] text-white p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <img src="/Group 16.png" alt="Logo" className="h-8" />
                <button className="bg-[#DB4126] text-white px-6 py-2 rounded-full font-bold hover:bg-[#c13820] transition-colors">
                    Search
                </button>
            </div>

            {/* Account Section */}
            <div className="space-y-4 max-w-md mx-auto">
                <button
                    onClick={() => setIsAccountOpen(!isAccountOpen)}
                    className="w-full bg-[#EC543B] text-white p-4 rounded-lg flex items-center justify-between font-bold"
                >
                    <div className="flex items-center gap-4 text-[20px]">
                        <Image src='/profile.svg' alt='profile' width={14} height={17} />
                        My account
                    </div>
                    <Image src='/arrow-profile.svg' alt='arrow' width={16} height={13} />
                </button>

                {/* Credits Section */}
                <div className="bg-black border border-[#3E3E3E] rounded-lg p-4">
                    <div className="flex items-center gap-2 text-[20px] leading-[24px] font-bold mb-4">
                        <Image src='/coins.svg' alt='coins' width={17} height={17} />
                        My credits
                    </div>
                    <p className="ml-6 tracking-[-5%] text-white gotham-rounded mb-4">you currently have 2 credits</p>
                    <button className="ml-6 w-[250px] bg-[#DB4126] text-white p-3 text-[14px] rounded-lg flex items-center justify-center gap-2 font-bold hover:bg-[#c13820] transition-colors">
                        buy more credits
                        <Image src='/lock.svg' alt='lock' width={14} height={14} />
                    </button>
                </div>

                {/* Search Section */}
                <div className="bg-black border border-[#3E3E3E] rounded-lg p-4">
                    <div className="flex items-center gap-2 font-bold mb-4 text-white text-[20px] leading-[24px]">
                        <Image src='/user-search.svg' alt='user-search' width={17} height={17} />
                        My search
                    </div>
                    <div className="pb-10 ml-6 mt-8">
                        {searches.map((search) => (
                            <div
                                key={search.name}
                                className="pt-5 first:pt-0 border-b border-white pb-4 last:border-0 last:pb-0 flex justify-between items-center"
                            >
                                <span className="text-2xl leading-[38px] font-bold">{search.name}</span>
                                {search.status === 'in-progress' ? (
                                    <span className="bg-[#FFF7E9] text-[#F9BF28] flex items-center gap-1 text-xs px-3 py-1 rounded-full">
                                        <Image src='/user-search-yellow.svg' alt='user-search' width={8} height={8} /> In progress
                                    </span>
                                ) : (
                                    <span className="bg-[#E7FFF1] text-[#219653] flex items-center gap-1 text-xs px-3 py-1 rounded-full">
                                        <Image src='/checkbox.svg' alt='checkbox' width={8} height={8} />
                                        Finished
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

