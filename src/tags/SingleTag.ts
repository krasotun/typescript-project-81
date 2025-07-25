import Tag from './Tag';

class SingleTag extends Tag {

  toString(): string {
    const attrs = this._getStringFromAttributes();
    
    return `<${this.tagName}${attrs ? ` ${attrs}` : ''}>`;
  }
};

export default SingleTag;
