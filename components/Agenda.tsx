export default function Agenda() {
  return (
    <section id="agenda" className="section">
      <div className="wrap">
        <div className="section-eyebrow reveal">— Program · May 4, 2026</div>
        <h2 className="reveal">An afternoon designed<br />for high-signal conversations.</h2>

        <div>
          <div className="agenda-row reveal">
            <div className="agenda-time">12:30 PM</div>
            <div>
              <h3 className="agenda-title">Arrival & Institutional Networking Brunch</h3>
              <p className="agenda-desc">Opening the day with high-level connection and curated introductions.</p>
            </div>
          </div>
          <div className="agenda-row reveal">
            <div className="agenda-time">1:30 PM</div>
            <div>
              <h3 className="agenda-title">Panel: AI Infrastructure & Economics</h3>
              <p className="agenda-desc">Direct, real-world conversation on AI infrastructure bottlenecks, compute costs, and the rise of Neo clouds. A candid look at why enterprise agent integration is slower than expected — and what it takes to unlock it.</p>
              <p className="agenda-speakers"><strong>Featured speaker:</strong> Vishal Ganeriwala (NVIDIA DGX Cloud) <strong>· Panelist:</strong> Katie Hilborn (Regenerative Infrastructure Holdings)</p>
            </div>
          </div>
          <div className="agenda-row reveal">
            <div className="agenda-time">2:20 PM</div>
            <div>
              <h3 className="agenda-title">Panel: Agentic Agility — Avoiding Acrimony and Structuring for Success</h3>
              <p className="agenda-speakers"><strong>Speakers:</strong> Danielle Pienaar (Verdant Management), Haymond Rankin (Cayman Finance), Jenna Peterson (Midnight Foundation), Anna Muheim (ShoreLabs)</p>
            </div>
          </div>
          <div className="agenda-row reveal">
            <div className="agenda-time">2:50 PM</div>
            <div>
              <h3 className="agenda-title">Panel: Real World Deployment of AI in Crypto</h3>
              <p className="agenda-speakers"><strong>Speakers:</strong> Kim (Genius PR), Andrew Weiner (WEEX Labs), George Varghese (0G)</p>
            </div>
          </div>
          <div className="agenda-row reveal">
            <div className="agenda-time">3:20 PM</div>
            <div>
              <h3 className="agenda-title">Connector Workshop: Breaking the Room Open</h3>
              <p className="agenda-desc">A 20-minute reset designed to turn the room from an audience into a network. Stand-up format, rotating triads of founder + investor + operator.</p>
              <p className="agenda-speakers"><strong>Hosted by:</strong> Andrew Weiner (COO, WEEX Labs)</p>
            </div>
          </div>
          <div className="agenda-row reveal">
            <div className="agenda-time">3:40 PM</div>
            <div>
              <h3 className="agenda-title">Panel: The New Fintech Frontier — Stablecoins, Agentic Payment & Global Expansion</h3>
              <p className="agenda-speakers"><strong>Moderator:</strong> Nikita Sachdev (LunaPR) <strong>· Speakers:</strong> Alejandra Slatapolsky (Miami Fintech Club), Vladislav Shevelev (Kea World), Zakaria Fahim (BDO Morocco / Hub Africa), Jairo Riveros (Paysend)</p>
            </div>
          </div>
          <div className="agenda-row reveal">
            <div className="agenda-time">4:10 PM</div>
            <div>
              <h3 className="agenda-title">Panel: Agentic Commerce — The Future of AI-Powered Shopping</h3>
              <p className="agenda-speakers"><strong>Speakers:</strong> Kelly H. Zou (AI4Purpose), Alex Styhar (Mindo AI), Wayne Liu (Perfect Corp.)</p>
            </div>
          </div>
          <div className="agenda-row reveal">
            <div className="agenda-time">5:00 PM</div>
            <div>
              <h3 className="agenda-title">Evening Reception & Silent Auction</h3>
              <p className="agenda-desc">Networking in Tesla&apos;s futuristic setting, paired with a curated art auction benefiting St. Jude Children&apos;s Research Hospital.</p>
            </div>
          </div>
          <div className="agenda-row reveal">
            <div className="agenda-time">+ Bonus</div>
            <div>
              <h3 className="agenda-title">Complimentary Tesla Private Test Drive</h3>
              <p className="agenda-desc">Exclusively available to Agentic Day attendees. Limited slots — advance booking required.</p>
            </div>
          </div>
        </div>

        {/* TICKETS */}
        <div className="tickets reveal">
          <div className="section-eyebrow" style={{ color: "#a4e547", marginBottom: 16 }}>— Access</div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", marginBottom: 16 }}>
            Four ways in.<br />All by approval.
          </h2>
          <p className="tickets-sub">Each pass requires host approval. Submit your profile to be reviewed.</p>
          <div className="tickets-grid">
            <div className="ticket">
              <div className="ticket-name">Networking Brunch</div>
              <div className="ticket-status">Approval Required</div>
              <p className="ticket-desc">Exclusive pre-summit institutional networking brunch.</p>
            </div>
            <div className="ticket">
              <div className="ticket-name">Agentic Day Summit</div>
              <div className="ticket-status">Approval Required</div>
              <p className="ticket-desc">Full afternoon summit access. Keynotes, panels, fireside conversations, and 1:1 matchmaking.</p>
            </div>
            <div className="ticket">
              <div className="ticket-name">Networking Reception</div>
              <div className="ticket-status">Approval Required</div>
              <p className="ticket-desc">Evening networking reception and curated art auction benefiting St. Jude.</p>
            </div>
            <div className="ticket">
              <div className="ticket-name">+ Tesla Private Test Drive</div>
              <div className="ticket-status">Approval Required</div>
              <p className="ticket-desc">Complimentary private Tesla test drive. Limited slots — advance booking required.</p>
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <a
              href="https://luma.com/event/evt-CPHbpuc52PLWqp0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Request Invitation on Luma <span className="btn-dot" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
