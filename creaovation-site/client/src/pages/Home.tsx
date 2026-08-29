import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import {
  ActionLink,
  Eyebrow,
  Headline,
  LiveExample,
  ModalityIcon,
  PageShell,
  Reveal,
  SignalFlowDiagram,
} from "@/components/SitePrimitives";

const modalities = [
  ["Voice", "Understand spoken instructions and conversational references."],
  ["Gaze", "Connect where someone is looking with objects inside your application or environment."],
  ["Gesture", "Interpret pointing, hand movement, selection, and spatial interaction."],
  ["Pen", "Turn handwriting, circles, arrows, annotations, and sketches into contextual actions."],
  ["Touch", "Bring taps, selections, dragging, and manipulation into the AI interaction."],
  ["Sign Language", "Enable sign language as a first-class interaction channel."],
  ["Vision", "Understand the objects and environment surrounding the interaction."],
  ["Context", "Maintain the application state required to understand what the user means."],
];
const values = [
  ["Provider independent", "Use the perception models and providers that work best for your product."],
  ["Multimodal by design", "Combine signals instead of treating every interaction channel separately."],
  ["Model independent", "Connect the interaction layer to whichever AI models or systems you choose."],
  ["Developer ready", "One SDK and unified event structure instead of maintaining multiple interaction stacks."],
];
const solutions = [
  ["Spatial Computing", "Enable AI to understand what users look at, point toward, touch, and discuss inside spatial environments."],
  ["Automotive", "Give vehicle AI context across voice, gaze, touch, gesture, passengers, displays, and surroundings."],
  ["Industrial", "Allow workers to ask questions and give instructions without stopping to operate traditional interfaces."],
  ["Accessibility", "Support more natural interaction through sign language, alternative inputs, voice, gesture, and adaptive interfaces."],
  ["Enterprise Software", "Bring pen, voice, touch, visual context, and AI into documents, workflows, and applications."],
  ["Robotics", "Translate natural human communication into structured targets, actions, and spatial commands."],
];

export default function Home() {
  return <PageShell>
    <section className="hero hero-home">
      <div className="hero-inner">
        <Reveal><div className="hero-copy">
          <Eyebrow signal>Human Interaction Infrastructure for AI</Eyebrow>
          <Headline as="h1" first="Give AI a better way" second="to understand people." />
          <p>Creaovation connects voice, gaze, gesture, pen, touch, sign language, and visual context into one interaction layer that AI applications can understand.</p>
          <p className="hero-secondary">Integrate the perception technologies you need, normalize their signals, and turn natural human interaction into structured intent for any AI system.</p>
          <div className="action-row"><ActionLink href="/developers">Start Building</ActionLink><ActionLink href="/company/contact" secondary>Book a Demo</ActionLink></div>
        </div></Reveal>
        <Reveal delay={120}><SignalFlowDiagram /></Reveal>
      </div>
    </section>

    <section className="section"><div className="section-inner editorial">
      <Reveal><div className="editorial-copy"><Eyebrow>The problem</Eyebrow><Headline as="h2" first="AI can see and hear." second="Understanding people is harder." /><p>Modern AI applications can process speech, images, video, and text.</p><p>But human communication is rarely one signal at a time.</p></div></Reveal>
      <div className="cadence">{["We look at something while speaking.", "We point while giving instructions.", "We circle an object and write beside it.", "We gesture toward what we mean.", "We refer to things using words like “this,” “that,” and “there.”"].map((item, i) => <Reveal delay={i * 60} key={item}><p>{item}</p></Reveal>)}</div>
      <Reveal className="editorial-close" delay={180}>Developers are left connecting these signals themselves.<br />Creaovation provides the missing interaction layer.</Reveal>
    </div></section>

    <section className="section section-warm"><div className="section-inner">
      <Reveal className="section-header"><Eyebrow>Platform</Eyebrow><Headline as="h2" first="Many signals." second="One understanding." /><p>Creaovation brings human interaction signals together and converts them into structured context your application can use.</p></Reveal>
      <div className="capability-grid">{modalities.map(([title, description], index) => <Reveal delay={index * 45} key={title}><article className="feature-card"><ModalityIcon name={title} /><h3>{title}</h3><p>{description}</p></article></Reveal>)}</div>
    </div></section>

    <section className="section"><div className="section-inner steps-section">
      <Reveal className="steps-header"><Eyebrow>How it works</Eyebrow><Headline as="h2" first="From human signal" second="to usable intent." /></Reveal>
      <div className="steps">{[
        ["01", "Capture", "Connect interaction signals", "Use our SDKs or connect existing perception providers.", "Voice, camera, gaze, gesture, pen, touch, sign, sensors."],
        ["02", "Understand", "Resolve context", "Creaovation determines what the person is interacting with and which signals belong together.", ""],
        ["03", "Interpret", "Create structured intent", "Convert fragmented interaction data into targets, actions, relationships, context, and confidence.", ""],
        ["04", "Connect", "Send it anywhere", "Route structured intent to OpenAI, Gemini, Claude, local models, enterprise AI, agents, robotics, or your own system.", ""],
      ].map(([number, label, title, body, detail], index) => <Reveal delay={index * 55} key={number}><article className="step"><div className="step-number">{number}</div><div><Eyebrow>{label}</Eyebrow><h3>{title}</h3><p>{body}</p>{detail && <small>{detail}</small>}</div></article></Reveal>)}</div>
    </div></section>

    <section className="section section-dark"><div className="section-inner">
      <Reveal className="dark-intro"><div className="section-header"><Headline as="h2" dark first="Built for how people" second="actually communicate." /></div><p>Your users should not have to adapt themselves to AI. Creaovation gives your product the infrastructure to understand interaction the way people naturally express it.</p></Reveal>
      <Reveal delay={120}><LiveExample /></Reveal>
    </div></section>

    <section className="section section-warm"><div className="section-inner">
      <Reveal className="section-header"><Eyebrow>Why Creaovation</Eyebrow><Headline as="h2" first="Build the interaction." second="Not the integration maze." /></Reveal>
      <div className="value-grid">{values.map(([title, description], i) => <Reveal delay={i * 55} key={title}><article className="feature-card"><h3>{title}</h3><p>{description}</p></article></Reveal>)}</div>
    </div></section>

    <section className="section"><div className="section-inner">
      <Reveal className="section-header"><Eyebrow>Solutions</Eyebrow><Headline as="h2" first="Human interaction infrastructure" second="for every environment." /></Reveal>
      <div className="solution-grid">{solutions.map(([title, description], i) => <Reveal delay={i * 45} key={title}><Link href="/solutions" className="solution-card"><h3>{title}</h3><p>{description}</p><span className="card-arrow">Explore solution <ArrowRight size={15} /></span></Link></Reveal>)}</div>
    </div></section>

    <section className="section section-warm"><div className="section-inner code-split">
      <Reveal><Eyebrow>Developers</Eyebrow><Headline as="h2" first="One interaction API." second="Any AI system." /><p>Add natural human interaction to your product without rebuilding the perception stack.</p><div className="action-row" style={{justifyContent: "flex-start"}}><ActionLink href="/developers">Explore Documentation</ActionLink><ActionLink href="/developers" secondary>View API</ActionLink></div></Reveal>
      <Reveal delay={100}><div className="code-window"><div className="code-window-top"><span className="window-dots"><i /><i /><i /></span><span>app.ts</span><button aria-label="Copy example"><ArrowRight size={15} /></button></div><pre><code><span className="kw">import</span> {'{'} Creaovation {'}'} <span className="kw">from</span> <span className="str">"@creaovation/sdk"</span>{"\n\n"}interaction.<span className="fn">on</span>(<span className="str">"intent"</span>, event =&gt; {'{'}{"\n  "}application.<span className="fn">execute</span>(event){"\n"}{'}'})</code></pre></div></Reveal>
    </div></section>

    <section className="section section-dark final-cta"><div className="section-inner"><Reveal className="section-header"><Headline as="h2" dark first="Build AI that understands" second="how people actually communicate." /><p>Creaovation gives product teams one infrastructure layer for turning natural interaction into usable AI context.</p></Reveal><Reveal delay={80}><div className="action-row"><ActionLink href="/developers" dark>Start Building</ActionLink><ActionLink href="/company/contact" secondary dark>Talk to Sales</ActionLink></div></Reveal></div></section>
  </PageShell>;
}
