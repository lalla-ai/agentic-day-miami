'use client';

import Image from 'next/image';

// Speaker type
type Speaker = {
  avatar: string;
  name: string;
  company: string;
  role: string;
  isModerator?: boolean;
};

// Panel type
type Panel = {
  eyebrow: string;
  thumbnail: string;
  title: string;
  speakers: Speaker[];
  videoUrl?: string;
};

const PANELS: Panel[] = [
  {
    eyebrow: 'Opening Keynote',
    thumbnail: '/may4thpanels/thumbnails/keynote.png',
    title: 'Opening Keynote with Don Tapscott: Why the Next Stage of AI Must Be Decentralized',
    videoUrl: 'https://www.youtube.com/watch?v=iNtv9_wmI_M',
    speakers: [
      { avatar: '/may4thpanels/avatars/don_tapscott.png', name: 'Don Tapscott', company: 'Blockchain Research Institute', role: 'Technology Thought Leader & Blockchain Expert' },
    ],
  },
  {
    eyebrow: 'Panel 1',
    thumbnail: '/may4thpanels/thumbnails/panel-1-infrastructure.png',
    title: 'AI Infrastructure & Economics',
    videoUrl: 'https://www.youtube.com/watch?v=3VOpC0bgztA',
    speakers: [
      { avatar: '/may4thpanels/avatars/katie_hilborn.png', name: 'Katie Hilborn', company: 'Regenerative Infrastructure Holdings', role: 'Founder & CEO', isModerator: true },
      { avatar: '/may4thpanels/avatars/vishal_ganeriwala.png', name: 'Vishal Ganeriwala', company: 'NVIDIA DGX Cloud', role: 'Sr Director Product Marketing' },
      { avatar: '/may4thpanels/avatars/ariel_deschapell.png', name: 'Ariel Deschapell', company: 'Hydra Host', role: 'Co-Founder & CPTO' },
      { avatar: '/may4thpanels/avatars/renatto_garro.png', name: 'Renatto Garro', company: 'Google Cloud · Nebulai', role: 'CTO Digital Natives · Co-Founder' },
    ],
  },
  {
    eyebrow: 'Spotlight Talk',
    thumbnail: '/may4thpanels/thumbnails/spotlight-radiology.png',
    title: 'Agentic AI in Radiology: Orchestrating the Future of Imaging Workflow',
    videoUrl: 'https://www.youtube.com/watch?v=jKBhtdmnHgQ',
    speakers: [
      { avatar: '/may4thpanels/avatars/alejandro_bugnone.png', name: 'Alejandro Bugnone, MD', company: 'Total Medical Imaging · RADIN', role: 'Founder · CEO' },
    ],
  },
  {
    eyebrow: 'Panel 3',
    thumbnail: '/may4thpanels/thumbnails/panel-3-agility.png',
    title: 'Agentic Agility: Avoiding Acrimony and Structuring for Success',
    speakers: [
      { avatar: '/may4thpanels/avatars/danielle_pienaar.png', name: 'Danielle Pienaar', company: 'Verdant Management', role: 'Director Web3 & Blockchain', isModerator: true },
      { avatar: '/may4thpanels/avatars/haymond_rankin.png', name: 'Haymond Rankin', company: 'Cayman Finance', role: 'Associate Director' },
      { avatar: '/may4thpanels/avatars/james_knox.png', name: 'James Knox', company: 'Aon', role: 'Managing Director, Blockchain & Tech Practice' },
      { avatar: '/may4thpanels/avatars/michael_bacina.png', name: 'Michael Bacina', company: 'NXT Law', role: 'Co-Founder & Attorney' },
      { avatar: '/may4thpanels/avatars/anna_muheim.png', name: 'Anna Muheim', company: 'ShoreLabs SEZC', role: 'CEO' },
    ],
  },
  {
    eyebrow: 'Panel 4',
    thumbnail: '/may4thpanels/thumbnails/panel-4-ai-crypto.png',
    title: 'Real World Deployment of AI in Crypto',
    videoUrl: 'https://www.youtube.com/watch?v=92jAlE2yt7g',
    speakers: [
      { avatar: '/may4thpanels/avatars/andrew_weiner.png', name: 'Andrew Weiner', company: 'WEEX Labs', role: 'Chief Operating Officer', isModerator: true },
      { avatar: '/may4thpanels/avatars/maggie_love.png', name: 'Maggie Love', company: 'SheFi', role: 'Founder' },
      { avatar: '/may4thpanels/avatars/george_v.png', name: 'George V', company: '0G Labs', role: 'Strategic Partnership Lead' },
      { avatar: '/may4thpanels/avatars/cooper_emmons.png', name: 'Cooper Emmons', company: 'Injective Foundation', role: 'Head of Institutional Strategy' },
    ],
  },
  {
    eyebrow: 'Founders Talk',
    thumbnail: '/may4thpanels/thumbnails/founders-talk.png',
    title: 'Founders Talk: Building the community of Web3 & AI',
    videoUrl: 'https://www.youtube.com/watch?v=MvU0JOh1-qU',
    speakers: [
      { avatar: '/may4thpanels/avatars/tracy_leparulo.png', name: 'Tracy Leparulo', company: 'Untraceable', role: 'Founder' },
      { avatar: '/may4thpanels/avatars/lalla_asmaa.png', name: 'Lalla Asmaa Alaoui', company: 'Agentic Day', role: 'Founder' },
      { avatar: '/may4thpanels/avatars/maggie_love_founders.png', name: 'Maggie Love', company: 'SheFi', role: 'Founder' },
    ],
  },
  {
    eyebrow: 'Panel 6',
    thumbnail: '/may4thpanels/thumbnails/panel-6-fintech.png',
    title: 'Agentic Fintech Goes Global: Payments, Trust & Expansion in the Age of Autonomous Finance',
    videoUrl: 'https://www.youtube.com/watch?v=9q8rn1XvHbM',
    speakers: [
      { avatar: '/may4thpanels/avatars/alejandra_slatapolsky.png', name: 'Alejandra Slatapolsky', company: 'Miami Fintech Club · Scalto', role: 'Co-Founder', isModerator: true },
      { avatar: '/may4thpanels/avatars/zakaria_fahim.png', name: 'Zakaria Fahim', company: 'BDO Digital Morocco · Hub Africa', role: 'President' },
      { avatar: '/may4thpanels/avatars/hector_clark.png', name: 'Hector Clark', company: 'Mastercard', role: 'Director · VP Business Development' },
      { avatar: '/may4thpanels/avatars/vladislav_shevelev.png', name: 'Vladislav Shevelev', company: 'Kea World', role: 'Vice President of Growth' },
      { avatar: '/may4thpanels/avatars/santiago_maggi.png', name: 'Santiago Maggi', company: 'Xendia (formerly BCP Global)', role: 'President & Co-Founder' },
    ],
  },
  {
    eyebrow: 'Panel 7',
    thumbnail: '/may4thpanels/thumbnails/panel-7-commerce.png',
    title: 'Agentic Commerce: The Future of AI-Powered Shopping',
    videoUrl: 'https://www.youtube.com/watch?v=3AdaUdoNHnI',
    speakers: [
      { avatar: '/may4thpanels/avatars/nikita_sachdev.png', name: 'Nikita Sachdev', company: 'Luna Media Corp · Luna PR', role: 'Founder', isModerator: true },
      { avatar: '/may4thpanels/avatars/wayne_liu.png', name: 'Wayne Liu', company: 'Perfect Corp', role: 'Chief Growth Officer' },
      { avatar: '/may4thpanels/avatars/kelly_zou.png', name: 'Kelly H. Zou', company: 'AI4Purpose ASA NYC · ASA CIR', role: 'CEO · Chair' },
      { avatar: '/may4thpanels/avatars/alex_styhar.png', name: 'Alex Styhar', company: 'Mindo AI', role: 'CEO & Co-Founder' },
    ],
  },
  {
    eyebrow: 'Closing Fireside',
    thumbnail: '/may4thpanels/thumbnails/closing-fireside.png',
    title: 'Closing Fireside: Agentic AI, The Next Frontier of Autonomous Value Creation',
    videoUrl: 'https://www.youtube.com/watch?v=nAFx02Xq9mU',
    speakers: [
      { avatar: '/may4thpanels/avatars/yat_siu.png', name: 'Yat Siu', company: 'Animoca Brands', role: 'Co-Founder & Executive Chairman' },
      { avatar: '/may4thpanels/avatars/megan_nilsson.png', name: 'Megan Nilsson', company: 'Crypto Megan', role: 'Founder' },
    ],
  },
];

export default function May4thPanelsPage() {
  return (
    <main className="page-wrap">
      <a href="/" className="back-link">← Back to Agentic Day</a>

      <section className="intro">
        <h1>Experience the agentic AI movement at Agentic Day Miami.</h1>
        <p>The 2026 Agentic Day Summit brought together the founders, investors, and operators building the infrastructure of autonomous AI. From compute and capital to commerce and culture — every conversation captured here is a window into the agentic economy as it&apos;s being built.</p>
        <p>Watch the keynote, all seven expert panels, and the closing fireside — featuring leaders from NVIDIA, Animoca Brands, Injective Labs, Perfect Corp, BDO, WEEX Labs, SheFi, Untraceable, and many more.</p>
      </section>

      <h2 className="section-title">Agentic Day Miami</h2>
      <p className="section-meta">May 4, 2026 · Tesla Miami Design District</p>

      <div className="cards-grid">
        {PANELS.map((panel, idx) => (
          <article key={idx} className="panel-card">
            <div className="panel-eyebrow">{panel.eyebrow}</div>
            <a
              href={panel.videoUrl || '#'}
              className="panel-thumb"
              onClick={(e) => { if (!panel.videoUrl) { e.preventDefault(); alert('Video coming soon: ' + panel.title); } }}
            >
              <Image src={panel.thumbnail} alt={panel.title} width={640} height={360} sizes="(max-width: 700px) 100vw, 50vw" />
              {!panel.videoUrl && <span className="coming-soon">Coming Soon</span>}
            </a>
            <div className="panel-body">
              <h3 className="panel-title">{panel.title}</h3>
              <div className="speakers-list">
                {panel.speakers.map((s, sIdx) => (
                  <div key={sIdx} className="speaker-row">
                    <div className="avatar"><Image src={s.avatar} alt={s.name} width={64} height={64} /></div>
                    <div className="info">
                      <div className="name">
                        {s.isModerator && <span className="moderator-tag">Mod</span>}
                        {s.name}
                      </div>
                      <div className="company">{s.company}</div>
                      <div className="role">{s.role}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={panel.videoUrl || '#'}
                className="watch-btn"
                onClick={(e) => { if (!panel.videoUrl) { e.preventDefault(); alert('Video coming soon: ' + panel.title); } }}
              >
                <span className="play-circle">▶</span> Watch Now
              </a>
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        .page-wrap{max-width:1280px;margin:0 auto;padding:80px 32px 120px}
        .back-link{display:inline-flex;align-items:center;gap:8px;color:#5b6272;font-size:14px;font-weight:600;text-decoration:none;margin-bottom:32px;transition:color .2s ease}
        .back-link:hover{color:#0e1117}
        .intro h1{font-size:clamp(36px,5vw,56px);line-height:1.05;letter-spacing:-0.025em;font-weight:800;margin:0 0 32px;color:#0e1117;max-width:980px}
        .intro p{color:#5b6272;font-size:17px;line-height:1.65;max-width:920px;margin:0 0 18px}
        .section-title{font-size:clamp(28px,3.5vw,40px);line-height:1.1;letter-spacing:-0.02em;font-weight:800;margin:64px 0 12px;color:#0e1117}
        .section-meta{color:#5b6272;font-size:15px;font-weight:600;margin:0 0 40px}
        .cards-grid{display:grid;grid-template-columns:repeat(3, 1fr);gap:28px;align-items:start}
        @media (max-width:1024px){.cards-grid{grid-template-columns:repeat(2,1fr);gap:24px}}
        @media (max-width:680px){.cards-grid{grid-template-columns:1fr;gap:20px}}
        .panel-card{background:#fff;border:1px solid rgba(14,17,23,.08);border-radius:16px;overflow:hidden;display:flex;flex-direction:column;transition:transform .25s ease, box-shadow .25s ease}
        .panel-card:hover{transform:translateY(-3px);box-shadow:0 20px 40px -16px rgba(14,17,23,0.14)}
        .panel-eyebrow{background:#7CC242;color:#fff;text-align:center;padding:14px 16px;font-size:15px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
        .panel-thumb{position:relative;display:block;aspect-ratio:1456/819;background:#0e1117;overflow:hidden;cursor:pointer}
        .panel-thumb img{width:100%;height:100%;object-fit:cover;display:block}
        .coming-soon{position:absolute;top:12px;right:12px;background:rgba(14,17,23,.78);backdrop-filter:blur(8px);color:#fff;font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:4px 10px;border-radius:999px;z-index:3}
        .panel-body{padding:24px 22px;display:flex;flex-direction:column;flex:1}
        .panel-title{font-size:18px;font-weight:800;letter-spacing:-0.012em;line-height:1.32;color:#0e1117;margin:0 0 22px}
        .speakers-list{display:flex;flex-direction:column;gap:18px;margin-bottom:22px}
        .speaker-row{display:flex;align-items:flex-start;gap:14px}
        .speaker-row .avatar{width:60px;height:60px;border-radius:50%;overflow:hidden;flex-shrink:0;background:#f0eee8}
        .speaker-row .avatar img{width:100%;height:100%;object-fit:cover;display:block}
        .speaker-row .info{flex:1;min-width:0;padding-top:2px}
        .speaker-row .name{font-size:15px;font-weight:800;color:#0e1117;line-height:1.25;margin-bottom:2px}
        .speaker-row .company{font-size:14px;font-weight:700;color:#0e1117;line-height:1.25;margin-bottom:2px}
        .speaker-row .role{font-size:13px;font-weight:500;color:#5b6272;line-height:1.3}
        .moderator-tag{display:inline-block;background:rgba(124,194,66,.15);color:#5a9633;font-size:9.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:2px 7px;border-radius:4px;margin-right:6px;vertical-align:2px}
        .watch-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:linear-gradient(135deg, #7CC242 0%, #5a9633 100%);color:#fff;padding:14px 22px;border-radius:999px;font-size:14px;font-weight:800;letter-spacing:.1em;text-decoration:none;text-transform:uppercase;transition:transform .15s ease, box-shadow .2s ease;margin-top:auto}
        .watch-btn:hover{transform:translateY(-1px);box-shadow:0 12px 24px -8px rgba(124,194,66,0.5)}
        .watch-btn .play-circle{width:22px;height:22px;border-radius:50%;background:#fff;color:#5a9633;display:inline-flex;align-items:center;justify-content:center;font-size:9px}
      `}</style>
    </main>
  );
}
