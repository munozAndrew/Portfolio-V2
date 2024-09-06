import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import React from "react";
import Home from "../components/Home";
import Projects from "../components/projects";
import Footer from "../components/footer";
import Chatbot from "../components/chatbot"
const inter = Inter({ subsets: ["latin"] });

const Index: React.FC = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Projects/>
    <Footer/>
    <Chatbot/>

    
    </>
  )
}

export default Index;