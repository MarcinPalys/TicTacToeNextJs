export default function AboutPage() {
  return (
    <div className="flex justify-center mt-8">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-2">O aplikacji</h2>

          <p className="mb-2">
            Aplikacja <strong>TicTacToe App</strong> została zrealizowana jako
            projekt na zajęcia z Frontendu. Łączy grę w kółko i krzyżyk z
            mechanizmem logowania użytkowników i zapisywania stanu gry w
            chmurze Firebase.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">Funkcjonalności:</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Rejestracja i logowanie użytkownika (Firebase Authentication).</li>
            <li>
              Gra w kółko i krzyżyk na planszy <strong>n×n</strong> z możliwością
              konfiguracji rozmiaru.
            </li>
            <li>
              Zapis stanu gry do bazy <strong>Cloud Firestore</strong> i
              podgląd listy zapisanych gier.
            </li>
            <li>
              Strona profilu użytkownika oraz zmiana hasła i wylogowanie.
            </li>
            <li>
              Ustawienia wyglądu planszy (kolory, rozmiary pól i symboli)
              zapisywane w <strong>localStorage</strong>.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Technologie:</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Next.js (App Router)</li>
            <li>React + Context API</li>
            <li>Tailwind CSS + DaisyUI</li>
            <li>Firebase Authentication</li>
            <li>Cloud Firestore</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Autor:</h3>
          <p className="mb-1">
            Imię i nazwisko: <strong>Twoje imię i nazwisko</strong>
          </p>
          <p className="mb-4">
            Numer albumu: <strong>12345</strong>
          </p>

          <p className="text-sm opacity-70">
            Projekt został przygotowany w roku akademickim 2024/2025 na potrzeby
            zajęć laboratoryjnych z programowania frontendu.
          </p>
        </div>
      </div>
    </div>
  );
}
