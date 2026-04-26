"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
    return () => document.body.classList.remove("nav-open");
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <nav className="top">
        <div className="pill">
          <a href="/" className="logo" onClick={handleLinkClick}>
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
            <li><a href="/#about">About</a></li>
            <li><a href="/#agenda">Agenda</a></li>
            <li><a href="/#speakers">Speakers</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/#community-partner">Apply</a></li>
          </ul>
          <a
            href="https://luma.com/event/evt-CPHbpuc52PLWqp0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Request Invite <span className="btn-dot" />
          </a>
          <button
            className={`nav-toggle ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-menu ${isOpen ? "open" : ""}`}>
        <a href="/#about" onClick={handleLinkClick}>About</a>
        <a href="/#agenda" onClick={handleLinkClick}>Agenda</a>
        <a href="/#speakers" onClick={handleLinkClick}>Speakers</a>
        <a href="/partners" onClick={handleLinkClick}>Partners</a>
        <a href="/#community-partner" onClick={handleLinkClick}>Apply</a>
        <a
          href="https://luma.com/event/evt-CPHbpuc52PLWqp0"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          onClick={handleLinkClick}
        >
          Request Invite <span className="btn-dot" />
        </a>
      </div>
    </>
  );
}
