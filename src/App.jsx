import './navbarKi.css';

import Home from './Home.jsx';
import About from './About.jsx';
import Education from './Education.jsx';
import Skill from './Skill.jsx';
import Project from './Project.jsx';
import Contact from './Contact.jsx';
import Collaborate from './Collaborate.jsx';
import Footer from './Footer.jsx';
import HeaderNavbar from './HeaderNavbar.jsx';

function App() {
  const mainButtons = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Projects",
    "Contact",
   
  ];

  return (
    <>
      <HeaderNavbar buttons={mainButtons} />
      <Home />
      <About />
      <Education />
      <Skill />
      <Project />
      <Contact />
      <Collaborate />
      <Footer />
    </>
  );
}

export default App;
