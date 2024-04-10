import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import Button from "../components/Button";
import Logo from "../components/Logo";
import Navbar from "./Navbar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex w-full items-center justify-between px-4 py-4 md:px-10">
      <Logo />

      <button
        className="block text-blue-500 xl:hidden"
        onClick={() => setIsOpen((open) => !open)}
      >
        <FontAwesomeIcon size="2x" icon={isOpen ? faTimes : faBars} />
      </button>

      <Navbar isOpen={isOpen} />

      <div className="hidden items-center justify-center gap-2 xl:flex">
        <Button
          variation="secondary"
          secCol="text-gray-700 ring-gray-700 hover:bg-gray-100"
        >
          Log In
        </Button>
        <Button variation="primary">Get started</Button>
      </div>
    </header>
  );
}

export default Header;
