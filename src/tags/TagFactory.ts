import { ITag, TagAttributes } from '../model/model';
import selfClosingTags from './constants';
import PairTag from './PairTag';
import SingleTag from './SingleTag';

type TagCreator = (
  tagName: string,
  attributes: TagAttributes,
  content?: string
) => ITag;

const tagCreators: Record<'single' | 'pair', TagCreator> = {
  single: (tagName, attributes, _content?) => new SingleTag(tagName, attributes),
  pair: (tagName, attributes, content?) => new PairTag(tagName, attributes, content ?? ''),
};

class TagFactory {
  private static getTagType(tagName: string): TagCreator {
    const lowerTag = tagName.toLowerCase();
    return selfClosingTags.has(lowerTag) ? tagCreators.single : tagCreators.pair;
  }

  static factory(tagName: string, attributes: TagAttributes, content?: string): ITag{
    const creator = this.getTagType(tagName);

    return creator(tagName, attributes, content);
  }
};

export default TagFactory;
