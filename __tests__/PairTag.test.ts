import { beforeEach, describe, expect, it } from 'vitest';
import PairTag from '../src/tags/PairTag';

describe('Tag', () => {
  let tag: PairTag;

  beforeEach(() => {
    tag = new PairTag('div', {});
  });

  it('should create', () => {
    expect(tag).toBeTruthy();
  });

  describe('toString', () => {
    it('should return empty tag', () => {
      const expected = '<div></div>';

      expect(tag.toString()).toBe(expected);
    });

    it('should return correct string for attributes', () => {
      tag = new PairTag('div', {key1: 'value1', key2: 'value2'});
      const expected = '<div key1="value1" key2="value2"></div>';

      expect(tag.toString()).toBe(expected);
    });
  });

});
