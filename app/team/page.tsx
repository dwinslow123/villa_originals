import StylistCard from '@/app/components/StylistCard';

const TeamPage = () => {
    const stylists = [
        {
            id: 1,
            name: 'Jane Doe',
            description: 'Hair Stylist',
            photo: 'https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/villa_originals/person_placeholder.jpeg',
        },
        {
            id: 2,
            name: 'John Smith',
            description: 'Makeup Artist',
            photo: 'https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/villa_originals/person_placeholder.jpeg',
        },
        {
            id: 3,
            name: 'Emily Johnson',
            description: 'Nail Technician',
            photo: 'https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/villa_originals/person_placeholder.jpeg',
        },
        {
            id: 4,
            name: 'Michael Brown',
            description: 'Massage Therapist',
            photo: 'https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/villa_originals/person_placeholder.jpeg',
        },
        {
            id: 5,
            name: 'Sarah Wilson',
            description: 'Esthetician',
            photo: 'https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/villa_originals/person_placeholder.jpeg',
        },
        // Add more stylist objects as needed
    ];

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
                Meet our stylists!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stylists.map((stylist) => (
                    <StylistCard key={stylist.id} stylist={stylist} />
                ))}
            </div>
        </div>
    );
};

export default TeamPage;
