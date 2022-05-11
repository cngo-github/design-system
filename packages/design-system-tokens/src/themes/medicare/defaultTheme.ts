/*
 * Medicare.gov Default CMSDS Visual Theme
 */

import { animation, color, font, measure, media, radius, spacer, z } from '../../tokens';
import { to, ThemeTokens, ColorTokens } from '../../lib/types';
import { hexOpacity } from '../../lib/utility';

const description = 'Default Medicare.gov Theme';

const themeColors: ColorTokens = {
  // TODO: deprecate these old definitions
  'teal-700': color['teal-700'],
  'teal-500': color['teal-500'],
  'teal-300': color['teal-300'],
  'teal-100': color['teal-100'],
  'blue-700': color['lapis-700'],
  'blue-500': color['lapis-500'],
  'blue-300': color['lapis-300'],
  'blue-100': color['lapis-100'],
  'green-700': color['spring-700'],
  'green-500': color['spring-500'],
  'green-300': color['spring-100'],
  'green-100': color['spring-50'],
  'black-700': color['granite-900'],
  'black-500': color['granite-800'],
  'black-300': color['granite-700'],
  'black-200': color['granite-600'],
  'black-100': color['granite-100'],
  'black-50': color['granite-50'],
  'yellow-700': color['goldenrod-600'],
  'yellow-500': color['goldenrod-500'],
  'yellow-300': color['goldenrod-300'],
  'yellow-100': color['goldenrod-50'],
  'red-700': color['crimson-600'],
  'red-500': color['crimson-500'],
  'red-300': color['crimson-100'],
  'red-100': color['crimson-50'],
  //
  white: color.white,
  black: color.black,
  transparent: color.transparent,
  //
  background: color.white,
  'background-dialog': color.white,
  'background-dialog-mask': hexOpacity('#000000', 50),
  'background-inverse': color['teal-500'],
  //
  base: color['granite-800'],
  'base-inverse': color.white,
  //
  border: color['granite-100'],
  'border-dark': color['lapis-800'],
  'border-inverse': color.white,
  //
  'cool-blue': color['sapphire-600'],
  'cool-blue-light': color['sapphire-500'],
  'cool-blue-lighter': color['sapphire-200'],
  'cool-blue-lightest': color['sapphire-50'],
  //
  error: color['crimson-500'],
  'error-dark': color['crimson-600'],
  'error-darker': color['rose-700'],
  'error-darkest': color['rose-800'],
  'error-light': color['crimson-100'],
  'error-lighter': color['rose-100'],
  'error-lightest': color['crimson-50'],
  //
  focus: color['dark-sky-500'],
  'focus-border-inverse': color['goldenrod-800'],
  'focus-dark': color['orchid-500'],
  'focus-inverse': color['sky-500'],
  'focus-light': color.white,
  'focus-shadow': color['granite-900'],
  'focus-shadow-inverse': color['granite-900'],
  'focus-shadow-link': color['granite-900'],
  'focus-shadow-link-inverse': color['goldenrod-800'],
  //
  gold: color['goldenrod-500'],
  'gold-dark': color['goldenrod-600'],
  'gold-darker': color['goldenrod-700'],
  'gold-darkest': color['goldenrod-800'],
  'gold-light': color['goldenrod-400'],
  'gold-lighter': color['goldenrod-200'],
  'gold-lightest': color['goldenrod-50'],
  //
  gray: color['granite-700'],
  'gray-cool-light': color['ocean-50'],
  'gray-dark': color['granite-800'],
  'gray-darker': color['granite-900'],
  'gray-light': color['granite-600'],
  'gray-lighter': color['granite-100'],
  'gray-lightest': color['granite-50'],
  'gray-medium': color['granite-600'],
  'gray-warm-dark': color['granite-800'],
  'gray-warm-light': color['granite-50'],
  //
  green: color['spring-500'],
  'green-dark': color['spring-700'],
  'green-darker': color['spring-700'],
  'green-darkest': color['spring-800'],
  'green-light': color['spring-700'],
  'green-lighter': color['spring-100'],
  'green-lightest': color['spring-50'],
  //
  muted: color['granite-700'],
  'muted-inverse': color['lapis-50'],
  //
  primary: color['teal-500'],
  'primary-alt': color['lapis-500'],
  'primary-alt-dark': color['lapis-700'],
  'primary-alt-darker': color['lapis-800'],
  'primary-alt-darkest': color['lapis-900'],
  'primary-alt-light': color['lapis-200'],
  'primary-alt-lightest': color['dark-sky-50'],
  'primary-dark': color['teal-700'],
  'primary-darker': color['ocean-800'],
  'primary-darkest': color['ocean-900'],
  'primary-light': color['teal-300'],
  'primary-lightest': color['teal-100'],
  //
  red: color['rose-500'],
  'red-dark': color['rose-600'],
  'red-darker': color['rose-700'],
  'red-darkest': color['rose-800'],
  'red-light': color['rose-200'],
  'red-lighter': color['rose-100'],
  'red-lightest': color['rose-50'],
  //
  secondary: color['lapis-500'],
  'secondary-dark': color['lapis-500'],
  'secondary-darker': color['lapis-500'],
  'secondary-darkest': color['lapis-500'],
  'secondary-light': color['lapis-200'],
  'secondary-lightest': color['dark-sky-50'],
  //
  success: color['spring-500'],
  'success-dark': color['spring-600'],
  'success-darker': color['spring-700'],
  'success-darkest': color['spring-800'],
  'success-light': color['spring-400'],
  'success-lighter': color['spring-200'],
  'success-lightest': color['spring-50'],
  //
  warn: color['goldenrod-500'],
  'warn-dark': color['goldenrod-600'],
  'warn-darker': color['goldenrod-700'],
  'warn-darkest': color['goldenrod-800'],
  'warn-light': color['goldenrod-300'],
  'warn-lighter': color['goldenrod-200'],
  'warn-lightest': color['goldenrod-50'],
  //
  visited: color['crimson-800'],
};

const components = {
  // alert
  'alert__background-color': themeColors['primary-alt-lightest'],
  'alert__background-color--error': themeColors['error-lightest'],
  'alert__background-color--lightweight': themeColors.white,
  'alert__background-color--success': themeColors['success-lightest'],
  'alert__background-color--warn': themeColors['warn-lightest'],
  'alert__bar-width': spacer[1],
  'alert__border-left-color': themeColors['primary-alt'],
  'alert__border-color--error': themeColors.error,
  'alert__border-color--success': themeColors.success,
  'alert__border-color--warn': themeColors.warn,
  'alert__font-color': themeColors['base'],
  'alert__icon-size': spacer[5],
  alert__padding: spacer[2],
  'alert-link__font-color': themeColors['primary-alt'],
  'alert-link__font-color--hover': themeColors['primary-alt-dark'],
  'alert-link__font-color--focus': themeColors['primary-alt-darkest'],
  'alert-link__font-color--active': themeColors['primary-alt-darkest'],
  // autocomplete
  'autocomplete-list__background-color': themeColors.white,
  'autocomplete-list__border-color': themeColors['gray-lighter'],
  'autocomplete-list-item__font-color': themeColors.primary,
  'autocomplete-list-item__background-color--active': themeColors['primary-alt-darkest'],
  'autocomplete-list-item__font-color--active': themeColors.white,
  'autocomplete-list-item-message__font-color': themeColors.muted,
  // badge
  'badge__background-color': themeColors.gray,
  'badge__font-color': themeColors.white,
  'badge__background-color--alert': themeColors.error,
  'badge__background-color--info': themeColors.primary,
  'badge__background-color--success': themeColors.success,
  'badge__background-color--warn': themeColors.warn,
  'badge__font-color--warn': themeColors.base,
  'badge__border-radius': radius.pill,
  // button
  'button__border-radius': radius.medium,
  'button__border-width': '1px',
  'button__background-color': themeColors.white,
  'button__background-color--active': themeColors.white,
  'button__background-color--disabled': themeColors.white,
  'button__background-color--hover': themeColors['primary-darker'],
  'button__border-color': themeColors['primary-alt'],
  'button__border-color--active': themeColors['primary-alt-darkest'],
  'button__border-color--disabled': themeColors['gray-lighter'],
  'button__border-color--hover': themeColors['primary-alt-dark'],
  button__color: themeColors['primary-alt'],
  'button__color--active': themeColors['primary-darkest'],
  'button__color--disabled': themeColors['gray-lighter'],
  'button__color--hover': themeColors['primary-alt-dark'],
  // button icon
  'button-icon__fill': themeColors.base, // medicare only
  // button - inverse
  'button-inverse__background-color': themeColors['background-inverse'],
  'button-inverse__background-color--disabled': themeColors['background-inverse'],
  'button-inverse__background-color--focus': themeColors['background-inverse'],
  'button-inverse__border-color': themeColors.white,
  'button-inverse__border-color--active': hexOpacity(themeColors.white, 60),
  'button-inverse__border-color--disabled': hexOpacity(themeColors.white, 80),
  'button-inverse__border-color--hover': hexOpacity(themeColors.white, 80),
  'button-inverse__color': themeColors.white,
  'button-inverse__color--active': hexOpacity(themeColors.white, 60),
  'button-inverse__color--disabled': hexOpacity(themeColors.white, 80),
  'button-inverse__color--hover': hexOpacity(themeColors.white, 80),
  // button - transparent
  'button-transparent__color--active': themeColors['primary-darkest'],
  'button-transparent__background-color--disabled': themeColors['gray-lighter'],
  'button-transparend__color--disabled': themeColors['gray-dark'],
  // button - inverse transparent
  'button-inverse-transparent__background-color': themeColors['gray-lighter'],
  'button-inverse-transparent__color': themeColors['gray-dark'],
  'button-inverse-transparent__color--disabled': themeColors['gray-dark'], // medicare only
  // button - primary & status buttons
  'button-primary__color': themeColors.white, // medicare only
  'button-primary__color--hover': themeColors.white, // medicare only
  'button-primary__background-color': themeColors.primary,
  'button-primary__background-color--hover': themeColors['primary-dark'],
  'button-primary__background-color--focus': themeColors.primary, // medicare only
  'button-primary__background-color--active': themeColors['primary-light'],
  // button - primary inverse, all medicare only
  'button-primary-inverse__background-color': themeColors.white,
  'button-primary-inverse__border-color': themeColors['gray-dark'],
  'button-primary-inverse__color': themeColors['gray-dark'],
  'button-primary-inverse__background-color--hover': themeColors.white,
  'button-primary-inverse__border-color--hover': hexOpacity(themeColors['gray-dark'], 80),
  'button-primary-inverse__color--hover': hexOpacity(themeColors['gray-dark'], 80),
  'button-primary-inverse__border-color--active': hexOpacity(themeColors['gray-dark'], 60),
  'button-primary-inverse__coloro--active': hexOpacity(themeColors['gray-dark'], 60),
  'button-primary-inverse__background-color--focus': themeColors.white,
  'button-primary-inverse__border-color--focus': hexOpacity(themeColors['gray-dark'], 80),
  'button-primary-inverse__color--focus': hexOpacity(themeColors['gray-dark'], 80),
  'button-primary-inverse__background-color--disabled': themeColors['gray-lighter'],
  'button-primary-inverse__border-color--disabled': themeColors.transparent,
  'button-primary-inverse__color--disabled': themeColors['gray-dark'],
  'button-primary-inverse-transparent__background-color': themeColors.transparent,
  'button-primary-inverse-transparent__border-color': themeColors.transparent,
  'button-primary-inverse-transparent__color': themeColors.white,
  /// button primary alt, all medicare only
  'button-primary-alt__color': themeColors.white,
  'button-primary-alt__border-color': themeColors.transparent,
  'button-primary-alt__background-color': themeColors['primary-alt'],
  'button-primary-alt__color--hover': themeColors.white,
  'button-primary-alt__background-color--hover': themeColors['primary-alt-dark'],
  'button-primary-alt__border-color--hover': themeColors['primary-alt-dark'],
  'button-primary-alt__color--active': themeColors.white,
  'button-primary-alt__background-color--active': themeColors['primary-alt-light'],
  'button-primary-alt__border-color--active': themeColors['primary-alt-light'],
  // choice + choicelist
  'choice__background-color': themeColors.background,
  'choice__background-color--checked': themeColors['primary-alt'],
  'choice__background-color--disabled': themeColors['gray-lighter'],
  'choice__background-color--inverse': themeColors.transparent,
  'choice__background-color--disabled--inverse': hexOpacity(themeColors['muted-inverse'], 15),
  'choice__border-color': color['granite-700'],
  'choice__border-color--checked': themeColors['primary-alt'],
  'choice__border-color--disabled': color['granite-300'],
  'choice__border-color--error': themeColors.error,
  'choice__border-color--inverse': themeColors.white,
  'choice__border-color--left': themeColors.primary,
  'choice__border-color--focus': themeColors['primary-darker'],
  'choice__border-color--disabled--inverse': color['granite-300'],
  'choice__border-radius': radius.default,
  'choice__border-width': '2px',
  'choice__color--unchecked': themeColors.white,
  'choice__color--disabled': themeColors.muted,
  choice__size: spacer[3],
  'choice__size--small': '20px',
  'choice__size-radio': spacer[2],
  'choice__size-radio--small': '12px',
  'choice-label__color--disabled': themeColors.muted,
  'choice-label__color--disabled--inverse': themeColors['muted-inverse'],
  // dialog
  'dialog__background-color': themeColors.white,
  dialog__padding: spacer[4],
  'dialog-overlay__background-color': themeColors['background-dialog-mask'],
  // drawer
  'drawer__animation-timing': animation['speed-2'],
  'drawer__background-color': themeColors.background,
  'drawer__border-color': themeColors.border,
  'drawer-close__color': themeColors.black,
  'drawer-header__background-color': themeColors['gray-lightest'],
  'drawer-footer__background-color': themeColors['primary-alt-lightest'],
  'drawer-toggle__background-color--hover': themeColors['primary-alt'],
  'drawer-toggle__color--hover': themeColors.white,
  'drawer-toggle__background-color--hover--inverse': themeColors.white,
  'drawer-toggle__color--hover--inverse': themeColors['gray-darker'],
  // dropdown
  'dropdown__background-color': themeColors.white,
  'dropdown__icon-size': '10px',
  // filter chip
  'filter-chip__border-radius': radius.pill,
  'filter-chip__background-color': themeColors['primary-alt-lightest'],
  'filter-chip__border-color': themeColors.primary,
  'filter-chip__color': themeColors.base,
  'filter-chip__background-color--active': themeColors.primary,
  'filter-chip__border-color--active': themeColors.primary,
  'filter-chip__color--active': themeColors.white,
  'filter-chip-icon__color': themeColors.base,
  'filter-chip-icon__color-active': themeColors.white,
  // forms
  'form-label__color--inverse': themeColors['base-inverse'],
  'form-label__color--not-error': themeColors['gray-light'], // medicare only
  'form__max-width': '460px',
  'form__max-width--small': '6em',
  'form__max-width--medium': '12em',
  'form-hint__color': themeColors.muted,
  'form-hint__color--inverse': themeColors['muted-inverse'],
  'form-error__color': themeColors.error,
  'form-error__color--inverse': themeColors['error-light'],
  // link
  link__color: themeColors['primary-alt'],
  'link__color--visited': themeColors.visited,
  'link__color--hover': themeColors['primary-alt-dark'],
  'link__color--active': themeColors['primary-alt-dark'],
  'link-inverse__color': themeColors['base-inverse'],
  'link-inverse__color--visited': themeColors['gray-lighter'],
  'link-inverse__color--hover': themeColors['gray-lighter'],
  'link-inverse__color--status': themeColors['gray-lighter'],
  'link__text-decoration--thickness': '1px',
  'link__text-decoration--thickness--hover': '2px',
  'link__text-decoration--offset': '3px',
  // pagination
  'pagination-link__color': themeColors.primary,
  'pagination-link__color--hover': themeColors['primary-darker'],
  'pagination-link__color--active': themeColors['primary-darkest'],
  'pagination-link__color--focus': themeColors['primary-darker'],
  'pagination-link__color--disabled': themeColors['gray-lighter'],
  'pagination-current-page__color': themeColors.base,
  'pagination-overflow__color': themeColors.gray,
  'pagination-page-count__color': themeColors.gray,
  // review
  'review__border-color': themeColors['border'],
  // steplist
  steplist__color: themeColors.muted,
  'steplist__color--current': themeColors.primary,
  'steplist__background-color--current': themeColors.primary,
  'steplist-step__color': themeColors.muted,
  'steplist-step__border-color': themeColors.border,
  'steplist-step__border-color--default': themeColors.muted,
  'steplist-step__color--current': themeColors.white,
  'steplist-step__color--completed': themeColors.base,
  'steplist-step__background-color--completed': themeColors.base,
  // spinner
  'spinner__background-color': themeColors.background,
  spinner__color: themeColors.base,
  'spinner__background-color--inverse': themeColors['background-inverse'],
  'spinner__color--inverse': themeColors.white,
  // text input
  'text-input__line-height': 1.3,
  'text-input__background-color--disabled': themeColors['gray-lighter'],
  'text-input__border-width': '2px',
  'text-input__border-color': themeColors['gray-light'],
  'text-input__border-color--disabled': themeColors['gray-warm-dark'],
  'text-input__border-color--error': themeColors.error,
  'text-input__border-color--error--inverse': themeColors['error-light'],
  'text-input__border-color--inverse': themeColors.black,
  'text-input__border-color--success': themeColors['success-light'],
  'text-input__color': themeColors['gray-warm-dark'],
  'text-input__padding': spacer[1],
  'text-input__border-radius': 0,
  // vertical navigation
  'vertical-nav-item__background-color--hover': themeColors['gray-lightest'],
  'vertical-nav-item__color--hover': themeColors.primary,
  'vertical-nav-item__border-color': themeColors.gray,
  'vertical-nav-label__color': themeColors.base,
  'vertical-nav-label-icon__color': themeColors.base,
  'vertical-nav-label__border-color--current': themeColors.primary,
  'vertical-nav-label__color--current': themeColors.primary,
};

const shadow = {
  'box-card': '0 2px 3px 0 rgba(50, 50, 50, 0.23)',
};

const DefaultTheme = to<ThemeTokens>()({
  animation,
  color: themeColors,
  components,
  description,
  font: {
    sans: font['family-rubik'],
    montserrat: font['family-montserrat'],
    rubik: font['family-rubik'],
    ...font,
  },
  measure,
  media,
  radius,
  shadow,
  spacer,
  z,
});

export default DefaultTheme;
