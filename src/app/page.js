// npm run dev
import Image from "next/image";
import styles from "./page.module.css";
import './global.css';

import Main from "./_components/Main.jsx"

export default function Home() {
  return (
    <div className={styles.page}>
      <Main />
    </div>
  );
}
