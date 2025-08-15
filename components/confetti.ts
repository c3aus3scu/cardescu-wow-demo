// Tiny confetti helper (emoji-based fallback)

export function shoot() {
    try {
        emojiBurst();
    } catch {
        // no-op
    }
}

function emojiBurst() {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.inset = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    document.body.appendChild(container);

    const emojis = ['🎉', '✨', '💫', '🌟', '🎊', '🪄'];
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = prefersReduce ? 12 : 36;

    for (let i = 0; i < count; i++) {
        const span = document.createElement('span');
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        span.style.position = 'absolute';
        span.style.left = Math.random() * 100 + '%';
        span.style.top = '50%';
        span.style.fontSize = (Math.random() * 24 + 16) + 'px';
        span.style.transition = 'transform 900ms cubic-bezier(.2,.8,.2,1), opacity 900ms';
        span.style.opacity = '1';
        container.appendChild(span);
        requestAnimationFrame(() => {
            span.style.transform = `translate(${(Math.random() - .5) * 200}px, ${- (Math.random() * 300 + 120)}px) rotate(${(Math.random() - .5) * 60}deg)`;
            span.style.opacity = '0';
        });
    }

    setTimeout(() => container.remove(), 1000);
}