import { describe, expect, it } from 'vitest';
import { isNullish } from './is-nullish.js';

describe('isNullish', () => {
  it('should return correct result', () => {
    expect(isNullish(null)).toBe(true);
    expect(isNullish(undefined)).toBe(true);
    expect(isNullish(1)).toBe(false);
    expect(isNullish({})).toBe(false);
  });
});
