import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, usePage } from "@inertiajs/react";


export default function Adding({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        category: "",
        description: "",
        amount: "",
        state: "",
        location: "",
        agree: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post("adding");
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dodaj Ogłoszenie
                </h2>
            }
        >
            <Head title="Dodawanie Ogłoszenia" />

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-10 text-gray-900 dark:text-gray-100 ">
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight pb-10">
                    Dodawanie ogłoszenia
                </h2>

                <form
                    role="form"
                    onSubmit={submit}
                    // action="{{ route('store') }}" 
                    method="post" 
                    enctype="multipart/form-data"
                    id="comment-form"
                    
                    class="max-w-sm mx-auto"
                >
                    <div class="mb-5">
                        <label
                            for="title"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Tytuł
                        </label>
                        <input
                            type="text"
                            id="title"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Podaj tytuł..."
                            name="title"
                            min="1"
                            max="70"
                            value={data.title}
                            isFocused={true}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                    </div>

                    <div class="mb-5">
                        <label
                            for="category"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Wybierz kategorię
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={data.category}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) =>
                                setData("category", e.target.value)
                            }
                        >
                            <option></option>
                            <option>Motoryzacja</option>
                            <option>Nieruchomości</option>
                            <option>Dom i Ogród</option>
                            <option>Elektronika</option>
                            <option>Moda</option>
                            <option>Zwierzęta</option>
                            <option>Sport i Hobby</option>
                            <option>Literatura</option>
                        </select>
                    </div>

                    <div class="mb-5">
                        <label
                            for="description"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Opis
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={data.description}
                            rows="4"
                            min="1"
                            max="1000"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Podaj opis..."
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        ></textarea>
                    </div>

                    <div class="mb-5">
                        <label
                            for="amount"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Cena
                        </label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            min="0"
                            step="0.01"
                            value={data.amount}
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Podaj cenę..."
                            onChange={(e) => setData("amount", e.target.value)}
                        />
                    </div>

                    <div class="mb-5">
                        <label
                            for="state"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Stan
                        </label>
                        <select
                            id="state"
                            name="state"
                            value={data.state}
                            onChange={(e) => setData("state", e.target.value)}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option></option>
                            <option>Nowe</option>
                            <option>Używane</option>
                            <option>Uszkodzone</option>
                        </select>
                    </div>

                    <div class="mb-5">
                        <label
                            for="location"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Miasto
                        </label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            minLength={1}
                            maxLength={40}
                            value={data.location}
                            onChange={(e) =>
                                setData("location", e.target.value)
                            }
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Podaj miasto..."
                        />
                    </div>

                    {/* <div class="flex items-start mb-5">
                        <div class="flex items-center h-5">
                            <input
                                id="terms"
                                type="checkbox"
                                value={data.terms}
                                name="terms"
                                onChange={(e) =>
                                    setData("terms", e.target.value)
                                }
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            />
                        </div>

                        <label
                            for="terms"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            I agree with the{" "}
                            <a
                                href="#"
                                class="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                terms and conditions
                            </a>
                        </label>
                    </div> */}

                    {Object.keys(errors).length > 0 && (
                        <ul className="mx-auto max-w-7xl font-bold text-red-700 pb-5">
                            {Object.values(errors).map((error, index) => (
                                <li key={index} className="">{error}</li>
                            ))}
                        </ul>
                    )}

                    <button
                        type="submit"
                        class="text-white bg-[#002f34] hover:bg-[#012023] focus:ring-4 focus:outline-none focus:ring-[#064950] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Dodaj ogłoszenie
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

{
    /* <Head title="Ogłoszenie" />

<div className="py-12">
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
                <form role="form"  action="{{ route('store') }}" id="comment-form" method="post" enctype="multipart/form-data" >
                    <div class="box">
                        <div class="box-body">
                            <div class="form-group{{ $errors->has('message')?'has-error':'' }}" id="roles_box">
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Treść</label>
                                <textarea name="message" id="message" cols="20" rows="3" required class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Napisz komentarz..."></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="mt-10 flex justify-center">
                        <button type="submit" class="px-6 py-2 rounded bg-green-700">Dodaj ogłoszenie</button>
                    </div>
                </form> 

                <form role="form"  action="{{ route('store') }}" id="comment-form" method="post" enctype="multipart/form-data" class="max-w-sm mx-auto" >

                    <div class="mb-5">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tytuł</label>
                        <input type="text" id="title" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Tytuł..." required />
                    </div>

                    <div class="mb-5">
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wybierz kategorię</label>
                        <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Antyki i Kolekcje</option>
                            <option>Motoryzacja</option>
                            <option>Nieruchomości</option>
                            <option>Dom i Ogród</option>
                            <option>Elektronika</option>
                            <option>Moda</option>
                            <option>Rolnictwo</option>
                            <option>Zwierzęta</option>
                            <option>Dla Dzieci</option>
                            <option>Sport i Hobby</option>
                            <option>Muzyka i Edukacja</option>
                            <option>Zdrowie i Uroda</option>
                        </select>
                    </div>
                    
                    <div class="mb-5">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Opis</label>
                        <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    </div>

                    <div class="mb-5">
                        <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cena</label>
                        <input type="text" id="amount" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Tytuł..." required />
                    </div>

                    <div class="mb-5">
                        <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stan</label>
                        <select id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Nowe</option>
                            <option>Używane</option>
                            <option>Uszkodzone</option>
                        </select>
                    </div>

                    <div class="mb-5">
                        <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Miasto</label>
                        <input type="text" id="location" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Tytuł..." required />
                    </div>

                    <div class="flex items-start mb-5">
                        <div class="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        
                        <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                    </div>

                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Dodaj ogłoszenie
                    </button>
                </form>

            </div>
        </div>
    </div>
</div> */
}
