const Footer = () => {
  return (
    <footer className="footer">
      <div className="div">
        {" "}
        <h3 className="signUpText">SIGN UP TO OUR NEWSLETTER</h3>{" "}
        <span className="signUpBtn"> SIGN UP </span>
        <p className="trademark">
          &copy; {new Date().getFullYear()} Meli Nzekele
        </p>
      </div>
    </footer>
  );
};

export default Footer;
