import prisma from '@/app/libs/prismadb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const uid = params.id;
        const user = await prisma.user.findUnique({
            where: { id: uid },
        });
        return NextResponse.json(user);
    } catch (error: any) {
        console.log(error, 'GET_USER_ERROR');
        return new NextResponse('Internal Error', { status: 500 });
    }
}
