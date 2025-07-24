import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Sci-Fi Innovation Club',
  keywords: 'Sci-Fi, Innovation, Club, Chandigarh University, Technology, Science Fiction',
  authors: [{ name: 'Sandeep Vashishtha', url: 'https://github.com/sandeepvashishtha' }],
  creator: 'Sandeep Vashishtha',
  openGraph: {
    title: 'Sci-Fi Innovation Club',
    description: 'Official site of Sci-Fi Innovation Club, Chandigarh University',
    url: 'https://scifiinnovationclub.cu.edu.in',
    siteName: 'Sci-Fi Innovation Club',
    images: [
      {
        url: 'https://i.postimg.cc/6pMYd4JY/unnamed.png',
        width: 800,
        height: 600,
        alt: 'Sci-Fi Innovation Club Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  description: 'Official site of Sci-Fi Club, Chandigarh University',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/png" href="https://i.postimg.cc/6pMYd4JY/unnamed.png" />
      </head>
      <body className="bg-gray-950 text-white min-h-screen font-sans">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
