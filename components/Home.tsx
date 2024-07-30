import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-purple2">
      <div className="w-full md:w-2/5 flex-shrink-0">
      <Image
      src="/hank3.png"
      alt="Picture Goes here"
      width={400}
      height={300}
      className="rounded-full mx-auto md:mx-0"></Image>
      
      </div>
      <div className="w-full md:w-3/5 flex-grow mx-6 text-center md:text-left">
      <h1 className="text-4xl font-bold mb-4">Hello, Im ASAC Schrader</h1>
      <p className="text-lg">Welcome to my Personal Website! Im a 3rd year comptuer science major at Cal Poly Slo.
      </p>
      </div>
    </div>
    
  );
};

export default Home;
