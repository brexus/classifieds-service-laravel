import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Ads({ auth, ads }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Wszystkie ogłoszenia
                </h2>
            }
        >
            <Head title="Ogłoszenia" />

            
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-10">
                <div className="text-black md:p-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 items-start ">
                    {ads.map((el, index) => (
                        <a href={route('ads.show', el.id)}>
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
                        </a>
                    ))}
                </div>
            </div>

            
        </AuthenticatedLayout>
    );
}
