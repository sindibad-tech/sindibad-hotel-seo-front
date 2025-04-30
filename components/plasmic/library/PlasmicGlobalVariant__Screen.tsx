/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ScreenValue =
  | "mobileSmall"
  | "mobileBig"
  | "tablet"
  | "desktopDefault"
  | "mobileXsmall";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export const useScreenVariants = createUseScreenVariants(true, {
  mobileSmall: "(min-width:0px) and (max-width:743px)",
  mobileBig: "(max-width:833px)",
  tablet: "(max-width:1279px)",
  desktopDefault: "(max-width:1439px)",
  mobileXsmall: "(max-width:413px)",
});

export default ScreenContext;
/* prettier-ignore-end */
