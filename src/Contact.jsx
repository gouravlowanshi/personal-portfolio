import "./Contact.css";
function Contact(){

  

    return(
        <>
    <section id="contact" className="contact-section">
  <div className="contact-header">
    <span className="line"></span>
    <p className="Contact-color">CONTACT</p>
    <span className="line"></span>
  </div>

  <h2 className="Connect-color">Let's Connect</h2>
  <p className="subtitle">
    Open to collaborations and opportunities. Let's discuss your ideas.
  </p>

  <div className="contact-cards">
    
    <div className="contact-card">
      <div className="icon-box"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail text-white" data-fg-d3bl357="0.8:37.12:/src/app/App.tsx:453:19:29032:41:e:Mail::::::D4VR"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
      <h3>Email</h3>
      <p className="info">iowanshigourav@gmail.com</p>
      <a href="#" className="action">Send Message →</a>
    </div>

    
    <div className="contact-card">
      <div className="icon-box"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin text-white" data-fg-d3bl367="0.8:37.12:/src/app/App.tsx:468:19:30029:45:e:Linkedin::::::BytQ"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></div>
      <h3>LinkedIn</h3>
      <p className="info">Professional Network</p>
      <a href="#" className="action">Connect →</a>
    </div>

    
    <div className="contact-card">
      <div className="icon-box"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail text-white" data-fg-d3bl357="0.8:37.12:/src/app/App.tsx:453:19:29032:41:e:Mail::::::D4VR"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
      <h3>GitHub</h3>
      <p className="info">Code Repository</p>
      <a href="#" className="action">View Code →</a>
    </div>
    <div className="contact-card">
      <div className="icon-box"><i class="fa-solid fa-file"></i>
</div>
      <h3>Resume</h3>
      <p className="info">Download</p>
      <a href="#" className="action">View Resume →</a>
    </div>
  </div>
</section>


        </>
    )
}
export default Contact;