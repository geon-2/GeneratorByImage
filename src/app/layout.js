import '../styles/global.css';

export const metadata = {
  title: "Auto Meme Generator",
  description: "Create your own memes with this simple meme generator.",
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7847773430575106"
     crossorigin="anonymous"></script>
        {children}
      </body>
    </html>
  );
}
