import { FormTemplate, IFormBuilder, ITag } from '../model/model';
import TagFactory from './TagFactory';

class FormBuilder implements IFormBuilder {
  private readonly _fields: ITag[] = [];

  constructor(private readonly _template: FormTemplate) {}

  input(fieldName: string, options?: Record<string, string | number>): ITag {
    const value = this._template[fieldName];

    if (!(fieldName in this._template)) {
      throw new Error(`Field '${fieldName}' does not exist in the template.`);
    }

    const isTextarea = options?.as === 'textarea';

    const { as, ...rest } = options ?? {};

    const inputProps = {
      name: fieldName,
      ...(isTextarea
        ? {
          ...rest,
          cols: options.cols ?? 20,
          rows: options.rows ?? 40,
        }
        : { ...options, type: 'text', value }),
    };

    const tag = isTextarea
      ? TagFactory.factory('textarea', inputProps, value)
      : TagFactory.factory('input', inputProps);

    const label = TagFactory.factory('label', { for: fieldName }, this._capitalize(fieldName));

    this._fields.push(label);
    this._fields.push(tag);

    return tag;
  }

  submit(value = 'Save'): ITag {
    const tag = TagFactory.factory('input', {type: 'submit', value});

    this._fields.push(tag);

    return tag;
  }

  toString(): string {
    return this._fields.map((field) => field.toString()).join('\n');
  }

  private _capitalize(text: string): string {
    if (!text) return '';

    return text[0].toUpperCase() + text.slice(1);
  }
};

export default FormBuilder;
