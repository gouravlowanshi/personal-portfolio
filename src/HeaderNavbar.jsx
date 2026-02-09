import FrontGouravLogo from "./Gourav";
function HeaderNavbar(props){
    return(
        <>
        
       <nav className="navbar navbar-expand-lg bg-body-tertiary navbarHeight">
  <div className="container-fluid fullNavbar px-0">

    <FrontGouravLogo></FrontGouravLogo>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
      {props.buttons.map((btn , index) => (
            <a
             key={index} className="nav-link buttonIcon buttonPadding"
              href="#"
            >
              {btn}
            </a>))}
      </div>
    </div>
  </div>
</nav></>
    )
}
export default HeaderNavbar;