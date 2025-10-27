
import { Pacifico } from 'next/font/google';
import Phone from '@/public/phone.svg';
import MapPin from '@/public/map_pin.svg';
import Instagram from '@/public/instagram.svg';
import Facebook from '@/public/facebook.svg';

const pacifico = Pacifico({
    subsets: [ 'latin' ],
    weight: [ '400' ],
});

const Footer = () => {
    return (
        <footer id="footer" className="bg-gray-800 text-white p-6 flex flex-col items-center lg:flex-row lg:justify-between space-y-4 lg:space-y-0 lg:h-40">
            <div className="mb-4 text-center border-b border-gray-700 pb-4 w-2/3 lg:border-0 lg:pb-0 lg:w-auto">
                <h2 className={`${pacifico.className} text-3xl font-bold hidden md:inline-block`}>
                    Villa Originals
                </h2>
                <div className="flex space-x-4 justify-center mt-4">
                    <a href="https://instagram.com/villa_originals" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center space-x-2">
                        <Instagram width={20} height={20} className="fill-current" />
                        <p>
                            Follow us on Instagram
                        </p>
                    </a>
                    <a href="https://facebook.com/VillaOriginals" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center space-x-2">
                        <Facebook width={20} height={20} className="fill-current" />
                        <p>
                            Follow us on Facebook
                        </p>
                    </a>
                </div>
            </div>
            <div className="flex flex-col space-y-2 text-center md:text-left">
                <p className="flex items-center space-x-2">
                    <Phone width={24} height={24} className="fill-white" />
                    <a href="tel:6308336777" className="hover:text-gray-400">(630) 833-6777</a>
                </p>
                <p className="flex items-center space-x-2 justify-center md:justify-start">
                    <MapPin width={24} height={24} className="fill-white" />
                    <span>26 South Villa Avenue, Villa Park IL, 60181</span>
                </p>
            </div>
            <p className="lg:border-0 lg:w-auto text-center lg:text-right border-t border-gray-700 pt-4 w-2/3">&copy; {new Date().getFullYear()} Villa Originals. All rights reserved.</p>
        </footer >
    );
};

export default Footer;