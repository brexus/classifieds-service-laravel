import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import NavLink from '@/Components/NavLink';
import Footer from '@/Components/Footer';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-max fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>

            <Footer></Footer>
        </div>
    );

    // return (
    //     <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
    //         <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
    //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //                 <div className="flex justify-between h-16">
    //                     <div className="flex">
    //                         <div className="shrink-0 flex items-center">
    //                             <Link href="/">
    //                                 <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
    //                             </Link>
    //                         </div>

    //                         <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
    //                             <NavLink href={route('all')} active={route().current('dashboard')}>
    //                                 Ogłoszenia
    //                             </NavLink>

    //                             <NavLink href={route('create')} active={route().current('create')}>
    //                                 Dodaj ogłoszenie
    //                             </NavLink>
    //                         </div>
    //                     </div>

                        
    //                 </div>
    //             </div>

    //             <div className="">

    //             </div>
    //         </nav>


    //         <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
    //             {children}
    //         </div>
    //     </div>


    // );
}

