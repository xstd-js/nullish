import { Nullish } from './nullish.js';

export function isNullish(value: any): value is Nullish {
  return value === null || value === void 0;
}
