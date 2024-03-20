"use client";

import React from "react";
import { useState, useEffect } from "react";
import { FaStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Home = () => {
  const [rating1, setRating1] = useState(null);
  const [hover1, setHover1] = useState(null);

  const [rating2, setRating2] = useState(null);
  const [hover2, setHover2] = useState(null);

  const [recommend, setRecommend] = useState(null);
  useEffect(() => {
    setRecommend(null);
  }, []);

  const praiseButtons = ["Adventure", "Clean", "Enjoyed"];

  const [buttonStates, setButtonStates] = useState(
    new Array(praiseButtons.length).fill(false)
  );

  const handlePraiseButtonClick = (index) => {
    setButtonStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Leave a review</h1>
        <div>
          <div className="flex flex-col ">
            <h2 className="text-lg font-semibold mb-1">Safety</h2>
            <p className="text-gray-400 text-sm ">
              How safe did you feel with Trausti ?
            </p>
            <div className="flex items-center">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <FaStar
                      className="star text-5xl mt-2 mb-10"
                      onClick={() => setRating1(ratingValue)}
                      onMouseOver={() => setHover1(ratingValue)}
                      onMouseOut={() => setHover1(null)}
                      color={
                        ratingValue <= (hover1 || rating1)
                          ? "#ffc107"
                          : "#e4e5e9"
                      }
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col ">
            <h2 className="text-lg font-semibold mb-1">Communication</h2>
            <p className="text-gray-400 text-sm">
              How fun was to communicate with Trausti ?
            </p>
            <div className="flex items-center">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <FaStar
                      className="star text-5xl mt-2 mb-10"
                      onClick={() => setRating2(ratingValue)}
                      onMouseOver={() => setHover2(ratingValue)}
                      onMouseOut={() => setHover2(null)}
                      color={
                        ratingValue <= (hover2 || rating2)
                          ? "#ffc107"
                          : "#e4e5e9"
                      }
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col ">
            <h2 className="text-lg font-semibold mb-1">
              Would you recommend Trausti ?
            </h2>
            <p className="text-gray-400 mb-2">
              Your review never be passed publicly
            </p>

            <div className="flex flex-row items-center  mb-10">
              <FaThumbsDown
                className={`text-5xl cursor-pointer ${
                  recommend === false ? "text-red-500" : "text-gray-400"
                }`}
                onClick={() => setRecommend(false)}
              />
              <p className="text-gray-400 text-sm mx-4 pr-4">No</p>
              <FaThumbsUp
                className={`text-5xl cursor-pointer ${
                  recommend === true ? "text-green-500" : "text-gray-400"
                }`}
                onClick={() => setRecommend(true)}
              />
              <p className="text-gray-400 text-sm mx-4">Yes</p>
            </div>
          </div>
          <div className="flex flex-col ">
            <h2 className="text-lg font-semibold mb-1">Praise</h2>
            <p className="text-gray-400 mb-2">What you find on Trausti?</p>

            <div className="flex flex-row items-center">
              {praiseButtons.map((label, index) => (
                <button
                  key={index}
                  className={`rounded-full font-semibold text-gray-600 p-2 mr-2 transition duration-300 ease-in-out ${
                    buttonStates[index]
                      ? "bg-green-200 hover:bg-green-200"
                      : "bg-gray-200 hover:bg-green-200"
                  }`}
                  onClick={() => handlePraiseButtonClick(index)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
