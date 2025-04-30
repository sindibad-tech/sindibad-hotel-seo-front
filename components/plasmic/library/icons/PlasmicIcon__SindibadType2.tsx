/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SindibadType2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SindibadType2Icon(props: SindibadType2IconProps) {
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
          "M37.783 18.963l-1.18 4.74h7.084a7.041 7.041 0 004.723-1.814 7.042 7.042 0 004.722 1.814h2.362a7.041 7.041 0 004.723-1.814 7.041 7.041 0 004.723 1.815h31.88L98 18.963H64.94a2.368 2.368 0 01-2.361-2.344v-4.767l-4.724 1.185v3.582a2.368 2.368 0 01-2.36 2.344h-2.363a2.368 2.368 0 01-2.36-2.329v-.042c0-3.92-3.179-7.11-7.085-7.11h-3.542l-1.181 4.74h4.723a2.368 2.368 0 012.36 2.322v.048l.001.043a2.368 2.368 0 01-2.361 2.328h-5.904zm-30.699 4.74H0l1.18-4.74h5.904a2.368 2.368 0 002.362-2.37 2.37 2.37 0 00-2.362-2.371H2.361l1.181-4.74h3.542c3.907 0 7.085 3.19 7.085 7.11 0 3.922-3.178 7.111-7.085 7.111zm20.073 0h-2.362c-3.906 0-7.084-3.19-7.084-7.11V1.184L22.434 0v16.592a2.367 2.367 0 002.361 2.37h2.362a2.368 2.368 0 002.361-2.37v-3.555l4.723-1.185v4.74c0 3.922-3.178 7.111-7.084 7.111zm35.42-15.406l-4.722 1.185V4.74l4.722-1.185v4.74zM28.336 30.815L23.613 32v-4.741l4.723-1.185v4.74z"
        }
        fill={"currentcolor"}
      ></path>
    </svg>
  );
}

export default SindibadType2Icon;
/* prettier-ignore-end */
