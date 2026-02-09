import "./Footer.css";
function Footer(){

  const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
};

    return(
        <>
        <footer class="footer">
  <div class="footer-container">

    
    <div class="footer-col">
      <h2>Gourav Lowanshi</h2>
      <p>Full Stack Developer & Problem Solver</p>
    </div>

   
    <div class="footer-col">
      <h3 className="footerButton">Quick Links</h3>
      <ul>
       <li onClick={() => scrollToSection("home")}>
  Home
</li>

        <li onClick={() => scrollToSection("about")}>
  About
</li>
         <li onClick={() => scrollToSection("education")}>
 Education
</li>
       <li onClick={() => scrollToSection("skills")}>
 Skills
</li>
        <li onClick={() => scrollToSection("project")}>
  Project
</li>
      </ul>
    </div>

    
    <div class="footer-col">
      <h3 className="footerButton">Connect</h3>
      <ul>
        <li>GitHub</li>
        <li>LinkedIn</li>
        <li>Email</li>
      </ul>
    </div>

   
    <div class="footer-col">
      <h3 >Tech Stack</h3>
      <div class="tags">
        <span>React</span>
        <span>Java</span>
        <span>Spring Boot</span>
        <span>MySQL</span>
        <span>DSA</span>
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    <p>© 2026 Gourav Lowanshi. All rights reserved.</p>
    <p class="built">Built with React &  CSS</p>
  </div>
</footer>

        </>
    )
}
export default Footer;