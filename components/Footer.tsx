import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Company</h4>
            <a href="mailto:pr@helloagentic.ai">Contact Us</a>
            <a href="mailto:pr@helloagentic.ai">About</a>
          </div>
          <div className="footer-col">
            <h4>Sponsor</h4>
            <a href="mailto:pr@helloagentic.ai">Become a Sponsor</a>
            <a href="mailto:pr@helloagentic.ai">Become a Speaker</a>
            <a href="mailto:pr@helloagentic.ai">Media Accreditation</a>
          </div>
          <div className="footer-col">
            <h4>Our Events</h4>
            <a href="#events">Agentic Day Miami · May 4</a>
            <a href="#events">Agentic Hackathon · June 5–6</a>
            <a href="#events">Agentic Day Toronto · July 22</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a
              href="https://luma.com/event/evt-CPHbpuc52PLWqp0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luma Event Page
            </a>
            <a href="mailto:pr@helloagentic.ai">pr@helloagentic.ai</a>
            <div className="footer-socials">
              <a
                href="https://t.me/sheagentic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                </svg>
              </a>
              <a
                href="https://x.com/agenticday"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/agenticday-summit/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-brand-block">
            <div className="logo-block">
              <Image
                src="/images/agentic-day-logo.jpg"
                alt="Agentic Day"
                width={280}
                height={80}
                style={{ height: 80, width: "auto" }}
              />
            </div>
          </div>
          <div className="footer-meta">
            <div className="footer-legal">
              <a href="#">Terms & Conditions</a>
              <span className="sep">•</span>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="footer-copyright">© 2026 Agentic Day. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
