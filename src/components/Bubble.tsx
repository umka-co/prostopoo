import React, { FunctionComponent } from "react";
import Typo, { TypoProps } from "./Typo/Typo";
import styles from "./Bubble.module.css";

interface Props extends TypoProps {
  borderColor: "blue" | "green" | "red" | "yellow";
}

const Bubble: FunctionComponent<Props> = ({ borderColor, children }) => {
  return (
    <Typo color="white" variant="text" className={styles[borderColor]}>
      {children}
    </Typo>
  );
};

export default Bubble;
