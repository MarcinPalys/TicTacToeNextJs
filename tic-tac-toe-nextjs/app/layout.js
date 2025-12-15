import "./globals.css";
import { AuthProvider } from "@/lib/AuthContext";
import ClientLayout from "./ClientLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="pl" data-theme="cupcake">
      <body className="min-h-screen bg-base-200">
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
