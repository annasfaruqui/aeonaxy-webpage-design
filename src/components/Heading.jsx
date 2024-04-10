function Heading({ type, children, color }) {
  return (
    <>
      {type === "primary" && (
        <h1 className="z-10 text-4xl font-bold text-blue-950 lg:mb-2 lg:text-5xl">
          {children}
        </h1>
      )}
      {type === "secondary" && (
        <h2
          className={`z-10 font-semibold uppercase tracking-wide ${color ? color : "text-blue-500"}`}
        >
          {children}
        </h2>
      )}
      {type === "tertiary" && (
        <h3 className="text-3xl font-semibold text-blue-950 sm:text-4xl">
          {children}
        </h3>
      )}
      {type === "tertiary-big" && (
        <h3 className="text-3xl font-semibold text-white sm:text-5xl sm:leading-normal ">
          {children}
        </h3>
      )}
      {type === "tertiary-small" && (
        <h3 className="text-3xl font-bold text-white sm:text-[2rem]">
          {children}
        </h3>
      )}
    </>
  );
}

export default Heading;
