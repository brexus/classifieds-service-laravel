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
            <Head title={ad.title} />


            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-10 mt-10 bg-white dark:bg-gray-800 sm:rounded-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4 ">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] bg-gray-300 dark:bg-gray-700 mb-4 flex justify-center align-items-center sm:rounded-sm">
                                <img className="w-full p-20 object-contain " src="/img/oly.png" alt="Product Image" />
                            </div>
                        </div>

                        <div className="md:flex-1 px-4 flex flex-col justify-center align-items-center">
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{ad.title}</h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    {/* <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">Cena:</span> */}
                                    <span className="text-3xl font-bold text-gray-600 dark:text-gray-300"> {ad.amount} zł</span>
                                </div>
                            </div>

                            <div className="flex mb-1 mt-3">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Lokalizacja:</span>
                                    <span className="text-gray-600 dark:text-gray-300"> {ad.location}</span>
                                </div>
                            </div>

                            <div className="flex mb-1">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Stan:</span>
                                    <span className="text-gray-600 dark:text-gray-300"> {ad.state}</span>
                                </div>
                            </div>

                            <div className='mt-8'>
                                <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">Opis:</span>
                                <p className="text-md text-gray-600 dark:text-gray-300 mt-2">
                                    {ad.description}
                                </p>
                            </div>



                            <div className="py-10">
                                {auth.user.id == ad.user_id ? (
                                    <>
                                        <a href={route('ad.edit', ad.id)}
                                            className="h-max focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                            onclick="return confirm('Jesteś pewien?')"
                                            title="Skasuj"> Edytuj
                                        </a>
                                        <a href={route('ad.delete', ad.id)}
                                            className="h-max focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                            onclick="return confirm('Jesteś pewien?')"
                                            title="Skasuj"> Usuń
                                        </a>
                                    </>
                                ) : (
                                    <></>
                                )}

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