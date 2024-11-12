import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

function Places() {
  const { action } = useParams();

  return (
    <div>
      {action !== "new" && (
        <div>
          <div className="text-center">
            <Link
              className="inline-flex gap-1 mt-10 w-1/8 items-center p-2 bg-red-400 text-white py-2 px-6 rounded-2xl "
              to="/account/places/new"
            >
              <FaPlus />
              Add New Place
            </Link>
          </div>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            <h2 className="text-2xl">Title</h2>
            <input
              type="text"
              placeholder="Title: for eg. My Lovely Apartment"
            />
            <h2 className="text-2xl">Address</h2>
            <input type="text" placeholder="Address" />
            <h2 className="text-2xl">Photos</h2>
            <div className="flex gap-2">
              <input type="text" placeholder={"Add using a Link"} />
              <button className="bg-gray-200 px-4 rounded-2xl">Add</button>
            </div>
            <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <button className="flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
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
              </button>
            </div>
            <h2 className="text-2xl">Description</h2>
            <textarea />
            <h2 className="text-2xl">Perks</h2>
            <div className="mt-2 grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
                  />
                </svg>
                <span>Wifi</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                <span>Free Parking Spot</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
                <span>TV</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <MdOutlinePets className="size-6 text-gray-600" />
                <span>Pets</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <FaSwimmingPool className="size-6 text-gray-600" />
                <span>Swimming Pool</span>
              </label>
            </div>
            <h2 className="text-2xl">Extra Info</h2>
            <textarea />
            <h2 className="text-2xl">Check in & Check out Times, Max Guests</h2>
            <div className="grid sm:grid-cols-3 gap-2">
              <div>
                <h3 className="mt-2 -mb-1 italic">Check In Time</h3>
                <input type="text" placeholder="16:00" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1 italic">Check Out Time</h3>
                <input type="text" placeholder="12:00" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1 italic">Max Guests Allowed</h3>
                <input type="text" placeholder="3" />
              </div>
            </div>
            <button className="primary my-4">save</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Places;
