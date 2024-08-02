import React, { useState } from "react";
import axios from "axios";
import { MdOutlineContentCopy } from "react-icons/md";

const Home = () => {
  const [mainUrl, setMainUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleInputChange = (e) => {
    setMainUrl(e.target.value);
  };

  const handleShortenClick = async () => {
    try {
      const response = await axios.post(
        "https://short-url-5gjx.onrender.com/shorturls",
        {
          mainUrl,
        }
      );
      setShortUrl(response.data.newUrl);
    } catch (error) {
      console.error("Error creating short URL:", error);
      // Handle error accordingly
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(shortUrl)
      .then(() => {
        console.log("URL copied to clipboard");
        // Optionally show a success message to the user
      })
      .catch((err) => {
        console.error("Failed to copy URL:", err);
        // Optionally handle error here
      });
  };

  return (
    <div className="bg-[#17153B] h-screen flex flex-col justify-center items-center">
      <div className="shadow-md shadow-[#C8ACD6] flex flex-col justify-center items-center p-20 bg-[#211858] space-y-4">
        <h1 className="text-[#C8ACD6] text-3xl font-semibold">SHORT URL</h1>
        <h4 className="text-[#C8ACD6] text-xl">Enter Your URL:</h4>
        <input
          type="text"
          value={mainUrl}
          onChange={handleInputChange}
          className="w-96 outline-[#17153B] border-none bg-[#C8ACD6] p-1 rounded-md text-[#17153B] font-semibold"
        />
        <button
          onClick={handleShortenClick}
          className="px-4 py-2 rounded-md text-[#C8ACD6] shadow-sm shadow-[#C8ACD6] hover:bg-[#433D8B] duration-150 ease-in-out bg-[#2E236C]"
        >
          SHORTEN
        </button>
        {shortUrl && (
          <div className="flex flex-row items-center justify-center gap-3">
            <h3 className="text-lg text-[#C8ACD6] w-full">
              Shorten URL: {"  "}
              <a
                href={shortUrl}
                className="text-green-400 font-bold text-base font-mono"
              >
                {shortUrl}
              </a>
            </h3>
            <MdOutlineContentCopy
              onClick={handleCopy}
              className="text-2xl text-[#C8ACD6] cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
