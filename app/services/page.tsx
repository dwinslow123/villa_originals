const ServicesPage = () => {
    return (
        <main className={`container mx-auto p-6`}>
            <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
            <div className="w-full max-w-4xl mx-auto">
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold">Haircuts & Styling</h2>
                    <p className={`text-gray-700 mb-12 italic`}>
                        Professional haircuts and styling for men, women, and children. Our stylists are trained in the latest trends and techniques to give you the perfect look.
                    </p>
                    <ul className={`mt-10 text-gray-700 list-disc list-inside`}>
                        <li>Haircut no blowdry</li>
                        <li>Haircut with blowdry</li>
                        <li>Haircut, Touchup and blowdry</li>
                        <li>Blowouts</li>
                        <li>Blowout and curls</li>
                        <li>Updos</li>
                        <li>Perms</li>
                    </ul>
                </section>
                <div className="border-b border-gray-200 mb-12"></div>
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold">Color Services</h2>
                    <p className="text-gray-700 mb-12 italic">
                        From highlights to full color, we offer a variety of color services to enhance your natural beauty. Our colorists use high-quality products to ensure vibrant and long-lasting results.
                    </p>
                    <ul className="mt-10 text-gray-700 list-disc list-inside">
                        <li>Highlights</li>
                        <li>Balayage</li>
                        <li>Ombre</li>
                        <li>Full Color</li>
                        <li>Color Correction</li>
                    </ul>
                </section>
                <div className="border-b border-gray-200 mb-12"></div>
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold">Special Treatments</h2>
                    <p className="text-gray-700 mb-12 italic">
                        Treat your hair to our special treatments including deep conditioning, keratin treatments, and scalp treatments designed to nourish and revitalize your hair.
                    </p>
                    <ul className="mt-10 text-gray-700 list-disc list-inside">
                        <li>Deep Conditioning</li>
                        <li>Keratin Treatments</li>
                        <li>Scalp Treatments</li>
                    </ul>
                </section>
            </div>
        </main >
    );
};

export default ServicesPage;