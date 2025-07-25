import { ITag, TagAttributes } from './model';

class Tag implements ITag {
  constructor(
    private readonly tagName: string,
    private readonly attributes: TagAttributes,
    private readonly content = '')
  {}

  private _getStringFromAttributes(): string {
    return Object.entries(this.attributes)
      .map(([key,value]) => `${key}="${value}"`)
      .join(' ');
  }

  toString(): string {
    const attrs = this._getStringFromAttributes();
    
    return `<${this.tagName}${attrs ? ` ${attrs}` : ''}>`;
  }
   
}

export default Tag;


