import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Peakform",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted mb-12">Last Updated: 1 November 2026</p>

        <div className="space-y-10 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              Operator &amp; Data Controller/Fiduciary
            </h2>
            <p>
              Peakform is operated by Dhanil Shah, a sole proprietor trading as
              Peak Form, based in Mumbai, India. Contact:{" "}
              <a
                href="mailto:peakform.dhanil@gmail.com"
                className="text-accent-bright hover:underline"
              >
                peakform.dhanil@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              1. Data We Collect
            </h2>
            <p>
              We collect only what you enter into the App, what your coach
              provisions, or what you authorize via connected integrations. We
              never buy personal data from third parties.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-foreground/80">
              <li>
                <strong>Account Data:</strong> Email address, hashed password,
                unique database user ID.
              </li>
              <li>
                <strong>Profile &amp; Contact Data:</strong> Full name, optional
                nickname, phone number, height, stated age, gender, and fitness
                targets.
              </li>
              <li>
                <strong>Health &amp; Fitness Data:</strong> Bodyweight, body
                measurements, workout logs, training programmes, nutritional
                intake entries, active supplements, and voluntary
                injury/limitation disclosures.
              </li>
              <li>
                <strong>WHOOP Wearable Metrics:</strong> Daily Recovery Score,
                Day Strain, Sleep Performance &amp; Hours, RHR, and HRV synced
                via official WHOOP APIs.
              </li>
              <li>
                <strong>Zero Tracking SDKs:</strong> The App does not read Apple
                Health, HealthKit, or device GPS location, and never accesses
                contacts, photos, or advertising IDs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              2. How We Use Your Data
            </h2>
            <p>
              We use your data solely to deliver the service, calculate targets,
              show progress history, and display analytics to your assigned
              coach. We do not use your data for advertising, marketing, or
              commercial profiling.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              3. Who Can See Your Data
            </h2>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>You (full access)</li>
              <li>Your assigned coach</li>
              <li>Google LLC (Cloud Firestore &amp; Firebase Auth)</li>
              <li>Google LLC (Gemini API — pseudonymized only)</li>
              <li>Vercel Inc. (serverless API gateway)</li>
              <li>WHOOP Inc. (wearable metrics when authorized)</li>
            </ul>
            <p className="mt-3">
              Nobody else — zero third-party monetization, zero data brokers,
              zero advertising networks.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              4. AI Processing
            </h2>
            <p>
              When AI features are used, only pseudonymized food descriptions or
              athletic parameters are transmitted to Google&rsquo;s Gemini API.
              No email addresses, phone numbers, names, or credentials are ever
              sent to AI models. Data is never used to train publicly available
              foundation models. AI features require affirmative consent and can
              be disabled in Settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              5. Legal Basis for Processing (GDPR)
            </h2>
            <p>
              Health and fitness data is processed under explicit consent (GDPR
              Article 9(2)(a)). Account administration is processed for
              performance of contract (Article 6(1)(b)).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              6. Storage &amp; International Transfers
            </h2>
            <p>
              Data is hosted on Google Cloud infrastructure. For EEA/UK users,
              cross-border transfers are safeguarded by Standard Contractual
              Clauses (SCCs) and UK Addendum.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              7. Data Retention
            </h2>
            <p>
              Records maintained while account is active. System processing logs
              retained for 1 year as required under Indian law, then permanently
              erased.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              8. Account &amp; Data Deletion
            </h2>
            <p>
              You can permanently delete your account in the App&rsquo;s
              settings. All data is immediately purged from the live database.
              Encrypted backups overwritten within 30 days. Email requests
              fulfilled within 30 days at{" "}
              <a
                href="mailto:peakform.dhanil@gmail.com"
                className="text-accent-bright hover:underline"
              >
                peakform.dhanil@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              9. Your Rights &amp; Grievance Redressal
            </h2>
            <p>
              You have the right to access, export, correct, delete, or restrict
              your data. Contact Dhanil Shah at{" "}
              <a
                href="mailto:peakform.dhanil@gmail.com"
                className="text-accent-bright hover:underline"
              >
                peakform.dhanil@gmail.com
              </a>
              . We respond within 30 days and resolve within 90 days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              10. Security
            </h2>
            <p>
              All data is encrypted in transit and at rest. Passwords are never
              stored in readable form.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              11. Age Eligibility (18+)
            </h2>
            <p>
              Peakform is strictly for adults 18 and over. Any accounts
              identified as belonging to minors are immediately purged.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              12. Policy Changes
            </h2>
            <p>
              Material updates will be announced directly within the App before
              taking effect, with re-consent requested where mandated by law.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
