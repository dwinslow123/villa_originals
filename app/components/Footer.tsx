
import { Pacifico } from 'next/font/google';
import constants from '@/app/lib/constants';
import Phone from '@/public/phone.svg';
import MapPin from '@/public/map_pin.svg';
import Instagram from '@/public/instagram.svg';
import Facebook from '@/public/facebook.svg';

const pacifico = Pacifico({
    subsets: [ 'latin' ],
    weight: [ '400' ],
});

/** Footer Component */
const Footer = () => {
    return (
        <footer id="footer" className="bg-gray-800 text-white p-6 flex flex-col items-center lg:flex-row lg:justify-between space-y-4 lg:space-y-0 lg:h-40">
            <div className="mb-4 text-center border-b border-gray-700 pb-4 w-2/3 lg:border-0 lg:pb-0 lg:w-auto">
                <h2 className={`${pacifico.className} text-3xl font-bold hidden md:inline-block`}>
                    Villa Originals
                </h2>
                <div className="flex space-x-4 justify-center mt-4">
                    <a href={constants.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center space-x-2">
                        <Instagram width={20} height={20} className="fill-current" />
                        <p>
                            Follow us on Instagram
                        </p>
                    </a>
                    <a href={constants.FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center space-x-2">
                        <Facebook width={20} height={20} className="fill-current" />
                        <p>
                            Follow us on Facebook
                        </p>
                    </a>
                </div>
            </div>
            <div id="footer-contact" className="flex flex-col space-y-2 text-center md:text-left">
                <p className="flex items-center space-x-2">
                    <Phone width={24} height={24} className="fill-white" />
                    <a href={`tel:${constants.PHONE_NUMBER.replace(/\D/g, '')}`} className="hover:text-gray-400">{constants.PHONE_NUMBER}</a>
                </p>
                <p className="flex items-center space-x-2 justify-center md:justify-start">
                    <MapPin width={24} height={24} className="fill-white" />
                    <span>{constants.ADDRESS}</span>
                </p>
            </div>
            <p className="text-center lg:text-right">Built with love by <a className="underline" href="https://joywin.digital">JoyWin Digital</a></p>
        </footer>
    );
};

export default Footer;