import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/lib/AuthContext";

export const metadata = {
  title: "TicTacToe App",
  description: "Gra w kółko i krzyżyk n×n z logowaniem i zapisem gier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" data-theme="cupcake">
      <body className="min-h-screen bg-base-200">
        <AuthProvider>
          {/* GŁÓWNY UKŁAD: STAŁY SIDEBAR + CZĘŚĆ GŁÓWNA */}
          <div className="min-h-screen flex">
            {/* SIDEBAR */}
            <aside className="w-72 bg-base-100 border-r border-base-300 shadow-lg flex flex-col">
              {/* nagłówek nawigacji */}
              <div className="px-5 pt-6 pb-4 border-b border-base-200">
                <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                  Nawigacja
                </p>
                <h2 className="text-lg font-bold leading-tight mt-1">
                  TicTacToe App
                </h2>
                <p className="text-xs opacity-60 mt-1">
                  Wybierz tryb gry lub ustawienia.
                </p>
              </div>

              {/* menu – luźne odstępy, czytelne ikony */}
              <nav className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="menu menu-lg gap-2 rounded-box">
                  <li>
                    <Link href="/">
                      <span>🏠 Strona główna</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/game">
                      <span>🎮 Gra Tic-Tac-Toe</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/games">
                      <span>🗂 Moje zapisane gry</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/settings">
                      <span>⚙️ Ustawienia gry</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/user/profile">
                      <span>👤 Profil</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <span>ℹ️ O aplikacji</span>
                    </Link>
                  </li>
                  
                </ul>
              </nav>

              {/* mała stopka w sidebarze */}
              <div className="px-5 py-3 border-t border-base-200 text-xs opacity-70">
                © {new Date().getFullYear()} TicTacToe App
              </div>
            </aside>

            {/* PRAWA STRONA: NAVBAR + CONTENT + STOPKA */}
            <div className="flex-1 flex flex-col min-h-screen">
              {/* NAVBAR U GÓRY */}
              <header className="navbar bg-base-100/90 backdrop-blur shadow-sm px-4">
                <div className="flex-1">
                  <Link
                    href="/"
                    className="btn btn-ghost normal-case text-xl font-semibold"
                  >
                    TicTacToe App
                  </Link>
                </div>

                {/* menu poziome + logowanie */}
                <div className="flex-none flex items-center gap-4">
                  <ul className="menu menu-horizontal hidden md:flex gap-1 px-0">
                    <li>
                      <Link href="/game">Gra</Link>
                    </li>
                    <li>
                      <Link href="/games">Zapisane gry</Link>
                    </li>
                    <li>
                      <Link href="/settings">Ustawienia</Link>
                    </li>
                    <li>
                      <Link href="/user/profile">Profil</Link>
                    </li>
                    <li>
                      <Link href="/about">O aplikacji</Link>
                    </li>
                   
                  </ul>

                  <div className="flex gap-2">
                    <Link href="/user/signin" className="btn btn-sm btn-outline">
                      Logowanie
                    </Link>
                    <Link href="/user/register" className="btn btn-sm btn-primary">
                      Rejestracja
                    </Link>
                  </div>
                </div>
              </header>

              {/* GŁÓWNA KARTA Z TREŚCIĄ */}
              <main className="flex-1 px-3 py-6 md:px-8 md:py-8 flex justify-center">
                <div className="w-full max-w-6xl">
                  <div className="card bg-base-100 shadow-xl border border-base-300">
                    <div className="card-body">{children}</div>
                  </div>
                </div>
              </main>

              {/* DOLNA STOPKA */}
              <footer className="footer footer-center p-4 bg-base-100 text-base-content">
                <aside>
                  <p>
                    © {new Date().getFullYear()} TicTacToe App · Projekt Next.js
                  </p>
                </aside>
              </footer>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
