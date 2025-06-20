import React from 'react';

const ServiceCard = ({ service}) => {
    const { icon: Icon, title, description}=service
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:bg-green-400 text-center flex flex-col items-center justify-center h-full">
      <div className="text-4xl text-primary mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
