import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen">
            <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
                <div className="glass rounded-2xl p-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                                Platformă donații care te face să zici “wow”
                            </h1>
                            <p className="mt-3 text-fg-soft max-w-xl">
                                Rapidă, elegantă, cu microinteracțiuni și checkout one‑tap (Apple Pay / Google Pay).
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Link className="btn-primary" href="/donate/marius">Vezi demo donație</Link>
                            <button
                                className="btn-ghost"
                                onClick={() => {
                                    const d = document.documentElement;
                                    const dark = d.getAttribute('data-theme') === 'dark';
                                    d.setAttribute('data-theme', dark ? 'light' : 'dark');
                                }}
                            >
                                Schimbă temă
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid md:grid-cols-3 gap-6">
                    <div className="glass rounded-2xl p-6">
                        <h3 className="text-lg font-medium">RSC + Streaming</h3>
                        <p className="text-fg-soft mt-1">LCP mic, SEO mare, UX fluid.</p>
                    </div>
                    <div className="glass rounded-2xl p-6">
                        <h3 className="text-lg font-medium">Design accesibil</h3>
                        <p className="text-fg-soft mt-1">WCAG 2.2, focus ring, motion off respectat.</p>
                    </div>
                    <div className="glass rounded-2xl p-6">
                        <h3 className="text-lg font-medium">Microinteracțiuni</h3>
                        <p className="text-fg-soft mt-1">Preset-uri, confetti, glow “on confirm”.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}