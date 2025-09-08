import Head from "next/head";
import "../style/global.css";
// import { Header } from "@/components/Header";
import { HeaderSuspended } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title> Moviehunter - Discover Films</title>
        <meta name="description" content="Find your next favourite movie" />
      </Head>
      <body>
        <ScrollToTop />
        <HeaderSuspended />
        <main className="w-full p-4 min-h-screen dark:bg-gray-800 text-black dark:text-white">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
