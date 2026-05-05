export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  const faqs = [
    {
      q: "What data sources do you use for scoring?",
      a: "We aggregate data from the npm registry, OSV vulnerability database, Snyk advisories, and GitHub repository metrics to compute a comprehensive A-F grade."
    },
    {
      q: "How is the A-F grade calculated?",
      a: "The grade weighs known CVEs (40%), maintenance activity (30%), and supply chain risk factors like typosquatting and maintainer count (30%)."
    },
    {
      q: "Can I check private or scoped packages?",
      a: "Yes. Scoped packages like @org/package are fully supported. Private packages require an npm token configured in your account settings."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know if an npm package is safe{" "}
          <span className="text-[#58a6ff]">before you install it</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Paste a package name and get an instant <strong className="text-[#c9d1d9]">A-F security grade</strong> based on vulnerability scans, maintenance health, and supply chain risk.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <input
            type="text"
            placeholder="e.g. lodash or @babel/core"
            className="w-full sm:w-80 bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-[#c9d1d9] placeholder-[#484f58] focus:outline-none focus:border-[#58a6ff] text-sm"
            readOnly
          />
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
          >
            Analyze Package →
          </a>
        </div>
        <p className="text-[#484f58] text-xs">Full analysis unlocked with a subscription. No credit card required to preview.</p>
      </section>

      {/* Grade preview */}
      <section className="grid grid-cols-3 gap-4 mb-20 text-center">
        {[
          { grade: "A", color: "text-green-400", label: "Safe to use" },
          { grade: "C", color: "text-yellow-400", label: "Use with caution" },
          { grade: "F", color: "text-red-400", label: "High risk" }
        ].map(({ grade, color, label }) => (
          <div key={grade} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className={`text-5xl font-black mb-2 ${color}`}>{grade}</div>
            <div className="text-[#8b949e] text-xs">{label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-black text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited package scans",
              "Full A-F security grade breakdown",
              "CVE & vulnerability details",
              "Supply chain risk analysis",
              "Maintenance & activity metrics",
              "API access for CI/CD pipelines"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started for $9/mo
          </a>
          <p className="text-[#484f58] text-xs mt-3">Cancel anytime. Instant access.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs">
        © {new Date().getFullYear()} npm Security Scorecard. Built for developers who ship safely.
      </footer>
    </main>
  );
}
