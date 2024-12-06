'use client';

import Hero from "@/components/hero";
import PrayerTimes from "@/components/prayer-times";
import CourseSection from "@/components/course-section";
import VolunteerSection from "@/components/volunteer-section";
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
      <section id="prayer-times" className="py-24 bg-gradient-to-b from-white to-[#fff9e8]">
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
      <section id="courses" className="py-16 bg-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Onze Cursussen
          </h2>
          <CourseSection />
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 bg-gradient-to-b from-[#e8f4fb] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Vrijwilligerskansen
          </h2>
          <VolunteerSection />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Live Section */}
      <section id="live" className="py-16 bg-gradient-to-b from-[#e8f4fb] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Live Streaming
          </h2>
          <LiveSection />
        </div>
      </section>
    </main>
  );
}
