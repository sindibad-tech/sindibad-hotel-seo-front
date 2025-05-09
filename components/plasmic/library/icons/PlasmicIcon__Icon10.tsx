/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.72 14.76c.35-.85.54-1.76.54-2.76 0-.72-.11-1.41-.3-2.05-.65.15-1.33.23-2.04.23A9.07 9.07 0 019.5 6.34a9.21 9.21 0 01-4.73 4.88c-.04.25-.04.52-.04.78A7.27 7.27 0 0012 19.27c1.05 0 2.06-.23 2.97-.64.57 1.09.83 1.63.81 1.63-1.64.55-2.91.82-3.78.82-2.42 0-4.73-.95-6.43-2.66a9.03 9.03 0 01-2.24-3.69H2v-4.55h1.09a9.09 9.09 0 0115.33-4.6 8.991 8.991 0 012.47 4.6H22v4.55h-.06L18.38 18l-5.3-.6v-1.67h4.83l.81-.97zm-9.45-2.99c.3 0 .59.12.8.34a1.136 1.136 0 010 1.6c-.21.21-.5.33-.8.33-.63 0-1.14-.5-1.14-1.13 0-.63.51-1.14 1.14-1.14zm5.45 0c.63 0 1.13.51 1.13 1.14 0 .63-.5 1.13-1.13 1.13a1.131 1.131 0 01-.806-1.936 1.14 1.14 0 01.806-.334z"
        }
        fill={"currentcolor"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
