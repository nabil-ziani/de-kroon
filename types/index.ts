export type Course = {
    title: string;
    level: string;
    description: string;
    image: string;
    slug: string;
    gradient: string;
};

export type Event = {
    id: string;
    title: string;
    start: Date;
    end: Date;
    audience: 'man' | 'vrouw' | 'gemengd';
    location: string;
    description: string;
    maxParticipants: number;
}; 