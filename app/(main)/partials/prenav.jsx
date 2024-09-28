'use client'

import { XMarkIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'
import CustomBooking from "../../(form)/customBooking"

export default function Prenav() {
    const [isVisible , setVisible] = useState(true);
    const [isCustomBookingModalOpen, setIsCustomBookingModalOpen] = useState(false);
    const [formattedDate, setFormattedDate] = useState('');

    // Using useEffect to set the date only on the client-side after component mounts
    useEffect(() => {
        const date = new Date();
        const options = { weekday: 'long' }; // Get full name of the day (e.g., "Saturday")
        const dayName = date.toLocaleDateString('en-US', options);
        const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`; // Format date (e.g., "9/28/2024")
        setFormattedDate(`${dayName}, ${formattedDate}`);
    }, []); // Empty dependency array to ensure this runs once after component mounts

    const toggleCustomBookingModal = () => {
        setIsCustomBookingModalOpen(!isCustomBookingModalOpen);
    };

    return (
        <>
            {isVisible && (
                <div className="relative z-index5 isolate flex items-center pre--nav-- gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1" style={{backgroundColor:'#00ff92 !important'}}>
                    <div
                        aria-hidden="true"
                        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                    >
                        <div
                            style={{
                                clipPath:
                                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                            }}
                            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                        />
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                    >
                        <div
                            style={{
                                clipPath:
                                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                            }}
                            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <p className="text-sm leading-6 text-gray-900">
                            <strong className="font-semibold">{formattedDate}</strong>
                            <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            Explore the world with Menf International Tours - Your gateway to unforgettable adventures!
                        </p>
                        <a
                            style={{cursor : 'pointer'}}
                            className="book-custom-- flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                            onClick={toggleCustomBookingModal}
                        >
                            Custom booking <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                    <div className="flex flex-1 justify-end">
                        <button type="button" onClick={() => setVisible(false)} className="-m-3 p-3 focus-visible:outline-offset-[-4px] hide-prenav">
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon aria-hidden="true" className="h-5 w-5 text-gray-900" />
                        </button>
                    </div>
                </div>
            )}
            <CustomBooking isOpen={isCustomBookingModalOpen} onClose={() => setIsCustomBookingModalOpen(false)} />
        </>
    )
}
