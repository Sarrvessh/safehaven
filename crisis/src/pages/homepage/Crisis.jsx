import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Crisis = () => {
  const [focus, setFocus] = useState(false);
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDisasters = () => {
    setLoading(true);
    setError(null);
    axios
      .get("http://localhost:3001/getDisasters")
      .then((res) => {
        setDisasters(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load disasters. Please try again later.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDisasters();
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-cyan-300 p-10 text-center">
        <h2 className="text-4xl font-bold text-black py-10">Loading disasters...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-cyan-300 p-10 text-center">
        <h2 className="text-4xl font-bold text-black py-10">{error}</h2>
        <button 
          onClick={fetchDisasters}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-cyan-300 p-10">
      <h2 className="text-center text-4xl font-bold text-black py-10">
        Recent Crisis.......
      </h2>
      <div className="w-full flex justify-center overflow-x-auto">
        <div className=" flex flex-row space-x-5">
          {disasters.map((disaster) => (
            <Link key={disaster._id} to={`/disaster/${disaster._id}`}>
              <div
                key={disaster._id}
                className="max-w-sm rounded mb-4 overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300"
                style={{ width: "300px", height: "500px" }}
              >
                <img
                  className="w-full h-80 p-4 border-3"
                  src={disaster.uploadedPhotos[0]}
                  alt={`${disaster.crisisType} image`}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {disaster.crisisType}:{disaster.location}
                  </div>
                  <p className="text-gray-700 h-50 w-full overflow-hidden whitespace-nowrap overflow-ellipsis text-base">
                    {disaster.description}
                  </p>
                  <div>
                    <h2 className="text-lg font-bold">
                      No.of Casualties:{disaster.casualties}
                    </h2>
                    <p className="text-zinc-600">
                      Affected Count:{disaster.affectedPopulation}
                    </p>
                    <p className="text-zinc-600">
                      Level Of Severity:{disaster.severity}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crisis;
