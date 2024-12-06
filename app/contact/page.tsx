export default function ContactPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-blue mb-4">Neem Contact Op</h2>
            {/* Contact formulier */}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue mb-4">Locatie & Contact</h2>
            {/* Contact informatie en kaart */}
          </div>
        </div>
      </div>
    </main>
  );
} 