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

export default function Drive45CaseStudy() {
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
                <span className="cs-title-line">Drive45 Mobility</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="case-study-body-text" style={{ marginTop: "2rem" }}>
                The website for Nigeria&apos;s first vehicle subscription platform, designed to explain rent-to-own in plain terms and route individuals, enterprise employees and businesses to the right way to sign up.
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
                    <span className="meta-value">Fintech &amp; Mobility</span>
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
                    <span className="meta-value">Salaried Individuals, SMEs &amp; MNEs</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Scope</span>
                    <span className="meta-value">Structure, UX &amp; UI</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} style={{ marginTop: "1.5rem" }}>
                <a
                  href="https://drive45mobility.com/"
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
                src="/projects/drive45/hero.jpg"
                alt="Drive45 website shown on a laptop"
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
              <h2 className="cs-section-title">A new way to own a car needs explaining before it can be sold.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Drive45 was founded in June 2021 to make vehicle ownership easier for enterprises, and has since grown to serve individuals too, from salaried workers the banks won&apos;t lend to, to SMEs and multinationals. Instead of a loan or an outright purchase, customers pay a monthly subscription over an agreed tenure and own the vehicle at the end.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                Vehicle subscription is unfamiliar to most visitors, and the site has to speak to very different people at once. I designed the structure and interface so the model reads as simple and low-risk, and so each type of customer can find their own way in.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-card-pair">
                <div className="cs-card">
                  <span className="cs-card-tag">Business problem</span>
                  <p>A new financing model needed a website that explains how it works, builds trust in a young company, and turns interest from three very different customer types into sign-ups.</p>
                </div>
                <div className="cs-card">
                  <span className="cs-card-tag">User problem</span>
                  <p>A visitor wants a vehicle without a huge upfront payment, but doesn&apos;t yet know what &quot;subscription&quot; means, what it covers, or whether it applies to them.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {breakout("/projects/drive45/problem.jpg", "Drive45 About page and company story")}

          <motion.div {...sectionProps} className="cs-section-grid cs-section-grid--centered">
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-statement">
                <span className="cs-card-tag">Problem statement</span>
                <blockquote className="cs-blockquote">
                  &quot;How might we make vehicle subscription feel as easy to understand as buying a car, and send each type of customer to the right next step?&quot;
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
              <h2 className="cs-section-title">Explain the model first, then let people choose their path.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                The homepage reads as one argument from top to bottom: what Drive45 offers, who already trusts it, how the model works, what you can drive, and how to start. An FAQ at the end answers the questions people still have.
              </motion.p>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">What shaped the structure</motion.h3>
              <motion.div variants={fadeUp} className="cs-insights">
                <div className="cs-insight">
                  <span className="cs-insight-num">1</span>
                  <p>The hero leads with the outcome, becoming a vehicle owner, and the word &quot;subscription&quot; comes second, followed straight away by the logos of companies that already use Drive45.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">2</span>
                  <p>Product names like Flex45 and Ride45 live on their own Services page, so the homepage can explain the idea without asking visitors to compare plans first.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">3</span>
                  <p>Individuals, enterprise employees and businesses sign up in different ways, so every page ends with three user-type cards, each with its own action.</p>
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
              <h2 className="cs-section-title">Three rules for making subscription feel simple</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-principles">
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 01</span>
                  <div className="cs-principle-content">
                    <h4>Turn the model into three plain promises</h4>
                    <p>&quot;An easier way to own a vehicle&quot; breaks the offer into three cards (Rent to Own, Flexible and Bundled Services) covering the monthly payments, the option to opt out after 15 months, and the insurance and maintenance included.</p>
                    {principleImg("/projects/drive45/principle-1.jpg", "Principle 01: Turn the model into three plain promises")}
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 02</span>
                  <div className="cs-principle-content">
                    <h4>Give every customer their own door</h4>
                    <p>Individual users, individual enterprise users and enterprises each get a card that describes them in their own terms and offers the right action: Get Started for new customers, Login for employees whose organisation is already on Drive45.</p>
                    {principleImg("/projects/drive45/principle-2.jpg", "Principle 02: Give every customer their own door")}
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 03</span>
                  <div className="cs-principle-content">
                    <h4>Show the cars, not just the contract</h4>
                    <p>A dark &quot;Rent it to Own it&quot; band shows the vehicle categories (sedans, SUVs, and pickups &amp; light trucks) with real photography, so a financing product feels like getting a car.</p>
                    {principleImg("/projects/drive45/principle-3.jpg", "Principle 03: Show the cars, not just the contract")}
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
              <h2 className="cs-section-title">Four pages, three ways in</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                The site is organised into Home, About Us, Services and Contact Us. Get Started, Login and Download App sit in the header of every page, and the three user-type cards repeat at the end of each page, so a visitor who is ready never has to go looking for the next step.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                The visual language pairs a deep navy with a single warm orange accent, a bold serif for headlines, and smiling people beside cars, so a financial product feels confident and approachable rather than corporate.
              </motion.p>
            </motion.div>
          </motion.div>

          {breakout("/projects/drive45/sitemap.jpg", "Drive45 Site Map")}
        </section>

        {/* ── 06  OUTCOME & IMPACT ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">06  Outcome &amp; impact</span>
              <h2 className="cs-section-title">A live site that explains, then routes</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer} style={{ paddingTop: "39px" }}>
              <motion.p variants={fadeUp} className="cs-section-body">
                The site is live and presents Drive45&apos;s subscription model, its three products and its three customer paths across four pages, with sign-up and app download one click away from anywhere.
              </motion.p>
            </motion.div>
          </motion.div>

          {breakout("/projects/drive45/outcome.jpg", "Drive45 services page")}

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <motion.div variants={fadeUp} className="cs-outcome-grid cs-outcome-grid--full">
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">3</span>
                <span className="cs-outcome-delta">Individual, individual enterprise and enterprise users</span>
                <span className="cs-outcome-label">Customer Paths</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">3</span>
                <span className="cs-outcome-delta">Flex45, Flex45 &amp; Green 45, and Ride45</span>
                <span className="cs-outcome-label">Products</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">&lt;45 min</span>
                <span className="cs-outcome-delta">The promised time to get started with a subscription</span>
                <span className="cs-outcome-label">Sign-up Promise</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value cs-outcome-value--text">Live</span>
                <span className="cs-outcome-delta">Published at drive45mobility.com</span>
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
              <h2 className="cs-section-title">Designing for an unfamiliar idea</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-reflection-grid">
                <div className="cs-reflection-card">
                  <h4>What worked well</h4>
                  <p>Explaining the model as three short promises before naming any product, and giving each customer type its own card and action, kept a new financing idea easy to follow.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>What I&apos;d explore next</h4>
                  <p>Bringing the Services products closer to the user-type cards, so each visitor can see which plan fits them at the moment they choose how to sign up.</p>
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
            <Link href="/projects/whitestone" className="discovery-card">
              <div className="discovery-image">
                <Image src="/projects/whitestone/mockup-card.jpg" alt="Whitestone" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Whitestone</h4>
                <span>Healthcare &amp; Special Needs</span>
              </div>
            </Link>

            <Link href="/projects/waystream" className="discovery-card">
              <div className="discovery-image">
                <Image src="/projects/waystream/mockup-featured.jpg" alt="Waystream" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Waystream</h4>
                <span>Audio &amp; Creator Economy</span>
              </div>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
