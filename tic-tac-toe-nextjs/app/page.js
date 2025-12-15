import Link from "next/link";

const tiles = [
  {
    title: "Gra Tic-Tac-Toe",
    desc: "Uruchom nową grę i wybierz rozmiar planszy.",
    href: "/game",
    icon: "🎮",
    variant: "primary",
  },
  {
    title: "Zapisane gry",
    desc: "Przeglądaj i wczytuj zapisane rozgrywki.",
    href: "/games",
    icon: "🗂",
    variant: "base",
  },
  {
    title: "Ustawienia",
    desc: "Zmień wygląd, rozmiar i zasady gry.",
    href: "/settings",
    icon: "⚙️",
    variant: "base",
  },
  {
    title: "Profil",
    desc: "Zobacz dane konta i ustawienia profilu.",
    href: "/user/profile",
    icon: "👤",
    variant: "base",
  },
  {
    title: "O aplikacji",
    desc: "Opis projektu i najważniejsze funkcje.",
    href: "/about",
    icon: "ℹ️",
    variant: "base",
  },
  {
    title: "Zmień hasło",
    desc: "Zaktualizuj hasło do swojego konta.",
    href: "/user/changepassword",
    icon: "🔑",
    variant: "warning",
  },
];

function TileCard({ title, desc, href, icon, variant }) {
  const base =
    "card border border-base-300 bg-base-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-primary/40";

  const variants = {
    primary:
      "bg-gradient-to-br from-primary to-secondary text-primary-content border-transparent",
    warning:
      "bg-gradient-to-br from-warning to-amber-500 text-warning-content border-transparent",
    base: "bg-base-100 text-base-content",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant] ?? variants.base}`}>
      <div className="card-body">
        <div className="flex items-center justify-between gap-3">
          <h3 className="card-title text-lg flex items-center gap-2">
            <span className="text-2xl">{icon}</span>
            {title}
          </h3>
          <span className="badge badge-outline">Wejdź</span>
        </div>
        <p className="opacity-80">{desc}</p>
        <div className="card-actions justify-end mt-2">
          <span className="btn btn-sm btn-ghost">Otwórz →</span>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Ukryj nawigację/layout na stronie głównej */}
      <style>{`
        .app-nav, .app-topbar, .app-footer { display: none !important; }
        .app-main { padding: 0 !important; }
        .app-container { max-width: none !important; }
        .app-card { box-shadow: none !important; border: 0 !important; background: transparent !important; }
      `}</style>

      {/* HERO */}
      <section className="text-center py-12 md:py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
         Gra w kółko i krzyżyk
        </h1>    
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/game" className="btn btn-primary btn-wide">
            🎮 Graj teraz
          </Link>       
        </div>
      </section>

      {/* KAFELKI jako przyciski/linki */}
      <section className="mt-6 md:mt-10 px-4 md:px-8 pb-12">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((t) => (
            <TileCard key={t.href} {...t} />
          ))}
        </div>
      </section>
    </div>
  );
}
