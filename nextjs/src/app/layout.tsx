import MercuryProvider from "../components/MercuryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <MercuryProvider>{children}</MercuryProvider>
      </body>
    </html>
  );
}
