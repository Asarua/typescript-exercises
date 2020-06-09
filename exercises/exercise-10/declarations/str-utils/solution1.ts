declare module 'str-utils' {
  type ToStr = (str: string) => string
  export const strReverse: ToStr
  export const strToLower: ToStr
  export const strToUpper: ToStr
  export const strRandomize: ToStr
  export const strInvertCase: ToStr
}

