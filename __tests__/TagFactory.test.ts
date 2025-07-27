import { describe, expect, it, beforeEach } from 'vitest';
import TagFactory from '../src/tags/TagFactory';
import selfClosingTags from '../src/tags/constants';
import SingleTag from '../src/tags/SingleTag';
import PairTag from '../src/tags/PairTag';

describe('TagFactory', () => {
  let tagFactory: TagFactory;

  beforeEach(() => {
    tagFactory = new TagFactory();
  });

  it('should create', () => {
    expect(tagFactory).toBeTruthy();
  });

  it('shoud return single tag for all single tags', () => {
    selfClosingTags.forEach((tag) => {
      const newSingleTag = TagFactory.factory(tag, {});
     
      expect(newSingleTag).toBeInstanceOf(SingleTag);
    });
  });

  it('should return pair tag for pairtags', () => {
    const pairTags = ['div', 'h1', 'p'];

    pairTags.forEach((tag) => {
      const newPairTag = TagFactory.factory(tag, {});

      expect(newPairTag).toBeInstanceOf(PairTag);
    });
  });

});
