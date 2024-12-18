import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();

        // Extract status from Buckaroo's response
        const transactionKey = data.get('brq_transactions') as string;
        const statusCode = data.get('brq_statuscode') as string;
        const statusMessage = data.get('brq_statusmessage') as string;

        console.log('Buckaroo return data:', {
            transactionKey,
            statusCode,
            statusMessage,
            allData: Object.fromEntries(data.entries())
        });

        // Map Buckaroo status codes to our status types
        let status = 'error'; // Default to error for unknown status codes

        switch (statusCode) {
            case '190':
                status = 'success';
                break;
            case '490':
            case '491':
            case '492':
                status = 'error';
                break;
            case '690':
                status = 'reject';
                break;
            case '790':
            case '791':
            case '792':
            case '793':
                status = 'pending';
                break;
            case '890':
            case '891':
                status = 'cancel';
                break;
        }

        // Use a relative URL for the redirect
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/donatie/bevestiging?status=${status}`, {
            status: 303 // Use 303 See Other for POST redirects
        });
    } catch (error) {
        console.error('Error processing Buckaroo return:', error);
        // Fallback redirect in case of error
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/donatie/bevestiging?status=error`, {
            status: 303
        });
    }
}

// Also handle GET requests for direct browser access
export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        const status = url.searchParams.get('status') || 'success';

        // Validate status to prevent unknown values
        if (!['success', 'error', 'reject', 'pending', 'cancel'].includes(status)) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/donatie/bevestiging?status=error`, {
                status: 303
            });
        }

        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/donatie/bevestiging?status=${status}`, {
            status: 303
        });
    } catch (error) {
        console.error('Error processing GET request:', error);
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/donatie/bevestiging?status=error`, {
            status: 303
        });
    }
} 