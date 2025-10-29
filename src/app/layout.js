import "./globals.css";

export const metadata = { title: "Kah Choo Ooi – Software Engineer" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefers ? 'dark' : 'light');
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
  } catch (e) {}
})();`,
          }}
        />
      </head>
      <body className="antialiased bg-white text-neutral-900">{children}</body>
    </html>
  );
}
