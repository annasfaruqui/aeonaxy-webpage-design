function Container({ children, extraStyles, padding }) {
  const extStyles = extraStyles;

  return (
    <div
      className={`mx-auto max-w-screen-xl ${padding ? padding : "px-6 md:px-10"} ${extStyles}`}
    >
      {children}
    </div>
  );
}

export default Container;
