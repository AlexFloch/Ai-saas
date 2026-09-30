import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Sparkles, Zap, Shield, BarChart3, Layers, Globe, ArrowRight,
  Check, Star, ChevronRight, Play, Bot, FileText, TrendingUp,
  Twitter, Github, Linkedin, Menu, X, Brain, Code2, MessageSquare
} from 'lucide-react'

/* ─── helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

/* ─── data ─── */
const navLinks = ['Features', 'How it works', 'Pricing', 'Blog']

const features = [
  { icon: Brain, title: 'Brand Voice AI', desc: 'Synth learns your tone, style, and vocabulary. Every piece sounds unmistakably like you — not a generic AI.', color: '#7C3AED' },
  { icon: Zap, title: 'Real-time Generation', desc: 'Stream content as it\'s created. Watch ideas unfold in milliseconds, not seconds.', color: '#6366F1' },
  { icon: Shield, title: 'Fact-checked Output', desc: 'Built-in hallucination detection flags uncertain claims before they reach your audience.', color: '#EC4899' },
  { icon: Globe, title: '47 Languages', desc: 'Write once, publish globally. Native-quality translation preserves nuance and local idioms.', color: '#06B6D4' },
  { icon: BarChart3, title: 'SEO Intelligence', desc: 'Semantic keyword clustering and readability scoring baked into every generation.', color: '#10B981' },
  { icon: Layers, title: 'Workflow Templates', desc: '80+ battle-tested templates for blogs, ads, emails, social, and product descriptions.', color: '#F59E0B' },
]

const steps = [
  { num: '01', title: 'Connect your brand', desc: 'Paste your existing content or connect your CMS. Synth builds a profile of your voice in minutes.', icon: FileText },
  { num: '02', title: 'Describe your goal', desc: 'Tell Synth what you need in plain language. No prompting engineering required.', icon: MessageSquare },
  { num: '03', title: 'Generate & publish', desc: 'Review, tweak with one click, and publish directly to your platform.', icon: TrendingUp },
]

const plans = [
  {
    name: 'Starter', price: '29', period: '/mo',
    desc: 'Perfect for solo creators and small teams.',
    features: ['50,000 words / mo', '5 brand voice profiles', 'Basic SEO tools', '10 languages', 'Email support'],
    cta: 'Start free trial', highlight: false,
  },
  {
    name: 'Pro', price: '79', period: '/mo',
    desc: 'For growing teams who ship content at scale.',
    features: ['Unlimited words', '25 brand voice profiles', 'Advanced SEO + analytics', 'All 47 languages', 'Priority support', 'API access', 'Custom templates'],
    cta: 'Start free trial', highlight: true,
    badge: 'Most popular',
  },
  {
    name: 'Enterprise', price: 'Custom', period: '',
    desc: 'White-glove setup for large organizations.',
    features: ['Unlimited everything', 'Dedicated AI instance', 'SSO & audit logs', 'SLA guarantee', 'Dedicated CSM', 'Custom fine-tuning'],
    cta: 'Talk to sales', highlight: false,
  },
]

const testimonials = [
  { name: 'Sarah Chen', role: 'Head of Content, Notion', avatar: 'SC', quote: 'Synth cut our content production time by 70%. The brand voice feature is eerily accurate — editors thought interns wrote it.', stars: 5 },
  { name: 'Marcus Reid', role: 'Founder, Vesper', avatar: 'MR', quote: 'We went from 2 blog posts a week to 14. SEO traffic tripled in 3 months. It just works.', stars: 5 },
  { name: 'Priya Sharma', role: 'Marketing Dir, Scale', avatar: 'PS', quote: 'Finally an AI that doesn\'t sound like an AI. Our open rates on email campaigns went up 34% since switching.', stars: 5 },
]

const logos = ['Linear', 'Vercel', 'Raycast', 'Clerk', 'Resend', 'Planetscale', 'Supabase', 'Liveblocks', 'Linear', 'Vercel', 'Raycast', 'Clerk', 'Resend', 'Planetscale', 'Supabase', 'Liveblocks']

const stats = [
  { value: '10M+', label: 'Words generated daily' },
  { value: '47k', label: 'Active teams' },
  { value: '70%', label: 'Faster content production' },
  { value: '4.9★', label: 'Average rating' },
]

/* ─── sub-components ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'py-5'}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-white text-lg">Synth<span className="text-violet-400">AI</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(l => (
              <a key={l} href="#" className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">{l}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Log in</a>
            <motion.a href="#" whileHover={{ scale: 1.03, y: -1 }} className="btn-violet py-2 text-xs px-5">
              Start free <ArrowRight size={13} />
            </motion.a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-400 hover:text-white"><Menu size={20} /></button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-6 md:hidden">
            <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-slate-400"><X size={24} /></button>
            {navLinks.map(l => <a key={l} href="#" onClick={() => setOpen(false)} className="font-display font-semibold text-2xl text-white">{l}</a>)}
            <motion.a href="#" className="btn-violet mt-4">Start free trial <ArrowRight size={15} /></motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function TerminalDemo() {
  const lines = [
    { delay: 0, color: 'text-violet-400', text: '$ synth generate --type blog --topic "Future of Remote Work"' },
    { delay: 800, color: 'text-slate-500', text: '→ Analyzing brand voice profile...' },
    { delay: 1600, color: 'text-slate-500', text: '→ Fetching SEO context for "remote work 2025"...' },
    { delay: 2400, color: 'text-emerald-400', text: '✓ Brand match: 97.3% confidence' },
    { delay: 3000, color: 'text-white', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' },
    { delay: 3200, color: 'text-white font-semibold', text: '"The Future of Remote Work Is Async-First"' },
    { delay: 3800, color: 'text-slate-300', text: 'The office used to be where work happened...' },
  ]
  const [visible, setVisible] = useState([])
  useEffect(() => {
    lines.forEach((l, i) => setTimeout(() => setVisible(v => [...v, i]), l.delay + 400))
  }, [])
  return (
    <div className="glass-card rounded-2xl p-5 font-mono text-xs leading-6 overflow-hidden">
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-slate-600 text-[10px]">synth-terminal</span>
      </div>
      <div className="space-y-1">
        {lines.map((l, i) => (
          <div key={i} className={`transition-all duration-500 ${visible.includes(i) ? 'opacity-100' : 'opacity-0'} ${l.color}`}>
            {l.text}
          </div>
        ))}
        {visible.length >= lines.length && (
          <span className="text-violet-400 cursor-blink">█</span>
        )}
      </div>
    </div>
  )
}

/* ─── main ─── */
export default function App() {
  const [annual, setAnnual] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden dot-grid">
        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb-float absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[100px]" />
          <div className="orb-float-2 absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[80px]" />
          <div className="orb-float-3 absolute bottom-1/4 left-1/2 w-[300px] h-[300px] rounded-full bg-pink-600/8 blur-[80px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono
                bg-violet-500/10 border border-violet-500/20 text-violet-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                GPT-4o powered · Launching v2.0
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.08)} className="font-display font-extrabold text-5xl sm:text-6xl xl:text-7xl text-white leading-[0.92] mb-6">
              Write <span className="gradient-text">10×</span> faster<br />
              with AI that<br />
              <span className="gradient-text">gets your brand</span>
            </motion.h1>

            <motion.p {...fadeUp(0.16)} className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Synth AI learns your unique voice and generates on-brand content at scale — blogs, ads, emails, and social — in seconds, not hours.
            </motion.p>

            <motion.div {...fadeUp(0.22)} className="flex flex-wrap items-center gap-4">
              <motion.a href="#" whileHover={{ scale: 1.02, y: -2 }} className="btn-violet px-8 py-3.5 text-base">
                Start writing free <ArrowRight size={16} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.02 }} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Play size={13} className="text-white fill-white ml-0.5" />
                </div>
                Watch 90-sec demo
              </motion.a>
            </motion.div>

            <motion.div {...fadeUp(0.28)} className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                {['SC','MR','PS','AK','TL'].map((a, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-ink-950 flex items-center justify-center text-[9px] font-bold text-white"
                    style={{ background: ['#7C3AED','#6366F1','#EC4899','#06B6D4','#10B981'][i] }}>
                    {a}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-amber-400 text-xs">{'★★★★★'}</div>
                <p className="text-xs text-slate-500 mt-0.5">Loved by <strong className="text-slate-300">47,000+</strong> teams</p>
              </div>
            </motion.div>
          </div>

          {/* Right — demo */}
          <motion.div {...fadeUp(0.12)} className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/20 to-pink-500/10 blur-2xl" />

            <div className="relative glow-border rounded-3xl overflow-hidden bg-ink-800/80 p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center"><Sparkles size={13} /></div>
                  <span className="font-display font-semibold text-sm text-white">Synth AI</span>
                </div>
                <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-400">Generating…</span>
                </div>
              </div>
              <TerminalDemo />
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[['Words', '1,240'], ['SEO Score', '94/100'], ['Brand match', '97%']].map(([k, v]) => (
                  <div key={k} className="bg-white/3 rounded-xl p-3 text-center">
                    <p className="font-display font-bold text-violet-300 text-lg">{v}</p>
                    <p className="text-slate-600 text-[10px] font-mono mt-0.5">{k}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LOGO STRIP ── */}
      <section className="py-12 border-y border-white/[0.04] overflow-hidden">
        <p className="text-center text-slate-600 font-mono text-xs tracking-widest mb-8">TRUSTED BY TEAMS AT</p>
        <div className="flex">
          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
            {logos.map((l, i) => (
              <span key={i} className="font-display font-bold text-slate-700 text-lg hover:text-slate-400 transition-colors cursor-default">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...fadeUp(i * 0.08)} className="text-center">
              <p className="font-display font-extrabold text-4xl md:text-5xl gradient-text mb-2">{s.value}</p>
              <p className="font-body text-slate-500 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 px-6 bg-ink-900/40" id="features">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-violet-500/10 border border-violet-500/20 text-violet-300 mb-5">
              <Zap size={10} /> Everything you need
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
              Built for content teams<br />that <span className="gradient-text">move fast</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              No more switching between tools. Synth handles your entire content workflow from ideation to publication.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i * 0.07)}
                className="feature-card glass-card rounded-2xl p-6 cursor-default">
                <div className="feature-icon w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ background: `${f.color}18`, color: f.color }}>
                  <f.icon size={20} />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6" id="how-it-works">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
              From zero to published<br />in <span className="gradient-text">3 steps</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="absolute top-16 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent hidden md:block" />
            {steps.map((s, i) => (
              <motion.div key={s.num} {...fadeUp(i * 0.1)} className="relative glass-card rounded-2xl p-7 text-center">
                <div className="font-mono text-5xl font-bold text-violet-500/15 mb-4">{s.num}</div>
                <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center mx-auto mb-4">
                  <s.icon size={22} className="text-violet-400" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6 bg-ink-900/40">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="font-display font-extrabold text-4xl text-white">Creators love Synth</h2>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="glow-border glass-card rounded-3xl p-8 md:p-10">
            <div className="flex text-amber-400 mb-6">{'★★★★★'.split('').map((s,i) => <span key={i} className="text-xl">{s}</span>)}</div>
            <AnimatePresence mode="wait">
              <motion.blockquote key={activeTestimonial}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                className="font-display font-medium text-xl md:text-2xl text-white leading-relaxed mb-8">
                "{testimonials[activeTestimonial].quote}"
              </motion.blockquote>
            </AnimatePresence>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-white"
                  style={{ background: 'linear-gradient(135deg,#7C3AED,#EC4899)' }}>
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <p className="font-display font-semibold text-white">{testimonials[activeTestimonial].name}</p>
                  <p className="text-slate-500 text-xs">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'bg-violet-500 scale-125' : 'bg-white/20'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 px-6" id="pricing">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
              Simple, <span className="gradient-text">transparent</span> pricing
            </h2>
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mt-4">
              <button onClick={() => setAnnual(false)} className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${!annual ? 'bg-violet-600 text-white' : 'text-slate-400'}`}>Monthly</button>
              <button onClick={() => setAnnual(true)} className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${annual ? 'bg-violet-600 text-white' : 'text-slate-400'}`}>Annual</button>
              <span className="text-xs text-emerald-400 font-mono">-20%</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 items-center">
            {plans.map((p, i) => (
              <motion.div key={p.name} {...fadeUp(i * 0.08)}
                className={`rounded-2xl p-6 relative ${p.highlight ? 'glow-border bg-ink-700/80 scale-[1.03]' : 'glass-card'}`}>
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white bg-violet-600">
                    {p.badge}
                  </div>
                )}
                <p className="font-mono text-xs text-slate-500 tracking-widest mb-2">{p.name.toUpperCase()}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  {p.price !== 'Custom' && <span className="font-display font-bold text-4xl text-white">
                    ${annual ? Math.round(+p.price * 0.8) : p.price}
                  </span>}
                  {p.price === 'Custom' && <span className="font-display font-bold text-3xl text-white">Custom</span>}
                  <span className="text-slate-500 text-sm">{p.period}</span>
                </div>
                <p className="text-slate-500 text-sm mb-5">{p.desc}</p>
                <motion.a href="#" whileHover={{ scale: 1.02, y: -1 }}
                  className={`block text-center py-2.5 rounded-xl font-display font-semibold text-sm mb-6 transition-all ${
                    p.highlight ? 'btn-violet' : 'border border-white/10 text-slate-300 hover:border-violet-500/40 hover:text-violet-300'}`}>
                  {p.cta}
                </motion.a>
                <ul className="space-y-2.5">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-400">
                      <Check size={13} className="text-violet-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 px-6">
        <motion.div {...fadeUp()} className="max-w-3xl mx-auto glow-border glass-card rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-pink-600/5" />
          <div className="relative">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
              Ready to write <span className="gradient-text">10× faster?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">14-day free trial. No credit card. Cancel anytime.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a href="#" whileHover={{ scale: 1.03, y: -2 }} className="btn-violet px-10 py-3.5 text-base">
                Start for free <ArrowRight size={16} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.03 }} className="btn-outline px-8 py-3.5">
                Book a demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.04] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center"><Sparkles size={13} /></div>
            <span className="font-display font-bold text-white">SynthAI</span>
            <span className="text-slate-700 text-sm ml-2">© 2024 All rights reserved.</span>
          </div>
          <div className="flex gap-4 text-slate-600 text-sm">
            {['Privacy', 'Terms', 'Status', 'Blog'].map(l => <a key={l} href="#" className="hover:text-slate-300 transition-colors">{l}</a>)}
          </div>
          <div className="flex gap-3 text-slate-600">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <motion.a key={i} href="#" whileHover={{ scale: 1.15, color: '#fff' }} className="p-2 rounded-lg hover:bg-white/5 transition-all"><Icon size={16} /></motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
