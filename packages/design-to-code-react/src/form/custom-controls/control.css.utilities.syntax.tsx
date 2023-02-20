import React from "react";
import { Syntax } from "design-to-code/dist/esm/css-data.syntax";
import { syntaxes } from "design-to-code/dist/esm/css-data";
import { RenderRefControlConfig } from "./control.css.utilities.props";
import { CSSRef } from "./control.css-ref";
import { renderColorPicker } from "./control.css.utilities";

/**
 * The syntax control, for a list of syntaxes available refer to:
 * https://github.com/mdn/data/blob/master/css/syntaxes.json
 *
 * These are provided from the design-to-code package
 * as TypeScript type.
 */
export function renderSyntaxControl(config: RenderRefControlConfig): JSX.Element {
    switch (config.ref.ref as Syntax) {
        case "<color>":
            return renderColorPicker(config);
        case "<absolute-size>":
        case "<alpha-value>":
        case "<angular-color-hint>":
        case "<angular-color-stop-list>":
        case "<angular-color-stop>":
        case "<animateable-feature>":
        case "<attachment>":
        case "<attr()>":
        case "<attr-matcher>":
        case "<attr-modifier>":
        case "<attribute-selector>":
        case "<auto-repeat>":
        case "<auto-track-list>":
        case "<baseline-position>":
        case "<basic-shape>":
        case "<bg-image>":
        case "<bg-layer>":
        case "<bg-position>":
        case "<bg-size>":
        case "<blend-mode>":
        case "<blur()>":
        case "<box>":
        case "<brightness()>":
        case "<calc()>":
        case "<calc-product>":
        case "<calc-sum>":
        case "<calc-value>":
        case "<cf-final-image>":
        case "<cf-mixing-image>":
        case "<circle()>":
        case "<clamp()>":
        case "<class-selector>":
        case "<clip-source>":
        case "<color-stop-angle>":
        case "<color-stop-length>":
        case "<color-stop-list>":
        case "<color-stop>":
        case "<combinator>":
        case "<common-lig-values>":
        case "<compat-auto>":
        case "<complex-selector-list>":
        case "<complex-selector>":
        case "<composite-style>":
        case "<compositing-operator>":
        case "<compound-selector-list>":
        case "<compound-selector>":
        case "<conic-gradient()>":
        case "<content-distribution>":
        case "<content-list>":
        case "<content-position>":
        case "<content-replacement>":
        case "<contextual-alt-values>":
        case "<contrast()>":
        case "<counter()>":
        case "<counter-style-name>":
        case "<counter-style>":
        case "<counters()>":
        case "<cross-fade()>":
        case "<cubic-bezier-timing-function>":
        case "<deprecated-system-color>":
        case "<discretionary-lig-values>":
        case "<display-box>":
        case "<display-inside>":
        case "<display-internal>":
        case "<display-legacy>":
        case "<display-listitem>":
        case "<display-outside>":
        case "<drop-shadow()>":
        case "<east-asian-variant-values>":
        case "<east-asian-width-values>":
        case "<element()>":
        case "<ellipse()>":
        case "<ending-shape>":
        case "<env()>":
        case "<explicit-track-list>":
        case "<family-name>":
        case "<feature-tag-value>":
        case "<feature-type>":
        case "<feature-value-block-list>":
        case "<feature-value-block>":
        case "<feature-value-declaration-list>":
        case "<feature-value-declaration>":
        case "<feature-value-name>":
        case "<fill-rule>":
        case "<filter-function-list>":
        case "<filter-function>":
        case "<final-bg-layer>":
        case "<fit-content()>":
        case "<fixed-breadth>":
        case "<fixed-repeat>":
        case "<fixed-size>":
        case "<font-stretch-absolute>":
        case "<font-variant-css21>":
        case "<font-weight-absolute>":
        case "<frequency-percentage>":
        case "<general-enclosed>":
        case "<generic-family>":
        case "<generic-name>":
        case "<geometry-box>":
        case "<gradient>":
        case "<grayscale()>":
        case "<grid-line>":
        case "<historical-lig-values>":
        case "<hsl()>":
        case "<hsla()>":
        case "<hue-rotate()>":
        case "<hue>":
        case "<id-selector>":
        case "<image()>":
        case "<image-set()>":
        case "<image-set-option>":
        case "<image-src>":
        case "<image-tags>":
        case "<image>":
        case "<inflexible-breadth>":
        case "<inset()>":
        case "<invert()>":
        case "<keyframe-block-list>":
        case "<keyframe-block>":
        case "<keyframe-selector>":
        case "<keyframes-name>":
        case "<leader()>":
        case "<leader-type>":
        case "<length-percentage>":
        case "<line-name-list>":
        case "<line-names>":
        case "<line-style>":
        case "<line-width>":
        case "<linear-color-hint>":
        case "<linear-color-stop>":
        case "<linear-gradient()>":
        case "<mask-layer>":
        case "<mask-position>":
        case "<mask-reference>":
        case "<mask-source>":
        case "<masking-mode>":
        case "<matrix()>":
        case "<matrix3d()>":
        case "<max()>":
        case "<media-and>":
        case "<media-condition-without-or>":
        case "<media-condition>":
        case "<media-feature>":
        case "<media-in-parens>":
        case "<media-not>":
        case "<media-or>":
        case "<media-query-list>":
        case "<media-query>":
        case "<media-type>":
        case "<mf-boolean>":
        case "<mf-name>":
        case "<mf-plain>":
        case "<mf-range>":
        case "<mf-value>":
        case "<min()>":
        case "<minmax()>":
        case "<named-color>":
        case "<namespace-prefix>":
        case "<ns-prefix>":
        case "<nth>":
        case "<number-percentage>":
        case "<numeric-figure-values>":
        case "<numeric-fraction-values>":
        case "<numeric-spacing-values>":
        case "<opacity()>":
        case "<outline-radius>":
        case "<overflow-position>":
        case "<page-body>":
        case "<page-margin-box-type>":
        case "<page-margin-box>":
        case "<page-selector-list>":
        case "<page-selector>":
        case "<paint()>":
        case "<path()>":
        case "<perspective()>":
        case "<polygon()>":
        case "<position>":
        case "<pseudo-class-selector>":
        case "<pseudo-element-selector>":
        case "<pseudo-page>":
        case "<quote>":
        case "<radial-gradient()>":
        case "<relative-selector-list>":
        case "<relative-selector>":
        case "<relative-size>":
        case "<repeat-style>":
        case "<repeating-linear-gradient()>":
        case "<repeating-radial-gradient()>":
        case "<rgb()>":
        case "<rgba()>":
        case "<rotate()>":
        case "<rotate3d()>":
        case "<rotateX()>":
        case "<rotateY()>":
        case "<rotateZ()>":
        case "<saturate()>":
        case "<scale()>":
        case "<scale3d()>":
        case "<scaleX()>":
        case "<scaleY()>":
        case "<scaleZ()>":
        case "<self-position>":
        case "<sepia()>":
        case "<shadow-t>":
        case "<shadow>":
        case "<shape-box>":
        case "<shape-radius>":
        case "<shape>":
        case "<side-or-corner>":
        case "<single-animation-direction>":
        case "<single-animation-fill-mode>":
        case "<single-animation-iteration-count>":
        case "<single-animation-play-state>":
        case "<single-animation>":
        case "<single-transition-property>":
        case "<single-transition>":
        case "<size>":
        case "<skew()>":
        case "<skewX()>":
        case "<skewY()>":
        case "<step-position>":
        case "<step-timing-function>":
        case "<subclass-selector>":
        case "<supports-condition>":
        case "<supports-decl>":
        case "<supports-feature>":
        case "<supports-in-parens>":
        case "<supports-selector-fn>":
        case "<symbol>":
        case "<target-counter()>":
        case "<target-counters()>":
        case "<target-text()>":
        case "<target>":
        case "<time-percentage>":
        case "<timing-function>":
        case "<track-breadth>":
        case "<track-list>":
        case "<track-repeat>":
        case "<track-size>":
        case "<transform-function>":
        case "<transform-list>":
        case "<translate()>":
        case "<translate3d()>":
        case "<translateX()>":
        case "<translateY()>":
        case "<translateZ()>":
        case "<type-or-unit>":
        case "<type-selector>":
        case "<var()>":
        case "<viewport-length>":
        case "<wq-name>":
        default:
            return (
                <CSSRef
                    key={config.ref.ref as string}
                    syntax={syntaxes[config.ref.ref.slice(1, -1) as string].value}
                    onChange={config.handleChange}
                    value={config.value}
                    dictionaryId={config.dictionaryId}
                    dataLocation={config.dataLocation}
                    stylesheets={config.stylesheets}
                />
            );
    }
}
