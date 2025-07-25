import { beforeEach, describe, expect, it } from 'vitest';
import SingleTag from '../src/tags/SingleTag';

describe('Tag', () => {
  let tag: SingleTag;

  beforeEach(() => {
    tag = new SingleTag('label', {});
  });

  it('should create', () => {
    expect(tag).toBeTruthy();
  });

  describe('toString', () => {
    it('should return empty tag', () => {
      const expected = '<label>';

      expect(tag.toString()).toBe(expected);
    });

    it('should return correct string for attributes', () => {
      tag = new SingleTag('label', {key1: 'value1', key2: 'value2'});
      const expected = '<label key1="value1" key2="value2">';

      expect(tag.toString()).toBe(expected);
    });
  });

});
