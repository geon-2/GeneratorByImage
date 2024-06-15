import styles from '../styles/Home.module.css';
import UploadForm from '../components/UploadForm';
import DisplayAds from '../components/DisplayAds';

export default function Home() {
  return (
    <section className={styles.mainSection}>
      <h1>Meme Generator</h1>
      <div>
        <UploadForm />
      </div>
      <DisplayAds />
    </section>
  );
}