import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Container>
          <div className="z-100 relative">
            <Navbar />
          </div>
        </Container>
        <Main />
        <NextScript />
        {/* <Container>
          <Footer />
        </Container> */}
      </body>
    </Html>
  );
}
