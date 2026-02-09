import "./Skill.css";
function Skills(){
    return(
        <>
        <section id="skills" class="skills-section">

  <div class="skills-label">SKILLS</div>
  <h2 class="skills-title">Technical Expertise</h2>

  <div class="skills-grid">

   
    <div class="skill-card">
      <div class="skill-icon">&lt;/&gt;</div>
      <h3>Frontend</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>

   
    <div class="skill-card">
      <div class="skill-icon">&lt;/&gt;</div>
      <h3>Backend</h3>
      <ul>
        <li>Core Java</li>
        <li>Advanced Java</li>
        <li>Spring Boot</li>
        <li>MySQL</li>
        <li>Microservices Architecture</li>
      </ul>
    </div>

   
    <div class="skill-card dsa-card">
      <div class="skill-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award text-white" data-fg-d3bl261="0.8:37.12:/src/app/App.tsx:303:19:19721:42:e:Award::::::B1kh"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg></div>
      <h3>DSA Expert</h3>
      <div class="dsa-count">500+</div>
      <p>Problems Solved</p>
      <div class="dsa-btn-wrapper">
    <a href="https://codolio.com" target="_blank" class="dsa-btn">
        Codolio
    </a>
</div>

     
    </div>

    <div class="skill-card">
      <div class="skill-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench text-white" data-fg-d3bl283="0.8:37.12:/src/app/App.tsx:357:19:22839:43:e:Wrench::::::dbj"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg></div>
      <h3>Tools</h3>
      <ul>
        <li>Git</li>
        <li>GitHub</li>
        <li>VS Code</li>
        <li>IntelliJ IDEA</li>
        <li>Postman</li>
      </ul>
    </div>

  </div>
</section>
</>
    )
}
export default Skills;