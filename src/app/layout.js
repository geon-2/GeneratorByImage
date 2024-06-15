import MetaHead from '../components/MetaHead';
import '../styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <MetaHead />
      <body>
        {children}
      </body>
    </html>
  );
}
