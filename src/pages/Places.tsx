import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Perks from "../Components/Perks";

function Places() {
  const { action } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    address: "",
    addedPhotos: [],
    photoLink: "",
    description: "",
    perks: [],
    extraInfo: "",
    checkIn: "",
    checkout: "",
    maxGuests: 1,
  });

  const [savedPlaces, setSavedPlaces] = useState([]);

  const inputHeader = (text) => <h2 className="text-2xl">{text}</h2>;

  const handlePerksChange = (newPerks) => {
    setFormData((prevData) => ({
      ...prevData,
      perks: newPerks,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "maxGuests" ? Number(value) : value,
    }));
  };

  const uploadPhoto = (e) => {
    const files = e.target.files;
    const uploadedPhotos = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const localUrl = URL.createObjectURL(file);
      uploadedPhotos.push({
        id: `${file.name}-${Date.now()}-${i}`,
        name: file.name,
        url: localUrl,
      });
    }
    setFormData((prev) => ({
      ...prev,
      addedPhotos: [...prev.addedPhotos, ...uploadedPhotos],
    }));
  };

  const removePhoto = (photoId) => {
    setFormData((prev) => ({
      ...prev,
      addedPhotos: prev.addedPhotos.filter((photo) => photo.id !== photoId),
    }));
  };

  const addNewPlace = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.address) {
      alert("Title and Address are required!");
      return;
    }

    setSavedPlaces((prevPlaces) => {
      const newPlaces = [...prevPlaces, formData];
      navigate("/account/places", { state: { places: newPlaces } });
      return newPlaces;
    });

    setFormData({
      title: "",
      address: "",
      addedPhotos: [],
      photoLink: "",
      description: "",
      perks: [],
      extraInfo: "",
      checkIn: "",
      checkout: "",
      maxGuests: 1,
    });
  };

  return (
    <div>
      {action !== "new" && (
        <div>
          <div className="text-center">
            <Link
              className="inline-flex gap-1 mt-10 w-1/8 items-center p-2 bg-red-400 text-white py-2 px-6 rounded-2xl"
              to="/account/places/new"
            >
              <FaPlus />
              Add New Place
            </Link>
          </div>
          <div className="mt-4">
            {savedPlaces.map((place, index) => (
              <div
                key={index}
                className="flex items-center border p-4 rounded-xl gap-4 mb-4"
              >
                <div className="w-20 h-20 bg-gray-200 flex-shrink-0">
                  {place.addedPhotos.length > 0 && (
                    <img
                      src={place.addedPhotos[0].url}
                      alt={place.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{place.title}</h3>
                  <p className="text-sm text-gray-500">{place.address}</p>
                  <p className="text-sm text-gray-700">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {action === "new" && (
        <div>
          <form onSubmit={addNewPlace}>
            {inputHeader("Title")}
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Title: e.g., My Lovely Apartment"
            />
            {inputHeader("Address")}
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
            />
            {inputHeader("Photos")}
            <div className="flex gap-2">
              <input
                type="text"
                name="photoLink"
                value={formData.photoLink}
                onChange={handleInputChange}
                placeholder="Add using a link"
              />
              <button className="bg-gray-200 px-4 rounded-2xl">Add</button>
            </div>
            <div className="mt-2 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <label className="cursor-pointer flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                <input type="file" className="hidden" onChange={uploadPhoto} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                  />
                </svg>
                Upload
              </label>
              {formData.addedPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative border rounded-2xl overflow-hidden h-32 flex items-center justify-center"
                >
                  <img
                    src={photo.url}
                    alt={photo.name}
                    className="object-cover w-full h-full"
                  />
                  <button
                    onClick={() => removePhoto(photo.id)}
                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            {inputHeader("Description")}
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            {inputHeader("Perks")}
            <div className="mt-2 grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              <Perks selected={formData.perks} onChange={handlePerksChange} />
            </div>
            {inputHeader("Extra Info")}
            <textarea
              name="extraInfo"
              value={formData.extraInfo}
              onChange={handleInputChange}
            />
            {inputHeader("Check in & Check out Times, Max Guests")}
            <div className="grid sm:grid-cols-3 gap-2">
              <div>
                <h3 className="mt-2 -mb-1 italic">Check In Time</h3>
                <input
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="16:00"
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1 italic">Check Out Time</h3>
                <input
                  name="checkout"
                  value={formData.checkout}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="12:00"
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1 italic">Max Guests Allowed</h3>
                <input
                  name="maxGuests"
                  value={formData.maxGuests}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="3"
                />
              </div>
            </div>
            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Places;
