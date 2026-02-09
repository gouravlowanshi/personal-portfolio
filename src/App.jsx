import './navbarKi.css';
import "./responsive.css";

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
  let frontendSkill = ["HTMl", "CSS" , "javascript" , "React" , "Tailwind CSS" , "Bootstrap CSS"];
  let tools = ["Git", "Github" , "VS Code", "Intellij IDEA" , "Postman" ];
  let backendSkill = ["Core Java" , "Advanced Java" ,"Spring Boot" , "MySQL" , "Microservices Architecture" , "Hibernate"]
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
      <Skill
       frontendSkill={frontendSkill}
        backendSkill={backendSkill}
        tools={tools}
      />
      <Project />
      <Contact />
      <Collaborate />
      <Footer />
    </>
  );
}

export default App;
