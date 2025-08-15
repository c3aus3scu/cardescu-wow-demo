import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
    title: 'Cardescu – WOW Demo',
    description: 'Glass + Bento + Motion demo for donations',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ro">
            <body>
                <div className="fixed inset-0 -z-10 brand-gradient" aria-hidden="true" />
                {children}
            </body>
        </html>
    );
}