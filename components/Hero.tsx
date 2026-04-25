import MeshWave from "./MeshWave";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="headline">
          <span className="row">Where AI</span>
          <span className="row">meets capital</span>
        </h1>
        <div className="meta-line">
          <span>The AI Infrastructure Economy</span>
          <span className="dot" />
          <span>May 4, 2026</span>
          <span className="dot" />
          <span>Tesla Miami Design District</span>
        </div>
        <div className="hero-cta-row" style={{ marginBottom: 0 }}>
          <a
            href="https://luma.com/event/evt-CPHbpuc52PLWqp0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Request Invite <span className="btn-dot" />
          </a>
        </div>
      </div>
      <div className="fluid">
        <MeshWave />
      </div>
    </header>
  );
}
