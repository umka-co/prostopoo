"use client";

import { useMediaQuery } from "usehooks-ts";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button";
import Typo from "@/components/Typo";
import Board from "@/components/Board/Board";
import { useOnMobile } from "@/config";
import Bubble from "@/components/Bubble";

export default function Home() {
  const onMobile = useMediaQuery(useOnMobile);
  return onMobile ? (
    <div className={styles.wrapperMobile}>
      <Image
        src="/logo.svg"
        alt="Prostopoo logo"
        className={styles.logo}
        width={300}
        height={70}
      />

      <Typo variant="header1"> ОТРИМАЙ СВОЮ ІНДИВІДУАЛЬНУ УСТІЛКУ</Typo>
      <Board />
      <Button>Замовити устілку</Button>
    </div>
  ) : (
    <div className={styles.wrapper}>
      <Image
        src="/logo.svg"
        alt="Prostopoo logo"
        className={styles.logo}
        width={600}
        height={150}
      />
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typo variant="header1"> ОТРИМАЙ СВОЮ ІНДИВІДУАЛЬНУ УСТІЛКУ</Typo>
        <Board />
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Bubble borderColor="yellow">ДИТЯЧІ</Bubble>
          <Bubble borderColor="red">СПОРТИВНІ</Bubble>
          <Bubble borderColor="blue">ДІАБЕТИЧНІ</Bubble>
          <Bubble borderColor="green">УНІВЕРСАЛЬНІ</Bubble>
        </div>
        <Button>Замовити устілку</Button>
      </div>
    </div>
  );
}
