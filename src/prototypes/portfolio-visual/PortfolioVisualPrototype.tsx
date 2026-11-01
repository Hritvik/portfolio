import { useEffect } from 'react';

type Variant = 'A' | 'B' | 'C';
type View = 'home' | 'case-study';

const variants: readonly Variant[] = ['A', 'B', 'C'];
const labels: Readonly<Record<Variant, string>> = {
  A: 'Field Guide',
  B: 'Systems Dossier',
  C: 'Annotated Journal',
};

const evidence = [
  ['60%', 'support categories automated', 'Measured'],
  ['Months → minutes', 'technical onboarding', 'Operational'],
  ['Replay-safe', 'multi-phase processing', 'Validated'],
] as const;

const projects = [
  ['01', 'Configurable Support Automation', 'Meesho · 2024–Now', 'Workflow orchestration · API composition · Recovery'],
  ['02', 'GenAI Runtime & Reliability', 'Meesho · 2024–Now', 'Routing · Evaluation · Automatic failover'],
  ['03', 'Telecom Analytics & Computation', 'Reliance Jio · 2018–2021', 'Billions daily · KPI graphs · Forecasting'],
] as const;

function getState(): { variant: Variant; view: View } {
  const params = new URLSearchParams(window.location.search);
  const candidate = params.get('variant')?.toUpperCase();
  const view = params.get('view') === 'case-study' ? 'case-study' : 'home';
  return { variant: variants.includes(candidate as Variant) ? candidate as Variant : 'A', view };
}

function navigate(next: Partial<{ variant: Variant; view: View }>) {
  const current = getState();
  const params = new URLSearchParams(window.location.search);
  params.set('variant', next.variant ?? current.variant);
  params.set('view', next.view ?? current.view);
  window.location.search = params.toString();
}

function PrototypeSwitcher({ variant, view }: { variant: Variant; view: View }) {
  const cycle = (offset: number) => {
    const index = variants.indexOf(variant);
    navigate({ variant: variants[(index + offset + variants.length) % variants.length] });
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches('input, textarea, [contenteditable="true"]')) return;
      if (event.key === 'ArrowLeft') cycle(-1);
      if (event.key === 'ArrowRight') cycle(1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  return (
    <aside className="prototype-switcher" aria-label="Prototype controls">
      <button onClick={() => cycle(-1)} aria-label="Previous variant">←</button>
      <strong>{variant} — {labels[variant]}</strong>
      <button onClick={() => cycle(1)} aria-label="Next variant">→</button>
      <span className="prototype-divider" />
      <button className={view === 'home' ? 'is-active' : ''} onClick={() => navigate({ view: 'home' })}>Home</button>
      <button className={view === 'case-study' ? 'is-active' : ''} onClick={() => navigate({ view: 'case-study' })}>Case study</button>
    </aside>
  );
}

function BrandHeader({ inverse = false }: { inverse?: boolean }) {
  return (
    <header className={`prototype-header ${inverse ? 'is-inverse' : ''}`}>
      <a className="prototype-brand" href="#top" aria-label="Hritvik home">Hritvik.</a>
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a><a href="#writing">Writing</a><a href="#about">About</a><a href="mailto:hritvik.works@gmail.com">Contact</a>
      </nav>
      <a className="resume-link" href="#resume">Résumé ↗</a>
    </header>
  );
}

function EvidenceStrip({ compact = false }: { compact?: boolean }) {
  return <div className={`evidence-strip ${compact ? 'is-compact' : ''}`}>{evidence.map(([value, label, kind]) => <div className="evidence-item" key={value}><span className="evidence-kind">{kind}</span><strong>{value}</strong><span>{label}</span></div>)}</div>;
}

function MiniMap() {
  return (
    <div className="mini-map" role="img" aria-label="Simplified support automation flow from ticket through orchestration to resolution or human handoff">
      <span>Ticket</span><i>→</i><span>Workflow</span><i>→</i><span>Entities</span><i>→</i><span>Resolution</span>
      <b>↘ retries · replay · human handoff ↗</b>
    </div>
  );
}

function VariantA({ view }: { view: View }) {
  return <div className="variant variant-a" id="top"><BrandHeader />{view === 'home' ? <HomeA /> : <CaseA />}</div>;
}

function HomeA() {
  return <main>
    <section className="a-hero">
      <p className="kicker">Platform Engineer · Bengaluru</p>
      <h1>I build systems that make complex operations <em>configurable, recoverable, and measurable.</em></h1>
      <div className="a-hero-aside"><p>SDE III at Meesho. Previously Oracle and Reliance Jio. Seven years across support automation, runtime infrastructure, and large-scale analytics.</p><a className="text-link" href="#work">Explore the systems ↓</a></div>
    </section>
    <section className="a-work" id="work"><header><p className="kicker">Selected systems · 01–03</p><h2>Projects are the headlines.</h2></header>{projects.map(([id, title, meta, detail]) => <article className="a-project" key={id}><span>{id}</span><div><p>{meta}</p><h3>{title}</h3><p>{detail}</p></div><b>View case study ↗</b></article>)}</section>
    <section className="a-proof"><p className="kicker">Evidence in context</p><EvidenceStrip /></section>
    <section className="a-close"><h2>Engineering should make the next change safer than the last.</h2><p>I write about the design decisions, failure modes, and operating controls behind production platforms.</p><a href="mailto:hritvik.works@gmail.com">Start a conversation ↗</a></section>
  </main>;
}

function CaseA() {
  return <main className="case-a"><section className="case-proof"><div><p className="kicker">Meesho · Platform system · 2024–Now</p><h1>Configurable Support Automation</h1><p className="case-deck">A replay-safe workflow platform that turned months of custom support-category development into minutes of technical configuration.</p><p className="ownership"><b>My ownership</b> — Architecture, implementation, rollout, production operations, stakeholder alignment, and technical mentorship.</p></div><MiniMap /></section><EvidenceStrip compact />
    <nav className="local-toc" aria-label="Case study sections"><span>On this page</span><a href="#why">Why it mattered</a><a href="#system">System</a><a href="#problems">Hard problems</a><a href="#outcomes">Outcomes</a></nav>
    <section className="reading-grid" id="why"><aside>01 / Why it mattered</aside><div><h2>Every new support flow had become an engineering project.</h2><p>Business teams owned the SOP. The platform needed to preserve that policy while making long-running, multi-entity execution durable and operable.</p></div></section>
    <section className="reading-grid" id="problems"><aside>02 / Hard problems</aside><div className="problem-list">{['Durable multi-phase processing and replay','Configuration without surrendering safety','Data composition with human controls'].map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Constraint → options → decision → failure handling → result</p></article>)}</div></section>
    <section className="technical-note"><span>Technical deep dive</span><h3>How replay skips completed work without losing context</h3><p>Anchored, optional detail. Ownership, decisions, and evidence remain visible in the main narrative.</p><button>Read deep dive ↓</button></section>
  </main>;
}

function VariantB({ view }: { view: View }) {
  return <div className="variant variant-b" id="top"><BrandHeader inverse />{view === 'home' ? <HomeB /> : <CaseB />}</div>;
}

function HomeB() {
  return <main><section className="b-hero"><div className="status-line"><span>PORTFOLIO / PLATFORM ENGINEERING</span><span>AVAILABLE FOR THE RIGHT SYSTEM</span></div><h1>Production systems.<br />Not demos.</h1><div className="b-intro"><p>I design the control planes, recovery paths, and operating models that let teams change complex systems safely.</p><a href="mailto:hritvik.works@gmail.com">CONTACT_CHANNEL ↗</a></div></section>
    <section className="b-console" id="work"><div className="console-index"><span>SYSTEM_INDEX</span>{projects.map(([id, title, meta]) => <a key={id} href={`#system-${id}`}><b>{id}</b><span>{title}</span><small>{meta}</small></a>)}</div><div className="console-focus" id="system-01"><header><span>FOCUS / 01</span><span>STATUS / PRODUCTION</span></header><h2>Configurable<br />Support Automation</h2><p>Durable orchestration for business-owned support workflows.</p><MiniMap /><EvidenceStrip compact /><a className="console-action" href="#case">OPEN SYSTEM DOSSIER →</a></div></section>
    <section className="b-ledger"><header><span>ENGINEERING_WINS</span><span>VERIFIED_EVIDENCE</span></header>{[['2 hr → 2 min','Ingestion runtime'],['Automatic','Provider failover'],['Billions / day','Analytics lifecycle']].map(([metric, label]) => <div key={metric}><strong>{metric}</strong><span>{label}</span><small>VIEW SOURCE STORY ↗</small></div>)}</section>
  </main>;
}

function CaseB() {
  return <main className="case-b"><div className="case-b-grid"><aside className="b-sidebar"><span>DOSSIER / 01</span><h1>Configurable Support Automation</h1><dl><dt>Employer</dt><dd>Meesho</dd><dt>Role</dt><dd>Architecture → Operations</dd><dt>State</dt><dd>Production</dd></dl><nav><a href="#b-context">01 Context</a><a href="#b-topology">02 Topology</a><a href="#b-decisions">03 Decisions</a><a href="#b-evidence">04 Evidence</a></nav></aside><div className="b-main"><section className="b-proof"><span>OUTCOME</span><h2>Months of custom development became minutes of technical configuration.</h2><EvidenceStrip compact /></section><section id="b-topology"><header><span>SYSTEM_TOPOLOGY</span><span>SIMPLIFIED / PUBLIC</span></header><MiniMap /></section><section className="b-decisions" id="b-decisions">{['Persist progress, don’t trust delivery','Configure variation, constrain execution','Design recovery as a product surface'].map((title, index) => <article key={title}><span>DECISION_0{index + 1}</span><h3>{title}</h3><p>Trade-off, operating consequence, and observed result.</p></article>)}</section></div></div></main>;
}

function VariantC({ view }: { view: View }) {
  return <div className="variant variant-c" id="top"><BrandHeader />{view === 'home' ? <HomeC /> : <CaseC />}</div>;
}

function HomeC() {
  return <main><section className="c-masthead"><p>THE WORKING NOTES OF HRITVIK DINKAR</p><h1>Platforms for the messy middle.</h1><div><span>Support automation</span><span>Runtime reliability</span><span>Analytics at scale</span></div></section><section className="c-feature" id="work"><div className="c-number">No. 01</div><div className="c-story"><p className="kicker">Cover story · Meesho</p><h2>From custom-coded support flows to a platform that onboards in minutes.</h2><p>A field report on durable orchestration, business-owned policy, and designing recovery controls for the people operating the system.</p><a href="#case">Read the field report →</a></div><aside><p>In this story</p><ol><li>Why synchronous flows broke down</li><li>How configuration changed the work</li><li>Why replay became a product feature</li></ol></aside></section><section className="c-columns">{projects.slice(1).map(([id,title,meta,detail]) => <article key={id}><span>No. {id}</span><p>{meta}</p><h3>{title}</h3><p>{detail}</p><a href="#read">Continue reading →</a></article>)}</section><section className="c-margin-note"><span>EDITOR'S NOTE</span><p>“I like systems that are boring in production and useful to humans: observable, replayable, and easy to reason about.”</p></section></main>;
}

function CaseC() {
  return <main className="case-c"><article><header className="c-case-header"><p>FIELD REPORT / MEESHO / 2024–NOW</p><h1>Configurable Support Automation</h1><p className="case-deck">How a durable orchestration layer changed support-category onboarding from months of custom code to minutes of configuration.</p><div className="byline"><span>Written by Hritvik Dinkar</span><span>8 minute read · Technical notes included</span></div></header><section className="c-lede"><p className="dropcap">The first few support workflows taught us the wrong lesson. They worked, but every new category became another application-development project.</p><aside><b>My role</b><br />Architecture, implementation, rollout, production operations, and mentorship.</aside></section><figure><MiniMap /><figcaption>Fig. 1 — A deliberately simplified public map. Recovery loops are part of the system, not an appendix.</figcaption></figure><section className="c-chapter"><span>CHAPTER ONE</span><h2>The workflow had to remember.</h2><p>Long-running ticket lifecycles, partial entity failure, and human handoffs ruled out a simple synchronous chain. Persisted progress made replay safe and recovery inspectable.</p><aside className="margin"><b>Decision note</b><br />Durability over local simplicity.</aside></section><section className="c-chapter"><span>CHAPTER TWO</span><h2>Configuration moved the bottleneck.</h2><p>Discovery still takes real work. Once the SOP is understood, however, the technical workflow can be onboarded in minutes instead of months.</p></section><blockquote>60% <small>of supplier-support categories covered by automation</small></blockquote></article></main>;
}

export default function PortfolioVisualPrototype() {
  const { variant, view } = getState();
  return <><div className="prototype-warning">PROTOTYPE — throwaway visual exploration</div>{variant === 'A' && <VariantA view={view} />}{variant === 'B' && <VariantB view={view} />}{variant === 'C' && <VariantC view={view} />}<PrototypeSwitcher variant={variant} view={view} /></>;
}
