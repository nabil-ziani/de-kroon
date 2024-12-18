import { useState, useEffect } from 'react';
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    isSameMonth,
    isToday,
    startOfWeek,
    endOfWeek,
    isSameDay,
    addDays
} from 'date-fns';
import { nl } from 'date-fns/locale';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Event = {
    id: string;
    title: string;
    start: Date;
    end: Date;
    audience: 'man' | 'vrouw' | 'gemengd';
    location: string;
    description: string;
    maxParticipants: number;
};

interface CalendarProps {
    events: Event[];
    onEventClick: (event: Event) => void;
}

export default function Calendar({ events, onEventClick }: CalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isChangingMonth, setIsChangingMonth] = useState(false);
    const [calendarDays, setCalendarDays] = useState<Date[]>([]);

    useEffect(() => {
        const start = startOfMonth(currentDate);
        const end = endOfMonth(currentDate);

        // Get the start of the week for the first day of the month
        const firstDayOfMonth = startOfWeek(start, { weekStartsOn: 1, locale: nl });
        // Get the end of the week for the last day of the month
        const lastDayOfMonth = endOfWeek(end, { weekStartsOn: 1, locale: nl });

        // Create array of all days to display
        const days: Date[] = [];
        let day = firstDayOfMonth;

        while (isSameDay(day, lastDayOfMonth) || day < lastDayOfMonth) {
            days.push(day);
            day = addDays(day, 1);
        }

        setCalendarDays(days);
    }, [currentDate]);

    const goToPreviousMonth = () => {
        setIsChangingMonth(true);
        setCurrentDate(prev => subMonths(prev, 1));
        setTimeout(() => setIsChangingMonth(false), 300);
    };

    const goToNextMonth = () => {
        setIsChangingMonth(true);
        setCurrentDate(prev => addMonths(prev, 1));
        setTimeout(() => setIsChangingMonth(false), 300);
    };

    const getEventsForDay = (date: Date) => {
        return events.filter(event =>
            format(event.start, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
        );
    };

    const getCategoryColor = (category: Event['audience']) => {
        switch (category) {
            case 'man':
                return 'from-boy/90 to-boy/80';
            case 'vrouw':
                return 'from-girl/90 to-girl/80';
            case 'gemengd':
                return 'from-crown/90 to-crown/80';
        }
    };

    return (
        <div className="w-full">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-12 px-4 md:px-8">
                <button
                    onClick={goToPreviousMonth}
                    className="p-3 rounded-xl hover:bg-gray-50/80 transition-colors"
                    disabled={isChangingMonth}
                >
                    <FaChevronLeft className="w-4 h-4 text-gray-400" />
                </button>

                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {format(currentDate, 'MMMM yyyy', { locale: nl })}
                    </h2>
                </div>

                <button
                    onClick={goToNextMonth}
                    className="p-3 rounded-xl hover:bg-gray-50/80 transition-colors"
                    disabled={isChangingMonth}
                >
                    <FaChevronRight className="w-4 h-4 text-gray-400" />
                </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 md:gap-4 px-1 md:px-4">
                {/* Weekday Headers */}
                {['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'].map(day => (
                    <div key={day} className="text-center text-sm font-medium text-gray-400 tracking-wider mb-2 md:mb-4
                                            hidden md:block">
                        {day}
                    </div>
                ))}
                {/* Mobile Weekday Headers */}
                {['M', 'D', 'W', 'D', 'V', 'Z', 'Z'].map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-400 tracking-wider mb-2
                                            md:hidden">
                        {day}
                    </div>
                ))}

                {/* Calendar Days */}
                <div className={`col-span-7 grid grid-cols-7 gap-2 md:gap-4 transition-opacity duration-300 ${isChangingMonth ? 'opacity-0' : 'opacity-100'}`}>
                    {calendarDays.map((day) => {
                        const dayEvents = getEventsForDay(day);
                        const isCurrentMonth = isSameMonth(day, currentDate);
                        const isCurrentDay = isToday(day);
                        const hasEvents = dayEvents.length > 0;

                        return (
                            <div
                                key={day.toString()}
                                className={`relative min-h-[100px] md:min-h-[140px] rounded-2xl p-2 md:p-4 
                                            transition-all duration-300 backdrop-blur-sm origin-center
                                            hover:scale-[1.02] hover:-translate-y-1
                                            ${isCurrentMonth
                                        ? 'bg-gray-50/80 hover:bg-white hover:shadow-lg'
                                        : 'opacity-30 bg-gray-50/30'}`}
                                onClick={() => hasEvents && onEventClick(dayEvents[0])}
                            >
                                {/* Day Number */}
                                <div className={`absolute top-2 right-2 md:top-3 md:right-3 
                                                w-6 h-6 md:w-8 md:h-8 flex items-center justify-center
                                                rounded-lg transition-all duration-300
                                                ${isCurrentDay
                                        ? 'bg-crown text-white font-semibold shadow-lg'
                                        : hasEvents
                                            ? 'bg-white text-gray-800 font-medium shadow-md'
                                            : 'bg-white text-gray-600 shadow-sm'}`}>
                                    {format(day, 'd')}
                                </div>

                                {/* Events Preview */}
                                {hasEvents && (
                                    <div className="mt-8">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onEventClick(dayEvents[0]);
                                            }}
                                            className={`w-full text-left px-2 py-1.5 md:px-3 md:py-2 
                                                        rounded-xl text-white text-xs md:text-sm
                                                        bg-gradient-to-r ${getCategoryColor(dayEvents[0].audience)}
                                                        shadow-sm hover:shadow-md transition-all duration-300`}
                                        >
                                            <div className="font-medium line-clamp-1">{dayEvents[0].title}</div>
                                            <div className="text-[10px] md:text-xs opacity-80">
                                                {format(dayEvents[0].start, 'HH:mm')}
                                            </div>
                                        </button>

                                        {dayEvents.length > 1 && (
                                            <div className="text-xs text-gray-500 text-center mt-2 cursor-pointer hover:text-gray-800 transition-colors">
                                                +{dayEvents.length - 1} meer
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
} 