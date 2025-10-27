import { Stylist } from '@/app/lib/definitions';

/** StylistCard Component to display stylist information */
const StylistCard = ({ stylist }: { stylist: Stylist }) => {
    return (
        <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
            <img
                src={stylist.photo}
                alt={stylist.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{stylist.name}</h3>
            <p className="text-gray-600">{stylist.description}</p>
        </div>
    );
};

export default StylistCard;