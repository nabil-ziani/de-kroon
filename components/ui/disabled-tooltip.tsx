'use client';

import { ReactNode } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

interface DisabledTooltipProps {
    children: ReactNode;
    message?: string;
}

export default function DisabledTooltip({ children, message = 'Inschrijvingen zijn gesloten.' }: DisabledTooltipProps) {
    return (
        <Tooltip.Provider delayDuration={100}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <div className="w-full cursor-not-allowed">{children}</div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm max-w-xs text-center z-50 animate-in fade-in-0 zoom-in-95"
                        sideOffset={5}
                    >
                        {message}
                        <Tooltip.Arrow className="fill-gray-800" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
} 