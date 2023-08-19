import './input.css';

export const metadata = {
  title: 'Fenya',
  description: 'online-shopping',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}