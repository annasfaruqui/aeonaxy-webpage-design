import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../components/Logo";
import Button from "./Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="gap-auto relative flex w-full items-center justify-between px-4 py-4 md:px-10">
      <div
        className={`absolute ${isOpen ? "opacity-100" : "opacity-0"} pointer-events-none left-0 top-0 z-20 h-screen w-full overflow-hidden bg-black/30 backdrop-blur-sm duration-500 xl:opacity-0`}
      ></div>
      <Logo />

      <nav
        className={`absolute top-0  w-2/5 ${isOpen ? "right-0" : "left -right-full translate-x-full"} z-30 h-screen bg-white px-16 pt-20 duration-500 xl:static xl:h-auto xl:w-auto xl:translate-x-0 xl:border-0 xl:p-0`}
      >
        <ul className="flex cursor-pointer flex-col items-center justify-between gap-8 font-semibold text-black xl:flex-row">
          <li>Individuals</li>
          <li>Teams</li>
          <li>Enterprise</li>
          <li className="flex items-end gap-1">
            Product
            <span>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </li>
          <li>Pricing</li>
          <li className="flex items-end gap-1">
            Resources
            <span>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </li>
        </ul>
      </nav>

      <div
        className={`absolute ${isOpen ? "right-0 opacity-100" : "-right-full translate-x-full opacity-0"} top-[26rem] z-30 flex w-2/5 flex-col justify-center gap-4 px-16 duration-500 xl:static xl:w-auto xl:translate-x-0 xl:flex-row xl:items-center xl:gap-2 xl:p-0 xl:opacity-100`}
      >
        <Button
          variation="secondary"
          secCol="text-gray-700 ring-gray-700 hover:bg-gray-100"
        >
          Log In
        </Button>
        <Button variation="primary">Get started</Button>
      </div>

      <button
        className="z-40 block text-blue-500 xl:hidden"
        onClick={() => setIsOpen((open) => !open)}
      >
        <FontAwesomeIcon size="2x" icon={isOpen ? faTimes : faBars} />
      </button>
    </header>
  );
}

export default Header;
