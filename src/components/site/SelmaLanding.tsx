import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/hero-analytics.jpg";
import {
  BarChart3,
  BrainCircuit,
  ClipboardList,
  FileSearch,
  LineChart,
  Mail,
  MessageCircle,
  Phone,
  Target,
  Check,
} from "lucide-react";

const PHONE = "0758 516 272";
const EMAIL = "selmaresearchanddataanalysis@gmail.com";

const SERVICES = [
  {
    icon: ClipboardList,
    title: "Project Management",
    body: "Planning, monitoring and evaluation frameworks that keep deliverables on scope, on budget and on time.",
  },
  {
    icon: BarChart3,
    title: "Data Visualization & Analytics",
    body: "Interactive Power BI and Tableau dashboards that turn raw operational data into decisions.",
  },
  {
    icon: FileSearch,
    title: "Grant Research & Proposals",
    body: "Fundable concept notes, proposals and donor-ready project documents backed by solid evidence.",
  },
  {
    icon: Target,
    title: "Market Research",
    body: "Survey design, field data collection and competitor analysis for entering or growing a market.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    body: "Predictive models, forecasting and automation built on your own data, deployed responsibly.",
  },
  {
    icon: LineChart,
    title: "Statistical Consulting",
    body: "Study design, sampling, cleaning and rigorous analysis in SPSS, Stata, R and Python.",
  },
];

const STEPS = [
  { n: "01", title: "Scoping call", body: "We map the question, the data you hold and the decision it must support." },
  { n: "02", title: "Design", body: "Methodology, instruments and analysis plan agreed in writing before work starts." },
  { n: "03", title: "Collect & analyse", body: "Field work, cleaning and modelling with quality checks at every stage." },
  { n: "04", title: "Deliver", body: "Report, dashboard and a walkthrough so your team can run with the findings." },
];

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-md bg-brand shadow-card">
        <BarChart3 className="size-5 text-primary-foreground" strokeWidth={2.5} />
      </span>
      <span className="font-display text-sm leading-tight font-bold tracking-tight">
        Selma Research
        <span className="block text-[0.7rem] font-medium tracking-wide text-muted-foreground uppercase">
          & Data Analytics
        </span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button variant="brand" size="lg" asChild>
          <a href="#contact">Book now</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-diagonal">
      <img
        src={heroImage}
        alt="Analysts reviewing holographic data dashboards in a research command centre"
        width={1600}
        height={1104}
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(100deg, var(--primary-deep) 0%, color-mix(in oklab, var(--primary-deep) 78%, transparent) 45%, transparent 78%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-sm border border-primary-foreground/40 px-4 py-2 text-sm font-semibold text-primary-foreground">
            We are the best in
          </span>
          <h1 className="mt-6 text-4xl leading-[1.05] font-bold text-primary-foreground uppercase sm:text-5xl lg:text-6xl">
            Research & data analytics development
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
            Selma Research turns field data, surveys and operational records into evidence your
            organisation can fund, defend and act on.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="gold" size="xl" asChild>
              <a href="#contact">Book now</a>
            </Button>
            <Button variant="onBrand" size="xl" asChild>
              <a href="#services">Our services</a>
            </Button>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/25 pt-8">
            {[
              ["6+", "Service lines"],
              ["Power BI", "& Tableau"],
              ["End-to-end", "Study delivery"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-xl font-bold text-accent">{value}</dt>
                <dd className="mt-1 text-xs tracking-wide text-primary-foreground/75 uppercase">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24">
      <p className="font-display text-sm font-bold tracking-[0.2em] text-primary uppercase">
        Our services
      </p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
        Research and analytics capability, delivered as one team
      </h2>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, body }) => (
          <Card
            key={title}
            className="group relative gap-0 overflow-hidden border-border/70 p-7 shadow-card transition-shadow hover:shadow-elevated"
          >
            <span className="absolute inset-x-0 top-0 h-0.5 bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-primary">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-6 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="bg-secondary/60 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.2em] text-primary uppercase">
            How we work
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            A method you can put in front of a donor
          </h2>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Documented methodology and analysis plan",
              "Clean, reproducible data pipelines",
              "Dashboards your team can maintain",
              "Plain-language reporting alongside the technical annex",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={3} />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2">
          {STEPS.map((step) => (
            <li key={step.n} className="rounded-lg border border-border bg-card p-6 shadow-card">
              <span className="font-display text-2xl font-bold text-accent">{step.n}</span>
              <h3 className="mt-3 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Project enquiry${org ? ` — ${org}` : ""}`,
  )}&body=${encodeURIComponent(`Name: ${name}\nOrganisation: ${org}\n\n${message}`)}`;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.2em] text-primary uppercase">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tell us about your study</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Share the scope and timeline and we will come back with an approach, effort estimate and
            price.
          </p>
          <div className="mt-10 space-y-4">
            {[
              { icon: Phone, label: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}`, note: "Call" },
              {
                icon: MessageCircle,
                label: PHONE,
                href: `https://wa.me/255${PHONE.replace(/\s/g, "").slice(1)}`,
                note: "WhatsApp",
              },
              { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}`, note: "Email" },
            ].map(({ icon: Icon, label, href, note }) => (
              <a
                key={note}
                href={href}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 shadow-card transition-colors hover:border-primary/50"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand">
                  <Icon className="size-4 text-primary-foreground" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                    {note}
                  </span>
                  <span className="block truncate text-sm font-medium">{label}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <Card className="gap-0 border-border/70 p-7 shadow-elevated">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Your name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="org">Organisation</Label>
              <Input id="org" value={org} onChange={(e) => setOrg(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">What do you need?</Label>
              <Textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Baseline survey, dashboard, grant proposal…"
              />
            </div>
            <Button variant="brand" size="lg" className="mt-2" asChild>
              <a href={mailto}>Send enquiry</a>
            </Button>
            <p className="text-xs text-muted-foreground">
              This opens your email app with the details filled in.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-diagonal">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-primary-foreground/80 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display font-semibold text-primary-foreground">
          Selma Research & Data Analytics Development
        </p>
        <p>
          {PHONE} · {EMAIL}
        </p>
      </div>
    </footer>
  );
}

export default function SelmaLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
