import Footer from '@/components/layout/footer';
import { Navbar } from '@/components/layout/floating-nav';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}