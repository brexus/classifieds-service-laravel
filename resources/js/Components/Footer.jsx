export default function Footer({ className = "", ...props }) {
    return (
        <footer
            {...props}
            className="bg-[#cbf7ee] rounded-lg shadow dark:bg-gray-900 mt-auto"
        >
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="/"
                        class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="./img/oly.png"
                            class="h-8"
                            alt="Flowbite Logo"
                        />
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">
                                O nas
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">
                                Polityka prywatności
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">
                                Licencje
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-black sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <a href="/" class="hover:underline">
                        OLY
                    </a>{" "}
                    Szymon Wierzchoś - Strona powstała wyłącznie w celach edukacyjnych.
                </span>
            </div>
        </footer>
    );
}
