import Image from "next/image";

type Speaker = {
  name: string;
  title: string;
  company: string;
  photo: string;
  linkedin?: string;
  role?: string;
};

const SPEAKERS: Speaker[] = [
  // FIRST ROW — featured
  { name: "Don Tapscott", title: "Technology Thought Leader & Blockchain Expert", company: "Opening Keynote", photo: "/images/speakers/Don_Tapscott_real.jpg", linkedin: "https://www.linkedin.com/in/dontapscott/", role: "Keynote" },
  { name: "Yat Siu", title: "Co-Founder & Executive Chairman", company: "Animoca Brands", photo: "/images/speakers/Yat_Siu.jpg", role: "Fireside" },
  { name: "Maggie Love", title: "Founder", company: "SheFi", photo: "/images/speakers/Maggie_Love.jpg", role: "MC" },
  { name: "Megan Nilsson", title: "Crypto Megan", company: "Draper TV", photo: "/images/speakers/Megan_Nilsson.jpg", linkedin: "https://www.linkedin.com/in/cryptomegan/", role: "Fireside" },
  // MCs
  { name: "Alejandra Slatapolsky", title: "Co-Founder", company: "Miami Fintech Club / Scalto", photo: "/images/speakers/Alejandra_Slatapolsky.png", linkedin: "https://www.linkedin.com/in/alejandraslatapolsky/", role: "MC" },
  // PANEL 1
  { name: "Katie Hilborn", title: "Founder & MD", company: "Regenerative Infrastructure Holdings", photo: "/images/speakers/Katie_Hilborn.png", linkedin: "https://www.linkedin.com/in/katiehilborn/" },
  { name: "Vishal Ganeriwala", title: "Senior Director", company: "NVIDIA DGX Cloud", photo: "/images/speakers/Vishal_Ganeriwala.png", linkedin: "https://www.linkedin.com/in/vishalganeriwala/" },
  { name: "Ariel Deschapell", title: "Co-Founder & CPTO", company: "Hydra Host", photo: "/images/speakers/Ariel_Deschapell.jpg", linkedin: "https://www.linkedin.com/in/ariel-deschapell-37a88318a/" },
  // PANEL 3
  { name: "Danielle Pienaar", title: "Web3 & Blockchain Director", company: "Verdant Management", photo: "/images/speakers/Danielle_Pienaar.png", linkedin: "https://www.linkedin.com/in/danielle-pienaar/" },
  { name: "Haymond Rankin", title: "Associate Director Banking", company: "Cayman Finance", photo: "/images/speakers/Haymond_Rankin.png", linkedin: "https://www.linkedin.com/in/haymond-r-7a5b1234/" },
  { name: "Michael Bacina", title: "Co-Founder & Attorney", company: "NXT Law", photo: "/images/speakers/Michael_Bacina.png", linkedin: "https://www.linkedin.com/in/mikebacina/" },
  { name: "Anna Muheim", title: "CEO", company: "ShoreLabs", photo: "/images/speakers/Anna_Muheim.png", linkedin: "https://www.linkedin.com/in/anna-muheim/" },
  { name: "James Knox", title: "Managing Director", company: "Aon", photo: "/images/speakers/James_Knox.jpg", linkedin: "https://www.linkedin.com/in/james-c-knox-esq-67840226/" },
  // PANEL 4
  { name: "Andrew Weiner", title: "COO", company: "WEEX Labs", photo: "/images/speakers/Andrew_Weiner.png" },
  { name: "Cooper Emmons", title: "Head of Institutional Strategy", company: "Injective Labs", photo: "/images/speakers/Cooper_Emmons.jpg", linkedin: "https://www.linkedin.com/in/cooper-emmons-3a75a7b6/" },
  { name: "Anas Roque", title: "AI Engineering", company: "Meta", photo: "/images/speakers/Anas_Roque.jpg", linkedin: "https://www.linkedin.com/in/anas-hoque/" },
  { name: "George Varghese", title: "Head of Strategic Partnerships", company: "0G", photo: "/images/speakers/George_V.png", linkedin: "https://www.linkedin.com/in/georgemvarghese/" },
  { name: "Francesco Andreoli", title: "Director of Developer Relations", company: "MetaMask", photo: "/images/speakers/Francesco_Andreoli.jpg", linkedin: "https://www.linkedin.com/in/francescoandreoli/" },
  // FOUNDERS TALK
  { name: "Laura Leparulo", title: "Founder", company: "ETH Women", photo: "/images/speakers/Laura_Leparulo.png", linkedin: "https://www.linkedin.com/in/laura-leparulo/" },
  // PANEL 6
  { name: "Hector Clark", title: "Director / VP Business Development", company: "Mastercard", photo: "/images/speakers/Hector_Clark.jpg", linkedin: "https://www.linkedin.com/in/hectorclark-payments/" },
  { name: "Vladislav Shevelev", title: "CFO", company: "Kea World", photo: "/images/speakers/Vladislav_Shevelev.png", linkedin: "https://www.linkedin.com/in/vladislavshevelev/" },
  { name: "Zakaria Fahim", title: "President", company: "BDO Digital Morocco / Hub Africa", photo: "/images/speakers/Zakaria_Fahim.png", linkedin: "https://www.linkedin.com/in/zakaria-fahim-97286928/" },
  { name: "Jairo Riveros", title: "President", company: "Paysend", photo: "/images/speakers/Jairo_Riveros.png", linkedin: "https://www.linkedin.com/in/jairoriveros/" },
  // PANEL 7
  { name: "Nikita Sachdev", title: "CEO", company: "Luna PR", photo: "/images/speakers/Nikita_Sachdev.png", linkedin: "https://www.linkedin.com/in/nikitasachdev/" },
  { name: "Kelly H. Zou", title: "CEO", company: "AI4Purpose", photo: "/images/speakers/Kelly_H_Zou.jpg", linkedin: "https://www.linkedin.com/in/kelly-h-zou-phd-pstat-fasa-97307b16/" },
  { name: "Alex Styhar", title: "CEO", company: "Mindo AI", photo: "/images/speakers/Alex_Styhar.png" },
  { name: "Wayne Liu", title: "CGO", company: "Perfect Corp.", photo: "/images/speakers/Wayne_Liu.png", linkedin: "https://www.linkedin.com/in/wayneliu88/" },
  // CLOSING FIRESIDE (already shown in first row)
  // HOST
  { name: "Lalla Asmaa Alaoui", title: "Founder", company: "allmyai.ai & Agentic Day Summit", photo: "/images/speakers/Lalla_Asmaa_Alaoui.jpg", role: "Host" },
];

export default function Speakers() {
  return (
    <section id="speakers" className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-eyebrow reveal">— The brightest minds in agentic AI</div>
        <h2 className="reveal">Meet our speakers</h2>
        <div className="speakers-grid">
          {SPEAKERS.map((s) => (
            <div key={s.name} className="speaker-card reveal">
              <div className="speaker-photo" style={{ position: "relative" }}>
                {s.role && (
                  <span style={{
                    position: "absolute", top: 10, left: 10, zIndex: 10,
                    background: "#7CC242", color: "#0e1117",
                    fontSize: 10, fontWeight: 800, letterSpacing: "0.1em",
                    textTransform: "uppercase", padding: "3px 8px", borderRadius: 4,
                  }}>
                    {s.role}
                  </span>
                )}
                {s.linkedin && (
                  <a
                    href={s.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: "absolute", top: 10, right: 10, zIndex: 10,
                      background: "rgba(14,17,23,0.75)", borderRadius: 6,
                      width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                    aria-label={`${s.name} on LinkedIn`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#a4e547">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                <Image
                  src={s.photo}
                  alt={`${s.name} — ${s.title}, ${s.company} — Agentic Day Miami speaker`}
                  width={400}
                  height={400}
                />
              </div>
              <div className="speaker-name">{s.name}</div>
              <div className="speaker-title">{s.title}, {s.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
