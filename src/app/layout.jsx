import './globals.css';

export const metadata = {
  title: 'Memotest - Next.js',
  description: 'Juego de Memoria en Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}