import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Headline, PageShell, Reveal } from "@/components/SitePrimitives";

const articles = [
  ["Why multimodal AI still needs an interaction layer", "Research", "Aug 24, 2026"],
  ["The problem with “this,” “that,” and “there”", "Research", "Aug 17, 2026"],
  ["From gaze tracking to gaze understanding", "Engineering", "Aug 10, 2026"],
  ["Pen should become an AI input language", "Product", "Aug 03, 2026"],
  ["What sign language teaches us about multimodal interfaces", "Research", "Jul 26, 2026"],
  ["Why smart glasses need interaction infrastructure", "Product", "Jul 19, 2026"],
  ["The interaction stack for ambient AI", "Engineering", "Jul 12, 2026"],
  ["Models are becoming interchangeable. Interfaces are not.", "Product", "Jul 05, 2026"],
  ["Why human intent should become an API", "Product", "Jun 28, 2026"],
];
const filters = ["All", "Research", "Engineering", "Product", "Guides"];

export default function Resources() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? articles : articles.filter(([, category]) => category === active);
  return <PageShell>
    <section className="page-head page-head-left"><div className="section-inner"><Reveal className="section-header"><Eyebrow>Resources</Eyebrow><Headline as="h1" first="Thinking about the future" second="of human AI interaction." /><p>Research, engineering perspectives, and product thinking on how humans and intelligent systems will communicate.</p></Reveal></div></section>
    <section className="section"><div className="section-inner"><Reveal><div className="resource-filters" role="tablist" aria-label="Resource categories">{filters.map(filter => <button key={filter} className={`filter ${active === filter ? "filter-active" : ""}`} onClick={() => setActive(filter)} role="tab" aria-selected={active === filter}>{filter}</button>)}</div></Reveal>
      <Reveal><article className="featured-article"><div><span className="article-category">RESEARCH · AUG 24, 2026</span><h2>Why multimodal AI still needs an interaction layer</h2></div><p>Models can process more signals than ever. But the meaning between those signals still has to be resolved.</p></article></Reveal>
      <div className="article-rows">{visible.slice(1).map(([title, category, date], index) => <Reveal delay={index * 35} key={title}><article className="article-row"><h3>{title}</h3><div><span>{category} · {date}</span><br /><ArrowRight size={16} /></div></article></Reveal>)}</div>
    </div></section>
  </PageShell>;
}
