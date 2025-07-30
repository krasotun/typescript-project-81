import FormGenerator from './FormGenerator';
import { Form_Methods } from './model/model';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

const form = FormGenerator.formFor(template, { method: Form_Methods.POST }, (f) => {
  f.input('name');
  f.input('job');
  f.submit('Wow');
});

console.log(form);

export default FormGenerator;

