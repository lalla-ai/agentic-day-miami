export default function FinalCTA() {
  return (
    <section className="cta-band">
      <div className="wrap">
        <h2 style={{ fontSize: "clamp(48px, 8vw, 120px)", lineHeight: 0.95 }}>
          Don&apos;t miss<br />the next one.
        </h2>
        <p>The room is small. The standard is high. Submit your profile to be reviewed.</p>
        <div className="hero-cta-row">
          <a
            href="https://luma.com/event/evt-CPHbpuc52PLWqp0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Request Invite <span className="btn-dot" />
          </a>
          <a href="mailto:pr@helloagentic.ai" className="btn-light">
            Sponsor / Speak <span className="btn-dot" />
          </a>
        </div>
      </div>
    </section>
  );
}
