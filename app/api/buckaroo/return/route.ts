import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
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

    // Redirect to our confirmation page
    return NextResponse.redirect(
        new URL(`/donatie/bevestiging?status=${status}`, request.url)
    );
}

// Also handle GET requests for direct browser access
export async function GET(request: NextRequest) {
    const searchParams = new URL(request.url).searchParams;
    const status = searchParams.get('status') || 'success';
    
    // Validate status to prevent unknown values
    if (!['success', 'error', 'reject', 'pending', 'cancel'].includes(status)) {
        return NextResponse.redirect(
            new URL('/donatie/bevestiging?status=error', request.url)
        );
    }
    
    return NextResponse.redirect(
        new URL(`/donatie/bevestiging?status=${status}`, request.url)
    );
} 