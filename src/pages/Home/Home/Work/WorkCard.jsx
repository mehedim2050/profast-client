import React from "react";
import booking from '../../../../assets/bookingIcon.png'
const work = [
  {
    id: 1,
    title: "Booking Pick & Drop",
    description: "From personal packages to business shipments — we deliver on time, every time.",
    image: booking
  },
  {
    id: 2,
    title: "Cash On Delivery",
    description: "From personal packages to business shipments — we deliver on time, every time.",
    image: booking
  },
  {
    id: 3,
    title: "Delivery Hub",
    description: "From personal packages to business shipments — we deliver on time, every time.",
    image: booking
  },
  {
    id: 4,
    title: "Booking SME & Corporate",
    description: "From personal packages to business shipments — we deliver on time, every time.",
    image: booking
  }
];

const WorkCard = () => {
  return (
    <div className="py-10 px-5 max-w-7xl mx-auto mt-10 ">
      <h2 className="text-3xl font-bold  mb-8">How it Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {work.map((item) => (
          <div key={item.id} className="card  bg-white shadow-md hover:shadow-xl transition rounded-3xl items-start p-2">
            <figure>
              <img src={item.image} alt={item.title} className=" object-cover px-5" />
            </figure>
            <div className="card-body ">
              <h3 className="card-title text-lg text-black">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
