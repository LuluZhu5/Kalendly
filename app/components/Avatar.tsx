'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';

const Avatar = () => {
    return (
        <Image
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src="/images/placeholder.png"
        />
    );
};

export default Avatar;