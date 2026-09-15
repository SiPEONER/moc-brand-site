import "./globals.css";

export const metadata = {
  title: "MOC Products — Brand Guidelines",
  description: "MOC Products Brand Identity & Logo Usage Guide (MOC-BSM-001).",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
