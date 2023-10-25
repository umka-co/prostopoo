import {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
} from "react";
import styles from "./Typo.module.css";

interface Props extends PropsWithChildren<HTMLAttributes<HTMLSpanElement>> {
  color?: "black" | "white" | "yellow";
  variant?: "header1" | "header2" | "header3" | "header4" | "text";
}

const Typo: FunctionComponent<Props> = ({
  className,
  children,
  color = "white",
  variant = "text",
  ...otherProps
}) => {
  const classNameToRender = useMemo(
    () => [className, styles[color], styles[variant]].join(" "),
    [className, color, variant, styles]
  );
  return (
    <span className={classNameToRender} {...otherProps}>
      {children}
    </span>
  );
};

export default Typo;
