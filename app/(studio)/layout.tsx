export const metadata = {
  title: "Studio — Berkshire Safety Consultants",
  robots: { index: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
