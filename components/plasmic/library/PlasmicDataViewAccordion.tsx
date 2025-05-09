/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p1fHvJbiLdgzRrAS359KQb
// Component: 0tcJCKmJcWsw

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
import sty from "./PlasmicDataViewAccordion.module.css"; // plasmic-import: 0tcJCKmJcWsw/css

import ChevronDownSvgIcon from "./icons/PlasmicIcon__ChevronDownSvg"; // plasmic-import: dAsCDgVdv1gk/icon

createPlasmicElementProxy;

export type PlasmicDataViewAccordion__VariantMembers = {
  open: "open";
};
export type PlasmicDataViewAccordion__VariantsArgs = {
  open?: SingleBooleanChoiceArg<"open">;
};
type VariantPropType = keyof PlasmicDataViewAccordion__VariantsArgs;
export const PlasmicDataViewAccordion__VariantProps =
  new Array<VariantPropType>("open");

export type PlasmicDataViewAccordion__ArgsType = {
  dir?: string;
  q?: string;
  a?: string;
};
type ArgPropType = keyof PlasmicDataViewAccordion__ArgsType;
export const PlasmicDataViewAccordion__ArgProps = new Array<ArgPropType>(
  "dir",
  "q",
  "a"
);

export type PlasmicDataViewAccordion__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  h3?: Flex__<"h3">;
  svg?: Flex__<"svg">;
  text?: Flex__<"div">;
};

export interface DefaultDataViewAccordionProps {
  dir?: string;
  q?: string;
  a?: string;
  open?: SingleBooleanChoiceArg<"open">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDataViewAccordion__RenderFunc(props: {
  variants: PlasmicDataViewAccordion__VariantsArgs;
  args: PlasmicDataViewAccordion__ArgsType;
  overrides: PlasmicDataViewAccordion__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          dir: "rtl",
          q: "Question",
          a: "Answer"
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
        path: "open",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.open
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
        sty.root,
        { [sty.rootopen]: hasVariant($state, "open", "open") }
      )}
      dir={(() => {
        try {
          return $props.dir;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          }
          throw e;
        }
      })()}
      onClick={async event => {
        const $steps = {};

        $steps["updateOpen"] = true
          ? (() => {
              const actionArgs = {
                vgroup: "open",
                operation: 2,
                value: "open"
              };
              return (({ vgroup, value }) => {
                if (typeof value === "string") {
                  value = [value];
                }

                const oldValue = $stateGet($state, vgroup);
                $stateSet($state, vgroup, !oldValue);
                return !oldValue;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["updateOpen"] != null &&
          typeof $steps["updateOpen"] === "object" &&
          typeof $steps["updateOpen"].then === "function"
        ) {
          $steps["updateOpen"] = await $steps["updateOpen"];
        }
      }}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxopen]: hasVariant($state, "open", "open")
        })}
      >
        <h3
          data-plasmic-name={"h3"}
          data-plasmic-override={overrides.h3}
          className={classNames(
            projectcss.all,
            projectcss.h3,
            projectcss.__wab_text,
            sty.h3,
            { [sty.h3open]: hasVariant($state, "open", "open") }
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.q;
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
        </h3>
        <ChevronDownSvgIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg, {
            [sty.svgopen]: hasVariant($state, "open", "open")
          })}
          role={"img"}
        />
      </Stack__>
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.textopen]: hasVariant($state, "open", "open")
        })}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.a;
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
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "h3", "svg", "text"],
  freeBox: ["freeBox", "h3", "svg"],
  h3: ["h3"],
  svg: ["svg"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  h3: "h3";
  svg: "svg";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDataViewAccordion__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDataViewAccordion__VariantsArgs;
    args?: PlasmicDataViewAccordion__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDataViewAccordion__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDataViewAccordion__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicDataViewAccordion__ArgProps,
          internalVariantPropNames: PlasmicDataViewAccordion__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDataViewAccordion__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDataViewAccordion";
  } else {
    func.displayName = `PlasmicDataViewAccordion.${nodeName}`;
  }
  return func;
}

export const PlasmicDataViewAccordion = Object.assign(
  // Top-level PlasmicDataViewAccordion renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h3: makeNodeComponent("h3"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicDataViewAccordion
    internalVariantProps: PlasmicDataViewAccordion__VariantProps,
    internalArgProps: PlasmicDataViewAccordion__ArgProps
  }
);

export default PlasmicDataViewAccordion;
/* prettier-ignore-end */
