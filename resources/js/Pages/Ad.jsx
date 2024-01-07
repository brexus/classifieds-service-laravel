import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Ad({ auth, ad }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Ogłoszenie
                </h2>
            }
        >
            <Head title="Ogłoszeniaa" />


            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-10 mt-10 dark:bg-gray-800 shadow-sm sm:rounded-lg">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4 ">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 flex justify-center align-items-center">
                                <img className="w-full h-full object-cover rounded-lg" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
                            </div>
                        </div>

                        <div className="md:flex-1 px-4 flex flex-col justify-center align-items-center">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{ad.title}</h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Cena:</span>
                                    <span className="text-gray-600 dark:text-gray-300"> {ad.amount} zł</span>
                                </div>
                            </div>

                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Opis</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {ad.description}
                                </p>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </div>

        </AuthenticatedLayout>
    );
}

{/*             
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-10">
                <div className="text-black md:p-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 items-start ">
                    {ads.map((el, index) => (
                        <div className="grid grid-cols-1 grid-rows-[224px,160px] h-96 w-72 shadow-sm sm:rounded-lg dark:bg-gray-800 text-center text-white transform duration-200 hover:-translate-y-1 cursor-pointer">
                            <div className=" flex flex-col justify-center align-items-center">
                                <img className="h-full object-cover" src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1" alt="" />
                            </div>

                            <div className=" flex flex-col justify-center align-items-center px-5">
                                <h1 className="text-md">{el.title}</h1>
                                <h2 className=" text-sm font-semibold">{el.amount} zł</h2>
                                <h3 className=" text-sm font-semibold">{el.location}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}