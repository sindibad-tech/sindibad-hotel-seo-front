/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p1fHvJbiLdgzRrAS359KQb
// Component: W8g1z9kFPMYL

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

import BrandingSindibadLogo from "../../BrandingSindibadLogo"; // plasmic-import: 8Pe_x-tsspwf/component
import BrandingSindibadType from "../../BrandingSindibadType"; // plasmic-import: 1xSpHr0lC9O3/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: p1fHvJbiLdgzRrAS359KQb/projectcss
import sty from "./PlasmicBrandingSindibadLogotype.module.css"; // plasmic-import: W8g1z9kFPMYL/css

createPlasmicElementProxy;

export type PlasmicBrandingSindibadLogotype__VariantMembers = {
  typeOnly: "typeOnly";
  logoOnly: "logoOnly";
};
export type PlasmicBrandingSindibadLogotype__VariantsArgs = {
  typeOnly?: SingleBooleanChoiceArg<"typeOnly">;
  logoOnly?: SingleBooleanChoiceArg<"logoOnly">;
};
type VariantPropType = keyof PlasmicBrandingSindibadLogotype__VariantsArgs;
export const PlasmicBrandingSindibadLogotype__VariantProps =
  new Array<VariantPropType>("typeOnly", "logoOnly");

export type PlasmicBrandingSindibadLogotype__ArgsType = {};
type ArgPropType = keyof PlasmicBrandingSindibadLogotype__ArgsType;
export const PlasmicBrandingSindibadLogotype__ArgProps =
  new Array<ArgPropType>();

export type PlasmicBrandingSindibadLogotype__OverridesType = {
  root?: Flex__<"div">;
  brandingSindibadLogo?: Flex__<typeof BrandingSindibadLogo>;
  brandingSindibadType?: Flex__<typeof BrandingSindibadType>;
};

export interface DefaultBrandingSindibadLogotypeProps {
  typeOnly?: SingleBooleanChoiceArg<"typeOnly">;
  logoOnly?: SingleBooleanChoiceArg<"logoOnly">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBrandingSindibadLogotype__RenderFunc(props: {
  variants: PlasmicBrandingSindibadLogotype__VariantsArgs;
  args: PlasmicBrandingSindibadLogotype__ArgsType;
  overrides: PlasmicBrandingSindibadLogotype__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "typeOnly",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.typeOnly
      },
      {
        path: "logoOnly",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.logoOnly
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      dir={"rtl"}
    >
      <BrandingSindibadLogo
        data-plasmic-name={"brandingSindibadLogo"}
        data-plasmic-override={overrides.brandingSindibadLogo}
        background={true}
        className={classNames("__wab_instance", sty.brandingSindibadLogo, {
          [sty.brandingSindibadLogotypeOnly]: hasVariant(
            $state,
            "typeOnly",
            "typeOnly"
          )
        })}
      />

      <BrandingSindibadType
        data-plasmic-name={"brandingSindibadType"}
        data-plasmic-override={overrides.brandingSindibadType}
        className={classNames("__wab_instance", sty.brandingSindibadType, {
          [sty.brandingSindibadTypelogoOnly]: hasVariant(
            $state,
            "logoOnly",
            "logoOnly"
          )
        })}
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "brandingSindibadLogo", "brandingSindibadType"],
  brandingSindibadLogo: ["brandingSindibadLogo"],
  brandingSindibadType: ["brandingSindibadType"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  brandingSindibadLogo: typeof BrandingSindibadLogo;
  brandingSindibadType: typeof BrandingSindibadType;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBrandingSindibadLogotype__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBrandingSindibadLogotype__VariantsArgs;
    args?: PlasmicBrandingSindibadLogotype__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBrandingSindibadLogotype__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBrandingSindibadLogotype__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicBrandingSindibadLogotype__ArgProps,
          internalVariantPropNames:
            PlasmicBrandingSindibadLogotype__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBrandingSindibadLogotype__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBrandingSindibadLogotype";
  } else {
    func.displayName = `PlasmicBrandingSindibadLogotype.${nodeName}`;
  }
  return func;
}

export const PlasmicBrandingSindibadLogotype = Object.assign(
  // Top-level PlasmicBrandingSindibadLogotype renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    brandingSindibadLogo: makeNodeComponent("brandingSindibadLogo"),
    brandingSindibadType: makeNodeComponent("brandingSindibadType"),

    // Metadata about props expected for PlasmicBrandingSindibadLogotype
    internalVariantProps: PlasmicBrandingSindibadLogotype__VariantProps,
    internalArgProps: PlasmicBrandingSindibadLogotype__ArgProps
  }
);

export default PlasmicBrandingSindibadLogotype;
/* prettier-ignore-end */
