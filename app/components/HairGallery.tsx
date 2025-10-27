import Image from 'next/image';
import constants from '@/app/lib/constants';

/** HairGallery Component to display a gallery of hair styles */
const HairGallery = () => {
    const images = [
        constants.GALLERY_PLACEHOLDER_URL,
        constants.GALLERY_PLACEHOLDER_URL,
        constants.GALLERY_PLACEHOLDER_URL,
        constants.GALLERY_PLACEHOLDER_URL,
        constants.GALLERY_PLACEHOLDER_URL,
        constants.GALLERY_PLACEHOLDER_URL,
    ];

    return (
        <div className="my-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto justify-items-center">
                {images.map((image, index) => (
                    <div className="col-span-1 w-2/3" key={index}>
                        <Image
                            src={image}
                            alt={`Hair Style ${index + 1}`}
                            width={400}
                            height={400}
                            className="h-auto w-full rounded-lg hover:scale-98 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HairGallery;