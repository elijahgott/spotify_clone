// npm run dev
import styles from './page.module.css'

import Main from "./_components/Main.jsx"
import LeftMenu from "./_components/LeftMenu";

export default function Home() {
  return (
    <div className={styles.page}>
      <LeftMenu />
      <Main />
    </div>
  );
}
