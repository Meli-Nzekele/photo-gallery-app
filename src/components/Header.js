const Header = () => {
  const scrollToSection = () => {
    const targetSection = document.getElementById("container");
    targetSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="header">
      <h1 className="title">Photo Gallery</h1>
      <h2 className="subtitle">A simple photo gallery app</h2>
      <span onClick={scrollToSection} className="material-symbols-outlined">
        expand_circle_down
      </span>{" "}
    </header>
  );
};

export default Header;
