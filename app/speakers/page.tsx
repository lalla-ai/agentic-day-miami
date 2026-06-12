import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Speakers — Agentic Day Miami",
  description: "Meet the speakers of Agentic Day Miami — leaders shaping agentic AI, infrastructure, and capital.",
};

type Speaker = {
  name: string;
  title: string;
  company: string;
  photo: string;
  linkedin?: string;
  twitter?: string;
  role?: string;
};

const SPEAKERS: Speaker[] = [
  { name: "Don Tapscott", title: "Technology Thought Leader & Blockchain Expert", company: "Opening Keynote", photo: "/images/speakers/Don_Tapscott_real.jpg", linkedin: "https://www.linkedin.com/in/dontapscott/", role: "Keynote" },
  { name: "Yat Siu", title: "Co-Founder & Executive Chairman", company: "Animoca Brands", photo: "/images/speakers/Yat_Siu.jpg", role: "Fireside" },
  { name: "Maggie Love", title: "Founder", company: "SheFi", photo: "/images/speakers/Maggie_Love.jpg", role: "MC" },
  { name: "Megan Nilsson", title: "Crypto Megan", company: "Draper TV", photo: "/images/speakers/Megan_Nilsson.jpg", linkedin: "https://www.linkedin.com/in/cryptomegan/", role: "Fireside" },
  { name: "Laura Leparulo", title: "Founder", company: "ETH Women", photo: "/images/speakers/Laura_Leparulo.png", linkedin: "https://www.linkedin.com/in/laura-leparulo/" },
  { name: "Zakaria Fahim", title: "President", company: "BDO Digital Morocco / Hub Africa", photo: "/images/speakers/Zakaria_Fahim.png", linkedin: "https://www.linkedin.com/in/zakaria-fahim-97286928/" },
  { name: "Jairo Riveros", title: "President", company: "Paysend", photo: "/images/speakers/Jairo_Riveros.png", linkedin: "https://www.linkedin.com/in/jairoriveros/" },
  { name: "Vishal Ganeriwala", title: "Senior Director", company: "NVIDIA DGX Cloud", photo: "/images/speakers/Vishal_Ganeriwala.png", linkedin: "https://www.linkedin.com/in/vishalganeriwala/" },
  { name: "Andrew Weiner", title: "COO", company: "WEEX Labs", photo: "/images/speakers/Andrew_Weiner.png" },
  { name: "Haymond Rankin", title: "Associate Director Banking", company: "Cayman Finance", photo: "/images/speakers/Haymond_Rankin.png", linkedin: "https://www.linkedin.com/in/haymond-r-7a5b1234/" },
  { name: "Danielle Pienaar", title: "Web3 & Blockchain Director", company: "Verdant Management", photo: "/images/speakers/Danielle_Pienaar.png", linkedin: "https://www.linkedin.com/in/danielle-pienaar/" },
  { name: "Michael Bacina", title: "Co-Founder & Attorney", company: "NXT Law", photo: "/images/speakers/Michael_Bacina.png", linkedin: "https://www.linkedin.com/in/mikebacina/" },
  { name: "Alejandra Slatapolsky", title: "Co-Founder", company: "Miami Fintech Club / Scalto", photo: "/images/speakers/Alejandra_Slatapolsky.png", linkedin: "https://www.linkedin.com/in/alejandraslatapolsky/", role: "MC" },
  { name: "Katie Hilborn", title: "Founder & MD", company: "Regenerative Infrastructure Holdings", photo: "/images/speakers/Katie_Hilborn.png", linkedin: "https://www.linkedin.com/in/katiehilborn/" },
  { name: "Ariel Deschapell", title: "Co-Founder & CPTO", company: "Hydra Host", photo: "/images/speakers/Ariel_Deschapell.jpg", linkedin: "https://www.linkedin.com/in/ariel-deschapell-37a88318a/" },
  { name: "Anna Muheim", title: "CEO", company: "ShoreLabs", photo: "/images/speakers/Anna_Muheim.png", linkedin: "https://www.linkedin.com/in/anna-muheim/" },
  { name: "James Knox", title: "Managing Director", company: "Aon", photo: "/images/speakers/James_Knox.jpg", linkedin: "https://www.linkedin.com/in/james-c-knox-esq-67840226/" },
  { name: "Cooper Emmons", title: "Head of Institutional Strategy", company: "Injective Labs", photo: "/images/speakers/Cooper_Emmons.jpg", linkedin: "https://www.linkedin.com/in/cooper-emmons-3a75a7b6/" },
  { name: "Anas Roque", title: "AI Engineering", company: "Meta", photo: "/images/speakers/Anas_Roque.jpg", linkedin: "https://www.linkedin.com/in/anas-hoque/" },
  { name: "George Varghese", title: "Head of Strategic Partnerships", company: "0G", photo: "/images/speakers/George_V.png", linkedin: "https://www.linkedin.com/in/georgemvarghese/" },
  { name: "Francesco Andreoli", title: "Director of Developer Relations", company: "MetaMask", photo: "/images/speakers/Francesco_Andreoli.jpg", linkedin: "https://www.linkedin.com/in/francescoandreoli/" },
  { name: "Hector Clark", title: "Director / VP Business Development", company: "Mastercard", photo: "/images/speakers/Hector_Clark.jpg", linkedin: "https://www.linkedin.com/in/hectorclark-payments/" },
  { name: "Vladislav Shevelev", title: "CFO", company: "Kea World", photo: "/images/speakers/Vladislav_Shevelev.png", linkedin: "https://www.linkedin.com/in/vladislavshevelev/" },
  { name: "Nikita Sachdev", title: "CEO", company: "Luna PR", photo: "/images/speakers/Nikita_Sachdev.png", linkedin: "https://www.linkedin.com/in/nikitasachdev/" },
  { name: "Kelly H. Zou", title: "CEO", company: "AI4Purpose", photo: "/images/speakers/Kelly_H_Zou.jpg", linkedin: "https://www.linkedin.com/in/kelly-h-zou-phd-pstat-fasa-97307b16/" },
  { name: "Alex Styhar", title: "CEO", company: "Mindo AI", photo: "/images/speakers/Alex_Styhar.png" },
  { name: "Wayne Liu", title: "CGO", company: "Perfect Corp.", photo: "/images/speakers/Wayne_Liu.png", linkedin: "https://www.linkedin.com/in/wayneliu88/" },
  { name: "Lalla Asmaa Alaoui", title: "Founder", company: "allmyai.ai & Agentic Day Summit", photo: "/images/speakers/Lalla_Asmaa_Alaoui.jpg", role: "Host" },
];

export default function SpeakersPage() {
  return (
    <>
      <Nav />
      <main className="speakers-page">
        <section className="speakers-page-hero">
          <div className="wrap">
            <div className="section-eyebrow reveal">— The brightest minds in agentic AI</div>
            <h1 className="speakers-page-title reveal">Meet our speakers</h1>
            <p className="speakers-page-sub reveal">
              Founders, investors, and operators defining the next era of agentic AI, infrastructure, and capital.
            </p>
            <div className="speakers-page-hero-cta reveal">
              <a
                href="mailto:pr@helloagentic.ai?subject=Speaker%20Application%20%E2%80%94%20Agentic%20Day"
                className="btn-primary"
              >
                Apply to Speak <span className="btn-dot" />
              </a>
            </div>
          </div>
        </section>

        <section className="speakers-page-grid-section">
          <div className="wrap">
            <div className="speakers-grid-t2049">
              {SPEAKERS.map((s) => (
                <div key={s.name} className="speaker-card-t2049 reveal">
                  <div className="speaker-photo-t2049">
                    {s.role && <span className="speaker-role-badge">{s.role}</span>}
                    <div className="social-icons">
                      {s.twitter && (
                        <a href={s.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} on X`}>
                          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                      )}
                      {s.linkedin && (
                        <a href={s.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} on LinkedIn`}>
                          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
                        </a>
                      )}
                    </div>
                    <Image src={s.photo} alt={`${s.name} — ${s.title}, ${s.company}`} width={500} height={625} />
                  </div>
                  <div className="speaker-name-t2049">{s.name}</div>
                  <div className="speaker-company-t2049">{s.company}</div>
                  <div className="speaker-role-t2049">{s.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="apply-speaker-cta">
          <div className="wrap">
            <div className="apply-speaker-card reveal">
              <div className="section-eyebrow">— Speaker applications open</div>
              <h2>Want to take the stage?</h2>
              <p>
                We&apos;re curating a line-up of founders, researchers, and operators with something unique to share about agentic AI, infrastructure, or the capital flowing into both. Tell us your story.
              </p>
              <a
                href="mailto:pr@helloagentic.ai?subject=Speaker%20Application%20%E2%80%94%20Agentic%20Day%20Miami"
                className="btn-primary"
              >
                Apply to be a Speaker <span className="btn-dot" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
