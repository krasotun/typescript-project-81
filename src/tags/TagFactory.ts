import { ITag, TagAttributes } from '../model/model';
import selfClosingTags from './constants';
import PairTag from './PairTag';
import SingleTag from './SingleTag';

type TagConstructor = new (
  tagName: string,
  attributes: TagAttributes,
  content?: string
) => ITag;

const mapping: Record<'single' | 'pair', TagConstructor> = {
  single: SingleTag,
  pair: PairTag,
};

class TagFactory {
  private static getTagType(tagName: string): TagConstructor {
    const lowerTag = tagName.toLowerCase();
    return selfClosingTags.has(lowerTag) ? mapping.single : mapping.pair;
  }

  static factory(tagName: string, attributes: TagAttributes, content?: string): ITag{
    const TagType = this.getTagType(tagName);

    if (TagType === mapping.single) {
      return new TagType(tagName, attributes);
    }

    return new TagType(tagName, attributes, content);
  }
};

export default TagFactory;
