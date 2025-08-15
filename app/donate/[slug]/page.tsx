import DonateClient from '../../../components/DonateClient';

export function generateStaticParams() {
    // Pre-render un slug demo pentru exportul static
    return [{ slug: 'marius' }];
}

export default function DonatePage({ params }: { params: { slug: string } }) {
    return (
        <main className="min-h-screen">
            <section className="mx-auto max-w-4xl px-6 pt-20 pb-14">
                <div className="glass rounded-2xl p-8 md:p-10">
                    <DonateClient slug={params.slug} />
                </div>
            </section>
        </main>
    );
}