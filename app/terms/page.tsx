import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Peakform",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-muted mb-12">Last Updated: 1 November 2026</p>

        <div className="space-y-10 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              Operator &amp; Contact
            </h2>
            <p>
              These Terms of Service govern your use of the Peakform mobile
              application, operated by Dhanil Shah (Peak Form), based in Mumbai,
              India.
            </p>
            <p className="mt-2">
              Contact &amp; Claims:{" "}
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
              1. Relationship to Apple&rsquo;s Licence Terms
            </h2>
            <p>
              These Terms govern the coaching companion service delivered through
              the App. The application software itself is licensed under
              Apple&rsquo;s standard Licensed Application End User License
              Agreement (EULA). Apple is not a party to these Terms and is not
              responsible for the App or its content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              2. Age Eligibility
            </h2>
            <p>
              You must be 18 years of age or older to create an account or use
              Peakform. Accounts belonging to minors under 18 will be terminated
              immediately.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              3. Athletic &amp; Educational Purpose Only
            </h2>
            <p>
              Peakform provides workout tracking, exercise logging, and
              nutritional calculators. All content, suggestions, and calculations
              are provided strictly for educational and athletic purposes. They
              do NOT constitute medical advice, diagnosis, or clinical treatment.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              4. Medical Clearance &amp; Assumption of Risk
            </h2>
            <p>
              Always consult a licensed medical professional before beginning any
              vigorous resistance training regimen or changing your nutritional
              intake. You acknowledge that resistance exercise involves inherent
              risk of physical injury, and you use the App and act on its content
              at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              5. Estimates &amp; Wearable Metrics, Not Clinical Measurements
            </h2>
            <p>
              Calorie, macronutrient, and body-composition numbers are
              mathematical estimates based on user input and standard nutritional
              databases. Where connected, WHOOP recovery and strain metrics are
              imported for athletic conditioning context only. The App displays
              no clinical diagnostic readings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              6. AI Features &amp; Coach Assistance
            </h2>
            <p>
              Peakform provides AI-powered tools that assist coaches in drafting
              personalized workout routines and nutrition protocols, as well as
              parsing natural-language meal logs. These features utilize
              pseudonymized athletic parameters and require your affirmative
              consent before first use, which can be turned on or off at any time
              in Settings. All AI outputs are approximate athletic suggestions
              reviewed by your coach and do not constitute medical advice or
              automated clinical decisions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              7. Account Security
            </h2>
            <p>
              You are responsible for safeguarding your login credentials.
              Accounts are personal and non-transferable. Notify{" "}
              <a
                href="mailto:peakform.dhanil@gmail.com"
                className="text-accent-bright hover:underline"
              >
                peakform.dhanil@gmail.com
              </a>{" "}
              immediately of any suspected unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              8. Permitted Use
            </h2>
            <p>
              Peakform is for your personal athletic use. You agree not to
              reverse engineer, decompile, scrape, bulk-extract data, upload
              malicious code, or attempt unauthorized access to other accounts or
              server infrastructure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              9. Your Content &amp; Intellectual Property
            </h2>
            <p>
              You retain ownership of the logs, notes, and entries you record.
              You grant us a limited license to store, process, and display your
              entries solely to operate the App. Peak Form owns the App,
              software, user interface, and trademarks.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              10. Client Access &amp; Separate Coaching Agreements
            </h2>
            <p>
              Accounts are provisioned by Peak Form for active clients. Any
              1-on-1 coaching services are contracted separately outside the App
              under a dedicated written agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              11. No In-App Purchases
            </h2>
            <p>
              The App is provided at no charge to provisioned clients. No
              purchases, digital unlocks, or paid upgrades are sold in or through
              the App.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              12. Service Availability
            </h2>
            <p>
              We aim to keep the App reliable but do not guarantee uninterrupted
              or bug-free operation. If the service is ever discontinued, users
              will receive reasonable notice and data export capabilities.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              13. Account Termination &amp; Deletion
            </h2>
            <p>
              You may delete your account at any time in settings, immediately
              purging your profile and records. We may suspend access for breach
              of terms or upon conclusion of your coaching engagement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              14. Disclaimer of Warranties
            </h2>
            <p>
              The App is provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, whether express or
              implied, including fitness for a particular purpose or accuracy of
              calculations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              15. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Peak Form will not be
              liable for indirect, incidental, or consequential damages. Our
              total aggregate liability under these Terms is strictly capped at
              INR 10,000.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              16. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Peak Form and its
              operators from any claims, losses, or expenses arising from your
              breach of these Terms or misuse of the App.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              17. Third-Party Terms
            </h2>
            <p>
              You must comply with applicable third-party terms, including your
              mobile carrier data agreement and Apple Media Services Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold mb-2">
              18. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of India. Courts at Mumbai,
              Maharashtra, including the High Court of Judicature at Bombay, have
              exclusive jurisdiction over any disputes.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
