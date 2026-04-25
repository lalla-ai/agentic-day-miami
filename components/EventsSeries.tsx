export default function EventsSeries() {
  return (
    <section id="events" className="section" style={{ paddingTop: 60 }}>
      <div className="wrap">
        <div className="section-eyebrow reveal">— The Series</div>
        <h2 className="reveal">
          Three events.<br />One agentic mission.
        </h2>
        <div className="events">
          <article className="event miami reveal">
            <div className="event-tag">
              <span className="dot" />Flagship · Now
            </div>
            <div className="event-headline">
              <h3 className="event-title">Agentic Day Miami</h3>
              <div className="event-meta">
                <span>May 4 · 2026</span>
                <span className="meta-dot" />
                <span>Tesla Miami Design District</span>
                <span className="meta-dot" />
                <span>By Invitation</span>
              </div>
            </div>
            <a
              href="https://luma.com/event/evt-CPHbpuc52PLWqp0"
              target="_blank"
              rel="noopener noreferrer"
              className="event-cta"
            >
              Request Invite →
            </a>
          </article>

          <article className="event hackathon reveal">
            <div className="event-tag">
              <span className="dot" />Build · Upcoming
            </div>
            <div className="event-headline">
              <h3 className="event-title">Agentic Hackathon</h3>
              <div className="event-meta">
                <span>June 5–6 · 2026</span>
                <span className="meta-dot" />
                <span>Miami, FL</span>
                <span className="meta-dot" />
                <span>Registration opens soon</span>
              </div>
            </div>
            <a href="#" className="event-cta">Coming soon →</a>
          </article>

          <article className="event toronto reveal">
            <div className="event-tag">
              <span className="dot" />North · Toronto
            </div>
            <div className="event-headline">
              <h3 className="event-title">Agentic Day Toronto</h3>
              <div className="event-meta">
                <span>July 22 · 2026</span>
                <span className="meta-dot" />
                <span>Blockchain Futurist Conference</span>
                <span className="meta-dot" />
                <span>Ticketed</span>
              </div>
            </div>
            <a
              href="https://futuristconference.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="event-cta"
            >
              Conference info →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
