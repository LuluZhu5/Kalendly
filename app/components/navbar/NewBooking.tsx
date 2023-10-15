'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

const NewBooking: React.FC = () => {
    const { data: session } = useSession();

    return (
        <div className="flex justify-center px-4 py-2 text-sm font-semibold rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600">
            <Link
                className="text-white"
                href={`${session?.user?.id}/add-booking`}
            >
                Add a booking
            </Link>
        </div>
    );
};

export default NewBooking;
