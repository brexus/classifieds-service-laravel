export default function Category({ className = "", ...props }) {
    return (
        <>
            <h1 className=" font-bold text-2xl text-center pb-5">Kategorie</h1>
            <div             
                {...props}
                className="mt-auto max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-row flex-wrap justify-center items-center"
            >
                <div className="flex flex-col justify-center items-center p-3">
                    <a href={route("ads.index")} className=" rounded-full w-[90px] h-[90px] bg-red-500 flex justify-center items-center  hover:scale-105 hover:transition-all">
                        <img className="p-5"  src="/category/0.png" alt="" />
                    </a>
                    <h2 className="pt-3 font-bold">Wszystko</h2>
                </div>

                <div className="flex flex-col justify-center items-center p-3">
                    <a href={route('category.show', 1)} className=" rounded-full w-[90px] h-[90px] bg-blue-500 flex justify-center items-center object-contain hover:scale-105 hover:transition-all">
                        <img className="p-3" src="/category/1.png" alt="" />
                    </a>
                    <h2 className="pt-3 font-bold">Motoryzacja</h2>
                </div>

                <div className="flex flex-col justify-center items-center p-3">
                    <a href={route('category.show', 2)} className=" rounded-full w-[90px] h-[90px] bg-yellow-400 flex justify-center items-center hover:scale-105 hover:transition-all">
                        <img className="p-3" src="/category/2.png" alt="" />
                    </a>
                    <h2 className="pt-3 font-bold">Nieruchomości</h2>
                </div>

                <div className="flex flex-col justify-center items-center p-3">
                    <a href={route('category.show', 3)} className=" rounded-full w-[90px] h-[90px] bg-green-400 flex justify-center items-center hover:scale-105 hover:transition-all">
                        <img className="p-3" src="/category/3.png" alt="" />
                    </a>
                    <h2 className="pt-3 font-bold">Dom i Ogród</h2>
                </div>

                <div className="flex flex-col justify-center items-center p-5">
                    <a href={route('category.show', 4)} className=" rounded-full w-[90px] h-[90px] bg-orange-300 flex justify-center items-center hover:scale-105 hover:transition-all">
                        <img className="p-3" src="/category/4.png" alt="" />
                    </a>
                    <h2 className="pt-3 font-bold">Elektronika</h2>
                </div>

                <div className="flex flex-col justify-center items-center p-5">
                    <a href={route('category.show', 5)} className=" rounded-full w-[90px] h-[90px] bg-emerald-600 flex justify-center items-center object-contain hover:scale-105 hover:transition-all">
                        <img className="p-3" src="/category/5.png" alt="" />
                    </a>
                    <h2 className="pt-3 font-bold">Moda</h2>
                </div>

                <div className="flex flex-col justify-center items-center p-3">
                    <a href={route('category.show', 6)} className=" rounded-full w-[90px] h-[90px] bg-purple-400 flex justify-center items-center hover:scale-105 hover:transition-all">
                        <img className="p-3" src="/category/6.png" alt="" />
                    </a>
                    <h2 className="pt-3 font-bold">Zwierzęta</h2>
                </div>

                <div className="flex flex-col justify-center items-center p-3">
                    <a href={route('category.show', 7)} className=" rounded-full w-[90px] h-[90px] bg-gray-700 flex justify-center items-center hover:scale-105 hover:transition-all">
                        <img className="p-3" src="/category/7.png" alt="" />
                    </a>
                    <h2 className="pt-3 font-bold">Sport i Hobby</h2>
                </div>

                <div className="flex flex-col justify-center items-center p-3">
                    <a href={route('category.show', 8)} className=" rounded-full w-[90px] h-[90px] bg-indigo-500 flex justify-center items-center hover:scale-105 hover:transition-all">
                        <img className="p-3" src="/category/8.png" alt="" />
                    </a>
                    <h2 className="pt-3 font-bold">Literatura</h2>
                </div>

            </div>
        </>
    );
}
