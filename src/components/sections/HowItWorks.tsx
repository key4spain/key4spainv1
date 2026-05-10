const steps = [
  {
    number: "1",
    title: "Tell us your Spain goal",
    description: "Whether you are buying, relocating or exploring investment, share what you are trying to achieve.",
  },
  {
    number: "2",
    title: "Complete the right brief",
    description: "You receive a structured intake form matched to your specific situation.",
  },
  {
    number: "3",
    title: "We review your profile",
    description: "Key4Spain reviews your brief and assesses the best way to support you.",
  },
  {
    number: "4",
    title: "You receive the correct next step",
    description: "A clear, structured response outlining what happens next and what is involved.",
  },
  {
    number: "5",
    title: "We coordinate property, relocation or investment support",
    description: "Structured coordination begins, matched to your goals and timeline.",
  },
  {
    number: "6",
    title: "Licensed professionals are included where needed",
    description: "Legal, tax, immigration and other regulated matters are referred to licensed professionals.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32"
      style={{
        background: "linear-gradient(160deg, #EDE4D2 0%, #E4D9C4 60%, #DECFB8 100%)",
        borderTop: "1px solid rgba(7,17,31,0.12)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 65% 50% at 50% 110%, rgba(200,164,93,0.08) 0%, transparent 60%)",
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px" style={{ background: "#C8A45D" }} />
            <span className="text-[10px] uppercase tracking-[0.40em] font-medium" style={{ color: "#C8A45D" }}>How It Works</span>
          </div>
          <h2
            className="font-serif font-normal leading-tight max-w-xl"
            style={{ color: "#07111F", fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
          >
            A structured process from first contact to local coordination.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex flex-col gap-5 p-8 md:p-9 bg-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderLeft: "4px solid #C8A45D",
                boxShadow: "0 1px 2px rgba(7,17,31,0.04), 0 4px 16px rgba(7,17,31,0.10), 0 20px 56px rgba(7,17,31,0.18), 0 1px 0 rgba(200,164,93,0.12)",
              }}
            >
              <span
                className="font-serif font-normal leading-none select-none"
                style={{ fontSize: "5rem", color: "rgba(200,164,93,0.30)" }}
              >
                {step.number}
              </span>
              <h3 className="text-[15px] font-semibold leading-snug" style={{ color: "#07111F" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(7,17,31,0.58)" }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
