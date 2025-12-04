import Image from "next/image";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import EnquiryForm from "./components/EnquiryForm";
import Features from "./components/Features";
import { Programmes } from "./components/Programmes";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Herosection/>
     <Features/>
    <Programmes/>
    <EnquiryForm/>
    <Footer/>
   
    </div>
    
  );
}
