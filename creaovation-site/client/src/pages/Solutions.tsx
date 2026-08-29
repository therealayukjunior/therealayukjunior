import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Headline, PageShell, Reveal } from "@/components/SitePrimitives";

export default function Solutions() {
  const solutions = [
    ["Accessibility", "Interaction should not depend on a keyboard and mouse."],
    ["Automotive", "Understand drivers and passengers across voice, gaze, screens, gesture, and context."],
    ["Industrial", "Give hands-busy workers a more natural interface to intelligent systems."],
    ["Spatial Computing", "Turn looking, pointing, speaking, and movement into understandable interaction."],
    ["Enterprise", "Bring AI into the way people already work with documents, screens, pens, meetings, and applications."],
    ["Robotics", "Allow humans to communicate intent instead of programming coordinates."],
  ];
  return <PageShell>
    <section className="page-head"><div className="section-inner"><Reveal className="section-header"><Eyebrow>Solutions</Eyebrow><Headline as="h1" first="Human interaction changes" second="across every environment." /><p>Creaovation gives product teams a common infrastructure layer while allowing each experience to use the interaction modalities that make sense.</p></Reveal></div></section>
    <section className="section"><div className="section-inner"><div className="solution-grid">{solutions.map(([title, description], index) => <Reveal delay={index * 55} key={title}><Link href="/company/contact" className="solution-card"><h3>{title}</h3><p>{description}</p><span className="card-arrow">Explore solution <ArrowRight size={15} /></span></Link></Reveal>)}</div></div></section>
    <section className="section section-dark final-cta"><div className="section-inner"><Reveal className="section-header"><Headline as="h2" dark first="One interaction layer." second="Every environment." /><p>Bring the human context your product needs to the systems you already use.</p></Reveal></div></section>
  </PageShell>;
}
