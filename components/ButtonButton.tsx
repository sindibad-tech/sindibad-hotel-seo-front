import * as React from "react";
import {
  PlasmicButtonButton,
  DefaultButtonButtonProps
} from "./plasmic/library/PlasmicButtonButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface ButtonButtonProps extends DefaultButtonButtonProps {
  // Feel free to add any additional props that this component should receive
}
function ButtonButton_(props: ButtonButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButtonButton.useBehavior<ButtonButtonProps>(
    props,
    ref
  );
  return <PlasmicButtonButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<ButtonButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ButtonButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const ButtonButton = React.forwardRef(
  ButtonButton_
) as any as ButtonComponentType;

export default Object.assign(ButtonButton, { __plumeType: "button" });
