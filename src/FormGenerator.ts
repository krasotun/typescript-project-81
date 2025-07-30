import { FormMethod, FormTemplate, IFormBuilder } from './model/model';
import FormBuilder from './tags/FormBuilder';
import TagFactory from './tags/TagFactory';

class FormGenerator{
  static formFor(template: FormTemplate, method: FormMethod, cb: (fb: IFormBuilder) => void): string {
    const defaultAction = {action: '#'};
    const formBuilder = new FormBuilder(template);

    cb(formBuilder);
    const formContent = formBuilder.toString(); 

    const form = TagFactory.factory('form', {...defaultAction, ...method, }, formContent);
    return form.toString();
  }
};

export default FormGenerator;
