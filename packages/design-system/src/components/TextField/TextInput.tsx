import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

export type TextInputDefaultValue = string | number;
export type TextInputMask = 'currency' | 'phone' | 'ssn' | 'zip';
export type TextInputRows = number | string;
export type TextInputSize = 'small' | 'medium';
export type TextInputValue = string | number;
export type TextInputErrorPlacement = 'top' | 'bottom';

export type OmitProps = 'size' | 'ref';

export type CommonTextInputProps<MultilineValue extends boolean | undefined> = Omit<
  React.ComponentPropsWithoutRef<MultilineValue extends true ? 'textarea' : 'input'>,
  OmitProps
> & {
  /**
   * Apply an `aria-label` to the text field to provide additional
   * context to assistive devices.
   */
  ariaLabel?: string;
  /**
   * Sets the initial value. Use this for an uncontrolled component; otherwise,
   * use the `value` property.
   */
  defaultValue?: TextInputDefaultValue;
  disabled?: boolean;
  /**
   * The ID of the error message applied to the Select field.
   */
  errorId?: string;
  errorMessage?: React.ReactNode;
  /**
   * Location of the error message relative to the field input
   */
  errorPlacement?: TextInputErrorPlacement;
  /**
   * Additional classes to be added to the field element
   */
  fieldClassName?: string;
  /**
   * A unique `id` to be used on the text field.
   */
  id?: string;
  /**
   * Applies the "inverse" UI theme
   */
  inversed?: boolean;
  /**
   * Whether or not the text field is a multiline text field
   */
  multiline?: MultilineValue;
  name?: string;
  /**
   * Sets `inputMode`, `type`, and `pattern` to improve accessibility and consistency for number fields. Use this prop instead of `type="number"`, see [here](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/) for more information.
   */
  numeric?: boolean;
  onBlur?: (
    e: React.FocusEvent<MultilineValue extends true ? HTMLTextAreaElement : HTMLInputElement>
  ) => any;
  onChange?: (
    event: React.ChangeEvent<MultilineValue extends true ? HTMLTextAreaElement : HTMLInputElement>
  ) => any;
  /**
   * @hide-prop HTML `input` [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).
   */
  pattern?: string;
  /**
   * Optionally specify the number of visible text lines for the field. Only
   * applicable if this is a multiline field.
   */
  rows?: TextInputRows;
  setRef?: (...args: any[]) => any;
  /**
   * Set the max-width of the input either to `'small'` or `'medium'`.
   */
  size?: TextInputSize;
  /**
   * HTML `input` [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#<input>_types) attribute. If you are using `type=number` please use the numeric prop instead.
   */
  type: string;
  /**
   * Sets the input's `value`. Use this in combination with `onChange`
   * for a controlled component; otherwise, set `defaultValue`.
   */
  value?: TextInputValue;
};

export type MultilineTextInputProps = CommonTextInputProps<true>;
export type SingleLineTextInputProps = CommonTextInputProps<false | undefined>;

export type TextInputProps = MultilineTextInputProps | SingleLineTextInputProps;

/**
 * <TextInput> is an internal component used by <TextField>, which wraps it and handles shared form UI like labels, error messages, etc
 * <TextInput> is also exported for advanced design system use cases, where the internal component can be leveraged to build custom form components
 * As an internal component, it's subject to more breaking changes. Exercise caution using <TextInput> outside of those special cases
 */
const TextInput: FunctionComponent<TextInputProps> = (props: TextInputProps) => {
  const {
    ariaLabel,
    errorId,
    errorMessage,
    errorPlacement,
    fieldClassName,
    inversed,
    multiline,
    numeric,
    onCopyCapture,
    pattern,
    rows,
    setRef,
    size,
    type,
    ...inputProps
  } = props;

  const classes = classNames(
    'ds-c-field',
    {
      'ds-c-field--error': errorMessage,
      'ds-c-field--inverse': inversed,
    },
    size && `ds-c-field--${size}`,
    fieldClassName
  );

  let inputType = type;
  if (numeric) {
    inputType = 'text';
  } else if (multiline) {
    inputType = undefined;
  }

  const ComponentType = multiline ? 'textarea' : 'input';

  const numberRows: number = typeof rows === 'string' ? parseInt(rows) : rows;
  return (
    <ComponentType
      className={classes}
      ref={setRef}
      rows={multiline && numberRows ? numberRows : undefined}
      inputMode={numeric ? 'numeric' : undefined}
      pattern={numeric && !pattern ? '[0-9]*' : pattern}
      type={inputType}
      // @ts-ignore: The ClipboardEventHandler for textareas and inputs are incompatible, and TS
      // is failing to infer which one is being used here based on ComponentType.
      onCopyCapture={onCopyCapture}
      {...inputProps}
      aria-label={ariaLabel || props['aria-label']}
      // Use set `aria-invalid` based off errorMessage unless manually specified
      aria-invalid={props['aria-invalid'] ?? !!errorMessage}
      // Link input to bottom placed error message
      // Use of the classNames function for this is confusing
      aria-describedby={
        classNames(
          props['aria-describedby'],
          errorPlacement === 'bottom' && errorMessage && errorId
        ) || undefined
      }
    />
  );
};

export default TextInput;
