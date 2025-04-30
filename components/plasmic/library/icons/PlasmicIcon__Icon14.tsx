/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon14Icon(props: Icon14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 14 14"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.474 7.16L1.528 7l-.054-.16-.092-.272-.003-.009-.004-.008L.5 4.25a.051.051 0 01.016-.042l.069-.016h1.237a.045.045 0 01.04.028l.01.02.01.02.742 1.4.146.276.311-.01 2.59-.077.64-.02-.173-.616L4.826.57h0L4.823.564a.044.044 0 01.013-.046L4.916.5h1.612v0h.004a.04.04 0 01.036.024l.008.016.008.016 2.564 4.885.146.276.312-.01 2.556-.077a1.291 1.291 0 01.94.387c.242.253.383.584.398.933v.1c-.015.349-.156.68-.398.933a1.29 1.29 0 01-.94.387l-2.556-.078-.312-.01-.146.277-2.564 4.885-.008.016-.008.016a.04.04 0 01-.036.024v0H4.915l-.08-.018a.044.044 0 01-.012-.045h0l.003-.008 1.312-4.643.174-.616-.64-.02-2.59-.077-.312-.01-.146.275-.742 1.4-.01.02-.01.021a.045.045 0 01-.04.028H.585l-.07-.016A.052.052 0 01.5 9.749l.875-2.3.004-.008.003-.009.092-.272z"
        }
        fill={"currentcolor"}
        stroke={"#E6E6E6"}
      ></path>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
