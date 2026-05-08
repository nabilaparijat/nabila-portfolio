import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ─── COLORS ──────────────────────────────────────────────────────────────────
const colors = {
  bg: "#fbf8f5",
  cream: "#fffdf9",
  blush: "#f2e4e4",
  blush2: "#ead3d7",
  plum: "#4b1232",
  plumDark: "#2b0b1f",
  mauve: "#8a5870",
  bronze: "#a85f2f",
  bronzeSoft: "#d8b18c",
  charcoal: "#20262c",
  textSoft: "#596069",
  line: "#eadfd8",
  green: "#2f6f5e",
  card: "rgba(255, 255, 255, 0.82)",
};

const shadows = {
  card: "0 18px 50px rgba(75, 18, 50, 0.08)",
  strong: "0 24px 70px rgba(75, 18, 50, 0.13)",
  button: "0 16px 30px rgba(75, 18, 50, 0.22)",
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const profileLinks = {
  cv: "/cv/Nabila_Parijat_CV.pdf",
  linkedin: "https://www.linkedin.com/in/nabilaparijat/",
  scholar: "https://scholar.google.com/citations?user=BbHQEHIAAAAJ&hl=en&oi=ao",
  orcid: "https://orcid.org/0009-0000-2332-142X",
  webOfScience: "https://www.webofscience.com/wos/author/record/NUQ-4029-2025",
  email: "mailto:Nabila.Parijat@utdallas.edu",
};

const navItems = [
  { id: "home", label: "Home" },
  { id: "highlights", label: "Highlights" },
  { id: "credentials", label: "Education" },
  { id: "work", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "conferences", label: "Conferences" },
  { id: "honors", label: "Honors" },
  { id: "teaching", label: "Teaching" },
  { id: "gallery", label: "Gallery" },
];

const selectedWork = [
  {
    type: "Publication",
    title: "Targeted Tick-Borne Disease Recognition",
    detail: "Assessing Risk for Improved Public Health.",
    journal: "Healthcare (2024)",
  },
  {
    type: "Revise and Resubmit",
    title: "Are Merit and Diversity in Conflict?",
    detail: "The U.S. Federal Government Examined.",
    journal: "Journal of Social Equity and Public Administration",
  },
  {
    type: "Submitted",
    title: "Navigating the Bamboo Ceiling",
    detail: "Career Development Challenges and Strategies for Asian Indians in the US.",
    journal: "Social Science Journal",
  },
  {
    type: "Under Contract",
    title: "Microfinance and Social Finance",
    detail: "Encyclopedia of Social Enterprise. Edward Elgar Publishing, U.K.",
    journal: "Edward Elgar Publishing, U.K.",
  },
  {
    type: "Under Contract",
    title: "Yunus: The Man and His Contributions to Social Enterprise",
    detail: "Encyclopedia of Social Enterprise.",
    journal: "Edward Elgar Publishing, U.K.",
  },
  {
    type: "Work in Progress",
    title: "Policy Disruptions and Administrative Burden",
    detail: "Analyzing the Evolution of Deferred Action for Childhood Arrivals through Punctuated Equilibrium Theory.",
  },
  {
    type: "Work in Progress",
    title: "How Aid Intensity Affects the Performance of International Development Programs",
    detail: "Accepted for the Oxford-Penn Social Impact Doctoral Fellows Program.",
  },
  {
    type: "Work in Progress",
    title: "What Shapes ID Performance",
    detail: "Donor Reputation, Regional Context Or Project Dynamics.",
  },
  {
    type: "Work in Progress",
    title: "Cap Exemption and the H1-B Program",
    detail: "Implications for Academia and Industry from an Experimental Survey.",
  },
];

const reelImages = [
  { src: "/images/aspa-close.jpeg", alt: "Nabila at an ASPA conference backdrop", caption: "American Society for Public Administration." },
  { src: "/images/foreign-aid-presentation.jpeg", alt: "Nabila presenting a slide titled Introduction: Foreign Aid", caption: "How Aid Intensity Affects the Performance of International Development Programs." },
  { src: "/images/abfm-conference.jpeg", alt: "Nabila at the ABFM research conference", caption: "Association for Budgeting and Financial Management Annual Conference." },
  { src: "/images/conference-colleagues.jpeg", alt: "Nabila with conference colleagues", caption: "Public affairs conferences." },
  { src: "/images/clipboard-1191169220.jpeg", alt: "Nabila at a conference", caption: "Moments from the field." },
  { src: "/images/appam-certificate.png", alt: "APPAM Equity and Inclusion Student Fellowship Award certificate", caption: "I am honored to be an Equity and Inclusion Fellow at APPAM 2025." },
  { src: "/images/appam-fellowship-stage.jpeg", alt: "Nabila receiving recognition as an APPAM Equity and Inclusion Fellow", caption: "I am honored to be an Equity and Inclusion Fellow at APPAM 2025." },
  { src: "/images/appam-group.jpeg", alt: "Group photo of APPAM Equity and Inclusion Fellows", caption: "Selected as one of 40 fellows nationwide." },
  { src: "/images/aspa-presentation-2024.jpeg", alt: "Nabila presenting research at a public administration conference", caption: "Are merit and diversity in conflict? The US federal government explained." },
  { src: "/images/love-of-my-life.jpeg", alt: "A cherished personal moment", caption: "The love of my life." },
  { src: "/images/DI.jpg", alt: "Democracy International", caption: "Democracy International." },
  { src: "/images/ASPA-PNM-gathering.jpeg", alt: "ASPA Public and Nonprofit Management gathering", caption: "ASPA Public and Nonprofit Management section gathering." },
  { src: "/images/arnova-community.jpeg", alt: "ARNOVA community gathering", caption: "ARNOVA community." },
  { src: "/images/niagara.jpg", alt: "Niagara Falls", caption: "Niagara Falls." },
  { src: "/images/empire-state.jpg", alt: "Empire State Building", caption: "Empire State Building." },
  { src: "/images/appam.jpeg", alt: "APPAM conference", caption: "Association for Public Policy Analysis and Management." },
];

const heroFacts = [
  { icon: "▣", title: "PhD in Public Affairs", detail: "The University of Texas at Dallas" },
  {
    icon: "⌖",
    title: "Research Focus",
    detail: {
      lead: "Interdisciplinary:",
      items: ["Public Policy", "Nonprofit and Voluntary Sector", "Public Management", "Program Evaluation"],
    },
  },
  {
    icon: "▥",
    title: "Methodological Approach",
    detail: { lead: "", items: ["Panel Data", "Fixed Effects", "Survey Research"] },
  },
  {
    icon: "✦",
    title: "Commitment",
    detail: {
      lead: "",
      items: ["Intuitive and Innovative Teaching", "Evidence-Based Scholarship", "Capturing Impacts", "Positivity, Fun, and Compassion"],
    },
  },
];

const highlightStats = [
  { icon: "◈", value: "Defended", label: "Dissertation in April 2026" },
  { icon: "▥", value: "7", label: "Public datasets merged" },
  { icon: "✎", value: "46", label: "Students taught" },
  { icon: "◎", value: "3.5", label: "Years in performance management" },
  { icon: "✦", value: "2", label: "Major fellowships" },
];

const credentials = [
  { year: "2016", title: "Bachelor in Social Sciences (Major: Economics)", institution: "University of Dhaka" },
  { year: "2022", title: "Master of Public Administration", institution: "University of South Dakota" },
  { year: "2026", title: "Masters in Social Data Analytics and Research", institution: "The University of Texas at Dallas" },
  { year: "2026", title: "PhD in Public Affairs", institution: "The University of Texas at Dallas" },
];

const appliedExperience = [
  {
    title: "Research and MEL Officer",
    org: "Democracy International",
    year: "Jan 2018 – Jan 2021",
    detail: [
      "Spearheaded a nationwide public opinion poll, including the formation and translation of questionnaires, and analysis of survey data, yielding actionable insights for donors and program personnel.",
      "Drafted essential documentation for USAID's Performance Plan and Report (PPR) and the U.S. Department of State's Performance Indicator Tracking Table (PITT), ensuring compliance with donor requirements.",
      "Designed and led workshops on Monitoring, Evaluation, and Learning (MEL) concepts, empowering teams with knowledge on outputs, outcomes, impacts, and data management.",
      "Co-authored 20+ policy and governance reports through in-depth content analysis of paper media and key informant interviews (KIIs).",
    ],
  },
  {
    title: "Intern",
    org: "Oxfam America",
    year: "Jun–Aug 2022 & 2023",
    detail: [
      "Conducted in-depth data analysis for a global research paper on food insecurity and climate-related factors, informing policy recommendations.",
      "Designed maps that highlighted the nexus between conflict, migration, and severe food insecurity in targeted nations.",
    ],
  },
  {
    title: "CONNECT Fellow",
    org: "Maya Midwifery International",
    year: "Sep 2022 – Jan 2023",
    detail: [
      "Developed comprehensive monitoring and evaluation (M&E) tools, including data collection templates and dashboards, to track program outputs and outcomes effectively.",
    ],
  },
];

const conferenceItems = [
  "Fiscal Constraints and Workforce Innovation: H1-B as a Strategy in U.S. States. ASPA Annual Conference, Hollywood, CA.",
  "What Shapes ID Performance: Donor Reputation, Regional Context Or Project Dynamics. ARNOVA Annual Conference, Indianapolis, IN.",
  "The Role of Foreign-Born Human Capital in State Innovation Capacity. ABFM Annual Conference, Atlanta, GA.",
  "How Aid Intensity Affects the Performance of International Development Programs. ARNOVA Annual Conference, Washington, DC.",
  "Are merit and diversity in conflict? The US federal government explained. ASPA Annual Conference, Minneapolis, MN.",
];

const awardItems = [
  "APPAM Equity and Inclusion Fellowship: selected as one of 40 fellows nationwide.",
  "Oxford-Penn Social Impact Doctoral Fellow: selected as one of seven fellows from a pool of 60 applicants.",
  "GSA Fall 2025 Travel Award.",
  "CONNECT Fellowship.",
  "Pi Alpha Alpha Honor Society.",
  "Graduate Teaching Certificate.",
];

// ─── UTILITY COMPONENTS ───────────────────────────────────────────────────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = document.querySelector("header")?.offsetHeight || 72;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
  window.scrollTo({ top, behavior: "smooth" });
}

function ExternalLink({ href, children, className = "", style = {} }) {
  const isPdf = href && href.endsWith(".pdf");
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
      style={style}
      {...(isPdf ? { download: false } : {})}
    >
      {children}
    </a>
  );
}

function FloralMark({ className = "", color = colors.bronzeSoft, opacity = 0.55 }) {
  return (
    <svg className={className} viewBox="0 0 220 260" fill="none" aria-hidden="true" style={{ opacity }}>
      <path d="M112 242C104 190 115 136 144 92C160 67 178 50 199 35" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M142 95C117 78 104 52 110 22C139 37 153 62 142 95Z" stroke={color} strokeWidth="2" />
      <path d="M153 82C159 50 180 28 211 19C208 54 185 77 153 82Z" stroke={color} strokeWidth="2" />
      <path d="M126 133C98 120 78 95 75 62C110 70 130 96 126 133Z" stroke={color} strokeWidth="2" />
      <path d="M126 142C159 129 190 134 213 160C177 172 145 164 126 142Z" stroke={color} strokeWidth="2" />
      <path d="M109 185C79 178 53 157 42 126C78 125 104 148 109 185Z" stroke={color} strokeWidth="2" />
      <path d="M104 201C136 190 166 196 187 220C152 230 123 223 104 201Z" stroke={color} strokeWidth="2" />
    </svg>
  );
}

function MiniIcon({ children }) {
  return (
    <span
      className="flex items-center justify-center rounded-full text-lg"
      style={{
        minWidth: "2.75rem",
        width: "2.75rem",
        height: "2.75rem",
        backgroundColor: colors.blush,
        color: colors.mauve,
      }}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <p
      className="mb-4 font-extrabold uppercase"
      style={{
        color: colors.bronze,
        fontSize: "clamp(1rem, 2vw, 1.4rem)",
        letterSpacing: "0.26em",
      }}
    >
      {children}
    </p>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(251, 248, 245, 0.92)",
        borderColor: colors.line,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 text-left"
          aria-label="Go to home"
        >
          <span>
            <span
              className="block font-extrabold uppercase"
              style={{ color: colors.bronze, letterSpacing: "0.22em", fontSize: "1.25rem" }}
            >
              Nabila Parijat
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={{ color: colors.charcoal }}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollToSection("connect")}
            className="rounded-lg px-5 py-2.5 text-sm font-bold text-white"
            style={{ backgroundColor: colors.plum, boxShadow: shadows.button }}
          >
            Get in Touch
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border px-3 py-2 text-lg lg:hidden"
          style={{ borderColor: colors.line, color: colors.plum }}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="border-t px-5 py-4 lg:hidden"
            style={{ borderColor: colors.line, backgroundColor: colors.cream }}
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => { scrollToSection(item.id); setOpen(false); }}
                  className="rounded-xl px-4 py-3 text-left text-sm font-semibold"
                  style={{ color: colors.charcoal }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-8 pt-10 md:px-8 md:pt-14">
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: 0, top: "9rem",
          width: "18rem", height: "18rem",
          borderRadius: "50%",
          background: "rgba(138, 88, 112, 0.12)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          right: "5rem", top: "7rem",
          width: "16rem", height: "16rem",
          borderRadius: "50%",
          background: "rgba(216, 177, 140, 0.16)",
          filter: "blur(60px)",
        }}
      />
      <FloralMark
        className="pointer-events-none absolute hidden md:block"
        style={{ right: "-1rem", top: "3rem", width: "22rem", height: "25rem" }}
        opacity={0.5}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <div className="relative mx-auto" style={{ maxWidth: "22rem" }}>
            <span
              className="absolute"
              style={{ left: "-2rem", top: "2.5rem", fontSize: "3rem", color: colors.bronze }}
            >
              ✦
            </span>
            <div
              className="bg-white p-2"
              style={{
                borderRadius: "14rem 14rem 1rem 1rem",
                border: `1px solid ${colors.bronzeSoft}`,
                boxShadow: shadows.strong,
              }}
            >
              <img
                src="/images/professional-picture.jpeg"
                alt="Professional headshot of Nabila Parijat"
                style={{
                  display: "block",
                  width: "100%",
                  height: "31rem",
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: "13rem 13rem 0.5rem 0.5rem",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06 }}
          className="order-1 lg:order-2"
        >
          <SectionLabel>Nabila Parijat</SectionLabel>
          <h1
            className="font-serif font-semibold leading-tight tracking-tight"
            style={{
              color: colors.charcoal,
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              lineHeight: 1.05,
            }}
          >
            Passionate Educator. Aspiring Scholar. Practitioner.
          </h1>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("dissertation")}
              className="rounded-lg px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: colors.plum, boxShadow: shadows.button }}
            >
              Explore Dissertation →
            </button>
            <ExternalLink
              href={profileLinks.cv}
              className="rounded-lg border px-6 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={{
                borderColor: colors.plum,
                color: colors.plum,
                backgroundColor: "rgba(255,255,255,0.72)",
              }}
            >
              Download CV ↧
            </ExternalLink>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroFacts.map((fact, i) => (
              <div
                key={fact.title}
                className="flex gap-3"
                style={{
                  borderRight: i < heroFacts.length - 1 ? `1px solid ${colors.line}` : "none",
                  paddingRight: "0.75rem",
                }}
              >
                <MiniIcon>{fact.icon}</MiniIcon>
                <div>
                  <p className="text-sm font-bold" style={{ color: colors.charcoal }}>
                    {fact.title}
                  </p>
                  {typeof fact.detail === "string" ? (
                    <p className="mt-1 text-xs leading-5" style={{ color: colors.textSoft }}>
                      {fact.detail}
                    </p>
                  ) : (
                    <div className="mt-1 text-xs leading-5" style={{ color: colors.textSoft }}>
                      {fact.detail.lead && (
                        <p className="font-semibold">{fact.detail.lead}</p>
                      )}
                      <ul className="mt-1 space-y-0.5 pl-4" style={{ listStyleType: "disc" }}>
                        {fact.detail.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── HIGHLIGHTS ───────────────────────────────────────────────────────────────
function Highlights() {
  return (
    <section id="highlights" className="px-5 py-4 md:px-8">
      <div
        className="mx-auto grid max-w-7xl gap-4 rounded-2xl border bg-white p-5 md:grid-cols-[1fr_4fr]"
        style={{ borderColor: colors.line, boxShadow: shadows.card }}
      >
        <div className="flex flex-col justify-between">
          <SectionLabel>Lifetime Highlights</SectionLabel>
          <button
            type="button"
            onClick={() => scrollToSection("experience")}
            className="w-fit text-sm font-bold"
            style={{ color: colors.plum }}
          >
            View All →
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {highlightStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 border-l pl-4"
              style={{ borderColor: colors.line }}
            >
              <MiniIcon>{stat.icon}</MiniIcon>
              <div>
                <p
                  className="font-serif font-bold leading-none"
                  style={{ color: colors.bronze, fontSize: "1.75rem" }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-1 text-xs font-bold uppercase"
                  style={{ color: colors.charcoal, letterSpacing: "0.12em" }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TOP CARDS ────────────────────────────────────────────────────────────────
function TopCards() {
  const selectedPreview = selectedWork.slice(0, 3);
  const teachingPreview = appliedExperience.slice(0, 3);

  return (
    <section className="px-5 py-4 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
        {/* Dissertation */}
        <div
          id="dissertation"
          className="relative overflow-hidden rounded-2xl border bg-white p-7"
          style={{ borderColor: colors.line, boxShadow: shadows.card }}
        >
          <FloralMark
            className="pointer-events-none absolute"
            style={{ bottom: "-3rem", right: "-2rem", width: "11rem", height: "13rem" }}
            opacity={0.28}
          />
          <SectionLabel>Dissertation</SectionLabel>
          <h2
            className="font-serif font-semibold leading-tight"
            style={{ color: colors.charcoal, fontSize: "1.4rem" }}
          >
            H-1B applications and patenting activity
          </h2>
          <div
            className="mt-5 overflow-hidden rounded-2xl border bg-white p-2"
            style={{ borderColor: colors.line, boxShadow: "0 12px 30px rgba(75, 18, 50, 0.08)" }}
          >
            <img
              src="/images/dissertation-defense.jpeg"
              alt="Nabila defending her dissertation over Zoom"
              style={{
                display: "block",
                width: "100%",
                height: "12rem",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "0.75rem",
              }}
            />
          </div>
          <div
            className="my-5 rounded-full"
            style={{ height: "4px", width: "3.5rem", backgroundColor: colors.mauve }}
          />
          <p className="text-sm leading-7" style={{ color: colors.textSoft }}>
            Uses state and year fixed-effects models to estimate how high-skilled immigration influences
            innovation capacity and economic growth, especially under varying state financial and economic
            conditions.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-2 text-center">
            {[["14", "years"], ["7", "datasets"], ["2", "presentations"]].map(([value, label]) => (
              <div key={label} className="rounded-xl p-3" style={{ backgroundColor: colors.blush }}>
                <p className="font-serif font-bold" style={{ color: colors.plum, fontSize: "1.5rem" }}>
                  {value}
                </p>
                <p
                  className="uppercase"
                  style={{ fontSize: "0.68rem", letterSpacing: "0.12em", color: colors.textSoft }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Work */}
        <div
          className="rounded-2xl border bg-white p-7"
          style={{ borderColor: colors.line, boxShadow: shadows.card }}
        >
          <SectionLabel>Selected Work</SectionLabel>
          <div className="grid gap-3">
            {selectedPreview.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 border-b pb-3 last:border-b-0 last:pb-0"
                style={{ borderColor: colors.line }}
              >
                <MiniIcon>▤</MiniIcon>
                <div className="min-w-0 flex-1">
                  <p className="font-bold leading-5" style={{ color: colors.charcoal }}>
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-5" style={{ color: colors.textSoft }}>
                    {item.type}
                  </p>
                </div>
                <span style={{ color: colors.mauve }}>›</span>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("work")}
            className="mt-5 text-sm font-bold"
            style={{ color: colors.plum }}
          >
            View All Publications →
          </button>
        </div>

        {/* Experience preview */}
        <div
          className="rounded-2xl border bg-white p-7"
          style={{ borderColor: colors.line, boxShadow: shadows.card }}
        >
          <SectionLabel>Experience</SectionLabel>
          <div className="grid gap-4">
            {teachingPreview.map((item) => (
              <div key={item.title} className="grid items-start gap-3" style={{ gridTemplateColumns: "auto 1fr auto" }}>
                <MiniIcon>✎</MiniIcon>
                <div>
                  <p className="font-bold" style={{ color: colors.charcoal }}>
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-5" style={{ color: colors.textSoft }}>
                    {item.org}
                  </p>
                </div>
                <p className="text-xs" style={{ color: colors.textSoft }}>
                  {item.year}
                </p>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("experience")}
            className="mt-5 text-sm font-bold"
            style={{ color: colors.plum }}
          >
            View Experience →
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── GALLERY REEL ─────────────────────────────────────────────────────────────
function GalleryReel() {
  const [failedSrcs, setFailedSrcs] = useState({});
  const handleError = (src) => setFailedSrcs((prev) => ({ ...prev, [src]: true }));

  const visibleImages = reelImages.filter((img) => !failedSrcs[img.src]);
  const doubledImages = [...visibleImages, ...visibleImages];

  return (
    <section id="gallery" className="px-5 py-4 md:px-8">
      <div
        className="mx-auto rounded-2xl border bg-white p-4"
        style={{ maxWidth: "80rem", borderColor: colors.line, boxShadow: shadows.card }}
      >
        <div className="grid items-center gap-6 md:grid-cols-[16rem_1fr] lg:grid-cols-[18rem_1fr]">
          <div className="pr-4">
            <SectionLabel>Moments & Milestones</SectionLabel>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            {/* fade edges */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 top-0 z-10"
              style={{ width: "3rem", background: `linear-gradient(to right, ${colors.cream}, transparent)` }}
            />
            <div
              className="pointer-events-none absolute bottom-0 right-0 top-0 z-10"
              style={{ width: "3rem", background: `linear-gradient(to left, ${colors.cream}, transparent)` }}
            />
            <motion.div
              className="flex gap-4"
              animate={{ x: [0, -304 * visibleImages.length] }}
              transition={{ duration: 78, ease: "linear", repeat: Infinity }}
            >
              {doubledImages.map((image, index) => (
                <figure
                  key={`${image.src}-${index}`}
                  className="shrink-0 overflow-hidden rounded-2xl bg-white"
                  style={{ width: "18rem", border: `1px solid ${colors.line}`, boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    onError={() => handleError(image.src)}
                    style={{ display: "block", width: "100%", height: "11rem", objectFit: "cover", objectPosition: "center" }}
                  />
                </figure>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CREDENTIALS ──────────────────────────────────────────────────────────────
function Credentials() {
  const cardColors = ["#6f8f73", "#648568", "#58775c", "#4d6950"];

  return (
    <section id="credentials" className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Education</SectionLabel>
        <div className="relative mt-10">
          {/* timeline bar (desktop) */}
          <div
            className="absolute left-8 right-8 top-6 hidden h-1 lg:block"
            style={{ backgroundColor: "#7e9c83" }}
          />
          {/* dots */}
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-7">
            {credentials.map((item) => (
              <div key={`dot-${item.year}-${item.title}`} className="relative flex justify-center">
                <div
                  className="relative z-10 border-4"
                  style={{
                    width: "3rem", height: "3rem",
                    borderRadius: "50%",
                    backgroundColor: colors.cream,
                    borderColor: "#4d6950",
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-7 lg:grid-cols-4">
            {credentials.map((item, index) => (
              <div key={`${item.year}-${item.title}`}>
                <p
                  className="text-center font-extrabold uppercase"
                  style={{ color: colors.bronze, fontSize: "1.15rem", letterSpacing: "0.24em" }}
                >
                  {item.year}
                </p>
                <div
                  className="mt-4 flex flex-col items-center justify-center rounded-2xl border p-7 text-center"
                  style={{
                    minHeight: "15rem",
                    backgroundColor: cardColors[index % cardColors.length],
                    borderColor: "#4d6950",
                    boxShadow: shadows.card,
                  }}
                >
                  <h3
                    className="font-serif font-semibold leading-tight"
                    style={{ color: colors.cream, fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-5 text-sm font-bold uppercase leading-6"
                    style={{ color: "rgba(255,253,249,0.86)", letterSpacing: "0.16em" }}
                  >
                    {item.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FULL SELECTED WORK ───────────────────────────────────────────────────────
function FullSelectedWork() {
  return (
    <section id="work" className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Research</SectionLabel>
        <h2
          className="font-serif font-semibold"
          style={{ color: colors.charcoal, fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
        >
          Publications & Works in Progress
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {selectedWork.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-white p-5"
              style={{ borderColor: colors.line, boxShadow: shadows.card }}
            >
              <p
                className="font-bold uppercase"
                style={{ color: colors.bronze, fontSize: "0.7rem", letterSpacing: "0.2em" }}
              >
                {item.type}
              </p>
              <h3
                className="mt-3 font-serif font-semibold"
                style={{ color: colors.charcoal, fontSize: "1.1rem" }}
              >
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7" style={{ color: colors.textSoft }}>
                {item.detail}
              </p>
              {item.journal && (
                <p
                  className="mt-4 inline-flex rounded-full px-4 py-2 font-extrabold uppercase"
                  style={{
                    backgroundColor: colors.blush,
                    color: colors.plum,
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                  }}
                >
                  Journal: {item.journal}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
function Experience() {
  return (
    <section
      id="experience"
      className="px-5 py-16 md:px-8"
      style={{
        background: `linear-gradient(135deg, ${colors.blush}, #ffffff 52%, #f7eef1)`,
      }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Professional Experience</SectionLabel>
        <div className="mt-6 grid gap-4">
          <div className="grid gap-4">
            {appliedExperience.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-6"
                style={{ borderColor: colors.line, boxShadow: shadows.card }}
              >
                <div className="flex items-start justify-between gap-4">
                  <p
                    className="font-bold uppercase"
                    style={{ color: colors.bronze, fontSize: "0.7rem", letterSpacing: "0.2em" }}
                  >
                    {item.org}
                  </p>
                  <p className="shrink-0 text-xs" style={{ color: colors.textSoft }}>{item.year}</p>
                </div>
                <h3
                  className="mt-2 font-serif font-semibold"
                  style={{ color: colors.charcoal, fontSize: "1.4rem" }}
                >
                  {item.title}
                </h3>
                <ul
                  className="mt-3 space-y-2 pl-5 text-sm leading-7"
                  style={{ color: colors.textSoft, listStyleType: "disc" }}
                >
                  {item.detail.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONFERENCES ──────────────────────────────────────────────────────────────
function Conferences() {
  return (
    <section id="conferences" className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Conference Presentations</SectionLabel>
        <div className="mt-4 grid gap-3">
          {conferenceItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border bg-white p-5"
              style={{ borderColor: colors.line, boxShadow: shadows.card }}
            >
              <p className="text-sm leading-7" style={{ color: colors.textSoft }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── HONORS & AWARDS ──────────────────────────────────────────────────────────
function HonorsAndAwards() {
  return (
    <section id="honors" className="px-5 py-16 md:px-8" style={{ background: `linear-gradient(135deg, ${colors.blush}, #ffffff 52%, #f7eef1)` }}>
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Honors and Awards</SectionLabel>
        <div className="mt-4 grid gap-3">
          {awardItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border bg-white p-5 text-sm leading-7"
              style={{ borderColor: colors.line, boxShadow: shadows.card, color: colors.textSoft }}
            >
              <span style={{ color: colors.bronze, marginRight: "0.5rem" }}>✦</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TEACHING ─────────────────────────────────────────────────────────────────
function Teaching() {
  return (
    <section id="teaching" className="px-5 py-16 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div
          className="overflow-hidden rounded-2xl border bg-white p-3"
          style={{ borderColor: colors.line, boxShadow: shadows.card }}
        >
          <img
            src="/images/classroom.jpeg"
            alt="Nabila with students in a classroom"
            style={{
              display: "block",
              width: "100%",
              height: "27rem",
              objectFit: "cover",
              borderRadius: "0.75rem",
            }}
          />
        </div>
        <div
          className="rounded-2xl border bg-white p-7"
          style={{ borderColor: colors.line, boxShadow: shadows.card }}
        >
          <SectionLabel>Teaching</SectionLabel>
          <p className="mt-2 text-base leading-8" style={{ color: colors.textSoft }}>
            The happiest you will see me is in class, explaining research design topics to undergrads. I have
            an absolute blast conducting in-class experiments and quasi-experiments through Kahoot!, asking
            students to diagnose problems in survey questions, among other shenanigans.
          </p>
          <div
            className="mt-6 rounded-2xl p-5 text-white"
            style={{ backgroundColor: colors.plum }}
          >
            When it comes to grading your work, I can be very detailed for my own good, but I will get you
            thorough feedback (more feedback than you will probably read).
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── APPLIED POLICY RESEARCH ─────────────────────────────────────────────────
function AppliedPolicyResearch() {
  const contributions = [
    {
      year: "2023",
      citation: "Messer, E., & Cohen, M. J. (2023). Conflict, Food Insecurity, and Globalization: An Update 20 Years On. Advances in Food Security and Sustainability (Vol. 8, pp. 287-345). Elsevier.",
      role: "Contributed to data collection, analysis, and GIS visualization. Acknowledged in the Acknowledgments section.",
    },
    {
      year: "2022",
      citation: "Oxfam Media Briefing (2022). Hunger in a Heating World: How the Climate Crisis is Fueling Hunger in an Already Hungry World.",
      role: "Contributed to data collection and analysis on climate, conflict, and food insecurity.",
    },
    {
      year: "2018–2021",
      citation: "USAID and FCDO-funded Confidential Nation-wide Public Opinion Polls (2018-2021). Surveys and focus group discussions assessing the perception of the sociopolitical environment in Bangladesh.",
      role: "Trained enumerators for telephone and face-to-face surveys, analyzed data from surveys and focus groups, and reported findings using PowerPoint presentations.",
    },
  ];

  return (
    <section id="applied-research" className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          className="font-serif font-semibold"
          style={{ color: colors.charcoal, fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
        >
          Applied Policy Research
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contributions.map((item) => (
            <div
              key={item.year}
              className="rounded-2xl border bg-white p-6"
              style={{ borderColor: colors.line, boxShadow: shadows.card }}
            >
              <p
                className="mt-2 font-bold uppercase"
                style={{ color: colors.textSoft, fontSize: "0.7rem", letterSpacing: "0.12em" }}
              >
                {item.year}
              </p>
              <p className="mt-3 text-sm font-semibold leading-6" style={{ color: colors.charcoal }}>
                {item.citation}
              </p>
              <ul
                className="mt-3 space-y-1 pl-5 text-sm leading-7"
                style={{ color: colors.textSoft, listStyleType: "disc" }}
              >
                <li>{item.role}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONNECT ──────────────────────────────────────────────────────────────────
function Connect() {
  const btnStyle = {
    borderColor: colors.plum,
    color: colors.plum,
    backgroundColor: "rgba(255,255,255,0.75)",
  };

  return (
    <section
      id="connect"
      className="relative overflow-hidden px-5 py-10 md:px-8"
      style={{
        background: `linear-gradient(90deg, ${colors.blush}, ${colors.cream} 42%, ${colors.blush2})`,
      }}
    >
      <FloralMark
        className="pointer-events-none absolute"
        style={{ bottom: "-3rem", right: 0, width: "11rem", height: "13rem" }}
        color={colors.mauve}
        opacity={0.3}
      />
      <div className="relative mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_2fr_auto] md:items-center">
        <div>
          <SectionLabel>Connect</SectionLabel>
          <p className="text-sm leading-6" style={{ color: colors.textSoft }}>
            If this introduction gave you a sense of my personality — a bit obsessed with my projects, my
            teaching, and having a good time — feel free to learn more by viewing my CV or connecting with me
            on LinkedIn.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            { href: profileLinks.email, label: "Email ✉" },
            { href: profileLinks.linkedin, label: "LinkedIn ↗" },
            { href: profileLinks.scholar, label: "Google Scholar ↗" },
            { href: profileLinks.orcid, label: "ORCID ↗" },
            { href: profileLinks.webOfScience, label: "Web of Science ↗" },
          ].map(({ href, label }) => (
            <ExternalLink
              key={label}
              href={href}
              className="rounded-lg border px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={btnStyle}
            >
              {label}
            </ExternalLink>
          ))}
        </div>
        <ExternalLink
          href={profileLinks.cv}
          className="rounded-lg px-6 py-3 text-sm font-bold text-white"
          style={{ backgroundColor: colors.plum, boxShadow: shadows.button }}
        >
          CV →
        </ExternalLink>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t px-5 py-8 md:px-8" style={{ borderColor: colors.line }}>
      <div
        className="mx-auto flex max-w-7xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between"
        style={{ color: colors.textSoft }}
      >
        <p>© {new Date().getFullYear()} Nabila Parijat.</p>
        <p>Economics · Social Data Analytics · Public Affairs</p>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <main style={{ minHeight: "100vh", color: colors.charcoal }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=DM+Sans:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
          background:
            radial-gradient(circle at 4% 35%, rgba(138, 88, 112, 0.12), transparent 26%),
            radial-gradient(circle at 85% 15%, rgba(216, 177, 140, 0.13), transparent 27%),
            linear-gradient(180deg, #fbf8f5 0%, #fffdf9 54%, #f7eeee 100%);
        }

        .font-serif {
          font-family: 'EB Garamond', Georgia, serif;
        }

        ::selection {
          background: #4b1232;
          color: white;
        }

        img {
          max-width: 100%;
        }
      `}</style>

      <Nav />
      <Hero />
      <Highlights />
      <TopCards />
      <GalleryReel />
      <Credentials />
      <FullSelectedWork />
      <AppliedPolicyResearch />
      <Experience />
      <Conferences />
      <HonorsAndAwards />
      <Teaching />
      <Connect />
      <Footer />
    </main>
  );
}
