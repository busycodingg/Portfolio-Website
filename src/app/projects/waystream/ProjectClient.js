"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "../project.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  },
};

export default function WaystreamCaseStudy() {
  const principleImg = (src, alt) => (
    <div className="cs-principle-mockup">
      <motion.img
        src={src}
        alt={alt}
        style={{ borderRadius: "12px" }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );

  const breakout = (src, alt) => (
    <motion.div
      className="cs-full-breakout"
      variants={fadeUp}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="cs-mockup-full no-bg">
        <motion.img
          src={src}
          alt={alt}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );

  const sectionProps = {
    className: "cs-section-grid",
    variants: staggerContainer,
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, margin: "-100px" },
  };

  return (
    <main className="case-study-container">
      <div className="layout-wrapper">
        <Navigation />

        {/* ── 01  HOOK ── */}
        <section className="case-study-hero">
          <motion.div className="cs-hero-grid" variants={staggerContainer} initial="hidden" animate="show">
            <motion.div className="cs-hero-left" variants={staggerContainer}>
              <motion.h1 className="case-study-title" variants={fadeUp}>
                <span className="cs-title-line">Waystream</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="case-study-body-text" style={{ marginTop: "2rem" }}>
                The website for an audio live-streaming platform — designed to speak to broadcasters and listeners separately, and to get both of them to start for free.
              </motion.p>

              <motion.div variants={fadeUp} className="case-study-meta">
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Role</span>
                    <span className="meta-value">UX/UI Designer</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Platform</span>
                    <span className="meta-value">Website</span>
                  </div>
                </div>
                <hr className="meta-divider" />
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Domain</span>
                    <span className="meta-value">Audio &amp; Creator Economy</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Status</span>
                    <span className="meta-value">Live</span>
                  </div>
                </div>
                <hr className="meta-divider" />
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Audience</span>
                    <span className="meta-value">Broadcasters &amp; Listeners</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Scope</span>
                    <span className="meta-value">Structure, UX &amp; UI</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} style={{ marginTop: "1.5rem" }}>
                <a
                  href="https://waystream.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta-value"
                  style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
                >
                  View the live site ↗
                </a>
              </motion.div>
            </motion.div>

            <motion.div className="cs-hero-right" variants={staggerContainer}>
              <motion.img
                src="/projects/waystream/hero.jpg"
                alt="Waystream website shown on a laptop"
                className="case-study-hero-image"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* ── 02  PROBLEM FRAMING ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">02  Problem framing</span>
              <h2 className="cs-section-title">One product, two very different visitors.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Waystream lets anyone broadcast live audio and podcasts from a phone or PC, and lets listeners tune in, pause, rewind and chat in real time. Its broadcasters range from musicians and radio stations to churches streaming their services.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                The website has to sell the same platform to two people who want different things: a broadcaster weighing up tools, quality and price, and a listener who just wants to press play. I designed the structure and interface so each one finds their reason to start without wading through the other&apos;s.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-card-pair">
                <div className="cs-card">
                  <span className="cs-card-tag">Business problem</span>
                  <p>An audio streaming platform needed a website that wins broadcasters on features and price, builds trust through the communities already using it, and grows the listening audience at the same time.</p>
                </div>
                <div className="cs-card">
                  <span className="cs-card-tag">User problem</span>
                  <p>A broadcaster needs to know they can go live easily, sound good and afford it in their own currency; a listener needs to see why this is worth downloading.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {breakout("/projects/waystream/problem.jpg", "Waystream — Stream, Listen and Share")}

          <motion.div {...sectionProps} className="cs-section-grid cs-section-grid--centered">
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-statement">
                <span className="cs-card-tag">Problem statement</span>
                <blockquote className="cs-blockquote">
                  &quot;How might we show broadcasters and listeners what Waystream does for them, on one site, without making either feel it&apos;s meant for someone else?&quot;
                </blockquote>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 03  STRUCTURING THE CONTENT ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">03  Structuring the content</span>
              <h2 className="cs-section-title">A shared front door, then a page for each audience.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                The homepage introduces Waystream to everyone in three verbs — Stream, Listen, Share — and then each audience gets its own page with its own story, before Pricing and Download close the loop.
              </motion.p>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">What shaped the structure</motion.h3>
              <motion.div variants={fadeUp} className="cs-insights">
                <div className="cs-insight">
                  <span className="cs-insight-num">1</span>
                  <p>Broadcaster and Listener sit first in the main menu, so visitors choose their side before they meet any detail.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">2</span>
                  <p>The Broadcasters page is organised by use case — livestreams, podcasts, events, church services and radio shows — so each type of broadcaster can recognise themselves.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">3</span>
                  <p>Trust comes early: broadcaster logos appear straight after the hero, and testimonials from a musician and church media teams sit between the feature sections.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 04  DESIGN PRINCIPLES ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">04  Design principles</span>
              <h2 className="cs-section-title">Three rules for a site that sounds like its product</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-principles">
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 01</span>
                  <div className="cs-principle-content">
                    <h4>Give each audience its own voice</h4>
                    <p>The Broadcasters page opens with &quot;Express Your Voice&quot; and Start for free; the Listeners page opens with &quot;Stream for free&quot; and Start listening — the same layout, with a different promise and a different action.</p>
                    {principleImg("/projects/waystream/principle-1.jpg", "Principle 01: Give each audience its own voice")}
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 02</span>
                  <div className="cs-principle-content">
                    <h4>Show the studio, not just the claim</h4>
                    <p>Instead of describing the broadcasting tools, &quot;Broadcasting Made Easy&quot; shows the live studio itself — mic and playlist levels, the live timer, the Go Live button and the audience chat — on a laptop.</p>
                    {principleImg("/projects/waystream/principle-2.jpg", "Principle 02: Show the studio, not just the claim")}
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 03</span>
                  <div className="cs-principle-content">
                    <h4>Make the price feel local and low-risk</h4>
                    <p>Pricing leads with &quot;Broadcast for Free&quot;, shows every plan in local currency, and lets broadcasters switch between daily, monthly, quarterly and yearly billing, with the saving on yearly called out.</p>
                    {principleImg("/projects/waystream/principle-3.jpg", "Principle 03: Make the price feel local and low-risk")}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 05  DESIGN & ITERATION ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">05  Design &amp; iteration</span>
              <h2 className="cs-section-title">Five pages, two ways to start</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                The site is organised into Home, Broadcasters, Listeners, Pricing and Download, with a Blog in the menu. &quot;Start for free&quot; and &quot;Listen now&quot; sit in the header of every page, next to a language switcher for five languages.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                The look borrows from the product: a dark, studio-like canvas, one bright orange reserved for actions, and full-bleed photography and video of real broadcasters behind their mics.
              </motion.p>
            </motion.div>
          </motion.div>

          {breakout("/projects/waystream/sitemap.jpg", "Waystream Site Map")}
        </section>

        {/* ── 06  OUTCOME & IMPACT ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">06  Outcome &amp; impact</span>
              <h2 className="cs-section-title">A live site for every voice</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer} style={{ paddingTop: "39px" }}>
              <motion.p variants={fadeUp} className="cs-section-body">
                The site is live and presents Waystream to broadcasters and listeners across five pages, with a free way to start and the apps one click away on every page.
              </motion.p>
            </motion.div>
          </motion.div>

          {breakout("/projects/waystream/outcome.jpg", "Waystream — Why Choose Us")}

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <motion.div variants={fadeUp} className="cs-outcome-grid cs-outcome-grid--full">
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">2</span>
                <span className="cs-outcome-delta">Dedicated pages for broadcasters and listeners</span>
                <span className="cs-outcome-label">Audiences</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">5</span>
                <span className="cs-outcome-delta">Broadcaster use cases, from podcasts to church services</span>
                <span className="cs-outcome-label">Use Cases</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">5</span>
                <span className="cs-outcome-delta">Languages available from the header</span>
                <span className="cs-outcome-label">Languages</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value cs-outcome-value--text">Live</span>
                <span className="cs-outcome-delta">Published at waystream.io</span>
                <span className="cs-outcome-label">Status</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 07  REFLECTION ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">07  Reflection</span>
              <h2 className="cs-section-title">Designing for both sides of the mic</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-reflection-grid">
                <div className="cs-reflection-card">
                  <h4>What worked well</h4>
                  <p>Splitting the story into Broadcaster and Listener pages, while sharing one layout and one action colour, let the site speak to two audiences without feeling like two different products.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>What I&apos;d explore next</h4>
                  <p>Bringing more of the listener experience onto the homepage, so people who arrive to listen can find something to play before they are asked to download the app.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 08  DISCOVERY GRID ── */}
        <section className="cs-discovery">
          <div className="discovery-header">
            <h3>More Case Studies</h3>
          </div>

          <div className="discovery-grid DiscoveryGrid-2col">
            <Link href="/projects/drive45" className="discovery-card">
              <div className="discovery-image">
                <Image src="/projects/drive45/mockup-card.jpg" alt="Drive45 Mobility" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Drive45 Mobility</h4>
                <span>Fintech &amp; Mobility</span>
              </div>
            </Link>

            <Link href="/projects/whitestone" className="discovery-card">
              <div className="discovery-image">
                <Image src="/projects/whitestone/mockup-card.jpg" alt="Whitestone" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Whitestone</h4>
                <span>Healthcare &amp; Special Needs</span>
              </div>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
