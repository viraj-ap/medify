import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-32">
      <p className="text-2xl font-bold text-center mb-6">My Appointments</p>
      <div className="grid gap-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-start gap-4"
          >
            <div className="w-full md:w-1/4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover rounded-xl border-2 border-black"
              />
            </div>
            <div className="w-full md:w-3/4">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
              <div className="mt-2">
                <p className="text-sm text-gray-600">Address:</p>
                <p className="text-sm">{item.address.line1}</p>
                <p className="text-sm">{item.address2?.line2}</p>
              </div>
              <p className="mt-2 text-sm">
                <span className="font-medium">Date and Time:</span> 25th
                September, 2024 | 7:30 AM
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-8 md:mt-8">
              <button className="p-1 w-48 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Pay Online
              </button>
              <button className="w-48 p-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
