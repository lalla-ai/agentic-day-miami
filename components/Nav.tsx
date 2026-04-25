import Image from "next/image";

export default function Nav() {
  return (
    <nav className="top">
      <div className="pill">
        <a href="#" className="logo">
          <Image
            src="/images/agentic-day-logo.jpg"
            alt="Agentic Day"
            width={140}
            height={44}
            priority
            style={{ height: 44, width: "auto" }}
          />
        </a>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#agenda">Agenda</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#events">Series</a></li>
        </ul>
        <a
          href="https://luma.com/event/evt-CPHbpuc52PLWqp0"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Request Invite <span className="btn-dot" />
        </a>
      </div>
    </nav>
  );
}
