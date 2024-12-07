'use client';

import Hero from "@/components/hero";
import PrayerTimes from "@/components/prayer-times";
import CourseSection from "@/components/course-section";
import LiveSection from "@/components/live-section";
import CTASection from "@/components/cta-section";
import { nlBE } from "date-fns/locale";
import { useState } from "react";
import { format } from 'date-fns';

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

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
            <p className="text-xl text-gray-500">
              {format(currentDate, 'EEEE d MMMM yyyy', { locale: nlBE })}
            </p>
          </div>
          <PrayerTimes />
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
            <h2 className="text-5xl mb-4 text-gray-800">
              <span className="text-6xl font-bold">Live</span>
            </h2>
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
