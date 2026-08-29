import { useEffect, useId, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  ChevronDown,
  Check,
  Copy,
  Eye,
  Hand,
  Layers3,
  Menu,
  Mic2,
  MoveUpRight,
  PenLine,
  Plus,
  X,
} from "lucide-react";

export const navGroups = [
  {
    label: "Product",
    items: [
      ["Overview", "/product", "One interaction layer for AI"],
      ["Interaction Engine", "/product", "Fusion, context, and intent"],
      ["Integrations", "/product", "Bring your own providers"],
      ["Security", "/developers", "Deployment and data handling"],
    ],
  },
  {
    label: "Solutions",
    items: [
      ["Accessibility", "/solutions", "Natural interaction for more people"],
      ["Spatial Computing", "/solutions", "Context in three dimensions"],
      ["Automotive", "/solutions", "Intent across vehicle interfaces"],
      ["Industrial", "/solutions", "Hands-busy intelligent work"],
      ["Enterprise", "/solutions", "AI for the way people work"],
      ["Robotics", "/solutions", "Natural spatial commands"],
    ],
  },
  {
    label: "Developers",
    items: [
      ["Documentation", "/developers", "Start with the interaction layer"],
      ["SDKs", "/developers", "Build across your stack"],
      ["API Reference", "/developers", "Predictable event shapes"],
      ["Examples", "/developers", "Working integration patterns"],
    ],
  },
  {
    label: "Resources",
    items: [
      ["Blog", "/resources/blog", "Thinking on human AI interaction"],
      ["Research", "/resources/blog", "Category-defining perspectives"],
      ["Guides", "/resources/blog", "Technical and product guidance"],
    ],
  },
  {
    label: "Company",
    items: [
      ["About", "/company/about", "Why Creaovation exists"],
      ["Partners", "/company/contact", "Build together"],
      ["Careers", "/company/about", "Help define the category"],
      ["Contact", "/company/contact", "Talk to Creaovation"],
    ],
  },
] as const;

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="Creaovation home">
      <span className="brand-mark" aria-hidden="true"><i /></span>
      <span>Creaovation</span>
    </Link>
  );
}

export function ActionLink({
  href,
  children,
  secondary = false,
  dark = false,
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  dark?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link href={href} onClick={onClick} className={`action ${secondary ? "action-secondary" : "action-primary"} ${dark ? "action-on-dark" : ""} ${className}`}>
      {children}
      <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
    </Link>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [, navigate] = useLocation();

  const moveTo = (path: string) => {
    setMobileOpen(false);
    setOpenMenu(null);
    navigate(path);
  };

  return (
    <header className="nav-wrap">
      <nav className="site-nav" aria-label="Primary navigation">
        <Brand />
        <div className="desktop-nav">
          {navGroups.map((group) => (
            <div
              className="nav-menu"
              key={group.label}
              onMouseEnter={() => setOpenMenu(group.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="nav-trigger"
                aria-expanded={openMenu === group.label}
                aria-haspopup="true"
                onClick={() => setOpenMenu(openMenu === group.label ? null : group.label)}
              >
                {group.label} <ChevronDown size={13} aria-hidden="true" />
              </button>
              {openMenu === group.label && (
                <div className="mega-menu" role="menu">
                  <p className="mega-overline">{group.label}</p>
                  <div className="mega-grid">
                    {group.items.map(([title, href, detail]) => (
                      <button className="mega-item" role="menuitem" key={title} onClick={() => moveTo(href)}>
                        <span>{title}<ArrowRight size={14} aria-hidden="true" /></span>
                        <small>{detail}</small>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="nav-actions">
          <ActionLink href="/developers" className="nav-cta">Get Started</ActionLink>
          <button className="mobile-toggle" aria-label="Open navigation menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(true)}>
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="mobile-sheet" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="mobile-sheet-top">
            <Brand />
            <button className="mobile-toggle" aria-label="Close navigation menu" onClick={() => setMobileOpen(false)}><X size={21} /></button>
          </div>
          <div className="mobile-links">
            {navGroups.map((group) => (
              <details key={group.label}>
                <summary>{group.label}<Plus size={17} aria-hidden="true" /></summary>
                <div className="mobile-menu-items">
                  {group.items.map(([title, href]) => <button key={title} onClick={() => moveTo(href)}>{title}<ArrowRight size={15} /></button>)}
                </div>
              </details>
            ))}
          </div>
          <ActionLink href="/developers" className="mobile-cta" onClick={() => setMobileOpen(false)}>Start Building</ActionLink>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Brand inverse />
          <p>Human interaction infrastructure for AI.</p>
          <Link href="/status" className="status"><span aria-hidden="true" />All systems operational</Link>
        </div>
        <div className="footer-columns">
          {navGroups.map((group) => (
            <div className="footer-col" key={group.label}>
              <p>{group.label}</p>
              {group.items.map(([title, href]) => <Link href={href} key={title}>{title}</Link>)}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Creaovation. All rights reserved.</span>
        <div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#security">Security</a><a href="#accessibility">Accessibility Statement</a></div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><Footer /></>;
}

export function Eyebrow({ children, signal = false }: { children: ReactNode; signal?: boolean }) {
  return <div className={`eyebrow ${signal ? "eyebrow-signal" : ""}`}>{signal && <span aria-hidden="true" />}{children}</div>;
}

export function Headline({
  first,
  second,
  dark = false,
  as: Tag = "h2",
  className = "",
}: {
  first: ReactNode;
  second?: ReactNode;
  dark?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return <Tag className={`headline ${dark ? "headline-dark" : ""} ${className}`}><span>{first}</span>{second && <span className="headline-muted">{second}</span>}</Tag>;
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const id = useId();
  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [id]);
  return <div id={id} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function SignalFlowDiagram() {
  return (
    <div className="signal-flow" role="img" aria-label="Voice, gaze, and pen signals converge into Creaovation, producing unified intent sent to an AI system.">
      <svg viewBox="0 0 980 410" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs><linearGradient id="signalGradient" x1="0%" x2="100%"><stop offset="0%" stopColor="#ff5f6d" /><stop offset="28%" stopColor="#ffc371" /><stop offset="65%" stopColor="#24c6dc" /><stop offset="100%" stopColor="#5e5ce6" /></linearGradient></defs>
        <path className="signal-line path-one" d="M173 100 C173 182 330 174 430 214" />
        <path className="signal-line path-two" d="M490 100 C490 160 490 178 490 214" />
        <path className="signal-line path-three" d="M807 100 C807 182 650 174 550 214" />
        <path className="signal-line signal-main" d="M490 270 C490 296 490 310 490 328" />
        <path className="signal-line signal-main" d="M615 355 C670 355 691 355 738 355" />
        <circle className="signal-pulse pulse-one" cx="173" cy="100" r="5" fill="url(#signalGradient)" />
        <circle className="signal-pulse pulse-two" cx="490" cy="100" r="5" fill="url(#signalGradient)" />
        <circle className="signal-pulse pulse-three" cx="807" cy="100" r="5" fill="url(#signalGradient)" />
      </svg>
      <div className="signal-node signal-input node-voice"><Mic2 size={16} /><span>VOICE</span></div>
      <div className="signal-node signal-input node-gaze"><Eye size={17} /><span>GAZE</span></div>
      <div className="signal-node signal-input node-pen"><PenLine size={16} /><span>PEN</span></div>
      <div className="signal-node signal-engine"><span className="engine-mark" aria-hidden="true" />CREAOVATION</div>
      <div className="signal-node signal-intent">UNIFIED INTENT</div>
      <div className="signal-node signal-output">YOUR AI SYSTEM <ArrowRight size={15} /></div>
    </div>
  );
}

export function LiveExample() {
  const [copied, setCopied] = useState(false);
  const copyCode = () => {
    navigator.clipboard?.writeText('{\n  "intent": "move",\n  "target": "object_17",\n  "destination": "panel_3",\n  "confidence": 0.96\n}');
    setCopied(true); setTimeout(() => setCopied(false), 1600);
  };
  return (
    <div className="live-demo" aria-label="Example multimodal interaction flow">
      <div className="demo-panel input-panel"><p>INPUTS</p>{[
        ["Voice", "“Move that beside this one.”"], ["Gaze", "Targeting object 17"], ["Gesture", "Pointing at panel 3"],
      ].map(([label, value], index) => <div className={`demo-input input-${index + 1}`} key={label}><span><i />{label}</span><strong>{value}</strong></div>)}</div>
      <div className="flow-arrow" aria-hidden="true">→</div>
      <div className="demo-panel code-panel"><p>CREAOVATION OUTPUT</p><button className="copy-code" onClick={copyCode} aria-label="Copy code">{copied ? <Check size={15} /> : <Copy size={15} />}</button><pre><code><span>{"{"}</span>{"\n  "}<b>"intent"</b>: <em>"move"</em>,{"\n  "}<b>"target"</b>: <em>"object_17"</em>,{"\n  "}<b>"destination"</b>: <em>"panel_3"</em>,{"\n  "}<b>"confidence"</b>: <i>0.96</i>{"\n"}<span>{"}"}</span></code></pre></div>
      <div className="flow-arrow" aria-hidden="true">→</div>
      <div className="demo-panel output-panel"><p>OUTPUT</p>{["Your AI", "Your agent", "Your application", "Your device"].map((item, index) => <span key={item} className={`output-chip output-${index + 1}`}>{item}</span>)}</div>
    </div>
  );
}

export function ArchitectureDiagram() {
  const capture = ["Voice", "Gaze", "Gesture", "Pen", "Touch", "Sign", "Vision", "Sensors"];
  const modules = ["Event synchronization", "Context resolution", "Reference resolution", "Multimodal fusion", "Intent normalization", "Confidence scoring"];
  const outputs = ["Models", "Agents", "Applications", "Devices", "Robots"];
  return <div className="architecture" role="img" aria-label="Capture signals feed the Creaovation Interaction Engine, then a Unified Intent API routes to models, agents, applications, devices, and robots.">
    <ArchitectureRow label="CAPTURE" items={capture} /><div className="arch-arrow">↓</div>
    <div className="engine-block"><p>CREAOVATION INTERACTION ENGINE</p><div>{modules.map(module => <span key={module}>{module}</span>)}</div></div>
    <div className="arch-arrow">↓</div><div className="api-block">UNIFIED INTENT API</div><div className="arch-arrow">↓</div>
    <ArchitectureRow label="DESTINATIONS" items={outputs} />
  </div>;
}

function ArchitectureRow({ label, items }: { label: string; items: string[] }) {
  return <div className="architecture-row"><p>{label}</p><div>{items.map(item => <span key={item}>{item}</span>)}</div></div>;
}

export function ModalityIcon({ name }: { name: string }) {
  const props = { size: 25, strokeWidth: 1.5 };
  const icon = name === "Voice" ? <Mic2 {...props} /> : name === "Gaze" ? <Eye {...props} /> : name === "Gesture" ? <Hand {...props} /> : name === "Pen" ? <PenLine {...props} /> : name === "Context" ? <Layers3 {...props} /> : <MoveUpRight {...props} />;
  return <span className="modality-icon" aria-hidden="true">{icon}</span>;
}
