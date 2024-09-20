import React from "react";
import { Button } from "./ui/button";
import {useNavigate} from "react-router-dom";

const Navbar: React.FC = () =>{
    const navigate = useNavigate();

    const handleLoginClick = () => {
    navigate('/login');
      };

    return (
  <nav className="flex justify-between items-center p-4 bg-pink-100">
    <div className="text-2xl font-bold text-pink-600">RutuChakra</div>
    <Button onClick={handleLoginClick} className="bg-pink-500 hover:bg-pink-600 text-white">Login</Button>
  </nav>
)};

export default Navbar;
