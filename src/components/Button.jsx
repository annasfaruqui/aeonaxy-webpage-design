function Button({ variation, secCol, onClick, children, size = "medium" }) {
  let btnStyles =
    "flex items-center justify-center font-semibold text-sm tracking-wide rounded-full duration-200";

  if (size === "medium") btnStyles += " px-6 py-3";
  if (size === "large")
    btnStyles += " md:px-14 md:py-6 sm:px-8 sm:py-4 px-6 py-3";

  if (variation === "primary")
    btnStyles += " bg-blue-500 text-white hover:bg-blue-600";
  if (variation === "secondary")
    btnStyles += ` ${secCol} bg-transparent ring-inset ring-1`;

  return (
    <button className={` ${btnStyles}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
