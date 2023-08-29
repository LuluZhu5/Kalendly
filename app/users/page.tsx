'use client';

import Button from '@/app/components/Button';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Users: React.FC = () => {
    const { data: session } = useSession();

    const handleAddBooking = () => {
        console.log(session?.user?.id);
    };

    return (
        <div>
            <div className="pt-[100px]">
                <Button type="button" onClick={handleAddBooking}>
                    Add a booking
                </Button>
                <Link href={`${session?.user?.id}/add-booking`}>
                    Add a booking
                </Link>
            </div>
        </div>
    );
};

export default Users;
