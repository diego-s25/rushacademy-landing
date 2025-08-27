export default function Socials() {
  const items = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/CryptoRush/61564051191178/",
      slug: "facebook",
    },
    { name: "X", href: "https://x.com/CryptoRush_SV", slug: "x" },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@cryptorushsv",
      slug: "tiktok",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/cryptorush/",
      slug: "linkedin",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/cryptorush_sv/",
      slug: "instagram",
    },
  ];

  return (
    <section className="socials" aria-labelledby="socials-title">
      <h3 id="socials-title" className="socials__title">
        Síguenos
      </h3>
      <div className="socials__icons">
        {items.map((s) => (
          <a
            key={s.slug}
            className="socials__link"
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
          >
            {/* The span is the masked icon */}
            <span
              className="socials__icon"
              style={{
                // Primary mask source (fast CDN)
                "--si-src": `url('https://cdn.simpleicons.org/${s.slug}')`,
                // Fallback mask if the first one fails (unpkg)
                "--si-fallback": `url('https://unpkg.com/simple-icons@latest/icons/${s.slug}.svg')`,
              }}
            />
            <span className="sr-only">{s.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
