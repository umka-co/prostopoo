"use client";

import { useMediaQuery } from "usehooks-ts";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button";
import Typo from "@/components/Typo";
import Board from "@/components/Board/Board";
import { useOnMobile } from "@/config";
import Bubble from "@/components/Bubble";

import ustilka from "./ustilka-mobile.png";

export default function Home() {
  const onMobile = useMediaQuery(useOnMobile);
  return onMobile ? (
    <div className={styles.wrapperMobile}>
      <div className={styles.stackColumn}>
        <Image
          src="/logo.svg"
          alt="Prostopoo logo"
          className={styles.logo}
          width={300}
          height={70}
        />

        <Typo maxWidth="400px" variant="header1">
          {" "}
          ОТРИМАЙ СВОЮ ІНДИВІДУАЛЬНУ УСТІЛКУ
        </Typo>
      </div>
      <Board />
      <div className={styles.stackColumn}>
        <div
          style={{
            display: "flex",

            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Bubble borderColor="yellow">ДИТЯЧІ</Bubble>
          <Bubble borderColor="red">СПОРТИВНІ</Bubble>
        </div>
        <div
          style={{
            display: "flex",

            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Bubble borderColor="blue">ДІАБЕТИЧНІ</Bubble>
          <Bubble borderColor="green">УНІВЕРСАЛЬНІ</Bubble>
        </div>
      </div>
      <Button>Замовити устілку</Button>
      <Image
        alt="Процес виготовлення індивідуальної устілки"
        src={ustilka.src}
        height={170}
        width={340}
      />
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
          gap: "3rem",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typo maxWidth="900px" variant="header1">
          ОТРИМАЙ СВОЮ ІНДИВІДУАЛЬНУ УСТІЛКУ
        </Typo>
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
