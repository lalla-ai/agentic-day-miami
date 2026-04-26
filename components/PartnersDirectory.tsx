"use client";

import { useState } from "react";
import Image from "next/image";

type TabKey = "sponsors" | "media" | "ecosystem" | "affiliates";

export default function PartnersDirectory() {
  const [activeTab, setActiveTab] = useState<TabKey>("sponsors");

  return (
    <section className="partners-directory">
      <div className="wrap">
        {/* Sub-nav tabs */}
        <div className="directory-tabs reveal">
          <button
            className={`directory-tab ${activeTab === "sponsors" ? "active" : ""}`}
            onClick={() => setActiveTab("sponsors")}
          >
            Sponsors
          </button>
          <button
            className={`directory-tab ${activeTab === "media" ? "active" : ""}`}
            onClick={() => setActiveTab("media")}
          >
            Media
          </button>
          <button
            className={`directory-tab ${activeTab === "ecosystem" ? "active" : ""}`}
            onClick={() => setActiveTab("ecosystem")}
          >
            Ecosystem
          </button>
          <button
            className={`directory-tab ${activeTab === "affiliates" ? "active" : ""}`}
            onClick={() => setActiveTab("affiliates")}
          >
            Affiliates
          </button>
        </div>

        {/* SPONSORS PANEL */}
        {activeTab === "sponsors" && (
          <div className="directory-panel reveal">
            <h2 className="directory-h1">Sponsors</h2>

            {/* Diamond Partners */}
            <div className="directory-tier">
              <div className="directory-tier-title">Diamond Partners</div>
              <div className="directory-grid directory-grid-3">
                <div className="directory-cell">
                  <Image
                    src="/images/sponsors/weex_labs_logo.svg"
                    alt="WEEX Labs"
                    width={300}
                    height={80}
                    style={{ maxWidth: "70%", maxHeight: "70%", objectFit: "contain", width: "auto", height: "auto" }}
                  />
                </div>
                <div className="directory-cell directory-cell-empty">
                  <span>Logo coming soon</span>
                </div>
                <div className="directory-cell directory-cell-empty">
                  <span>Logo coming soon</span>
                </div>
              </div>
            </div>

            {/* Platinum Partners */}
            <div className="directory-tier">
              <div className="directory-tier-title">Platinum Partners</div>
              <div className="directory-grid directory-grid-4">
                <div className="directory-cell">
                  <Image
                    src="/images/sponsors/cayman_finance.png"
                    alt="Cayman Finance"
                    width={200}
                    height={60}
                    style={{ maxWidth: "70%", maxHeight: "60%", objectFit: "contain", width: "auto", height: "auto" }}
                  />
                </div>
                <div className="directory-cell">
                  <Image
                    src="/images/sponsors/verdant_management.png"
                    alt="Verdant Management"
                    width={290}
                    height={109}
                    style={{ maxWidth: "75%", maxHeight: "55%", objectFit: "contain", width: "auto", height: "auto" }}
                  />
                </div>
                <div className="directory-cell">
                  <Image
                    src="/images/sponsors/shore_labs.png"
                    alt="Shore Labs"
                    width={770}
                    height={1000}
                    style={{ maxWidth: "32%", maxHeight: "75%", objectFit: "contain", width: "auto", height: "auto" }}
                  />
                </div>
                <div className="directory-cell directory-cell-empty">
                  <span>Logo coming soon</span>
                </div>
              </div>
            </div>

            {/* Gold Partners */}
            <div className="directory-tier">
              <div className="directory-tier-title">Gold Partners</div>
              <div className="directory-grid directory-grid-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="directory-cell directory-cell-empty">
                    <span>Logo coming soon</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Become a sponsor CTA */}
            <div className="directory-cta">
              <h3>Want to be on this page?</h3>
              <p>Limited Diamond, Platinum, and Gold tier slots remain.</p>
              <a
                href="mailto:pr@helloagentic.ai?subject=Sponsorship Inquiry"
                className="btn-primary"
              >
                Become a sponsor <span className="btn-dot" />
              </a>
            </div>
          </div>
        )}

        {/* MEDIA PANEL */}
        {activeTab === "media" && (
          <div className="directory-panel reveal">
            <h2 className="directory-h1">Media Partners</h2>
            <div className="directory-tier">
              <div className="directory-grid directory-grid-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="directory-cell directory-cell-empty">
                    <span>Logo coming soon</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="directory-cta">
              <h3>Cover Agentic Day Miami</h3>
              <p>Apply for media accreditation to access keynotes, panels, and the evening reception.</p>
              <a
                href="mailto:pr@helloagentic.ai?subject=Media Accreditation"
                className="btn-primary"
              >
                Apply for accreditation <span className="btn-dot" />
              </a>
            </div>
          </div>
        )}

        {/* ECOSYSTEM PANEL */}
        {activeTab === "ecosystem" && (
          <div className="directory-panel reveal">
            <h2 className="directory-h1">Ecosystem Partners</h2>
            <div className="directory-tier">
              <div className="directory-tier-title">Institutional Partner</div>
              <div className="directory-grid directory-grid-3">
                <div className="directory-cell directory-cell-empty">
                  <span>Miami Dade College</span>
                </div>
              </div>
            </div>
            <div className="directory-tier">
              <div className="directory-tier-title">Community Partners</div>
              <div className="directory-grid directory-grid-4">
                <div className="directory-cell directory-cell-empty"><span>Miami Fintech Club</span></div>
                <div className="directory-cell directory-cell-empty"><span>Miami-Dade Beacon Council</span></div>
                <div className="directory-cell directory-cell-empty"><span>Miami Chamber of Commerce Dubai</span></div>
                <div className="directory-cell directory-cell-empty"><span>SheFi</span></div>
              </div>
            </div>
            <div className="directory-cta">
              <h3>Apply for ecosystem partnership</h3>
              <p>Open to AI meetups, communities, educational institutions, and non-profits.</p>
              <a href="/#community-partner" className="btn-primary">
                Apply now <span className="btn-dot" />
              </a>
            </div>
          </div>
        )}

        {/* AFFILIATES PANEL */}
        {activeTab === "affiliates" && (
          <div className="directory-panel reveal">
            <h2 className="directory-h1">Affiliates</h2>
            <div className="directory-tier">
              <div className="directory-grid directory-grid-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="directory-cell directory-cell-empty">
                    <span>Logo coming soon</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="directory-cta">
              <h3>Become an affiliate</h3>
              <p>Partner with us to extend reach and drive registrations to Agentic Day.</p>
              <a
                href="mailto:pr@helloagentic.ai?subject=Affiliate Partnership"
                className="btn-primary"
              >
                Get in touch <span className="btn-dot" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
