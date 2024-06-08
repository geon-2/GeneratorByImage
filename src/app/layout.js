import Link from "next/link";
import '../styles/global.css';

export const metadata = {
  title: "Custom Meme Generator",
  description: "Create your own memes with this simple meme generator.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <h1><Link href="/">밈 생성기</Link></h1>
          <nav>
            <ul>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
