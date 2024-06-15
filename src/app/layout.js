import Link from "next/link";
import '../styles/global.css';

export const metadata = {
  title: "Custom Meme Generator",
  description: "Create your own memes with this simple meme generator.",
  'google-adsense-account': 'ca-pub-7847773430575106'
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
