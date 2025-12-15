# TicTacToe NxN – Next.js + Firebase

Aplikacja webowa przedstawiająca rozszerzoną wersję gry **kółko i krzyżyk** na planszy **N×N**, z systemem rejestracji użytkowników, zapisem gier oraz konfiguracją ustawień.

Projekt wykonany w ramach **Laboratorium 6 – Temat 5**.

---

## 🔗 Wersja live aplikacji

👉 https://tic-tac-toe-next-ofyz6olwz-marcins-projects-6dd28fea.vercel.app/

---

## 🧩 Funkcjonalności

- Gra w kółko i krzyżyk na planszy **N×N**
- Konfigurowalny rozmiar planszy
- Rejestracja i logowanie użytkowników
- Zmiana hasła oraz wylogowanie
- Profil użytkownika
- Zapis i odczyt stanu gry
- Automatyczne wykrywanie wygranej
- Responsywny interfejs użytkownika
- Nowoczesny wygląd oparty o DaisyUI

---

## 🛠 Technologie

- Next.js 16 (App Router)
- React
- Firebase Authentication
- Firebase Firestore
- Tailwind CSS
- DaisyUI
- Vercel (deployment)

---

## 🚀 Uruchomienie lokalne

1. Sklonuj repozytorium:
```bash
git clone https://github.com/MarcinPalys/TicTacToeNextJs.git
cd TicTacToeNextJs

2. Zainstaluj zależności:
npm install

3. Utwórz plik .env.local w katalogu głównym projektu i dodaj:
NEXT_PUBLIC_API_KEY=...
NEXT_PUBLIC_AUTH_DOMAIN=...
NEXT_PUBLIC_PROJECT_ID=...
NEXT_PUBLIC_STORAGE_BUCKET=...
NEXT_PUBLIC_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_APP_ID=...

4. Uruchom aplikację:
npm run dev
