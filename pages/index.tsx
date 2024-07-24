import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const Index: React.FC = () => {
  return (
    <>
    <Navbar />
    </>
  )
}

export default Index;