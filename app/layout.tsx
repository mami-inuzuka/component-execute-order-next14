export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  console.log("layout");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("layout after 1 sec");

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
