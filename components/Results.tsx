import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    photo: "/images/testimonial-aryan-photo.jpg",
    name: "Aryan Bhatia",
    credential: "Software Engineer, NYC · @itsaryanbhatia",
    quote:
      "I outsourced my fitness completely. 3 months later, I hit the best shape of my life.",
    expanded:
      "Aryan had trained on and off for 2-3 years — he had the knowledge, but not the mental space to execute it consistently. What he was missing wasn't information, it was a system. Structured training and real accountability took him to the best shape of his life in three months.",
    instagramUrl: "https://www.instagram.com/p/DWJkGqAAlxy/?img_index=1",
  },
  {
    photo: "/images/testimonial-moksh-photo.jpg",
    name: "Moksh Vasant",
    credential: "Founder & CEO, @meteoric.boost · 141K followers",
    quote:
      "I've had my best business month ever. It was purely because of how fit I was.",
    expanded:
      "Moksh is 22 and runs a personal branding company. He'd been into fitness since he was 17, but as he scaled the business, training dropped to once a week, his Whoop recovery sat at 48%, and he was sleeping 4-5 hours a night. Inside the protocol, his Whoop recovery climbed from 48% to 76% — and November became his best business month ever. The biggest unlock wasn't physical.",
    instagramUrl: "https://www.instagram.com/p/DWRDJcNAnB2/?img_index=1",
  },
  {
    photo: "/images/testimonial-tarun-photo.jpg",
    name: "Tarun Chaudhary",
    credential: "Entrepreneur · Masters student, King's College London",
    quote: "I started at 97kgs. Down to 87. And this is just the beginning.",
    expanded:
      "Tarun was running a business in India while completing a demanding Masters in London — no accountability, and fitness felt like one more task on the list. He went from 97kg to 87kg, now hits 10,000 steps daily, and has completely restructured how he eats. In his words: \"I go for runs for mental peace now.\"",
    instagramUrl: "https://www.instagram.com/p/DXMOFDyDS6b/?img_index=1",
  },
  {
    name: "Gideon Abhishek",
    credential: "Masters student, Sydney",
    quote:
      "My strength went up exponentially whilst losing a ton of fat and I became the runner I never thought I'd be.",
    instagramUrl: "https://www.instagram.com/p/DWQ3iUejf6x/?img_index=1",
  },
  {
    name: "Dhruv Singh",
    credential: "19-year-old Private Pilot, United States",
    quote:
      "I overcomplicated fitness for a year. One month with a real system changed everything.",
    instagramUrl: "https://www.instagram.com/p/DWOKs57Df6u/?img_index=1",
  },
];

export default function Results() {
  return (
    <section id="results" className="container-px py-24 md:py-32 border-t border-foreground/10">
      <FadeUp>
        <SectionHeading eyebrow="Proof" title="Results" />
      </FadeUp>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <FadeUp key={t.name} delay={(i % 3) * 0.1}>
            <TestimonialCard testimonial={t} />
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.2}>
        <p className="mt-12 text-center text-sm text-foreground/50 uppercase tracking-[0.2em]">
          20+ founders coached — these are a few of their stories
        </p>
      </FadeUp>
    </section>
  );
}
