import "./Collaborate.css";

function Collaborate() {
  return (
    <>
      <section className="hero">
        <h1 className="Ready-color">Let's Connect</h1>
        <p>
          Let's discuss your next project and build something exceptional
          together.
        </p>

        {/* MAIL BUTTON */}
        <a
          href="mailto:gouravlowanshi84@gmail.com"
          className="cta"
        >
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
            className="lucide lucide-mail"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          Get In Touch <span>→</span>
        </a>
      </section>
    </>
  );
}

export default Collaborate;
