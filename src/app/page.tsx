import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button";
import Typo from "@/components/Typo";
import Board from "@/components/Board/Board";
export default function Home() {
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="Prostopoo logo"
        className={styles.logo}
        width={555}
        height={100}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typo variant="header1"> ОТРИМАЙ СВОЮ ІНДИВІДУАЛЬНУ УСТІЛКУ</Typo>
        <Board />
        <Button>Замовити устілку</Button>
      </div>
    </div>
  );
}
