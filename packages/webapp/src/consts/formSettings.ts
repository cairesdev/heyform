import { CaptchaKindEnum } from '@heyform-inc/shared-types-enums'

export const CAPTCHA_KIND_OPTIONS = [
  {
    label: 'Disable',
    value: CaptchaKindEnum.NONE
  },
  { label: 'Google reCaptcha', value: CaptchaKindEnum.GOOGLE_RECAPTCHA },
  { label: 'GeeTest CAPTCHA', value: CaptchaKindEnum.GEETEST_CAPTCHA }
]

export const LOCALES_OPTIONS = [
  {
    label: 'Portugês - BR',
    value: 'ptBr'
  }
]

export const FORM_LOCALES_OPTIONS = [
  {
    label: 'Portugês - BR',
    value: 'ptBr'
  }
]

export const TIME_LIMIT_OPTIONS = [
  {
    label: 'Hour',
    value: 'h'
  },
  {
    label: 'Minute',
    value: 'm'
  },
  {
    label: 'Second',
    value: 's'
  }
]

export const IP_LIMIT_OPTIONS = [
  {
    label: 'Day',
    value: 'd'
  },
  {
    label: 'Hour',
    value: 'h'
  },
  {
    label: 'Minute',
    value: 'm'
  }
]

export const EXPIRATION_DATE_FORMAT = 'MMM DD, YYYY hh:mm A'
