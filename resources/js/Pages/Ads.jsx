import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Category from '@/Components/Category';

export default function Ads({ auth, ads, title }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={title} />

            
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-10">
                <Category></Category>

                <h2 className="text-center pt-10 font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight pb-10">
                    {title}
                </h2>

                

                <div className="text-black md:p-0 grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-10 items-start self-center justify-items-center">
                    {ads.map((el, index) => (
                        <a href={route('ads.show', el.id)}>
                            <div className="grid grid-cols-1 grid-rows-[224px,90px,70px] h-96 w-72 shadow-sm sm:rounded-lg text-center text-black bg-white transform duration-200 hover:-translate-y-1 cursor-pointer">
                                <div className=" flex flex-col justify-center align-items-center w-full h-full bg-gray-300">
                                    <img className="p-12 w-full" src="/img/OLY.png" alt="" />
                                </div>

                                <div className=" flex flex-col justify-center align-items-center px-5">
                                    <h1 className="text-md">{el.title}</h1>
                                    <h2 className=" text-sm font-semibold">{el.amount} zł</h2>
                                    <h3 className=" text-sm font-semibold">{el.location}</h3>
                                </div>

                                <div className="flex flex-row justify-center align-items-center">
                                    {auth.user.id == el.user_id ? (
                                        <>
                                            <a href={route('ad.edit', el.id)}
                                                className="h-max focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                onclick="return confirm('Jesteś pewien?')"
                                                title="Skasuj"> Edytuj
                                            </a>
                                            <a href={route('ad.delete', el.id)}
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
                        </a>
                    ))}
                </div>
            </div>

            
        </AuthenticatedLayout>
    );
}
