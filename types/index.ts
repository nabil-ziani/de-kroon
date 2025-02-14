export type Event = {
    id: string;
    title: string;
    start: Date;
    end: Date;
    audience: 'man' | 'vrouw' | 'gemengd';
    location: string;
    description: string;
    url?: string;
    maxParticipants: number;
}; 