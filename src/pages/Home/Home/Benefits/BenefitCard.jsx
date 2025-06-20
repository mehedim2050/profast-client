import React from 'react';

import tracking from "../../../../assets/live-tracking.png"
import call from "../../../../assets/safe-delivery.png" 
const benefits = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: tracking 
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image:  call
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image:call
  }
];

const BenefitCards = () => {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Benefits</h2>
      <div className="flex flex-col gap-6">
        {benefits.map(({ id, title, description, image }) => (
          <div key={id} className="card card-side bg-white shadow-xl">
            <figure className="pl-4 py-4">
              <img src={image} alt={title} className="w-28 h-28 object-cover rounded-xl" />
            </figure>
            <div className="divider divider-horizontal mx-8 bg-gray-300 "></div>
            <div className="card-body">
              <h2 className="card-title text-xl text-black">{title}</h2>
              <p className='text-gray-800'>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitCards;
