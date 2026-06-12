const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
  </svg>
);

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="m8 12 3 3 5-6" />
  </svg>
);

export default function EventsSeries() {
  return (
    <section id="events" className="series-section">
      <div className="wrap">
        <div className="series-head reveal">
          <div className="series-eyebrow">— THE AGENTIC SERIES</div>
          <h2 className="series-title">Three editions. Across markets.<br />One agentic mission.</h2>
          <p className="series-sub">
            The room that decides what scales — convened across markets, edition after edition.
          </p>
        </div>

        <div className="series-grid">
          {/* MIAMI */}
          <article className="series-card series-card-miami reveal">
            <div className="series-card-top series-top-miami">
              <span className="series-tag">Flagship · Recap</span>
              <div className="series-city">Miami</div>
            </div>
            <div className="series-card-body">
              <h3 className="series-event-name">Agentic Day Miami</h3>
              <ul className="series-meta">
                <li><CalendarIcon /><strong>May 4, 2026</strong></li>
                <li><PinIcon /><span>Tesla Miami Design District</span></li>
                <li><PersonIcon /><span>Sold out · By invitation</span></li>
              </ul>
              <a href="#relive" className="series-cta">WATCH THE RECAP →</a>
            </div>
          </article>

          {/* AMSTERDAM — highlighted */}
          <article className="series-card series-card-amsterdam series-card-highlight reveal">
            <div className="series-card-top series-top-amsterdam">
              <span className="series-tag series-tag-pill">Up Next</span>
              <div className="series-city">Amsterdam</div>
            </div>
            <div className="series-card-body">
              <h3 className="series-event-name">Agentic Day Amsterdam</h3>
              <ul className="series-meta">
                <li><CalendarIcon /><strong>June 22, 2026</strong></li>
                <li><PinIcon /><span>Amsterdam, Netherlands</span></li>
                <li><BoltIcon /><span>Official side event · Dutch Blockchain Week</span></li>
              </ul>
              <a
                href="https://luma.com/lo977l6h"
                target="_blank"
                rel="noopener noreferrer"
                className="series-cta series-cta-bright"
              >
                REGISTER / REQUEST INVITE →
              </a>
            </div>
          </article>

          {/* TORONTO */}
          <article className="series-card series-card-toronto reveal">
            <div className="series-card-top series-top-toronto">
              <span className="series-tag">Upcoming</span>
              <div className="series-city">Toronto</div>
            </div>
            <div className="series-card-body">
              <h3 className="series-event-name">Agentic Day Toronto</h3>
              <ul className="series-meta">
                <li><CalendarIcon /><strong>July 21–22, 2026</strong></li>
                <li><PinIcon /><span>Toronto, Canada</span></li>
                <li><CheckIcon /><span>Alongside Blockchain Futurist Conference</span></li>
              </ul>
              <a
                href="https://luma.com/Agentic_AI_Day"
                target="_blank"
                rel="noopener noreferrer"
                className="series-cta"
              >
                CONFERENCE INFO →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
