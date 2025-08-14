import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/myComponents/header";
import { SanityLive } from "@/sanity/lib/live";
import SaleBannerWrapper from "@/components/myComponents/saleBannerWrapper";
import { Navbar } from "@/components/myComponents/navbar";



export const metadata: Metadata = {
  title: "Ghanchis.pk",
  description: "The Smart Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
    <html lang="en">
      <body>
        <SaleBannerWrapper>
          <Header />
           <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}
        </SaleBannerWrapper>
        <SanityLive />
      </body>
    </html>
    </ClerkProvider>
  );
}
