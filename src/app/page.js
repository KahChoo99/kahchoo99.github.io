"use client";

import { motion } from "framer-motion";
import DATA from "@/data/cvData";
import Header from "@/components/Header";
import AwardsGallery from "@/components/AwardGallery";
import { Venus } from "lucide-react";
import {
  Section,
  Card,
  Badge,
  Chip,
  Button,
  Footer,
} from "@/components/Primitives";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <section id="top" className="pt-6 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="nature-hero p-6 sm:p-10 shadow-sm"
          >
            <p className="text-sm uppercase tracking-widest text-leaf-700 dark:text-neutral-400">
              {DATA.role}
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight flex items-center gap-2">
              {DATA.name}
              <Venus
                className="w-6 h-6 text-leaf-600 dark:text-leaf-400"
                aria-label="Female engineer"
              />
            </h1>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              {DATA.location}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#projects">View Projects</Button>
              <Button href="#experience" variant="ghost">
                Experience
              </Button>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <Section id="about" title="About">
          <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
            {DATA.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {DATA.email && (
              <a className="underline" href={`mailto:${DATA.email}`}>
                {DATA.email}
              </a>
            )}
            {DATA.phone && (
              <>
                <span>•</span>
                <span>{DATA.phone}</span>
              </>
            )}
            {DATA.github && (
              <>
                <span>•</span>
                <a className="underline" href={DATA.github}>
                  GitHub
                </a>
              </>
            )}
            {DATA.linkedin && (
              <>
                <span>•</span>
                <a className="underline" href={DATA.linkedin}>
                  LinkedIn
                </a>
              </>
            )}
            {DATA.website && (
              <>
                <span>•</span>
                <a className="underline" href={DATA.website}>
                  Website
                </a>
              </>
            )}
          </div>

          <div className="mt-6 flex gap-3">
            {DATA.resumePdf && (
              <Button href={DATA.resumePdf} target="_blank" rel="noreferrer">
                Download Resume (PDF)
              </Button>
            )}
            {DATA.email && (
              <Button href={`mailto:${DATA.email}`}>Contact Me</Button>
            )}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {DATA.skills.map((s) => (
              <li key={s}>
                <Badge>{s}</Badge>
              </li>
            ))}
          </ul>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="relative pl-8 md:pl-10">
            {/* timeline line */}
            <div className="absolute left-[12px] top-0 h-full w-px bg-gradient-to-b from-transparent via-leaf-300 to-transparent dark:via-neutral-700" />

            <div className="space-y-8">
              {DATA.experience.map((e, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative"
                >
                  {/* perfectly aligned dot on the line */}
                  {/* <span
                    className="
              absolute left-[8px] top-[10px]
              block h-2.5 w-2.5 rounded-full bg-leaf-500
              ring-2 ring-white dark:ring-neutral-950
            "
                  /> */}

                  {/* keep text tight to the line */}
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold leading-snug">
                      {e.title} · {e.company}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {e.start} — {e.end}
                      {e.location ? ` · ${e.location}` : ""}
                    </p>

                    <ul className="mt-3 list-disc list-outside pl-5 space-y-2 marker:text-leaf-600 dark:marker:text-leaf-400">
                      {e.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="leading-relaxed text-neutral-700 dark:text-neutral-300"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="grid gap-6 sm:grid-cols-2">
            {DATA.projects.map((p) => (
              <Card key={p.name} href={p.link}>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                  {p.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Writing / Publications */}
        <Section id="writing" title="Writing">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Medium Article 1 */}
            <a
              href="https://medium.com/@kahchoo1999/etl-for-best-selling-wrist-watch-in-shopee-c9c49d34a7b0"
              target="_blank"
              rel="noreferrer"
              className="nature-card p-5 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-leaf-700 dark:text-leaf-300">
                  ETL for Best-Selling Wrist Watch in Shopee
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  A hands-on walkthrough of building an ETL pipeline to extract,
                  transform, and analyze Shopee product data for discovering
                  sales insights.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-leaf-600 dark:text-leaf-400">
                <span>🧠 Data Engineering</span>
                <span>Read on Medium →</span>
              </div>
            </a>

            {/* Medium Article 2 */}
            <a
              href="https://medium.com/@kahchoo1999/asia-pacific-seeds-for-the-future-2022-experience-sharing-82d74d321f00"
              target="_blank"
              rel="noreferrer"
              className="nature-card p-5 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-leaf-700 dark:text-leaf-300">
                  Asia Pacific Seeds for the Future 2022: Experience Sharing
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Reflections on representing Malaysia in the Seeds for the
                  Future program — exploring ICT innovation, culture, and
                  collaboration across ASEAN.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-leaf-600 dark:text-leaf-400">
                <span>🌏 Experience & Culture</span>
                <span>Read on Medium →</span>
              </div>
            </a>
          </div>
        </Section>

        {/* Leadership & Awards */}
        <Section id="leadership" title="Leadership & Awards">
          <div className="grid gap-10">
            {/* Leadership timeline (same as before) */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Leadership</h3>
              <div className="relative pl-8 md:pl-10">
                <div className="absolute left-[12px] top-0 h-full w-px bg-gradient-to-b from-transparent via-leaf-300 to-transparent dark:via-neutral-700" />
                <div className="space-y-8">
                  {DATA.leadership.map((l, idx) => (
                    <article key={idx} className="relative">
                      <div className="ml-5">
                        <h4 className="font-medium">
                          {l.role} · {l.org}
                        </h4>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {l.location}
                        </p>
                        <ul className="mt-2 list-disc list-outside pl-5 space-y-1 marker:text-leaf-600 dark:marker:text-leaf-400">
                          {l.bullets.map((b, i) => (
                            <li
                              key={i}
                              className="text-neutral-700 dark:text-neutral-300"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Awards with clickable photos */}
            <AwardsGallery awards={DATA.awards} />
          </div>
        </Section>

        {/* Education & Certifications */}
        <Section id="education" title="Education & Certifications">
          <div className="space-y-4">
            {DATA.education?.map((ed) => (
              <div
                key={ed.school}
                className="flex items-baseline justify-between border-b border-leaf-100 dark:border-neutral-800 pb-3"
              >
                <div>
                  <p className="font-medium">{ed.school}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {ed.degree}
                  </p>
                </div>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {ed.period}
                </span>
              </div>
            ))}
            {DATA.certifications?.length > 0 && (
              <div>
                <p className="font-medium">Certificates</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {DATA.certifications.map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <p className="text-neutral-700 dark:text-neutral-300">
            Open to roles and collaborations. Reach me via email or LinkedIn.
          </p>
          <div className="mt-4 flex gap-3">
            {DATA.email && <Button href={`mailto:${DATA.email}`}>Email</Button>}
            {DATA.linkedin && (
              <Button href={DATA.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </Button>
            )}
            {DATA.github && (
              <Button href={DATA.github} target="_blank" rel="noreferrer">
                GitHub
              </Button>
            )}
          </div>
        </Section>
      </div>

      <Footer />
    </main>
  );
}
