/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p1fHvJbiLdgzRrAS359KQb
// Component: 1xSpHr0lC9O3

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: p1fHvJbiLdgzRrAS359KQb/projectcss
import sty from "./PlasmicBrandingSindibadType.module.css"; // plasmic-import: 1xSpHr0lC9O3/css

import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: FAmpRlQgGnEr/icon

createPlasmicElementProxy;

export type PlasmicBrandingSindibadType__VariantMembers = {};
export type PlasmicBrandingSindibadType__VariantsArgs = {};
type VariantPropType = keyof PlasmicBrandingSindibadType__VariantsArgs;
export const PlasmicBrandingSindibadType__VariantProps =
  new Array<VariantPropType>();

export type PlasmicBrandingSindibadType__ArgsType = {};
type ArgPropType = keyof PlasmicBrandingSindibadType__ArgsType;
export const PlasmicBrandingSindibadType__ArgProps = new Array<ArgPropType>();

export type PlasmicBrandingSindibadType__OverridesType = {
  root?: Flex__<"svg">;
};

export interface DefaultBrandingSindibadTypeProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBrandingSindibadType__RenderFunc(props: {
  variants: PlasmicBrandingSindibadType__VariantsArgs;
  args: PlasmicBrandingSindibadType__ArgsType;
  overrides: PlasmicBrandingSindibadType__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <Icon8Icon
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      role={"img"}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBrandingSindibadType__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBrandingSindibadType__VariantsArgs;
    args?: PlasmicBrandingSindibadType__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBrandingSindibadType__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBrandingSindibadType__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBrandingSindibadType__ArgProps,
          internalVariantPropNames: PlasmicBrandingSindibadType__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBrandingSindibadType__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBrandingSindibadType";
  } else {
    func.displayName = `PlasmicBrandingSindibadType.${nodeName}`;
  }
  return func;
}

export const PlasmicBrandingSindibadType = Object.assign(
  // Top-level PlasmicBrandingSindibadType renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBrandingSindibadType
    internalVariantProps: PlasmicBrandingSindibadType__VariantProps,
    internalArgProps: PlasmicBrandingSindibadType__ArgProps
  }
);

export default PlasmicBrandingSindibadType;
/* prettier-ignore-end */
