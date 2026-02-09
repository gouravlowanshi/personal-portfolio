import "./Footer.css";

function Footer() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* LEFT */}
          <div className="footer-col">
            <h2>Gourav Lowanshi</h2>
            <p>Full Stack Developer & Problem Solver</p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h3 className="footerButton">Quick Links</h3>
            <ul>
              <li onClick={() => scrollToSection("home")}>Home</li>
              <li onClick={() => scrollToSection("about")}>About</li>
              <li onClick={() => scrollToSection("education")}>Education</li>
              <li onClick={() => scrollToSection("skills")}>Skills</li>
             <li onClick={() => scrollToSection("projects")}>Project</li>

            </ul>
          </div>

          {/* CONNECT (CLICKABLE) */}
          <div className="footer-col">
            <h3 className="footerButton">Connect</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/gouravlowanshi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a 
                  href="https://www.linkedin.com/in/gouravlowanshi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a href="mailto:gouravlowanshi84@gmail.com">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* TECH STACK */}
          <div className="footer-col">
            <h3>Tech Stack</h3>
            <div className="tags">
              <span>React</span>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
              <span>DSA</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Gourav Lowanshi. All rights reserved.</p>
          <p className="built">Built with React & CSS</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
