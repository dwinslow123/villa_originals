'use client';
import Link from 'next/link';
import Image from 'next/image';
import HairGallery from '@/app/components/HairGallery';

export default function Home() {
  const heroImageUrl = 'https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/villa_originals/placeholder_hero.jpeg';

  return (
    <main className="flex flex-col h-auto">
      <div className="flex items-center flex-col-reverse lg:flex-row justify-between lg:mb-0 gap-8 mb-12">
        <section className="text-center w-full">
          <p className="max-w-xl mx-auto mt-2 font-semi-bold text-gray-600 text-xl">
            Our customers are like family to us, and we enjoy listening to them and giving them quality service and style. <br />It's the type of salon and friendly atmosphere "Where everybody knows your name" and we look forward to meeting you!
          </p>
          <Link href="/contact">
            <button className="mt-6 px-6 py-3 border-2 border-gray-800 bg-white text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition hidden lg:inline-block">Get In Touch</button>
          </Link>
        </section>
        <section className="h-full text-center w-full">
          <Image
            src={heroImageUrl}
            alt="Salon Image"
            width={1200}
            height={1200}
          />
        </section>
      </div>
      <div className="text-center bg-gray-900 p-6 hidden md:block">
        <HairGallery />
      </div>
    </main>
  );
}
