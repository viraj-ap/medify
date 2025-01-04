import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets/assets_frontend/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  useEffect(() => {
    // Fetch doctor information
    const fetchDocInfo = () => {
      const doctor = doctors.find((doc) => doc._id === docId);
      if (doctor) {
        setDocInfo(doctor);
      } else {
        console.error("Doctor not found!");
      }
    };

    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (!docInfo) return;

    // Generate available slots for the next 7 days
    const generateAvailableSlots = () => {
      const slots = [];
      const today = new Date();

      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        const endTime = new Date(currentDate);
        endTime.setHours(21, 0, 0, 0);

        if (i === 0) {
          const currentHour = today.getHours();
          currentDate.setHours(Math.max(10, currentHour + 1));
          currentDate.setMinutes(today.getMinutes() > 30 ? 30 : 0);
        } else {
          currentDate.setHours(10, 0, 0, 0);
        }

        while (currentDate < endTime) {
          slots.push({
            datetime: new Date(currentDate),
            time: currentDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          });
          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }
      }

      setDocSlots(slots);
      setLoading(false);
    };

    generateAvailableSlots();
  }, [docInfo]);

  if (loading) {
    return <div className="text-white text-center mt-32">Loading...</div>;
  }

  if (!docInfo) {
    return <div className="text-white text-center mt-32">Doctor not found!</div>;
  }

  return (
    <div className="px-4 sm:px-8 lg:px-16 flex flex-col justify-center mt-32">
      {/* Doctor Information */}
      <div className="border border-white text-white rounded-lg shadow-lg flex max-w-4xl w-full">
        <div className="w-1/3">
          <img
            src={docInfo.image}
            alt={`${docInfo.name}`}
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="w-2/3 p-6">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-2xl font-semibold flex items-center space-x-2">
                <span>{docInfo.name}</span>
                <img
                  src={assets.verified_icon}
                  alt="Verified"
                  className="w-5 h-5"
                />
              </p>
              <p className="mt-2">
                {docInfo.degree} - {docInfo.speciality}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-lg font-semibold flex items-center space-x-2">
                <span>About</span>
                <img src={assets.info_icon} alt="Info" className="w-5 h-5" />
              </p>
              <p className="mt-2 leading-relaxed">{docInfo.about}</p>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Appointment Fee: <span className="text-green-500">{currencySymbol}50</span>
            </p>
          </div>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="mt-8">
        <p className="text-white font-medium">Select a Date</p>
        <div className="flex gap-3 mt-4 overflow-x-auto">
          {Array.from(new Set(docSlots.map((slot) => slot.datetime.getDate()))).map(
            (date, index) => {
              const slotDate = new Date(docSlots.find((slot) => slot.datetime.getDate() === date).datetime);
              return (
                <div
                  key={index}
                  className={`flex flex-col px-4 py-3 items-center justify-center rounded-lg cursor-pointer ${
                    selectedDate === date ? "bg-primary text-white" : "bg-white text-black"
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  <p>{dayOfWeek[slotDate.getDay()]}</p>
                  <p>{slotDate.getDate()}</p>
                </div>
              );
            }
          )}
        </div>

        {selectedDate !== null && (
          <div className="mt-8">
            <p className="text-white font-medium">Available Time Slots</p>
            <div className="flex gap-3 mt-4 overflow-x-auto">
              {docSlots
                .filter((slot) => slot.datetime.getDate() === selectedDate)
                .map((slot, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 border rounded-lg cursor-pointer text-center ${
                      selectedTimeSlot === slot.time
                        ? "bg-primary text-white"
                        : "bg-white text-black border-gray-400"
                    }`}
                    onClick={() => setSelectedTimeSlot(slot.time)}
                  >
                    {slot.time.toLowerCase()}
                  </div>
                ))}
            </div>
          </div>
        )}

        <button className="bg-primary p-3 rounded-xl font-light mt-12 hover:scale-105 transition-all duration-300">Book an Appointment</button>
      </div>
    </div>
  );
};

export default Appointment;
