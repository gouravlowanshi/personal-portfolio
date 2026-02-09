import './Home.css'
function Home(){
    return(
        <>
        <div className="homeDiv">
           <div className="opportunityBadge">
  <span className="dot"></span>
  Available for Opportunities
</div>
            <h1 className="Gouarvname">Gourav Lowanshi</h1>
            <h2 className="fullStack">Full Stack Developer</h2>
            <p className='text'><pre></pre> Building powerful web applications with Java, Spring Boot, React, <br />and  MySQL. Mastered 500+ DSA problems across multiple platforms.</p>
            <div className="buttonGroup">

  <button className="btnPrimary">
    View Projects <span className="arrow">→</span>
  </button>

  <button className="btnSecondary">
    Get In Touch
  </button>

</div>
<div className="statsSection">

  <div className="statCard">
    <h1>500+</h1>
    <h3>DSA Problems Solved</h3>
    <p>LeetCode • CodeChef • More</p>
  </div>

  <div className="statCard">
    <h1>2+</h1>
    <h3>Projects Built</h3>
    <p>Full Stack Applications</p>
  </div>

  <div className="statCard">
    <h1>93.1</h1>
    <h3>JEE Percentile</h3>
    <p>National Level Exam</p>
  </div>

</div>

   
        </div>
        </>
    )
}
export default Home;