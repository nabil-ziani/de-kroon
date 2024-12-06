export default function LiveSection() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Live Stream Preview */}
                <div className="bg-gray-900 rounded-xl overflow-hidden aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="bg-blue-600/90 text-white px-6 py-3 rounded-lg inline-block">
                                <p className="font-semibold">Volgende uitzending</p>
                                <p className="text-sm mt-1">Vrijdag 19:30 - Vrijdagpreek</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Schedule & Info */}
                <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                        Live Uitzendingen
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Volg onze diensten en lezingen live via de stream. Ideaal voor als u niet
                        naar de moskee kunt komen.
                    </p>

                    {/* Upcoming Streams */}
                    <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 shadow-md">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold text-blue-900">Vrijdagpreek</h4>
                                    <p className="text-sm text-gray-600">Vrijdag 19:30</p>
                                </div>
                                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                                    Wekelijks
                                </span>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-md">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="font-semibold text-blue-900">Ramadan Lezing</h4>
                                    <p className="text-sm text-gray-600">Zaterdag 21:00</p>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                                    Speciaal
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Archive Link */}
                    <a
                        href="/archief"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-6"
                    >
                        Bekijk eerdere uitzendingen
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
} 