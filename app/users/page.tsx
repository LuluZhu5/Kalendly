'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Users: React.FC = () => {
    const { data: session } = useSession();

    return (
        <div>
            <div className="pt-[100px]">
                <Link href={`${session?.user?.id}/add-booking`}>
                    Add a booking
                </Link>
            </div>
        </div>
    );
};
