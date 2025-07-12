// npm run dev
import styles from './page.module.css'

import Main from "./_components/Main.jsx"
import LibraryMenu from "./_components/LibraryMenu";
import NowPlaying from './_components/NowPlaying';

export default function Home() {
  return (
    <div className={styles.page}>
      <LibraryMenu />
      <Main />
      <NowPlaying />
    </div>
  );
}
