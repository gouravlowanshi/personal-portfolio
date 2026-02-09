import FrontGouravLogo from "./Gourav";

function HeaderNavbar({ buttons }) {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid px-4">

        {}
        <FrontGouravLogo />

        {}
        

        {}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {buttons.map((btn, index) => (
              <span
                key={index}
                className="nav-link custom-link"
                onClick={() => scrollToSection(btn.toLowerCase())}
              >
                {btn}
              </span>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
}

export default HeaderNavbar;
