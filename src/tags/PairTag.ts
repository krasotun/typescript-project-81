import { TagAttributes } from '../model/model';
import Tag from './tag';

class PairTag extends Tag {

  constructor(
      protected readonly tagName: string,
      protected readonly attributes: TagAttributes,
      private readonly _content = '',
  ){
    super(tagName, attributes);
  }

  toString(): string {
    const attrs = this._getStringFromAttributes();
    
    return `<${this.tagName}${attrs ? ` ${attrs}` : ''}>${this._content}</${this.tagName}>`;
  }
};

export default PairTag;
