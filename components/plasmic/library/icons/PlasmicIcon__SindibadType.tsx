/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SindibadTypeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SindibadTypeIcon(props: SindibadTypeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 98 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27.157 23.703h-2.362c-3.906 0-7.084-3.19-7.084-7.11V1.184L22.434 0v16.592a2.367 2.367 0 002.361 2.37h2.362a2.368 2.368 0 002.361-2.37v-3.555l4.723-1.185v4.74c0 3.922-3.178 7.111-7.084 7.111zM1.18 18.963L0 23.703h7.084c3.907 0 7.085-3.19 7.085-7.11 0-3.922-3.178-7.112-7.085-7.112H3.542l-1.18 4.741h4.722a2.368 2.368 0 012.362 2.37c0 1.308-1.06 2.37-2.362 2.37H1.181zM23.613 32l4.723-1.185v-4.741l-4.723 1.185V32zM62.578 8.297l-4.723 1.185V4.741l4.722-1.185v4.74zM36.602 23.703l1.181-4.74h5.904a2.368 2.368 0 002.361-2.328v-.091a2.368 2.368 0 00-2.361-2.322h-4.723l1.18-4.74h3.543c3.906 0 7.084 3.19 7.084 7.11v.043a2.368 2.368 0 002.361 2.328h2.362a2.368 2.368 0 002.361-2.345v-3.581l4.724-1.185v4.767a2.368 2.368 0 002.36 2.344H98l-1.18 4.74H64.94a7.041 7.041 0 01-4.723-1.814 7.041 7.041 0 01-4.723 1.814h-2.362a7.042 7.042 0 01-4.722-1.814 7.041 7.041 0 01-4.723 1.814h-7.084z"
        }
        fill={"currentcolor"}
      ></path>
    </svg>
  );
}

export default SindibadTypeIcon;
/* prettier-ignore-end */
