import "./globals.css";
import HeadIndex from "./head";

/* Exportando metadatas para SEO */

export const metadata = {
  title: {
    default: "Aplicação",
    template: "%s | Aplicação",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <HeadIndex /> */}
      <body>
        <p>Aquilo que é colocado na RootLayout permanece na troca de rotas</p>
        {children}
      </body>
    </html>
  );
}
