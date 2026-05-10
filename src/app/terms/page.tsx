import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Use | Key4Spain",
  description: "Terms of Use for Key4Spain — the scope, limitations and conditions of our advisory services.",
};

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="text-sm text-muted/60 mb-12">Last updated: May 2025</p>

          <div className="prose prose-invert max-w-none space-y-10 text-muted leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">1. About Key4Spain</h2>
              <p>
                Key4Spain provides buyer-side property advisory, relocation coordination and investment perspective services for international clients entering the Spanish real estate market. Key4Spain is part of the Key4SpainGroup ecosystem.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">2. Scope of services</h2>
              <p>
                Key4Spain offers advisory, coordination and information services only. This includes:
              </p>
              <ul className="list-none space-y-2 mt-3 pl-4 border-l border-gold/20">
                <li>Buyer-side property search guidance and local coordination</li>
                <li>Relocation support, area research and lifestyle guidance</li>
                <li>Investment context and structured brief review</li>
                <li>Referrals to licensed professionals where required</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">3. What Key4Spain does not provide</h2>
              <p>
                Key4Spain does not provide legal advice, tax advice, mortgage advice, immigration advice, property valuations, financial planning, or any other regulated professional service. All such matters are referred exclusively to licensed professionals operating within their proper scope. Nothing on this website or in our communications constitutes legal, financial or professional advice.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">4. No guarantees</h2>
              <p>
                Key4Spain does not guarantee any specific outcome, including but not limited to: property availability, purchase timelines, visa or residency approvals, investment returns, mortgage approvals or any institutional decision. All information provided is for guidance purposes only and may be subject to change.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">5. Third-party professionals</h2>
              <p>
                When Key4Spain refers clients to licensed professionals (lawyers, notaries, tax advisors, mortgage brokers, immigration specialists), those professionals operate independently and are solely responsible for the advice and services they provide. Key4Spain accepts no liability for the actions, advice or outcomes of third-party professionals.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">6. Website content</h2>
              <p>
                All content on this website is provided for informational purposes only. While we aim to keep information accurate and up to date, we make no representations or warranties about the completeness, accuracy or suitability of the content for any particular purpose. You should not rely on this website as a substitute for professional advice.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">7. Intellectual property</h2>
              <p>
                All content, branding, text and design on this website is the property of Key4Spain or the Key4SpainGroup unless otherwise stated. Reproduction without written permission is not permitted.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">8. Changes to these terms</h2>
              <p>
                We may update these terms from time to time. Continued use of our website or services after any update constitutes acceptance of the revised terms. The date at the top of this page reflects the most recent revision.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-cream font-normal mb-4">9. Contact</h2>
              <p>
                For questions about these Terms of Use, contact Key4Spain at{" "}
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
