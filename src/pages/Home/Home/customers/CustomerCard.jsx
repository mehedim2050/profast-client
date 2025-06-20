import React, { useState } from 'react';
import customerImg from '../../../../assets/customer-top.png'
const customer = [
    {
        id: 1,
        title: "Posture Correction Support",
        description: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine.",
        name: "Emma Johnson",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        id: 2,
        title: "Live Parcel Tracking",
        description: "Stay updated in real-time with our live parcel tracking feature from pick-up to delivery.",
        name: "Liam Smith",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        id: 3,
        title: "100% Safe Delivery",
        description: "We ensure your parcels are handled with utmost care and delivered securely.",
        name: "Olivia Williams",
        image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        id: 4,
        title: "24/7 Call Center Support",
        description: "Our support team is available around the clock to assist you anytime.",
        name: "Noah Davis",
        image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        id: 5,
        title: "Ergonomic Design",
        description: "Designed for maximum comfort and back support during daily use.",
        name: "Ava Brown",
        image: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
        id: 6,
        title: "Adjustable Straps",
        description: "Flexible straps ensure a snug and customizable fit.",
        name: "William Jones",
        image: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
        id: 7,
        title: "Lightweight & Breathable",
        description: "Worn under clothes with breathable materials to reduce sweat.",
        name: "Sophia Garcia",
        image: "https://randomuser.me/api/portraits/women/7.jpg"
    },
    {
        id: 8,
        title: "Doctor Recommended",
        description: "Recommended by chiropractors and physiotherapists worldwide.",
        name: "James Miller",
        image: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
        id: 9,
        title: "Boosts Confidence",
        description: "Good posture helps you look taller and more confident.",
        name: "Isabella Martinez",
        image: "https://randomuser.me/api/portraits/women/9.jpg"
    },
    {
        id: 10,
        title: "Easy to Wear",
        description: "Simple design makes it easy to wear without assistance.",
        name: "Benjamin Anderson",
        image: "https://randomuser.me/api/portraits/men/10.jpg"
    }
];

const cardsPerPage = 3;

const CustomerCard = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(customer.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const currentCards = customer.slice(startIndex, startIndex + cardsPerPage);

    return (
        <div className="py-10 px-4 max-w-6xl mx-auto">
            <div className='flex justify-center  mt-10' >
                <img src={customerImg} alt="" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-8 mt-10">What our customers are sayings</h2>
            <p className='text-center text-1xl'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
                {currentCards.map(({ id, title, description, name, image }) => (
                    <div key={id} className="card bg-white shadow-md p-5">
                        <div className="text-4xl text-primary font-bold mb-2">❝ </div>
                        <h3 className="text-xl font-semibold mb-1 text-black">{title}</h3>
                        <p className="text-gray-600">{description}</p>
                        <div className="flex w-full flex-col">

                            <div className="divider bg-black h-1"></div>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                            <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover" />
                            <p className="font-medium text-black">{name}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8 gap-2">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="btn btn-sm"
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={`btn btn-sm ${currentPage === index + 1 ? "btn-active" : ""}`}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    className="btn btn-sm"
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CustomerCard;
