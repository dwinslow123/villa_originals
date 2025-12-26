import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
    subsets: [ 'latin' ],
    weight: [ '400' ],
});

/** Main Nav Component */
const Nav = () => {

    return (
        <nav className="flex flex-col md:flex-row items-center p-8 border-b border-gray-200 w-full justify-between gap-8">
            <h1 className={`${pacifico.className} text-3xl font-bold mb-4 sm:mb-0`}>
                <Link href="/">Villa Originals</Link>
            </h1>
            <ul className="flex text-2xl text-gray-700 space-x-8 font-semibold">
                <li className="hover:text-gray-900">
                    <Link href="/services">Services</Link>
                </li>
                {process.env.NODE_ENV !== 'production' && <><li className="hover:text-gray-900">
                    <Link href="/team">Team</Link>
                </li><li className="hover:text-gray-900">
                        <Link href="/contact">Contact</Link>
                    </li></>}
            </ul>
        </nav>
    );
};

export default Nav;
