'use client';

import Hero from "@/components/hero";
import PrayerTimes from "@/components/prayer-times";
import CourseSection from "@/components/course-section";
import LiveSection from "@/components/live-section";
import CTASection from "@/components/cta-section";
import { nlBE } from "date-fns/locale";
import { format } from 'date-fns';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />

      {/* Prayer Times Section */}
      <section id="prayer-times" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-16">
            <h2 className="text-5xl mb-4 text-gray-800">
              <span className="text-6xl font-bold">Gebedstijden</span>
            </h2>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <p className="text-xl text-gray-500">
                {format(new Date(), 'EEEE d MMMM yyyy', { locale: nlBE }).charAt(0).toUpperCase() +
                  format(new Date(), 'EEEE d MMMM yyyy', { locale: nlBE }).slice(1)}
                ,{" "} <span className="font-bold">Borgerhout</span>
              </p>

              <a
                href="https://mawaqit.net/en/moskee-ennassr-borgerhout-2140-belgium"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-crown/10 text-crown rounded-lg text-sm hover:bg-crown/20 transition-colors"
              >
                Moskee Ennassr
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </div>
          </div>

          <PrayerTimes />

          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-600">
                Dit zijn indicatieve gebedstijden voor Borgerhout. Voor de exacte gebedstijden van <b>Moskee Ennassr</b>,
                kunt u terecht op hun{' '}
                <a
                  href="https://mawaqit.net/en/moskee-ennassr-borgerhout-2140-belgium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crown hover:underline font-bold"
                >
                  mawaqit pagina
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-16">
            <h2 className="text-5xl mb-4 text-gray-800">
              <span className="text-6xl font-bold">Cursussen</span>
            </h2>
            <p className="text-xl text-gray-500">
              We bieden verschillende cursussen aan voor iedereen.
            </p>
          </div>
          <CourseSection />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Live Section */}
      <section id="live" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-16">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <h2 className="text-5xl mb-4 text-gray-800">
                <span className="text-6xl font-bold">Live</span>
              </h2>
              <div className="inline-flex items-center bg-crown/10 text-crown px-4 py-2 rounded-lg text-sm font-medium">
                Binnenkort beschikbaar
              </div>
            </div>
            <p className="text-xl text-gray-500">
              Volg onze diensten en lezingen live via de stream
            </p>
          </div>
          <LiveSection />
        </div>
      </section>
    </main>
  );
}
