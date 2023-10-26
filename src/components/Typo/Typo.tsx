import { useMediaQuery } from "usehooks-ts";
import {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
} from "react";
import stylesDesktop from "./TypoDesktop.module.css";
import stylesMobile from "./TypoMobile.module.css";
import { useOnMobile } from "@/config";

export interface TypoProps
  extends PropsWithChildren<HTMLAttributes<HTMLSpanElement>> {
  color?: "black" | "white" | "yellow";
  maxWidth?: string;
  variant?: "header1" | "header2" | "header3" | "header4" | "text";
}

const Typo: FunctionComponent<TypoProps> = ({
  className,
  children,
  color = "white",
  maxWidth,
  variant = "text",
  ...otherProps
}) => {
  const onMobile = useMediaQuery(useOnMobile);
  const styles = onMobile ? stylesMobile : stylesDesktop;
  const classNameToRender = useMemo(
    () => [className, styles[color], styles[variant]].filter(Boolean).join(" "),
    [className, color, variant, styles]
  );

  return (
    <span
      className={classNameToRender}
      style={{ maxWidth: maxWidth }}
      {...otherProps}
    >
      {children}
    </span>
  );
};

export default Typo;
