import { ITag, TagAttributes } from '../model/model';

abstract class Tag implements ITag {
  constructor(
    protected readonly tagName: string,
    protected readonly attributes: TagAttributes,
  ){}

  protected _getStringFromAttributes(): string {
    return Object.entries(this.attributes)
      .map(([key,value]) => `${key}="${value}"`)
      .join(' ');
  }

  abstract toString(): string
   
}

export default Tag;


