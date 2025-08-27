const socials = [
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
  // LinkedIn uses inline SVG fallback so it never breaks
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/cryptorush/",
    inline: "linkedin",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cryptorush_sv/",
    slug: "instagram",
  },
];

export default function Socials() {
  return (
    <div className="socials">
      <p className="socials__title">Síguenos</p>
      <div className="socials__row">
        {socials.map((s) => {
          if (s.inline === "linkedin") {
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="socials__a"
              >
                {/* Inline SVG fallback for LinkedIn */}
                <svg
                  className="socials__icon-svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="siGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#9929EA" />
                      <stop offset="100%" stopColor="#5808FB" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#siGrad)"
                    d="M20.447 20.452h-3.554V14.89c0-1.327-.027-3.036-1.852-3.036-1.853 0-2.135 1.445-2.135 2.94v5.658H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.603 0 4.268 2.372 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM6.894 20.452H3.781V9h3.113v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            );
          }

          const src = `https://cdn.jsdelivr.net/npm/simple-icons/icons/${s.slug}.svg`;
          return (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="socials__a"
            >
              <span
                className="socials__icon"
                style={{
                  // eslint-disable-next-line
                  ["--si-src"]: `url('${src}')`,
                  // eslint-disable-next-line
                  ["--si-fallback"]:
                    "linear-gradient(transparent, transparent)",
                }}
                aria-hidden="true"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
