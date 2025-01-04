import React, { useState } from "react";
import { assets } from "../assets/assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "edwardvincent@gmail.com",
    phone: "1234567890",
    address: {
      line1: "123 Main St",
      line2: "Apartment 4B",
    },
    gender: "Male",
    dob: "2000-12-24",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (key, value) => {
    setUserData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleAddressChange = (key, value) => {
    setUserData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [key]: value,
      },
    }));
  };

  return (
    <div className="max-w-xl p-4 bg-primary rounded-lg shadow-lg mt-32">
      <div className="flex items-center space-x-4">
        <img
          src={userData.image}
          alt="Profile"
          className="w-24 h-24 rounded-full border border-gray-300"
        />
        <h1 className="text-2xl font-bold">{isEdit ? "Edit Profile" : "My Profile"}</h1>
      </div>

      <div className="mt-4 space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium">Name</label>
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          ) : (
            <p>{userData.name}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Email</label>
          {isEdit ? (
            <input
              type="email"
              value={userData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          ) : (
            <p>{userData.email}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Phone</label>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          ) : (
            <p>{userData.phone}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Address</label>
          {isEdit ? (
            <>
              <input
                type="text"
                placeholder="Line 1"
                value={userData.address.line1}
                onChange={(e) => handleAddressChange("line1", e.target.value)}
                className="p-2 border border-gray-300 rounded mb-2"
              />
              <input
                type="text"
                placeholder="Line 2"
                value={userData.address.line2}
                onChange={(e) => handleAddressChange("line2", e.target.value)}
                className="p-2 border border-gray-300 rounded"
              />
            </>
          ) : (
            <p>
              {userData.address.line1}, {userData.address.line2}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Gender</label>
          {isEdit ? (
            <select
              value={userData.gender}
              onChange={(e) => handleInputChange("gender", e.target.value)}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Date of Birth</label>
          {isEdit ? (
            <input
              type="date"
              value={userData.dob}
              onChange={(e) => handleInputChange("dob", e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-2">
        {isEdit ? (
          <>
            <button
              onClick={() => setIsEdit(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsEdit(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
