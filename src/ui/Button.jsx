function Button({ variation, onClick, children, size = "medium" }) {
  let btnStyles =
    "flex items-center justify-center font-semibold text-sm tracking-wide rounded-full duration-200";

  // if (size === "small") btnStyles += "px-12 py-6";
  if (size === "medium") btnStyles += " px-6 py-3";
  if (size === "large")
    btnStyles += " md:px-14 md:py-6 sm:px-8 sm:py-4 px-6 py-3";

  if (variation === "primary")
    btnStyles += " bg-blue-500 text-white hover:bg-blue-600";
  if (variation === "secondary")
    btnStyles +=
      " bg-gray-50 text-gray-700 hover:bg-gray-200 ring-inset ring-1 ring-gray-200";

  return (
    <button className={` ${btnStyles}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
