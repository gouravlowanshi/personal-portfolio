import "./Contact.css";

function Contact() {
  return (
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

          {/* EMAIL */}
          <div className="contact-card">
            <div className="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail text-white"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>

            <h3>Email</h3>

            <p className="info">
              <a
                href="mailto:gouravlowanshi84@gmail.com"
                className="info"
              >
                gouravlowanshi84@gmail.com
              </a>
            </p>

            <a
              href="mailto:gouravlowanshi84@gmail.com"
              className="action"
            >
              Send Message →
            </a>
          </div>

          {/* LINKEDIN */}
          <div className="contact-card">
            <div className="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin text-white"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>

            <h3>LinkedIn</h3>
            <p className="info">Professional Network</p>

            <a
              href="https://www.linkedin.com/in/gouravlowanshi/"
              target="_blank"
              rel="noopener noreferrer"
              className="action"
            >
              Connect →
            </a>
          </div>

          {/* GITHUB */}
          <div className="contact-card">
            <div className="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github text-white"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.36 1.12 2.94.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.8c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .26.18.57.69.47A10.27 10.27 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
            </div>

            <h3>GitHub</h3>
            <p className="info">Code Repository</p>

            <a
              href="https://github.com/gouravlowanshi"
              target="_blank"
              rel="noopener noreferrer"
              className="action"
            >
              View Code →
            </a>
          </div>

          {/* RESUME (ONLY 2 BUTTONS) */}
          <div className="contact-card">
            <div className="icon-box">
              <i className="fa-solid fa-file"></i>
            </div>

            <h3>Resume</h3>

            <div className="resume-buttons">
              <a
                href="https://drive.google.com/file/d/1vD440TpQczVap80T00_Nb193TpNSDVmP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="action"
              >
                View Resume →
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1vD440TpQczVap80T00_Nb193TpNSDVmP"
                className="action"
              >
                Download Resume →
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;
