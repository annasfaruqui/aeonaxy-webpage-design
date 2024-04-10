import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({ isOpen }) {
  return (
    <nav className={`${isOpen ? "block" : "hidden"} z-10 hidden xl:block`}>
      <ul className="flex items-center justify-between gap-8 font-semibold text-black">
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
  );
}

export default Navbar;
