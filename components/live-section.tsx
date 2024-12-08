import { FaPlay, FaCalendarAlt, FaClock, FaExpand, FaCompress, FaYoutube } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const CHANNELS = {
    dekroon: 'UW_KANAAL_ID',
    // andere: 'KANAAL_ID',
};

export default function LiveSection() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isLive, setIsLive] = useState(false);
    const [activeChannel, setActiveChannel] = useState<keyof typeof CHANNELS>('dekroon');
    const videoContainerRef = useRef<HTMLDivElement>(null);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            videoContainerRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    // Check of er een stream live is
    useEffect(() => {
        const checkLiveStatus = async () => {
            try {
                // Check alle kanalen
                for (const [key, channelId] of Object.entries(CHANNELS)) {
                    const response = await fetch(`https://www.youtube.com/channel/${channelId}/live`);
                    if (response.status === 200) {
                        setIsLive(true);
                        setActiveChannel(key as keyof typeof CHANNELS);
                        return;
                    }
                }
                setIsLive(false);
            } catch (error) {
                console.error('Error checking live status:', error);
                setIsLive(false);
            }
        };

        checkLiveStatus();
        const interval = setInterval(checkLiveStatus, 60000); // Check elke minuut

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
                {/* Live Stream Preview */}
                <div
                    ref={videoContainerRef}
                    className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden relative shadow-lg min-h-full ${isFullscreen ? '!bg-black' : ''}`}
                >
                    <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent ${isFullscreen ? 'hidden' : ''}`} />
                    <div className="absolute inset-0">
                        {isLive ? (
                            <div className="relative h-full">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/live_stream?channel=${CHANNELS[activeChannel]}&autoplay=1&mute=1`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                {/* Kanaal indicator */}
                                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                    {activeChannel === 'dekroon' ? 'De Kroon' : 'Andere Moskee'}
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex items-center justify-center p-12">
                                <div className="text-center relative z-10">
                                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
                                        <FaYoutube className="w-8 h-8 text-white ml-1" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Volgende uitzending</h3>
                                    <div className="inline-flex items-center justify-center gap-6 bg-black/30 backdrop-blur-sm text-white/90 px-8 py-4 rounded-xl">
                                        <div className="flex items-center gap-2">
                                            <FaCalendarAlt className="w-5 h-5" />
                                            <span className="text-lg">Vrijdag</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaClock className="w-5 h-5" />
                                            <span className="text-lg">19:30</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Fullscreen button */}
                    <button
                        onClick={toggleFullscreen}
                        className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 p-3 rounded-lg transition-all duration-300 text-white/80 hover:text-white z-30"
                    >
                        {isFullscreen ? <FaCompress size={20} /> : <FaExpand size={20} />}
                    </button>
                </div>

                {/* Schedule & Info */}
                <div>
                    <div className="space-y-6">
                        {/* Live Status */}
                        {isLive && (
                            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 shadow-lg mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                                    <span className="text-white font-bold">LIVE</span>
                                </div>
                                <p className="text-white/90 mt-2">
                                    {activeChannel === 'dekroon'
                                        ? 'Onze uitzending is momenteel live.'
                                        : 'Er is een live uitzending van een andere moskee beschikbaar.'}
                                </p>
                            </div>
                        )}

                        {/* Upcoming Streams */}
                        <div className="space-y-4">
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-1">
                                            Vrijdagpreek
                                        </h4>
                                        <div className="flex items-center gap-4 text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <FaCalendarAlt className="w-4 h-4" />
                                                <span>Vrijdag 19:30</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="bg-crown/10 text-crown text-xs px-3 py-1 rounded-full font-medium">
                                        Wekelijks
                                    </span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-1">
                                            Ramadan Lezing
                                        </h4>
                                        <div className="flex items-center gap-4 text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <FaCalendarAlt className="w-4 h-4" />
                                                <span>Zaterdag 21:00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="bg-boy/10 text-boy text-xs px-3 py-1 rounded-full font-medium">
                                        Speciaal
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Archive Link */}
                        <Link
                            href="/archief"
                            className="block bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-800 mb-1">
                                        Bekijk eerdere uitzendingen
                                    </h4>
                                    <p className="text-gray-500 text-sm">
                                        Vrijdagpreken en lezingen terugkijken
                                    </p>
                                </div>
                                <div className="w-10 h-10 bg-crown/10 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                                    <FaPlay className="w-4 h-4 text-crown ml-0.5" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}