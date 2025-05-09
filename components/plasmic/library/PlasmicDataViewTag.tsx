/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p1fHvJbiLdgzRrAS359KQb
// Component: 8ZE8W4PT1ugo

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
import sty from "./PlasmicDataViewTag.module.css"; // plasmic-import: 8ZE8W4PT1ugo/css

createPlasmicElementProxy;

export type PlasmicDataViewTag__VariantMembers = {
  coloring:
    | "normal"
    | "green"
    | "red"
    | "gray"
    | "yellow"
    | "blue"
    | "orange"
    | "bronze";
  big: "big";
  inverted: "inverted";
};
export type PlasmicDataViewTag__VariantsArgs = {
  coloring?: SingleChoiceArg<
    | "normal"
    | "green"
    | "red"
    | "gray"
    | "yellow"
    | "blue"
    | "orange"
    | "bronze"
  >;
  big?: SingleBooleanChoiceArg<"big">;
  inverted?: SingleBooleanChoiceArg<"inverted">;
};
type VariantPropType = keyof PlasmicDataViewTag__VariantsArgs;
export const PlasmicDataViewTag__VariantProps = new Array<VariantPropType>(
  "coloring",
  "big",
  "inverted"
);

export type PlasmicDataViewTag__ArgsType = { text?: string };
type ArgPropType = keyof PlasmicDataViewTag__ArgsType;
export const PlasmicDataViewTag__ArgProps = new Array<ArgPropType>("text");

export type PlasmicDataViewTag__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultDataViewTagProps {
  text?: string;
  coloring?: SingleChoiceArg<
    | "normal"
    | "green"
    | "red"
    | "gray"
    | "yellow"
    | "blue"
    | "orange"
    | "bronze"
  >;
  big?: SingleBooleanChoiceArg<"big">;
  inverted?: SingleBooleanChoiceArg<"inverted">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDataViewTag__RenderFunc(props: {
  variants: PlasmicDataViewTag__VariantsArgs;
  args: PlasmicDataViewTag__ArgsType;
  overrides: PlasmicDataViewTag__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          text: "text"
        },
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
        path: "coloring",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.coloring
      },
      {
        path: "big",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.big
      },
      {
        path: "inverted",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.inverted
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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootbig]: hasVariant($state, "big", "big"),
          [sty.rootcoloring_blue]: hasVariant($state, "coloring", "blue"),
          [sty.rootcoloring_bronze]: hasVariant($state, "coloring", "bronze"),
          [sty.rootcoloring_gray]: hasVariant($state, "coloring", "gray"),
          [sty.rootcoloring_green]: hasVariant($state, "coloring", "green"),
          [sty.rootcoloring_orange]: hasVariant($state, "coloring", "orange"),
          [sty.rootcoloring_red]: hasVariant($state, "coloring", "red"),
          [sty.rootcoloring_yellow]: hasVariant($state, "coloring", "yellow"),
          [sty.rootinverted]: hasVariant($state, "inverted", "inverted"),
          [sty.rootinverted_coloring_blue]:
            hasVariant($state, "inverted", "inverted") &&
            hasVariant($state, "coloring", "blue"),
          [sty.rootinverted_coloring_bronze]:
            hasVariant($state, "inverted", "inverted") &&
            hasVariant($state, "coloring", "bronze"),
          [sty.rootinverted_coloring_gray]:
            hasVariant($state, "inverted", "inverted") &&
            hasVariant($state, "coloring", "gray"),
          [sty.rootinverted_coloring_green]:
            hasVariant($state, "inverted", "inverted") &&
            hasVariant($state, "coloring", "green"),
          [sty.rootinverted_coloring_orange]:
            hasVariant($state, "inverted", "inverted") &&
            hasVariant($state, "coloring", "orange"),
          [sty.rootinverted_coloring_red]:
            hasVariant($state, "inverted", "inverted") &&
            hasVariant($state, "coloring", "red"),
          [sty.rootinverted_coloring_yellow]:
            hasVariant($state, "inverted", "inverted") &&
            hasVariant($state, "coloring", "yellow")
        }
      )}
    >
      <React.Fragment>
        {(() => {
          try {
            return $props.text;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}
      </React.Fragment>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDataViewTag__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDataViewTag__VariantsArgs;
    args?: PlasmicDataViewTag__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDataViewTag__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDataViewTag__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicDataViewTag__ArgProps,
          internalVariantPropNames: PlasmicDataViewTag__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDataViewTag__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDataViewTag";
  } else {
    func.displayName = `PlasmicDataViewTag.${nodeName}`;
  }
  return func;
}

export const PlasmicDataViewTag = Object.assign(
  // Top-level PlasmicDataViewTag renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicDataViewTag
    internalVariantProps: PlasmicDataViewTag__VariantProps,
    internalArgProps: PlasmicDataViewTag__ArgProps
  }
);

export default PlasmicDataViewTag;
/* prettier-ignore-end */
