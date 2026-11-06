"use client";

import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Orbit, Layers3, ShieldCheck, Cpu, Code2, Sparkles, ExternalLink } from "lucide-react";

type Project = {
  name: string; category: string; description: string; status: string;
  visibility: "Public" | "Private"; repo?: string; live?: string; featured?: boolean;
  stack?: string[];
};

const projects: Project[] = [
  {name:"CareerOS",category:"Product engineering",description:"A career-planning workspace connecting role discovery, skill-gap analysis, learning roadmaps and interview practice.",status:"Deployed",visibility:"Public",repo:"https://github.com/PSP-YN/CareerOS",live:"https://careeros-intelligence.vercel.app",featured:true,stack:["JavaScript","Supabase","Vercel","Gemini"]},
  {name:"DaemonX",category:"AI & automation",description:"A Linux-controlled Android automation and personal knowledge platform built around device interaction and tool workflows.",status:"Active development · CI passing",visibility:"Public",repo:"https://github.com/PSP-YN/DaemonX",featured:true,stack:["Python","MCP","ADB","OpenCV","SQLite"]},
  {name:"UIPath_automate",category:"AI & automation",description:"Local business workflow demonstrations for invoice review and customer-support triage, with human approval for sensitive actions.",status:"Runnable local demos",visibility:"Public",repo:"https://github.com/PSP-YN/UIPath_automate",featured:true,stack:["Python","SQLite","Ollama"]},
  {name:"smiriti",category:"Applied AI",description:"An offline-first Android notebook concept for importing documents, extracting text, searching and asking questions with citations.",status:"Android prototype",visibility:"Public",repo:"https://github.com/PSP-YN/smiriti",featured:true,stack:["Flutter","ObjectBox","llama.cpp","TFLite"]},
  {name:"Particle Motion",category:"Interactive systems",description:"A gesture-controlled particle visualisation exploring hand tracking, touch interaction and audio-reactive effects.",status:"Prototype · source available",visibility:"Public",repo:"https://github.com/PSP-YN/particle-motion",featured:true,stack:["React","TypeScript","Three.js","MediaPipe"]},
  {name:"JunctionOptima",category:"Simulation & optimisation",description:"A railway-junction digital-twin concept for simulating conflicts and exploring explainable dispatch recommendations.",status:"Simulation prototype",visibility:"Public",repo:"https://github.com/PSP-YN/JunctionOptima",featured:true,stack:["React","Vite","FastAPI","Python"]},
  {name:"LangAssist",category:"Systems & developer tools",description:"An offline desktop writing assistant for Linux.",status:"Private project",visibility:"Private"},
  {name:"NexHelp",category:"Product engineering",description:"A home-services marketplace concept connecting customers with local professionals.",status:"Private project",visibility:"Private"},
  {name:"SyncSphere",category:"Campus products",description:"A campus event and student collaboration platform.",status:"Private project",visibility:"Private"},
  {name:"NOVA",category:"AI & automation",description:"A desktop assistant and automation environment for Linux.",status:"Private project",visibility:"Private"},
  {name:"Aegis-Agent",category:"Application security",description:"An application-security assistant concept for identifying and understanding web application risks.",status:"Private project",visibility:"Private"},
  {name:"RoadSoS",category:"Civic & safety technology",description:"A mobile emergency-response workflow prototype.",status:"Hackathon prototype",visibility:"Private"},
  {name:"FRAS",category:"Computer vision",description:"A face-recognition attendance and access-monitoring service concept.",status:"Private project",visibility:"Private"},
  {name:"Girakshar — Speech Platform",category:"Applied AI",description:"A speech technology prototype exploring transcription, translation and voice generation.",status:"Private project",visibility:"Private"},
  {name:"AirLLM GUI",category:"AI infrastructure",description:"A graphical interface and experiments around memory-efficient language-model inference.",status:"Public experiments",visibility:"Public",repo:"https://github.com/PSP-YN/airllm-gui"},
  {name:"GeoAlarm",category:"Mobile prototypes",description:"A location-aware alarm concept based on geographic triggers.",status:"Private project",visibility:"Private"},
  {name:"DFRG",category:"Privacy & security",description:"An Android-first digital-footprint privacy concept.",status:"Private project",visibility:"Private"},
  {name:"Sampark",category:"Systems & mobile",description:"A cross-platform device-management application concept.",status:"Private project",visibility:"Private"},
  {name:"ARTEMIS",category:"Open-source exploration",description:"A fork of an Android automation project; I distinguish upstream work from my own contributions.",status:"Fork / exploration",visibility:"Public",repo:"https://github.com/PSP-YN/artemis"},
  {name:"Intelligence Traffic Management",category:"Early exploration",description:"An early repository for an intelligent traffic-management concept.",status:"Early-stage repository",visibility:"Private"},
  {name:"Mysuru Tourism Enhancement",category:"Civic technology",description:"An early repository exploring digital experiences for Mysuru tourism.",status:"Early-stage repository",visibility:"Private"},
  {name:"Scientific Calculator Game",category:"Early exploration",description:"An early project repository.",status:"Early-stage repository",visibility:"Private"},
  {name:"NEXA",category:"Early exploration",description:"An early project repository.",status:"Early-stage repository",visibility:"Private"}
];

const featured = projects.filter(p => p.featured);
const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

function Constellation({ active, onSelect }: {active: string; onSelect: (name:string)=>void}) {
  const nodes = [
    {name:"CareerOS",x:50,y:18,r:8},
    {name:"DaemonX",x:78,y:38,r:6},
    {name:"UIPath_automate",x:70,y:73,r:5},
    {name:"smiriti",x:30,y:75,r:5},
    {name:"Particle Motion",x:20,y:42,r:6},
    {name:"JunctionOptima",x:48,y:52,r:5}
  ];
  return <div className="orbit-stage" aria-label="Interactive project constellation">
    <div className="orbit-ring ring-a"/><div className="orbit-ring ring-b"/><div className="orbit-ring ring-c"/>
    <div className="orbit-core"><span>PSP</span><small>BUILD / LEARN / SHIP</small></div>
    <svg className="orbit-lines" viewBox="0 0 100 100" aria-hidden="true">
      {nodes.map((n,i)=><line key={n.name} x1="50" y1="49" x2={n.x} y2={n.y} className={active===n.name?"line-active":""}/>)}
    </svg>
    {nodes.map((n,i)=><button key={n.name} type="button" className={"orbit-node node-"+i+(active===n.name?" active":"")} style={{left:n.x+"%",top:n.y+"%"}} onClick={()=>onSelect(n.name)} aria-label={"Explore "+n.name} aria-pressed={active===n.name}><span/><small>{n.name}</small></button>)}
    <div className="orbit-caption"><span className="live-dot"/> SELECT A PROJECT NODE</div>
  </div>;
}

export default function Home() {
  const [active, setActive] = useState("CareerOS");
  const [filter,setFilter] = useState("All");
  const [query,setQuery] = useState("");
  const [menu,setMenu] = useState(false);
  const activeProject = projects.find(p=>p.name===active) ?? featured[0];
  const filtered = useMemo(()=>projects.filter(p=>(filter==="All"||p.category===filter) && (p.name+" "+p.description+" "+p.category).toLowerCase().includes(query.toLowerCase())),[filter,query]);
  return <a className="skip-link" href="#main-content">Skip to content</a>
  <main id="main-content">
    <header className="topbar"><a href="#home" className="wordmark"><span className="mark">PSP<span>.</span></span><span className="wordmark-label">PUTTA SHANKAR PRASAD Y N</span></a>
      <button className="mobile-menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation" aria-expanded={menu}>{menu?<X/>:<Menu/>}</button>
      <nav aria-label="Main navigation" className={menu?"nav-open":""}><a href="#about" onClick={()=>setMenu(false)}>About</a><a href="#work" onClick={()=>setMenu(false)}>Projects</a><a href="#journey" onClick={()=>setMenu(false)}>Journey</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a><a className="nav-github" href="https://github.com/PSP-YN" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a></nav>
    </header>

    <section className="hero" id="home"><div className="hero-grid"/>
      <div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> INDEPENDENT BUILDER · MYSURU, INDIA</div>
        <h1>I turn<br/><em>ideas into</em><br/>working systems<span className="period">.</span></h1>
        <p className="hero-description">I’m Putta Shankar Prasad Y N, a Computer Science and Engineering undergraduate at VVCE. I build practical software across product engineering, applied AI, developer tools and systems.</p>
        <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={16}/></a><a className="button button-quiet" href="https://github.com/PSP-YN" target="_blank" rel="noreferrer"><Github size={16}/> GitHub profile</a></div>
        <div className="hero-foot"><span>01 — PRODUCT ENGINEERING</span><span>02 — APPLIED AI</span><span>03 — SYSTEMS & SECURITY</span></div>
      </div>
      <div className="hero-visual"><div className="visual-top"><span>THE BUILD MAP</span><span>INTERACTIVE / 01</span></div><Constellation active={active} onSelect={setActive}/><div className="node-inspector"><span className="inspector-label">SELECTED NODE</span><strong>{activeProject.name}</strong><p>{activeProject.description}</p><a href="#work">Explore project <ArrowUpRight size={13}/></a></div></div>
      <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span>↓</span></a>
    </section>

    <section className="intro-strip"><div><span>BASED IN</span><strong>Mysuru, India</strong></div><div><span>STUDYING</span><strong>Computer Science & Engineering</strong></div><div><span>INTERESTED IN</span><strong>Software · AI · Entrepreneurship</strong></div></section>

    <section className="section about-section" id="about"><div className="section-kicker">01 / ABOUT ME</div><div className="about-layout"><h2>Curiosity gets<br/>me started.<br/><em>Building teaches me.</em></h2><div className="about-body"><p>I’m studying Computer Science and Engineering at <strong>Vidyavardhaka College of Engineering, Mysuru</strong>. I enjoy taking a problem from a rough idea to a working product, learning the underlying systems as I go.</p><p>My interests include full-stack development, AI-assisted workflows, Linux systems, application security and entrepreneurship. I use development tools to move faster, while making time to understand the code, test behaviour and improve what I build.</p><div className="fact-row"><div><span>EDUCATION</span><strong>B.E. · Computer Science & Engineering</strong></div><div><span>RECOGNITION</span><strong>CSE Best Achiever · 2025–26</strong></div><div><span>ACADEMICS</span><strong>8.70 CGPA · through Semester II</strong></div><div><span>COMMUNITY</span><strong>ASPERA · VVCE</strong></div></div></div></div></section>

    <section className="section work-section" id="work"><div className="section-heading"><div><div className="section-kicker">02 / SELECTED WORK</div><h2>Projects I’m<br/><em>putting into the world.</em></h2></div><p>Six projects lead this portfolio. I’ve chosen work with a visible implementation, a useful problem to solve or a concrete way to explore the idea.</p></div>
      <div className="featured-grid">{featured.map((p,i)=><article className={"feature-card feature-"+i} key={p.name}><div className="card-top"><span>0{i+1} / {p.category.toUpperCase()}</span><span className="status">{p.status}</span></div><h3>{p.name}</h3><p>{p.description}</p><div className="tags">{p.stack?.map(s=><span key={s}>{s}</span>)}</div><div className="card-bottom">{p.repo&&<a href={p.repo} target="_blank" rel="noreferrer">Source <Github size={13}/></a>}{p.live&&<a href={p.live} target="_blank" rel="noreferrer">Live product <ExternalLink size={13}/></a>}</div></article>)}</div>
    </section>

    <section className="section explorer-section"><div className="section-heading compact"><div><div className="section-kicker">03 / MORE IN PROGRESS</div><h2>More things<br/><em>I’m exploring.</em></h2></div><p>A wider view of my projects and experiments. Private projects have intentionally short descriptions and no source links.</p></div>
      <div className="explorer-tools"><div className="filter-list">{categories.map(c=><button key={c} type="button" className={filter===c?"selected":""} onClick={()=>setFilter(c)} aria-pressed={filter===c}>{c}</button>)}</div><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects…" aria-label="Search projects"/></div>
      <div className="project-list" aria-live="polite">{filtered.map((p,i)=><article className="project-row" key={p.name}><span className="project-index">{String(i+1).padStart(2,"0")}</span><div className="project-info"><h3>{p.name}</h3><p>{p.description}</p><div className="project-meta"><span>{p.category}</span><span>{p.visibility==="Private"?"Private repository":p.status}</span></div></div><div className="project-link">{p.visibility==="Public"&&p.repo?<a href={p.repo} target="_blank" rel="noreferrer" aria-label={"Open "+p.name+" repository"}><Github size={17}/></a>:<span className="private-label">PRIVATE</span>}</div></article>)}</div>
      {filtered.length===0&&<p className="empty">No projects match that search.</p>}
    </section>

    <section className="section capabilities-section"><div className="section-kicker">04 / WHAT I WORK WITH</div><div className="section-heading compact"><h2>Tools are a means.<br/><em>Understanding is the work.</em></h2><p>I’m developing depth across these areas through coursework, experiments and projects. This is a learning-in-progress snapshot, not a claim of mastery.</p></div>
      <div className="capability-grid"><article><Code2/><h3>Software development</h3><p>C, C++, Python, JavaScript, TypeScript, React, Next.js and Flutter.</p></article><article><Cpu/><h3>Applied AI</h3><p>Local inference, retrieval workflows, model integration and practical automation.</p></article><article><Layers3/><h3>Systems</h3><p>Linux, desktop integration, databases, APIs and developer tooling.</p></article><article><ShieldCheck/><h3>Security & reliability</h3><p>Application-security concepts, access control, testing and privacy-aware design.</p></article></div>
    </section>

    <section className="section milestone-section"><div className="section-kicker">05 / RECOGNITION & MILESTONES</div><div className="section-heading compact"><div><h2>Progress worth<br/><em>documenting.</em></h2></div><p>A short record of verified recognition, event work and participation. Awards, roles and participation are described separately.</p></div><div className="milestone-grid"><article><span>AWARD · 18–19 APR 2026</span><h3>Startup Odyssey</h3><p>3rd place.</p></article><article><span>ACADEMIC RECOGNITION · 2025–26</span><h3>CSE Best Achiever</h3><p>Department-level academic recognition.</p></article><article><span>EVENT ROLE · 13–14 OCT 2026</span><h3>CSE-HACKSPRINT 1.0</h3><p>Event Coordinator at VVCE.</p></article><article><span>INTERNSHIP COMPLETION</span><h3>NIE–AICTE IDEA LAB</h3><p>Internship completion credential.</p></article><article><span>HACKATHON · 2026</span><h3>Agentic AI Hackathon</h3><p>Participation confirmed by organiser email; certificate not yet listed.</p></article><article><span>HACKATHON</span><h3>PES Mandya Pioneer</h3><p>Hackathon participation.</p></article></div></section>\n\n    <section className="section journey-section" id="journey"><div className="section-kicker">06 / MY JOURNEY</div><div className="journey-grid"><div><h2>Learning by<br/><em>building with others.</em></h2><p className="journey-copy">College, student communities, technical events and independent projects all contribute to how I learn.</p></div><div className="journey-items"><article><span>EDUCATION</span><h3>Vidyavardhaka College of Engineering</h3><p>B.E. Computer Science & Engineering · Mysuru, Karnataka.</p></article><article><span>COMMUNITY</span><h3>ASPERA · Entrepreneurship Club</h3><p>Member of the VVCE entrepreneurship community.</p></article><article><span>EVENTS & HACKATHONS</span><h3>Learning through participation</h3><p>PES Mandya Pioneer Hackathon · Agentic AI Hackathon 2026 (participation confirmed by organiser email) · SIH 2026 problem-statement work.</p></article><article><span>EVENT ORGANISATION</span><h3>CSE-HACKSPRINT 1.0 · Event Coordinator</h3><p>Helped coordinate the VVCE CSE event held on 13–14 October 2026.</p></article><article><span>INTERNSHIP</span><h3>NIE–AICTE IDEA LAB · Completion</h3><p>Internship completion credential verified. This is listed as a completed internship, not merely an offer or joining letter.</p></article><article><span>SELECTED CERTIFICATES</span><h3>Learning beyond the syllabus</h3><p>C Programming Fundamentals — University of California, Santa Cruz · AI: An Overview — Politecnico di Milano · Information & Digital Literacy — University of Sydney · Electrical Power Generation — L&T EduTech.</p></article></div></div></section>

    <section className="contact-section" id="contact"><div className="section-kicker">07 / CONTACT</div><h2>Let’s build<br/><em>something useful.</em></h2><p>I’m open to conversations about software, applied AI, product ideas, internships and collaboration.</p><div className="contact-links"><a href="mailto:psppspyn13@gmail.com"><Mail size={16}/> Email <ArrowUpRight size={14}/></a><a href="https://linkedin.com/in/pspyn" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/PSP-YN" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={14}/></a></div></section>
    <footer><span>© 2026 Putta Shankar Prasad Y N</span><span>Made in Mysuru, India · AWS Student Builder Challenge</span><a href="#home">BACK TO TOP ↑</a></footer>
  </main>;
}