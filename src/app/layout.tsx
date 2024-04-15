
import type { Metadata } from "next";
import './globals.css'


export const metadata: Metadata = {
  title: "NextJS tests",
  description: "A web application to tests my skills using nextjs framework",
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
