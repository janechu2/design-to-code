/** @jsx h */ /* Note: Set the JSX pragma to the wrapped version of createElement */
import h from "../../utilities/web-components/pragma"; /* Note: Import wrapped createElement. */
import React from "react";
import {
    RenderRefControlConfig,
    RenderSelectControlConfig,
} from "./control.css.utilities.props";

export function renderDefault(config: RenderRefControlConfig): JSX.Element {
    return renderTextInput(config);
}

function getInputChangeHandler(
    parentChangeHandler: (value: string) => void
): (e: React.ChangeEvent<HTMLInputElement>) => void {
    let timer: null | NodeJS.Timer = null;

    const handleCheck = (newValue: string) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            parentChangeHandler(newValue);
        }, 500);
    };

    return (e: React.ChangeEvent<HTMLInputElement>) => {
        handleCheck(e.currentTarget.value);
    };
}

// TODO: is there a better way to retrieve design system context and use the tagFor?
// this is currently an experimental component however this should be adjusted before
// documentation and export

export function renderTextInput(config: RenderRefControlConfig): JSX.Element {
    return (
        <fast-text-field
            {...{
                key: `${config.dictionaryId}::${config.dataLocation}`,
                events: {
                    input: getInputChangeHandler(config.handleChange),
                },
                ...(config.value
                    ? {
                          value: config.value,
                      }
                    : {}),
            }}
        ></fast-text-field>
    );
}

export function renderNumber(config: RenderRefControlConfig): JSX.Element {
    return (
        <fast-number-field
            {...{
                key: `${config.dictionaryId}::${config.dataLocation}`,
                events: {
                    input: getInputChangeHandler(config.handleChange),
                },
                ...(config.value
                    ? {
                          value: config.value,
                      }
                    : {}),
            }}
        ></fast-number-field>
    );
}

export function renderInteger(config: RenderRefControlConfig): JSX.Element {
    return (
        <fast-number-field
            {...{
                key: `${config.dictionaryId}::${config.dataLocation}`,
                events: {
                    input: getInputChangeHandler(config.handleChange),
                },
                step: 1,
                ...(config.value
                    ? {
                          value: config.value,
                      }
                    : {}),
            }}
        ></fast-number-field>
    );
}

function getCheckboxInputChangeHandler(
    parentChangeHandler: (value: string) => void,
    value: string
): (e: React.ChangeEvent<HTMLInputElement>) => void {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
        parentChangeHandler(e.currentTarget.checked ? value : "");
    };
}

export function renderCheckbox(config: RenderRefControlConfig): JSX.Element {
    return (
        <fast-checkbox
            {...{
                events: {
                    change: getCheckboxInputChangeHandler(
                        config.handleChange,
                        config.ref.ref as string
                    ),
                },
                ...(config.value
                    ? {
                          value: config.value,
                      }
                    : {}),
            }}
        >
            {config.ref.ref}
        </fast-checkbox>
    );
}

function getSelectionChangeHandler(
    parentChangeHandler: (value: string) => void
): (e: React.ChangeEvent<HTMLSelectElement>) => void {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
        parentChangeHandler(e.currentTarget.value);
    };
}

export function renderSelection(config: RenderSelectControlConfig): JSX.Element {
    const currentOption = config.options.find(
        option => option.displayName === config.value
    );
    const currentValue = currentOption ? `${currentOption.value}` : "";

    return (
        <fast-select
            key={`${config.dictionaryId}::${config.dataLocation}`}
            events={{
                change: getSelectionChangeHandler(config.handleChange),
            }}
        >
            {config.options.map(option => {
                return (
                    <fast-option
                        {...{
                            value: `${option.value}`,
                            key: `${config.dictionaryId}::${config.dataLocation}::${option.key}`,
                            ...(`${option.value}` === currentValue
                                ? {
                                      selected: "",
                                  }
                                : {}),
                        }}
                    >
                        {option.displayName}
                    </fast-option>
                );
            })}
        </fast-select>
    );
}

function getColorPickerChangeHandler(
    parentChangeHandler: (value: string) => void
): (e: React.ChangeEvent<HTMLInputElement>) => void {
    let timer: null | NodeJS.Timer = null;

    const handleCheck = (newValue: string) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            parentChangeHandler(newValue);
        }, 500);
    };

    return (e: React.ChangeEvent<HTMLInputElement>) => {
        handleCheck(e.currentTarget.value);
    };
}

export function renderColorPicker(config: RenderRefControlConfig): JSX.Element {
    return (
        <dtc-color-picker
            key={`${config.dictionaryId}::${config.dataLocation}`}
            value={config.value}
            events={{
                change: getColorPickerChangeHandler(config.handleChange),
            }}
            control-text-field-stylesheet={config.stylesheets.controlTextFieldStylesheet}
            common-input-stylesheet={config.stylesheets.commonInputStylesheet}
            common-default-font-stylesheet={
                config.stylesheets.commonDefaultFontStylesheet
            }
        ></dtc-color-picker>
    );
}
