import Hero from "@/components/hero";
import PrayerTimes from "@/components/prayer-times";
import CourseSection from "@/components/course-section";
import VolunteerSection from "@/components/volunteer-section";
import LiveSection from "@/components/live-section";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />

      {/* Prayer Times Section */}
      <section id="prayer-times" className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            Gebedstijden
          </h2>
          <PrayerTimes />
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            Onze Cursussen
          </h2>
          <CourseSection />
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            Vrijwilligerskansen
          </h2>
          <VolunteerSection />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Live Section */}
      <section id="live" className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            Live Streaming
          </h2>
          <LiveSection />
        </div>
      </section>
    </main>
  );
}
