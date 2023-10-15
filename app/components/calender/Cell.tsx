const Cell = ({
    className,
    onClick,
    children,
}: {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) => {
    return (
        <div onClick={onClick} className={className}>
            {children}
        </div>
    );
};

export default Cell;
