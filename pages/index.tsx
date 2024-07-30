import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import React from "react";
import Home from "../components/Home";

const inter = Inter({ subsets: ["latin"] });

const Index: React.FC = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default Index;