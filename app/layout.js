export const metadata = {
  title: 'LaunchCore',
  description: 'Performance marketing agency for eCommerce brands',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
