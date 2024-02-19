import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import Category from "@/Components/Category";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Strona Główna" />
            <div className="min-h-screen flex flex-col justify-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-[#23e5db] selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route("ads.index")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-[#23e5db]"
                        >
                            Moje OLY
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-[#23e5db]"
                            >
                                Zaloguj się
                            </Link>

                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-[#23e5db]"
                            >
                                Rejestracja
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-7xl p-6 lg:p-8 mx-auto">
                    <div className="flex justify-center pb-10">
                        <img
                            src="img/oly.png"
                            alt=""
                            className="h-16 w-auto bg-gray-100 dark:bg-gray-900"
                        />
                    </div>

                    <Category></Category>


                    {/* <img className=" rounded-md" src="/shop_main.jpg" alt="" /> */}
              
                </div>

                <div className="mt-auto">
                    <div className="bg-[#002f34] dark:bg-gray-900 mt-auto">
                        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex flex-row justify-center items-center">
                            <img src="/svg/people.svg" alt="" className="h-[70px] pr-5"/>
                            <h2 className="text-center text-bold font-bold text-xl text-white">Dołącz do społeczności OLY!</h2>
                        </div>
    
                    </div>

                    <Footer></Footer>
                </div>             
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
