
export type TagAttributes = Record<string, string| number>;
export interface ITag {
    toString: () => string;
};
export interface IFormBuilder {
  input: (fieldName: string, options?: Record<string, string| number>) => ITag;
  submit: (name?: string) => ITag,
  toString: () => string;
};



export enum Form_Methods {
  POST = 'post',
  PATCH = 'patch',
  PUT = 'put',
  DELETE = 'delete',
};

export type FormTemplate = Record<string, string>;

export type FormMethod = Record<'method', Form_Methods>;

export type FormCallBack = () => void;


