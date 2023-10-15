import Container from '../Container';
import Logo from './Logo';
import NewBooking from './NewBooking';
import UserMenu from './UserMenu';

interface NavbarProps {
    newBooking?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ newBooking }) => {
    return (
        <div className="w-full bg-white shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-3">
                        <Logo />
                        {newBooking && <NewBooking />}
                        <UserMenu />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
