import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-purple2">
      <div className="w-full md:w-2/5 flex justify-center flex-shrink-0">
        <Image
          src="/hank3.png"
          alt="Picture Goes here"
          width={800}
          height={600}
          className="rounded-full"
        />
      </div>
      <div className="w-full md:w-3/5 flex-grow mx-6 text-center md:text-left">
        <h1 className="text-9xl md:text-7xl font-bold mb-4">
          Hello, Im ASAC Schrader
        </h1>
        <p className="text-6xl md:text-5xl">
          Welcome to my Personal Website! Im a 3rd year computer science major
          at Cal Poly SLO.
        </p>
      </div>
    </div>
  );
};

export default Home;
