import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Logo() {
  return (
    <p className="flex items-center justify-center gap-1 font-[Quicksand] text-3xl font-bold text-blue-500">
      <span className="flex items-center justify-center">
        <FontAwesomeIcon icon={faDiceD20} />
      </span>
      Calendly
    </p>
  );
}

export default Logo;
