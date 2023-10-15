'use client';

import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link
            href={{
                pathname: `/users`,
            }}
        >
            <Image
                alt="Logo"
                className="hidden cursor-pointer md:block"
                height="100"
                width="100"
                src="/images/logo1.png"
            />
        </Link>
    );
};

export default Logo;
