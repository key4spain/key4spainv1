import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Key4Spain",
  description: "Privacy Policy for Key4Spain — how we collect, use and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-navy pt-16">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Legal</span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-normal text-cream leading-snug mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted/60 mb-12">Last updated: May 2025</p>

          <div className="prose prose-invert max-w-none space-y-10 text-muted leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">1. Who we are</h2>
              <p>
                Key4Spain is a buyer-side property advisory service for international clients entering the Spanish real estate market. Key4Spain is part of the Key4SpainGroup ecosystem. For questions about this policy, contact us at{" "}
                <a href="mailto:info@key4spain.com" className="text-gold hover:text-gold-soft transition-colors">
                  info@key4spain.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">2. Information we collect</h2>
              <p>We collect information you provide directly when you:</p>
              <ul className="list-none space-y-2 mt-3 pl-4 border-l border-gold/20">
                <li>Submit an advisory brief or inquiry form</li>
                <li>Contact us by email, WhatsApp or other channels</li>
                <li>Subscribe to our communications</li>
              </ul>
              <p className="mt-4">
                This may include your name, email address, phone number, country of residence, property goals, budget range and other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">3. How we use your information</h2>
              <p>We use the information you provide to:</p>
              <ul className="list-none space-y-2 mt-3 pl-4 border-l border-gold/20">
                <li>Review your advisory brief and prepare a structured response</li>
                <li>Coordinate property search, relocation or investment support on your behalf</li>
                <li>Refer you to licensed professionals where appropriate</li>
                <li>Communicate with you about your inquiry or request</li>
                <li>Improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">4. How we share your information</h2>
              <p>
                We do not sell your personal information. We may share relevant details with licensed professionals (lawyers, tax advisors, mortgage brokers, immigration specialists) when you have requested a referral, or with trusted local coordinators involved in delivering our services. We will not share your information for marketing purposes without your consent.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">5. Data retention</h2>
              <p>
                We retain your information for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law. You may request deletion of your data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">6. Your rights</h2>
              <p>
                Depending on your jurisdiction, you may have the right to access, correct, delete or restrict processing of your personal data. To exercise any of these rights, contact us at{" "}
                <a href="mailto:info@key4spain.com" className="text-gold hover:text-gold-soft transition-colors">
                  info@key4spain.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">7. Cookies</h2>
              <p>
                This website may use basic cookies for functional purposes. We do not use advertising or tracking cookies. You can control cookie settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">8. Changes to this policy</h2>
              <p>
                We may update this policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of our services after any update constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">9. Contact</h2>
              <p>
                For any questions about this Privacy Policy, contact Key4Spain at{" "}
                <a href="mailto:info@key4spain.com" className="text-gold hover:text-gold-soft transition-colors">
                  info@key4spain.com
                </a>{" "}
                or{" "}
                <a href="tel:+34652222027" className="text-gold hover:text-gold-soft transition-colors">
                  +34 652 222 027
                </a>.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-gold/10">
            <Link href="/" className="text-sm text-gold/70 hover:text-gold transition-colors">
              ← Back to Key4Spain
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
