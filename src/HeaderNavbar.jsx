import FrontGouravLogo from "./Gourav";

function HeaderNavbar(props) {

  // ✅ EK hi function sab ke liye
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbarHeight">
        <div className="container-fluid fullNavbar px-0">

          <FrontGouravLogo />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">

              {props.buttons.map((btn, index) => (
                <a
                  key={index}
                  className="nav-link buttonIcon buttonPadding"
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection(btn.toLowerCase())}
                >
                  {btn}
                </a>
              ))}

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderNavbar;
