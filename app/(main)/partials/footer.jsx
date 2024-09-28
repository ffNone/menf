import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="  dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <Image src="/imgs/icons/main-logo.ico" width={32} height={32} className="h-8 me-3" alt="Menf International Tours Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap   txt-wrap main-white--"  >Menf International Tours</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase  ">Destinations</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/destinations/europe" className="hover:underline">Europe</Link>
                                </li>
                                <li>
                                    <Link href="/destinations/asia" className="hover:underline">Asia</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase  ">Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://facebook.com/menfinternationaltours" className="hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/menfinternationaltours" className="hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/terms-conditions" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between"  >
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <Link href="/" className="hover:underline">Menf International Tours™</Link>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0" style={{display : "flex" , alignItems :"center" , justifyContent : "center"}}>
                         
                        <a href="tel:+227926617" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" target="_blank" rel="noopener noreferrer">
                        
                            <i className="ph-fill ph-phone-transfer"style={{fontSize:"20px"}}></i>
                            <span className="sr-only">Phone</span>
                        </a>
                        <a href="https://wa.me/+201004500020" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" target="_blank" rel="noopener noreferrer">
                        
                            <i className="ph-fill ph-whatsapp-logo"style={{fontSize:"20px"}}></i>
                            <span className="sr-only">WhatsApp</span>
                        </a>
                        <a href="https://www.facebook.com/menf.fayoum" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" target="_blank" rel="noopener noreferrer">

                            <i className="ph-fill ph-facebook-logo" style={{fontSize:"20px"}}></i>
                            <span className="sr-only">Facebook page | Fayoum</span>
                            
                        </a>
                        <a href="https://www.facebook.com/menftoursmansoura" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" target="_blank" rel="noopener noreferrer">

                            <i className="ph-fill ph-facebook-logo" style={{fontSize:"20px"}}></i>
                            <span className="sr-only">Facebook page | Mansura</span>

                        </a>
                        <a href="https://www.facebook.com/Menftoursofficial" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" target="_blank" rel="noopener noreferrer">

                            <i className="ph-fill ph-facebook-logo" style={{fontSize:"20px"}}></i>
                            <span className="sr-only">Facebook page | Offical</span>

                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
}