import Link from "next/link";
import {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
} from "react";
import styles from "./Button.module.css";
import Typo from "../Typo";
import { useMediaQuery } from "usehooks-ts";
import { useOnMobile } from "@/config";

interface Props
  extends PropsWithChildren<
    HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>
  > {
  className?: string;
  href?: string;
}

const Button: FunctionComponent<Props> = ({
  children,
  className,
  href,
  ...restOfProps
}) => {
  const onMobile = useMediaQuery(useOnMobile);
  const buttonClass = useMemo(
    () =>
      [onMobile ? styles.buttonMobile : styles.button, className]
        .filter(Boolean)
        .join(" "),
    [className, styles]
  );
  return href ? (
    <Link
      className={buttonClass}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...restOfProps}
    >
      <Typo color="black" variant="header4">
        {children}
      </Typo>
    </Link>
  ) : (
    <button className={buttonClass} {...restOfProps}>
      <Typo color="black" variant="header4">
        {children}
      </Typo>
    </button>
  );
};

export default Button;
