import { IFormBuilder } from '../model/model';

class FormBuilder implements IFormBuilder {
  input (fieldName: string, options: Record<string, string | number>): void {
    console.log(fieldName, options);
  };
  
  toString(): string {
    return 'Will be later';
  };
};

export default FormBuilder;
