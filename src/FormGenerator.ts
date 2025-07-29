import { FormMethod, FormTemplate, IFormBuilder } from './model/model';
import TagFactory from './tags/TagFactory';

class FormGenerator{
  static formFor(template: FormTemplate, method: FormMethod, cb: (fb: IFormBuilder) => void): string {
    const defaultAction = {action: '#'};
    const form = TagFactory.factory('form', {...defaultAction, ...method, });
    
    return form.toString();
  }
};

export default FormGenerator;
