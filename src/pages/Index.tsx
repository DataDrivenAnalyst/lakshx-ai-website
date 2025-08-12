import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { BarChart3, Bot, Workflow } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="container pt-16 md:pt-24 pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="font-display text-4xl md:text-5xl leading-tight animate-enter">
                AI automations, agents and advanced analytics for SMBs
              </h1>
              <p className="text-lg text-muted-foreground max-w-prose animate-fade-in">
                We design and build bespoke AI systems that streamline operations, unlock insights, and deliver measurable outcomes — fast.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" className="hover-scale" asChild>
                  <a href="#contact">Book a discovery chat</a>
                </Button>
                <Button variant="accent" className="hover-scale" asChild>
                  <a href="#solutions">See capabilities</a>
                </Button>
              </div>
              <div className="text-xs text-muted-foreground">Trusted approaches inspired by teams like Moative & Khatabook — crafted uniquely for your context.</div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-20 blur-3xl" aria-hidden />
              <img
                src="/lovable-uploads/47961337-1a1d-405f-ad2e-e7420ade9417.png"
                alt="LakshX brand mark"
                loading="lazy"
                className="mx-auto h-44 w-44 relative z-10 drop-shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="container py-16 md:py-20">
          <header className="mb-10">
            <h2 className="font-display text-3xl md:text-4xl">What we build</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">Outcome-first solutions tailored to your workflows and tools. Not one-size-fits-all software.</p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Workflow className="text-primary" /> Automations</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                From lead routing and onboarding to invoice reconciliation — resilient, observable flows using best-in-class tools.
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Bot className="text-primary" /> AI Agents</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Task‑oriented agents for support, sales ops, knowledge retrieval, and internal copilots with guardrails.
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart3 className="text-primary" /> Analytics</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Unified data models, dashboards, and alerting so teams see what matters and act faster.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="container py-16 md:py-20">
          <header className="mb-10">
            <h2 className="font-display text-3xl md:text-4xl">How we work</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">A lean, collaborative cadence — ship value in weeks, not quarters.</p>
          </header>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { title: 'Discover', desc: 'Map goals, constraints and systems. Define KPIs.' },
              { title: 'Design', desc: 'Solution blueprint, data flows, and guardrails.' },
              { title: 'Build', desc: 'Implement, integrate, and observe performance.' },
              { title: 'Iterate', desc: 'Refine with real usage; expand where ROI is clear.' },
            ].map((step, i) => (
              <Card key={step.title} className="hover-scale">
                <CardHeader>
                  <div className="w-9 h-9 rounded-full bg-secondary text-secondary-foreground grid place-items-center mb-2 font-semibold">{i + 1}</div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{step.desc}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="container py-16 md:py-20">
          <header className="mb-6">
            <h2 className="font-display text-3xl md:text-4xl">Built for SMB realities</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">We’ve worked across services, retail, tech-enabled ops and more. We integrate with the tools you already use.</p>
          </header>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-sm">
            {['Professional Services','D2C & Retail','Healthcare','EdTech','FinTech','Logistics'].map((s) => (
              <div key={s} className="rounded-md border bg-card px-3 py-2 text-center text-foreground/80">{s}</div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="container py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">Why LakshX</h2>
              <p className="mt-4 text-muted-foreground max-w-prose">
                We’re a hands-on team combining product thinking with data and engineering depth. We avoid shiny-object hype and focus on durable wins: reduced manual work, faster cycles, happier customers.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Principles</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Outcome-first, tool-agnostic.</p>
                <p>• Privacy & compliance by design.</p>
                <p>• Observability and safe rollouts.</p>
                <p>• Collaborative enablement for your team.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container py-16 md:py-24">
          <div className="rounded-2xl p-8 md:p-12 bg-gradient-primary text-primary-foreground shadow-glow">
            <h2 className="font-display text-3xl md:text-4xl">Let’s explore what AI can do for your business</h2>
            <p className="mt-2 text-primary-foreground/90 max-w-prose">Share your goals; we’ll propose a pragmatic path in 48 hours.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="hero" asChild>
                <a href="https://www.linkedin.com/company/laksh-x/" target="_blank" rel="noopener noreferrer">Contact on LinkedIn</a>
              </Button>
              <Button variant="accent" asChild>
                <a href="https://x.com/LakshX_Up" target="_blank" rel="noopener noreferrer">Follow updates on X</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
