import React, { useState } from "react";

export default function Home() {
  const [value, setvalue] = useState(""); // use "useState" Function to get Input value
  const handleSubmit = (e) => {
    e.preventDefault(); // page does not reload
  };

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const wordCount = (value) => {
    let words = value.match(/\w+/g); // words count function
    return words ? words.length : 0;
  };

  return (
    <form onSubmit={handleSubmit} className=" max-sm:flex">
      <div className="flex flex-col items-center justify-center mt-40">
        <h1 className="text-2xl font-bold text-blue-500 mb-7">
          {" "}
          Word Counter App
        </h1>
        <label
          htmlFor="message"
          className="mb-2 text-blue-800 text-sm font-medium dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows={10}
          cols={80}
          value={value}
          onChange={handleChange}
          className="p-2.5 max-sm:w-full text-md text-gray-900
          bg-gray-50 rounded-lg border border-gray-300
          focus:ring-blue-500 focus:outline-blue-500
          dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        />
        <div className=" my-3 flex max-sm:flex-col max-sm:items-center    items-center space-x-10">
          <p>
            <span className=" text-blue-500 text-lg font-bold">
              Total Words :
            </span>{" "}
            <span className=" font-mono ml-2">{wordCount(value)}</span>{" "}
          </p>
          <p>
            <span className=" text-blue-500 text-lg font-bold">
              Total Character :
            </span>{" "}
            <span className=" font-mono  max-sm:mr-3.5 ml-2">{value.length}</span>{" "}
          </p>
        </div>
      </div>
    </form>
  );
}
