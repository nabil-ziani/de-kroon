import { Metadata } from 'next';
import prisma from '@/lib/prisma';

import FundraisingPage from '@/components/fundraising/fundraising-page';

export const metadata: Metadata = {
    title: 'Inzameling | De Kroon',
    description: 'Help ons groeien, we zoeken 100 donateurs die elk €100 willen bijdragen.',
};

const CAMPAIGN_ID = 'dekroon-2025';
const CAMPAIGN_GOAL = 10000;

async function getTotalDonations() {
    const donations = await prisma.donation.findMany({
        where: {
            campaign: CAMPAIGN_ID,
            status: 'completed'
        },
        select: {
            amount: true
        }
    });

    return donations.reduce((sum, donation) => sum + donation.amount, 0);
}

async function getDonorCount() {
    const donors = await prisma.donation.count({
        where: {
            campaign: CAMPAIGN_ID,
            status: 'completed'
        }
    });

    return donors;
}

export default async function Page() {
    const totalDonated = await getTotalDonations();
    const donorCount = await getDonorCount();
    const progress = (totalDonated / CAMPAIGN_GOAL) * 100;

    return (
        <FundraisingPage
            totalDonated={totalDonated}
            progress={progress}
            campaignId={CAMPAIGN_ID}
            goal={CAMPAIGN_GOAL}
            donorCount={donorCount}
        />
    );
} 