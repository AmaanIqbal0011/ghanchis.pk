import type { Metadata } from "next";

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
   
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
   
  );
}
