import React from 'react';
import { toast } from 'react-toastify';

const CategoryModal = ({ singleCategories, setSingleCategories }) => {
    const { name, price } = singleCategories;
    console.log(singleCategories);
    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const number = form.number.value
        const meeting = form.meeting.value;
        const formValue = { name, number, price, meeting };
        console.log(formValue);
        toast.success("Booking Confirm Successfully", { autoClose: 800 });
        setSingleCategories(null)
    }
    return (
        <>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box font-poppins text-black relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1  gap-3 mt-10'>
                        <input name='name' type="text" disabled value={name} className="input w-full input-bordered" />
                        <input name='price' type="model" disabled value={price} className="input w-full input-bordered" />
                        <input name='number' type="text" placeholder="Contact Number" className="input w-full input-bordered" />
                        <input name='meeting' type="text" placeholder="Order Location" className="input w-full input-bordered" />
                        <br />
                        <input className='bg-[#FF8400] hover:bg-[#FFD93D] px-2 py-2 rounded font-semibold text-black w-full ' type="Submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default CategoryModal;