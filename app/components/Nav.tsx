import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
    subsets: [ 'latin' ],
    weight: [ '400' ],
});

const Nav = () => {

    return (
        <nav className="flex flex-col md:flex-row items-center justify-between p-6 border-b border-gray-200">
            <h1 className={`${pacifico.className} text-3xl font-bold mb-4 sm:mb-0`}>Villa Originals</h1>
            <ul className="flex text-2xl space-x-8 text-gray-700 font-semibold">
                <li className="hover:text-gray-900">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:text-gray-900">
                    <Link href="/services">Services</Link>
                </li>
                <li className="hover:text-gray-900">
                    <Link href="/team">Team</Link>
                </li>
                <li className="hover:text-gray-900">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
