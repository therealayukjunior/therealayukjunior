import { Eyebrow, Headline, PageShell, Reveal } from "@/components/SitePrimitives";

export default function About() {
  return <PageShell>
    <section className="page-head"><div className="section-inner"><Reveal className="section-header"><Eyebrow>Company</Eyebrow><Headline as="h1" first="Who we are" /><p>Creaovation is building the interaction infrastructure that helps AI understand how people naturally communicate.</p></Reveal></div></section>
    <section className="section"><div className="section-inner"><Reveal><div className="convergence-visual" role="img" aria-label="Abstract architectural visual of translucent interaction planes converging around a shared center"><span className="plane plane-a" /><span className="plane plane-b" /><span className="plane plane-c" /><span className="plane plane-d" /><span className="visual-core" /></div></Reveal></div></section>
    <section className="section"><div className="section-inner editorial">
      <Reveal><div className="editorial-copy"><Headline as="h2" first="The future of AI needs" second="a better human interface." /><p>AI intelligence has advanced rapidly.</p><p>Human interaction with AI has not.</p><p>Most systems still require people to adapt themselves to the interface.</p></div></Reveal>
      <div className="cadence">{["Type the right prompt.", "Speak the right command.", "Select the right menu.", "Explain what “that” means."].map((item, index) => <Reveal delay={index * 60} key={item}><p>{item}</p></Reveal>)}</div>
      <Reveal className="editorial-close" delay={180}>Creaovation is building the infrastructure that reverses that relationship.<br />We believe technology should understand how people already communicate.</Reveal>
    </div></section>
    <section className="section section-warm"><div className="section-inner"><Reveal><div className="statement-pair"><article className="statement-block"><Eyebrow>Our mission</Eyebrow><p>Make natural human interaction understandable to any intelligent system.</p></article><article className="statement-block"><Eyebrow>Our vision</Eyebrow><p>A world where people interact with intelligence naturally, without having to learn how to speak to machines.</p></article></div></Reveal></div></section>
    <section className="section"><div className="section-inner"><Reveal className="philosophy"><p>We are not building another model.</p><p>The world already has increasingly capable models for speech, vision, language, handwriting, gesture, gaze, and perception.</p><p>The challenge is making those capabilities work together.</p><p>Creaovation connects them.</p></Reveal></div></section>
    <section className="section section-warm"><div className="section-inner"><Reveal className="section-header"><Eyebrow>Principles</Eyebrow><Headline as="h2" first="Designed around" second="human understanding." /></Reveal><div className="capability-grid">{[
      ["Human first", "Technology should adapt to people."], ["Open infrastructure", "Customers should not be locked into one model or perception provider."], ["Context matters", "Human signals have meaning because of what surrounds them."], ["Accessible by default", "Interaction infrastructure should expand who can use technology."], ["Developer focused", "Complex perception infrastructure should feel simple to integrate."],
    ].map(([title, description], index) => <Reveal delay={index * 55} key={title}><article className="feature-card"><h3>{title}</h3><p>{description}</p></article></Reveal>)}</div></div></section>
  </PageShell>;
}
