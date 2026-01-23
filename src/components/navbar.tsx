import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/logo";

const navLink =
  "relative px-3 py-2 font-medium text-gray-900 hover:text-blue-500 transition-colors duration-300 \
   after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-500 \
   after:transition-all after:duration-300 after:w-0 hover:after:w-full";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="flex h-16 items-center justify-between my-container px-4">

        {/* Logo */}
        <a href="#home" id="#home" className="flex items-center cursor-pointer">
          <Logo />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          <a href="#home" className={navLink}>Home</a>
          <a href="#about" className={navLink}>About</a>
          <a href="#skills" className={navLink}>Skills</a>
          <a href="#project" className={navLink}>Project</a>
          <a href="#contact" className={navLink}>Contact</a>
        </div>

        {/* Mobile Button */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden bg-transparent border-none cursor-pointer mr-2"
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-6 pb-4 bg-white flex flex-col gap-3"
          >
            <a onClick={() => setOpen(false)} href="#" className={navLink}>Home</a>
            <a onClick={() => setOpen(false)} href="#about" className={navLink}>About</a>
            <a onClick={() => setOpen(false)} href="#skills" className={navLink}>Skills</a>
            <a onClick={() => setOpen(false)} href="#project" className={navLink}>Project</a>
            <a onClick={() => setOpen(false)} href="#contact" className={navLink}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
