/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon15Icon(props: Icon15IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.908 7.272L1 7l-.092-.272-.887-2.33a.551.551 0 01.321-.662l.186-.043h1.296a.545.545 0 01.5.334l.742 1.4 2.59-.077L4.345.707a.544.544 0 01.321-.663L4.858 0h1.67a.54.54 0 01.499.324L9.59 5.208l2.56-.078a1.792 1.792 0 011.311.54c.329.343.52.795.538 1.27v.12c-.018.475-.21.927-.538 1.27a1.79 1.79 0 01-1.312.54L9.59 8.792l-2.564 4.884a.539.539 0 01-.5.324H4.859l-.192-.044a.545.545 0 01-.321-.663l1.31-4.643-2.59-.078-.743 1.4a.545.545 0 01-.499.335H.528l-.186-.043a.552.552 0 01-.32-.662l.886-2.33z"
        }
        fill={"currentcolor"}
      ></path>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */
