import Image from "next/image";

const speakers = [
  { name: "Vishal Ganeriwala", title: "Sr. Director, NVIDIA DGX Cloud", img: "Vishal_Ganeriwala.png" },
  { name: "Andrew Weiner", title: "COO, WEEX Labs", img: "Andrew_Weiner.png" },
  { name: "Jairo Riveros", title: "President, Paysend", img: "Jairo_Riveros.png" },
  { name: "Alejandra Slatapolsky", title: "Miami Fintech Club", img: "Alejandra_Slatapolsky.png" },
  { name: "Nikita Sachdev", title: "CEO, Luna PR", img: "Nikita_Sachdev.png" },
  { name: "Danielle Pienaar", title: "Verdant Management", img: "Danielle_Pienaar.png" },
  { name: "Katie Hilborn", title: "Founder & MD, Regenerative Infrastructure Holdings", img: "Katie_Hilborn.png" },
  { name: "Anna Muheim", title: "CEO, ShoreLabs", img: "Anna_Muheim.png" },
  { name: "Haymond Rankin", title: "Cayman Finance", img: "Haymond_Rankin.png" },
  { name: "Laura Leparulo", title: "Cayman Finance", img: "Laura_Leparulo.png" },
  { name: "George Varghese", title: "0G", img: "George_V.png" },
  { name: "Alex Styhar", title: "CEO, Mindo AI", img: "Alex_Styhar.png" },
  { name: "Wayne Liu", title: "CGO, Perfect Corp.", img: "Wayne_Liu.png" },
  { name: "Vladislav Shevelev", title: "CFO, Kea World", img: "Vladislav_Shevelev.png" },
  { name: "Zakaria Fahim", title: "BDO Morocco / Hub Africa", img: "Zakaria_Fahim.png" },
  { name: "Michael Bacina", title: "0G", img: "Michael_Bacina.png" },
  { name: "Daniel Reis-Faria", title: "Speaker", img: "Daniel_Reis-Faria.png" },
];

export default function Speakers() {
  return (
    <section id="speakers" className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-eyebrow reveal">— The brightest minds in agentic AI</div>
        <h2 className="reveal">Meet our speakers</h2>
        <div className="speakers-grid">
          {speakers.map((s) => (
            <div key={s.name} className="speaker-card reveal">
              <div className="speaker-photo">
                <Image
                  src={`/images/speakers/${s.img}`}
                  alt={s.name}
                  width={400}
                  height={400}
                />
              </div>
              <div className="speaker-name">{s.name}</div>
              <div className="speaker-title">{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
