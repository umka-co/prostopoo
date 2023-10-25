import Link from "next/link";
import {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
} from "react";
import styles from "./Button.module.css";
import Typo from "../Typo";

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
  const buttonClass = useMemo(
    () => [styles.button, className].filter(Boolean).join(" "),
    [className]
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
