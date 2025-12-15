"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

const navItems = [
  { href: "/", label: "Strona główna", icon: "🏠" },
  { href: "/game", label: "Gra Tic-Tac-Toe", icon: "🎮" },
  { href: "/games", label: "Zapisane gry", icon: "🗂" },
  { href: "/settings", label: "Ustawienia", icon: "⚙️" },
  { href: "/user/profile", label: "Profil", icon: "👤" },
  { href: "/about", label: "O aplikacji", icon: "ℹ️" },
  { href: "/user/changepassword", label: "Zmień hasło", icon: "🔑" },
];

function NavLink({ href, children }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-lg transition ${
        active
          ? "bg-primary text-primary-content font-semibold"
          : "hover:bg-base-200"
      }`}
    >
      {children}
    </Link>
  );
}

export default function ClientLayout({ children }) {
  const { user, loading } = useAuth();
  const year = new Date().getFullYear();

  return (
    <div className="drawer lg:drawer-open">
      <input id="drawer" type="checkbox" className="drawer-toggle" />

      {/* CONTENT */}
      <div className="drawer-content flex flex-col min-h-screen">
        {/* NAVBAR */}
        <header className="navbar bg-base-100 border-b border-base-200 sticky top-0 z-30">
          <div className="flex-none lg:hidden">
            <label htmlFor="drawer" className="btn btn-ghost btn-square">
              ☰
            </label>
          </div>

          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl font-bold">
              TicTacToe App
            </Link>
          </div>

          {/* AUTH ACTIONS */}
          <div className="flex gap-2 items-center">
            {!loading && user ? (
              <>
                <span className="text-sm opacity-70 hidden sm:block max-w-[200px] truncate">
                  {user.email}
                </span>

                <Link
                  href="/user/signout"
                  className="btn btn-sm btn-error"
                >
                  Wyloguj
                </Link>
              </>
            ) : (
              <>
                <Link href="/user/signin" className="btn btn-sm btn-outline">
                  Logowanie
                </Link>
                <Link href="/user/register" className="btn btn-sm btn-primary">
                  Rejestracja
                </Link>
              </>
            )}
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-1 p-6 md:p-10">
          <div className="mx-auto max-w-6xl">
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">{children}</div>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="footer footer-center p-4 bg-base-100 border-t">
          <p className="text-sm opacity-70">
            © {year} TicTacToe App · Next.js
          </p>
        </footer>
      </div>

      {/* SIDEBAR */}
      <aside className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay" />
        <div className="w-72 bg-base-100 border-r border-base-200">
          <div className="p-5 border-b">
            <h2 className="font-extrabold text-lg">Nawigacja</h2>
            <p className="text-xs opacity-60">Wybierz sekcję</p>
          </div>

          <ul className="menu p-3 gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>
                  <span className="flex gap-2">
                    {item.icon} {item.label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
