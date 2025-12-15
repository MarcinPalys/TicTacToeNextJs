import Link from "next/link";

const features = [
  {
    title: "Uwierzytelnianie",
    desc: "System rejestracji i logowania oparty na localStorage",
    icon: "🔐",
  },
  {
    title: "Responsywność",
    desc: "Dostosowanie do urządzeń mobilnych, tabletów i monitorów",
    icon: "📱",
  },
  {
    title: "Zapis stanu gry",
    desc: "Zapisywanie gier lokalnie w przeglądarce (localStorage)",
    icon: "💾",
  },
  {
    title: "Plansza nxn",
    desc: "Konfigurowalna wielkość planszy (5x5, 10x10, itp.)",
    icon: "⭕",
  },
  {
    title: "Konfiguracja wyglądu",
    desc: "Kolory tła, symboli, krawędzi, rozmiary",
    icon: "🎨",
  },
  {
    title: "Wykrywanie wygranej",
    desc: "Automatyczne wykrywanie 5 kolejnych symboli",
    icon: "🏆",
  },
];

export default function HomePage() {
  return (


    <div className="w-full">
      <style>{`
  .app-nav, .app-topbar, .app-footer { display: none !important; }
  .app-main { padding: 0 !important; }
  .app-container { max-width: none !important; }
  .app-card { box-shadow: none !important; border: 0 !important; background: transparent !important; }
`}</style>
      {/* HERO */}
      <section className="text-center py-8 md:py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Laboratorium 6 - Temat 5
        </h1>
        <p className="mt-4 text-base md:text-lg opacity-70">
          Gra w kółko i krzyżyk na planszy nxn
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/game" className="btn btn-primary px-8">
              Graj teraz
            </Link>
            <Link href="/about" className="btn btn-outline px-8">
              O projekcie
            </Link>
            </div>
        </div>
        
      </section>

      {/* FEATURE CARDS */}
      <section className="mt-6 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition"
            >
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{f.icon}</span>
                  <h3 className="card-title text-lg">{f.title}</h3>
                </div>
                <p className="opacity-70">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIST BOX */}
      <section className="mt-8 md:mt-10">
        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body">
            <h3 className="font-bold text-lg">Funkcjonalności gry:</h3>

            <ul className="list-disc pl-6 mt-2 space-y-1 opacity-80">
              <li>Wstawianie symbolu X lub O w wolnym polu</li>
              <li>Zapisywanie i wczytywanie stanu gry</li>
              <li>Wyświetlanie liczby ruchów i wolnych pól</li>
              <li>Informacja o wygranej lub remisie</li>
              <li>Blokada ruchu po wygranej</li>
              <li>Pełna konfiguracja wyglądu planszy</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
