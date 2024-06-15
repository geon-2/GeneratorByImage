import '../styles/global.css';

export const metadata = {
  title: "Auto Meme Generator",
  description: "Create your own memes with this simple meme generator.",
  googleAdsenseAccount: "ca-pub-7847773430575106",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Auto Meme Generator",
    description: "Create your own memes with this simple meme generator.",
    url: "https://www.memegenerator.kr/",
    type: "website",
  },
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
