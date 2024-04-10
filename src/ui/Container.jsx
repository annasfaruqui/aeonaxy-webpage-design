function Container({ children, extraStyles }) {
  const extStyles = extraStyles;

  return (
    <div className={`mx-auto max-w-screen-xl px-6 md:px-10 ${extStyles}`}>
      {children}
    </div>
  );
}

export default Container;
