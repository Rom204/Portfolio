import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TbMoustache } from "react-icons/tb";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-2 h-20 fixed w-full flex justify-between z-50 pr-4 pl-4">
      {/* 
      on menu click will display all the sections 
      when a section been selected will be scrolled to that area
      or some kind of framer motion "change screen"
      */}
      <svg className="text-7xl text-white">
        <TbMoustache />
      </svg>
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-5xl flex self-center cursor-pointer"
        whileHover={{ scale: 1.2 }}
      >
        <AiOutlineMenu />
      </motion.div>
    </div>
  );
};
