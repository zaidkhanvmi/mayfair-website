import "@/styles/globals.css";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Container>
        <div className="z-[100] relative">
          <Navbar />
        </div>
      </Container>
      <main className={`${inter.className}`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
