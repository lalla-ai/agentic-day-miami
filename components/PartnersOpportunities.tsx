export default function PartnersOpportunities() {
  return (
    <section className="partners-ops">
      <div className="wrap">

        {/* MEDIA ACCREDITATION */}
        <div className="ops-row reveal">
          <div className="ops-text">
            <p className="ops-eyebrow">Media accreditation</p>
            <h2 className="ops-title">Apply for media<br />accreditation</h2>
            <p className="ops-body">
              Agentic Day invites top media outlets to cover exclusive AI announcements, founder
              presentations, and industry-shaping discussions live from Tesla Miami Design District.
            </p>
            <p className="ops-body">
              Please email us with details about your outlet, audience reach, and coverage plans
              before applying.
            </p>
            <a
              href="mailto:pr@helloagentic.ai?subject=Media Accreditation Application"
              className="btn-primary"
            >
              Apply Now <span className="btn-dot" />
            </a>
          </div>
          <div className="ops-visual ops-visual-media">
            <div className="ops-visual-overlay">
              <span>Media · Press</span>
            </div>
          </div>
        </div>

        {/* SPONSORSHIP */}
        <div className="ops-row ops-row-reverse reveal">
          <div className="ops-text">
            <p className="ops-eyebrow">Explore sponsorship opportunities</p>
            <h2 className="ops-title">Position your brand at<br />the forefront of AI</h2>
            <p className="ops-body">
              With 300 curated seats and 450+ founders, investors, and operators in the room,
              Agentic Day offers the premier platform to network, raise visibility, and drive
              demand for your brand.
            </p>
            <p className="ops-body">
              Choose from a range of packages tailored to your goals and budget. Options include
              workshop sponsorship, exhibition space, networking activations, and onsite branding.
            </p>
            <a
              href="mailto:pr@helloagentic.ai?subject=Sponsorship Inquiry — Agentic Day Miami"
              className="btn-primary"
            >
              Exhibit with us <span className="btn-dot" />
            </a>
          </div>
          <div className="ops-visual ops-visual-sponsor">
            <div className="ops-visual-overlay">
              <span>Sponsor · Exhibit</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
