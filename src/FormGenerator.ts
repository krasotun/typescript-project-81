import TagFactory from './tags/TagFactory';

class FormGenerator{
  static formFor(): string {
    const form = TagFactory.factory('form', {});
    
    return form.toString();
  }
};

export default FormGenerator;
