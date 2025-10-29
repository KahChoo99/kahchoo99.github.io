import "./globals.css";

export const metadata = { title: "Kah Choo Ooi – Software Engineer" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Helps browsers pick right UI colors */}
        <meta name="color-scheme" content="light dark" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#ffffff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0a0a0a"
        />

        {/* PRE-HYDRATION: set .dark class BEFORE paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){try{
  var s = localStorage.getItem('theme');
  var prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isDark = s ? s === 'dark' : prefers;
  var root = document.documentElement;
  if (isDark) root.classList.add('dark'); else root.classList.remove('dark');
}catch(e){}}();`,
          }}
        />
      </head>
      {/* Visible in both themes even if JS is delayed */}
      <body className="antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
