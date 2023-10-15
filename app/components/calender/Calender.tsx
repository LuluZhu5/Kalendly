import {
    startOfMonth,
    endOfMonth,
    differenceInDays,
    sub,
    add,
    format,
    setDate,
} from 'date-fns';
import Cell from './Cell';
import clsx from 'clsx';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface calenderProps {
    value?: Date;
    onChange?: (value: Date) => void;
}

const Calender: React.FC<calenderProps> = ({
    value = new Date(),
    onChange,
}) => {
    const startDate = startOfMonth(value);
    const endDate = endOfMonth(value);
    const numDays = differenceInDays(endDate, startDate) + 1;

    const prefixDays = startDate.getDay();
    const suffixDays = 6 - endDate.getDay();

    const prevMonth = () => onChange && onChange(sub(value, { months: 1 }));
    const nextMonth = () => onChange && onChange(add(value, { months: 1 }));
    const handleClickDate = (index: number) => {
        const date = setDate(value, index);
        onChange && onChange(date);
    };

    return (
        <div className="w-full border">
            <div className="grid items-center justify-center grid-cols-7 gap-4 text-center">
                <Cell className="col-span-6 py-2 border">
                    {format(value, 'LLLL yyyy')}
                </Cell>
                <div className="flex justify-around">
                    <Cell
                        className="w-full font-semibold cursor-pointer hover:bg-gray-100"
                        onClick={prevMonth}
                    >
                        {'<'}
                    </Cell>
                    <Cell
                        className="w-full font-semibold cursor-pointer hover:bg-gray-100"
                        onClick={nextMonth}
                    >
                        {'>'}
                    </Cell>
                </div>

                {daysOfWeek.map((day) => (
                    <Cell
                        key={day}
                        className="h-full py-1 text-sm font-semibold"
                    >
                        {day}
                    </Cell>
                ))}

                {Array.from({ length: prefixDays }).map((_, index) => {
                    const date = index + 1;
                    return (
                        <Cell key={date} className="h-full py-1 text-sm"></Cell>
                    );
                })}

                {Array.from({ length: numDays }).map((_, index) => {
                    const date = index + 1;
                    const selectedDay = date === value.getDate();

                    return (
                        <Cell
                            key={date}
                            className={clsx(
                                `h-full py-1 text-sm cursor-pointer `,
                                selectedDay
                                    ? 'bg-gray-800 text-white'
                                    : 'hover:bg-gray-100 active:bg-gray-300'
                            )}
                            onClick={() => handleClickDate(date)}
                        >
                            {date}
                        </Cell>
                    );
                })}

                {Array.from({ length: suffixDays }).map((_, index) => {
                    const date = index + 1;
                    return (
                        <Cell key={date} className="h-full py-1 text-sm"></Cell>
                    );
                })}
            </div>
        </div>
    );
};

export default Calender;
