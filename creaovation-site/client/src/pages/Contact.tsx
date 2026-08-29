import { useState, type FormEvent } from "react";
import { Code2, Handshake, Mail } from "lucide-react";
import { ActionLink, Eyebrow, Headline, PageShell, Reveal } from "@/components/SitePrimitives";

const faqs = [
  ["What does Creaovation do?", "Creaovation provides infrastructure that converts natural human interaction into structured context and intent that AI applications can understand."],
  ["Is Creaovation an AI model?", "No. Creaovation is designed to work with existing perception models, foundation models, sensors, and AI systems."],
  ["Do we need to use every interaction modality?", "No. Use only the interaction capabilities your product needs."],
  ["Can we use our existing AI models?", "Yes. Creaovation is designed to remain model independent."],
  ["Can Creaovation work with existing perception providers?", "Yes. Provider abstraction is a core part of the platform architecture."],
  ["Does Creaovation support local AI?", "The architecture supports local, cloud, edge, and hybrid deployment depending on implementation."],
  ["Who is Creaovation for?", "Creaovation is designed for developers and product teams building intelligent software, devices, spatial experiences, vehicles, robotics, enterprise applications, and accessible interfaces."],
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };
  return <PageShell>
    <section className="page-head"><div className="section-inner"><Reveal className="section-header"><Eyebrow>Contact</Eyebrow><Headline as="h1" first="Let's build more natural" second="human AI interaction." /><p>Whether you are building an AI application, intelligent device, accessibility experience, vehicle interface, or spatial computing product, we would like to understand what you are working on.</p></Reveal></div></section>
    <section className="section"><div className="section-inner contact-grid"><Reveal><form className="contact-form" onSubmit={submit}><h2 className="form-heading">Tell us what you are building.</h2><div className="form-grid"><Field label="First Name" required /><Field label="Last Name" required /><Field label="Work Email" type="email" required full /><Field label="Company" required full /><label className="form-field full"><span>What are you building? <em>*</em></span><select required defaultValue=""><option value="" disabled>Select an option</option>{["AI application", "Intelligent device", "Accessibility experience", "Vehicle interface", "Spatial computing", "Robotics", "Enterprise software", "Other"].map(item => <option key={item}>{item}</option>)}</select></label><label className="form-field full"><span>Message</span><textarea rows={5} /></label></div><button className="action action-primary form-submit" type="submit">{submitted ? "Thank you — we'll be in touch" : "Talk to Creaovation"}</button><p className="privacy">We will only use this to respond to your enquiry.</p></form></Reveal>
      <Reveal className="contact-info" delay={80}>{[[Mail, "General", "hello@creaovation.com"], [Code2, "Developers", "developers@creaovation.com"], [Handshake, "Partnerships", "partners@creaovation.com"]].map(([Icon, title, value]) => { const ContactIcon = Icon as typeof Mail; return <article className="contact-info-card" key={title as string}><span><ContactIcon size={19} strokeWidth={1.5} /></span><p>{title as string}</p><a href={`mailto:${value as string}`}>{value as string}</a></article>; })}</Reveal>
    </div></section>
    <section className="section section-warm"><div className="section-inner faq-layout"><Reveal className="faq-heading"><Eyebrow>FAQ</Eyebrow><Headline as="h2" first="Questions about" second="the interaction layer." /><p>How Creaovation fits alongside the models, providers, and systems you already use.</p></Reveal><Reveal className="faq-list" delay={70}>{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</Reveal></div></section>
    <section className="section section-dark final-cta"><div className="section-inner"><Reveal className="section-header"><Headline as="h2" dark first="Ready to make your" second="AI understand people?" /><p>Start with the interaction layer.</p></Reveal><Reveal delay={70}><div className="action-row"><ActionLink href="/developers" dark>Start Building</ActionLink></div></Reveal></div></section>
  </PageShell>;
}

function Field({ label, type = "text", required = false, full = false }: { label: string; type?: string; required?: boolean; full?: boolean }) {
  return <label className={`form-field ${full ? "full" : ""}`}><span>{label} {required && <em>*</em>}</span><input type={type} required={required} /></label>;
}
