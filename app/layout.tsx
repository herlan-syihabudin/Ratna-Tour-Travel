import "./globals.css";

export const metadata = {
  title: "Ratna Tour & Travel",
  description: "Layanan Umroh & Tour terpercaya, aman dan nyaman.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
