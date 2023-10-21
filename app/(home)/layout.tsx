import '@/globals.css';
import Navbar from '@/components/navbar-home';
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
      <Footer backgroundColor="bg-white" />
    </main>
  );
}
