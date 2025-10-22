'use client';
import Image from 'next/image';
import HairGallery from '@/app/components/HairGallery';

export default function Home() {
  const heroImageUrl = 'https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/villa_originals/placeholder_hero.jpeg';

  const scrollToFooter = (id: string) => {
    const footerElement = document.getElementById(id);
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <main className="flex flex-col">
      <div className="flex items-center flex-col-reverse md:flex-row justify-between gap-8">
        <section className="text-center w-full">
          <p className="max-w-xl mx-auto mt-2 font-semi-bold text-gray-600 text-xl">
            Our customers are like family to us, and we enjoy listening to them and giving them quality service and style. <br />It's the type of salon and friendly atmosphere "Where everybody knows your name" and we look forward to meeting you!
          </p>
          <button onClick={() => scrollToFooter('footer')} className="mt-6 px-6 py-3 border-2 border-gray-800 bg-white text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition">Get In Touch</button>
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
      <footer id="footer" className="bg-gray-800 text-white p-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Villa Originals. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
