export default function Marquee() {
  const items = [
    "Autonomous Intelligence",
    "AI Infrastructure",
    "Agentic Economy",
    "Founders × Capital",
    "Where AI meets capital",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="marquee-wrap">
      <div className="marquee">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
