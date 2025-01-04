import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  // Apply filters based on the speciality
  const applyFilter = () => {
    if (doctors && doctors.length > 0) {
      if (speciality && speciality.toLowerCase() !== 'all doctors') {
        setFilterDoc(
          doctors.filter(doc =>
            doc.speciality.toLowerCase() === speciality.toLowerCase().trim()
          )
        );
      } else {
        setFilterDoc(doctors);
      }
    }
  };

  // Apply filter whenever doctors or speciality changes
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="text-white font-poppins mt-36 px-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Section */}
        <div className="w-full lg:w-1/4 p-4 rounded-lg">
          <p className="text-2xl font-bold mb-4">Specialities</p>
          <div className="space-y-4">
            {[
              'All Doctors',
              'General Physician',
              'Gynecologist',
              'Dermatologist',
              'Pediatrician',
              'Neurologist',
              'Gastroenterologist',
            ].map((spec, idx) => (
              <div
                key={idx}
                className={`border p-4 rounded-md cursor-pointer transition-all duration-300 font-bold ${
                  speciality?.toLowerCase() === spec.toLowerCase().trim()
                    ? 'bg-primary text-black'
                    : 'hover:scale-105 hover:bg-gray-700'
                }`}
                onClick={() => navigate(`/doctors/${spec.toLowerCase()}`)}
              >
                <p className="text-sm font-medium">{spec}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Doctors Section */}
        <div className="w-full lg:w-3/4">
          {filterDoc.length === 0 ? (
            <p className="text-gray-300 text-center">No doctors available for this speciality.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterDoc.map((item) => (
                <div
                  onClick={() => navigate(`/appointment/${item._id}`)}
                  className="border-solid border-2 border-white rounded-lg hover:translate-y-[-10px] duration-500 cursor-pointer"
                  key={item._id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover rounded-t-lg bg-blue-50"
                  />
                  <div className="text-white p-4">
                    <div className="flex items-center gap-2 text-green-500 text-sm">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <p>Available</p>
                    </div>
                    <p className="text-xl font-semibold mt-2">{item.name}</p>
                    <p className="text-md mt-1">{item.speciality}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
