import '@/globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer backgroundColor="bg-light-gold" />
    </main>
  );
}
