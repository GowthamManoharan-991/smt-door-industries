import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* TEST */}
        <div style={{ position: "fixed", top: 0, right: 0, background: "red", color: "white", zIndex: 9999 }}>
          LAYOUT WORKING
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}