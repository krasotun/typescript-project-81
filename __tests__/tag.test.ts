import { beforeEach, describe, expect, it } from 'vitest';
import Tag from '../src/components/tag';

describe('Tag', () => {
  let tag: Tag;

  beforeEach(() => {
    tag = new Tag('label', {});
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
      tag = new Tag('label', {key1: 'value1', key2: 'value2'});
      const expected = '<label key1="value1" key2="value2">';

      expect(tag.toString()).toBe(expected);
    });
  });

});
