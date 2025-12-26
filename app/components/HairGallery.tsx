import Image from 'next/image';
import constants from '@/app/lib/constants';

/** HairGallery Component to display a gallery of hair styles */
const HairGallery = () => {
    const images = [
        constants.GALLERY_1_URL,
        constants.GALLERY_2_URL,
        constants.GALLERY_3_URL,
        constants.GALLERY_4_URL,
        constants.GALLERY_5_URL,
        constants.GALLERY_6_URL,
    ];

    return (
        <div className="my-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto justify-items-center">
                {images.map((image, index) => (
                    <div key={index} className="relative w-2/3 h-64 md:h-80">
                        <Image
                            src={image}
                            alt={`Hair Style ${index + 1}`}
                            fill
                            className="object-fill"
                        />
                    </div>
                ))}

            </div>
        </div>
    );
};

export default HairGallery;