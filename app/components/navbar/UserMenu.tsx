'use client';

import {
    useState,
    useCallback,
    useEffect,
    useRef,
    ReactComponentElement,
    ReactElement,
} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import { signOut } from 'next-auth/react';

function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const handleClickOutside = (event: { target: any }) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3" ref={dropdownRef}>
                <div
                    onClick={() => {}}
                    className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100"
                >
                    Your Schedules
                </div>
                <div
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem
                                onClick={() => {}}
                                label="User Settings"
                            />
                            <MenuItem
                                onClick={() => signOut()}
                                label="Logout"
                            />
                        </>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserMenu;
