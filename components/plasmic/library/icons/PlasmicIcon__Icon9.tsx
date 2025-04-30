/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M23 9.32a1.06 1.06 0 00-.1-.76 4.93 4.93 0 00-6.75-1.8L14 8 9 5.65a1 1 0 00-.92 0l-3 1.73a1 1 0 00-.04 1.71l3.3 2.08-1.74 1-4.78.58a1 1 0 00-.53 1.75l3.54 3.06a3 3 0 003.55.44L22.5 9.93a1 1 0 00.5-.61zm-15.53 7a1 1 0 01-1.2-.18l-1.9-1.63 2.73-.33a1 1 0 00.38-.13l3.36-1.93a1 1 0 00.378-1.342 1 1 0 00-.348-.368l-3.3-2.09 1.1-.63 5 2.32a1 1 0 00.92 0l2.56-1.48a3 3 0 013.36.29l-13.04 7.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
