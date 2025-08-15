'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const PRESETS = [5, 10, 25, 50];

export default function DonateClient({ slug }: { slug: string }) {
  const [amount, setAmount] = useState<number>(PRESETS[1]);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const creator = decodeURIComponent(slug);

  const formatted = useMemo(
    () => new Intl.NumberFormat('ro-RO', { style: 'currency', currency: 'EUR' }).format(amount),
    [amount]
  );

  async function onDonate() {
    setSending(true);
    await new Promise(r => setTimeout(r, 900));
    setSending(false);
    setDone(true);

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const confetti = await import('./confetti');
      confetti.shoot();
    }
  }

  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">Donează lui {creator}</h1>
          <p className="text-fg-soft mt-2">Susține‑l cu o donație rapidă. Alege o sumă sau introdu altă valoare.</p>
        </div>
        <div className="rounded-xl border border-white/10 px-3 py-2 text-sm text-fg-soft">
          Live viewers: <span className="text-fg font-medium">128</span>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {PRESETS.map((v) => (
          <motion.button
            key={v}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setAmount(v)}
            className={clsx(
              'rounded-2xl p-5 text-left border transition',
              amount === v
                ? 'bg-gradient-to-b from-brand-500 to-brand-600 text-white border-brand-600 shadow-md'
                : 'bg-white/5 hover:bg-white/10 border-white/10'
            )}
          >
            <div className="text-2xl font-semibold">€{v}</div>
            <div className="text-sm opacity-80 mt-1">Sumă recomandată</div>
          </motion.button>
        ))}
        <div className="sm:col-span-2">
          <label className="text-sm text-fg-soft">Altă sumă</label>
          <div className="mt-2 flex items-center gap-3">
            <input
              type="number"
              min={1}
              step={1}
              value={amount}
              onChange={(e) => setAmount(Math.max(1, Math.round(Number(e.target.value) || 1)))}
              className="w-40 rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 text-lg"
              aria-label="Sumă donație"
            />
            <button
              className="btn-ghost"
              onClick={() => setAmount((p) => Math.max(1, p + 5))}
            >
              +5
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 glass rounded-2xl p-5">
          <h3 className="font-medium">Progres la obiectiv</h3>
          <GoalBar current={72} total={100} />
          <p className="text-fg-soft text-sm mt-2">Mai avem puțin până la targetul din această seară.</p>
        </div>
        <div className="glass rounded-2xl p-5">
          <h3 className="font-medium">Metode rapide</h3>
          <p className="text-fg-soft text-sm">Apple Pay/Google Pay apar automat dacă sunt disponibile pe device.</p>
          <div className="mt-3 flex gap-2">
            <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs"> Apple Pay</span>
            <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs">G Pay</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-3">
        <div className="text-fg-soft">
          Vei dona: <span className="font-semibold text-fg">{formatted}</span>
        </div>
        <div className="flex gap-3">
          <button onClick={onDonate} disabled={sending} className="btn-primary min-w-44">
            {sending ? 'Se procesează...' : 'Donează acum'}
          </button>
          <button className="btn-ghost">Previzualizează alertă</button>
        </div>
      </div>

      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 rounded-xl bg-green-500/15 border border-green-500/30 text-green-700 dark:text-green-300 px-4 py-3"
            role="status"
            aria-live="polite"
          >
            Mulțumim! Donația ta a fost confirmată.
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function GoalBar({ current, total }: { current: number; total: number }) {
  const pct = Math.min(100, Math.round((current / total) * 100));
  return (
    <div className="mt-3">
      <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-3 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-600"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        />
      </div>
      <div className="mt-1 text-xs text-fg-soft">{pct}% din {total}</div>
    </div>
  );
}
