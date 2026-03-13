import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getBaseUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Festivities — AI Language Learning for Everyone",
  description:
    "We believe everyone deserves a world-class language tutor. AI makes that possible for the first time in history. Learn about Festivities, our mission, and our team.",
  alternates: {
    canonical: `${getBaseUrl()}/about`,
  },
};

const teamMembers = [
  {
    name: "Andrew",
    role: "Founder & CEO",
    bio: "Obsessed with language learning after spending 3 years failing to learn Spanish the traditional way, then becoming conversational in 3 months after a trip forced him to just speak.",
    initials: "A",
    color: "#C4521A",
  },
  {
    name: "The Team",
    role: "Engineers, Designers, Language Experts",
    bio: "A small, focused team that believes in doing one thing exceptionally well: making language learning through conversation accessible to everyone on earth.",
    initials: "T",
    color: "#2D6A6A",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[var(--color-brand-bg)] to-[var(--color-brand-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-5xl lg:text-6xl font-bold text-[var(--color-brand-text)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We believe everyone deserves a world-class language tutor.
          </h1>
          <p className="text-xl text-[var(--color-brand-text-secondary)] max-w-2xl mx-auto">
            AI makes that possible for the first time in history. That&apos;s why we built Festivities.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 bg-[var(--color-brand-bg)]" aria-labelledby="story-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="story-heading"
            className="text-3xl font-bold text-[var(--color-brand-text)] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The story
          </h2>
          <div className="space-y-5 text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
            <p>
              I studied Spanish for two years. Flashcards. Grammar drills. Duolingo streaks.
              I could conjugate verbs perfectly and still couldn&apos;t order a coffee in Madrid without panicking.
            </p>
            <p>
              Then I got stranded at a hostel in Seville with no English speakers around.
              For three days, I had to speak Spanish or go hungry. By day three, I was conversational.
            </p>
            <p>
              That experience changed how I think about language learning. The apps weren&apos;t failing me because they were bad apps.
              They were failing me because they were optimizing for the wrong thing: correct answers, not actual communication.
            </p>
            <p>
              Festivities is what I wish had existed. An AI that talks to you — really talks, adapts, challenges, and encourages you — without the terror of saying something wrong to a real person.
              All the benefits of immersion. None of the social anxiety.
            </p>
            <p
              className="text-[var(--color-brand-text)] font-semibold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              — Andrew, Founder
            </p>
          </div>
        </div>
      </section>

      {/* The Science */}
      <section className="py-20 bg-[var(--color-brand-surface)]" aria-labelledby="science-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="science-heading"
            className="text-3xl font-bold text-[var(--color-brand-text)] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The science behind it
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensible Input",
                content:
                  "Stephen Krashen's input hypothesis: we acquire language most effectively when we understand messages slightly beyond our current level (i+1). Festivities always operates in this zone.",
              },
              {
                title: "Output Hypothesis",
                content:
                  "Merrill Swain's research shows that producing language — speaking and writing — is essential for developing fluency, not just comprehending it. You have to talk to learn to talk.",
              },
              {
                title: "Spaced Repetition",
                content:
                  "Festivities weaves vocabulary and structures from previous sessions back into new conversations at optimal intervals — making repetition invisible and natural rather than deliberate and boring.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[var(--color-brand-bg)] rounded-[var(--radius-xl)] p-6">
                <h3
                  className="text-lg font-bold text-[var(--color-brand-text)] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[var(--color-brand-text-secondary)] text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[var(--color-brand-text-secondary)]">
            Want to go deeper?{" "}
            <Link
              href="/blog/science-of-language-learning"
              className="text-[var(--color-brand-primary)] font-semibold hover:underline"
            >
              Read our post on the science of language learning →
            </Link>
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[var(--color-brand-bg)]" aria-labelledby="team-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="team-heading"
            className="text-3xl font-bold text-[var(--color-brand-text)] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex gap-4 bg-[var(--color-brand-surface)] rounded-[var(--radius-xl)] p-6"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
                  style={{ background: member.color }}
                  aria-hidden="true"
                >
                  {member.initials}
                </div>
                <div>
                  <h3
                    className="font-bold text-[var(--color-brand-text)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm text-[var(--color-brand-primary)] font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-[var(--color-brand-text-secondary)] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press kit */}
      <section id="press" className="py-20 bg-[var(--color-brand-surface)]" aria-labelledby="press-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="press-heading"
            className="text-3xl font-bold text-[var(--color-brand-text)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Press
          </h2>
          <p className="text-[var(--color-brand-text-secondary)] mb-6">
            For press inquiries, logo assets, screenshots, and founder photos, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline">
              <a href="mailto:press@festivities.io">press@festivities.io</a>
            </Button>
            <Button asChild variant="ghost">
              <a
                href="/press-kit.zip"
                download
              >
                Download Press Kit
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
