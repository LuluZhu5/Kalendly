import React, { useState, FormEvent } from 'react';
import AddBookingForm from './AddBookingForm';

interface Props {
    params: { user: number };
}

const AddBookings = ({ params: { user } }: Props) => {
    const uid = user;
    async function onSubmit() {}

    return (
        <div className="flex justify-center">
            {uid}
            <AddBookingForm uid={uid} />
        </div>
    );
};

export default AddBookings;
