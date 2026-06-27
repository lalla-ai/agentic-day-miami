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
          <span>The AI Investment &amp; Infrastructure Summit</span>
          <span className="dot" />
          <span>June 22, 2026</span>
          <span className="dot" />
          <span>Amsterdam</span>
        </div>
        <div className="hero-cta-row" style={{ marginBottom: 0 }}>
          <a
            href="https://luma.com/lo977l6h"
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
