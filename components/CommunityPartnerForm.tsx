"use client";

import { useState } from "react";
import Image from "next/image";

const CATEGORIES = [
  { id: "A", label: "AI Meetup or Community Group" },
  { id: "B", label: "Developer Community" },
  { id: "C", label: "Educational Institution" },
  { id: "D", label: "Non-Profit Organization" },
  { id: "E", label: "AI Association" },
  { id: "F", label: "Special Interest or Research Group" },
];

const CHANNELS = [
  { id: "email", label: "Emails/Newsletters" },
  { id: "telegram", label: "Telegram Channel/Group" },
  { id: "whatsapp", label: "WhatsApp Group" },
  { id: "x", label: "X (Twitter)" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "instagram", label: "Instagram" },
];

export default function CommunityPartnerForm() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    orgName: "",
    contactName: "",
    contactEmail: "",
    telegram: "",
    website: "",
    channels: [] as string[],
    dbSize: "",
    description: "",
    whyPartner: "",
    contribution: "",
    experience: "",
  });

  const handleChannelToggle = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      channels: prev.channels.includes(id)
        ? prev.channels.filter((c) => c !== id)
        : [...prev.channels, id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, send via mailto. Replace with API endpoint when backend ready.
    const body = `
Category: ${CATEGORIES.find((c) => c.id === formData.category)?.label || ""}
Organization: ${formData.orgName}
Contact Name: ${formData.contactName}
Contact Email: ${formData.contactEmail}
Telegram: ${formData.telegram}
Website: ${formData.website}
Communication Channels: ${formData.channels.map((id) => CHANNELS.find((c) => c.id === id)?.label).join(", ")}
Email DB Size: ${formData.dbSize}

Description:
${formData.description}

Why Partner with Agentic Day:
${formData.whyPartner}

Proposed Contribution:
${formData.contribution}

Previous Experience:
${formData.experience}
    `.trim();

    window.location.href = `mailto:pr@helloagentic.ai?subject=Community Partnership Application — ${encodeURIComponent(formData.orgName)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="community-partner" className="section community-partner-section">
      <div className="wrap">
        {!showForm ? (
          // Intro view (matches the screenshot's layout)
          <div className="cp-intro">
            <div className="cp-intro-text reveal">
              <div className="section-eyebrow">Join the ecosystem</div>
              <h2>Apply for community partnership</h2>
              <p className="cp-lead">
                Agentic Day brings together the communities driving the next wave of autonomous AI.
              </p>
              <p className="cp-lead">
                Whether you organize AI meetups, run developer communities, lead an educational
                program, or operate an AI-focused organization — apply below to express interest in
                attending Agentic Day as a Community Partner.
              </p>
              <button onClick={() => setShowForm(true)} className="btn-primary">
                Apply Now <span className="btn-dot" />
              </button>
            </div>
            <div className="cp-intro-image reveal">
              <div className="cp-image-placeholder">
                <div className="cp-image-overlay">
                  <span>Event photo</span>
                </div>
              </div>
            </div>
          </div>
        ) : submitted ? (
          // Success state
          <div className="cp-success reveal">
            <div className="section-eyebrow">— Application received</div>
            <h2>Thanks. We&apos;ll be in touch.</h2>
            <p className="cp-lead">
              Your email client should have opened with a pre-filled message. If it didn&apos;t, please
              email us directly at{" "}
              <a href="mailto:pr@helloagentic.ai" style={{ color: "#7CC242", textDecoration: "underline" }}>
                pr@helloagentic.ai
              </a>{" "}
              with your application details.
            </p>
            <button
              onClick={() => {
                setShowForm(false);
                setSubmitted(false);
              }}
              className="btn-light"
            >
              Back to overview <span className="btn-dot" />
            </button>
          </div>
        ) : (
          // Form view
          <div className="cp-form-wrap reveal">
            <div className="section-eyebrow">Join the ecosystem</div>
            <h2 style={{ marginBottom: 24 }}>Community Partnership Application</h2>
            <p className="cp-form-intro">
              Agentic Day brings together the communities driving the next wave of autonomous AI.
              Community partnership is open to:
            </p>
            <ol className="cp-eligibility">
              <li><strong>AI Meetups or Community Groups:</strong> Regional or global groups focused on AI education, networking, or discussion.</li>
              <li><strong>Developer Communities:</strong> Groups focused on AI technology development, programming, or innovation.</li>
              <li><strong>Educational Institutions:</strong> Universities, AI clubs/societies, or educational programs focused on AI.</li>
              <li><strong>Non-Profit Organizations:</strong> Groups working on AI for social impact, education, or community building.</li>
              <li><strong>AI Associations:</strong> Regional or global AI associations.</li>
              <li><strong>Special Interest or Research Groups:</strong> Communities focusing on specific aspects or themes within AI.</li>
            </ol>

            <form onSubmit={handleSubmit} className="cp-form">
              {/* 1. Category */}
              <div className="cp-field">
                <label className="cp-label">
                  1. Which category best describes your organization/community? <span className="cp-required">*</span>
                </label>
                <div className="cp-radio-grid">
                  {CATEGORIES.map((cat) => (
                    <label key={cat.id} className="cp-radio">
                      <input
                        type="radio"
                        name="category"
                        value={cat.id}
                        checked={formData.category === cat.id}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        required
                      />
                      <span className="cp-radio-letter">{cat.id}</span>
                      <span>{cat.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 2-6. Basic info */}
              <div className="cp-field">
                <label className="cp-label">2. Organization/Community Name <span className="cp-required">*</span></label>
                <input
                  type="text"
                  required
                  value={formData.orgName}
                  onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                  className="cp-input"
                />
              </div>

              <div className="cp-field">
                <label className="cp-label">3. Contact Person Name <span className="cp-required">*</span></label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="cp-input"
                />
              </div>

              <div className="cp-field">
                <label className="cp-label">4. Contact Person Email Address <span className="cp-required">*</span></label>
                <input
                  type="email"
                  required
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="cp-input"
                />
              </div>

              <div className="cp-field">
                <label className="cp-label">5. Contact Person Telegram Username</label>
                <input
                  type="text"
                  placeholder="@username"
                  value={formData.telegram}
                  onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                  className="cp-input"
                />
              </div>

              <div className="cp-field">
                <label className="cp-label">6. Website (if applicable)</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="cp-input"
                />
              </div>

              {/* 7. Channels */}
              <div className="cp-field">
                <label className="cp-label">
                  7. Which communication channels does your organization use? Select all that apply <span className="cp-required">*</span>
                </label>
                <div className="cp-checkbox-grid">
                  {CHANNELS.map((ch) => (
                    <label key={ch.id} className="cp-checkbox">
                      <input
                        type="checkbox"
                        checked={formData.channels.includes(ch.id)}
                        onChange={() => handleChannelToggle(ch.id)}
                      />
                      <span>{ch.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 8. DB Size */}
              <div className="cp-field">
                <label className="cp-label">8. Email database size <span className="cp-required">*</span></label>
                <select
                  required
                  value={formData.dbSize}
                  onChange={(e) => setFormData({ ...formData, dbSize: e.target.value })}
                  className="cp-input"
                >
                  <option value="">Select size...</option>
                  <option value="0-500">0 – 500</option>
                  <option value="500-2000">500 – 2,000</option>
                  <option value="2000-10000">2,000 – 10,000</option>
                  <option value="10000-50000">10,000 – 50,000</option>
                  <option value="50000+">50,000+</option>
                </select>
              </div>

              {/* 9. Description */}
              <div className="cp-field">
                <label className="cp-label">9. Describe Your Organization/Community <span className="cp-required">*</span></label>
                <textarea
                  required
                  rows={5}
                  placeholder="What is your mission, goals, community size, and target audience"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="cp-input cp-textarea"
                />
              </div>

              {/* 10. Why Partner */}
              <div className="cp-field">
                <label className="cp-label">10. Why do you want to be a community partner with Agentic Day? <span className="cp-required">*</span></label>
                <textarea
                  required
                  rows={5}
                  value={formData.whyPartner}
                  onChange={(e) => setFormData({ ...formData, whyPartner: e.target.value })}
                  className="cp-input cp-textarea"
                />
              </div>

              {/* 11. Contribution */}
              <div className="cp-field">
                <label className="cp-label">11. Proposed Partnership Contribution <span className="cp-required">*</span></label>
                <textarea
                  required
                  rows={5}
                  placeholder="What resources or activities can your organization/community offer"
                  value={formData.contribution}
                  onChange={(e) => setFormData({ ...formData, contribution: e.target.value })}
                  className="cp-input cp-textarea"
                />
              </div>

              {/* 12. Experience */}
              <div className="cp-field">
                <label className="cp-label">12. Previous Community Partnership Experience at events (if any) <span className="cp-required">*</span></label>
                <textarea
                  required
                  rows={5}
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="cp-input cp-textarea"
                />
              </div>

              <div className="cp-actions">
                <button type="submit" className="btn-primary">
                  Submit <span className="btn-dot" />
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn-light"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
