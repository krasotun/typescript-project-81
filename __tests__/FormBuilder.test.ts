import { describe, beforeEach, it, expect } from 'vitest';
import FormBuilder from '../src/tags/FormBuilder';

describe('formBuilder', () => {
  let formBuilder: FormBuilder;
  const template = { name: 'rob', job: 'hexlet', gender: 'm' };

  beforeEach(() => {
    formBuilder = new FormBuilder(template);
  });

  it('should generate input from template', () => {
    formBuilder.input('name', {});
    const expected = '<label for="name">Name</label>\n<input name="name" type="text" value="rob">';

    expect(formBuilder.toString()).toBe(expected);
  });

  it('should generate several inputs', () => {
    formBuilder.input('name', {});
    formBuilder.input('job', {});
    const expected =
      '<label for="name">Name</label>\n<input name="name" type="text" value="rob">\n<label for="job">Job</label>\n<input name="job" type="text" value="hexlet">';

    expect(formBuilder.toString()).toBe(expected);
  });

  it('should generate input with attiributes', () => {
    formBuilder.input('name', { class: 'form-input', id: 'username', });
    const expected =
      '<label for="name">Name</label>\n<input name="name" class="form-input" id="username" type="text" value="rob">';

    expect(formBuilder.toString()).toBe(expected);
  });

  it('should generate textarea with default cols and rows', () => {
    formBuilder.input('name', { as: 'textarea' });
    const expected =
      '<label for="name">Name</label>\n<textarea name="name" cols="20" rows="40">rob</textarea>';

    expect(formBuilder.toString()).toBe(expected);
  });

  it('should generate textarea with cols and rows', () => {
    formBuilder.input('name', { as: 'textarea', cols: 21, rows: 41 });
    const expected =
      '<label for="name">Name</label>\n<textarea name="name" cols="21" rows="41">rob</textarea>';

    expect(formBuilder.toString()).toBe(expected);
  });

  it('shoul throw error if attribute not in template', () => {
    expect(() => formBuilder.input('age', {}))
      .toThrowError('Field \'age\' does not exist in the template.');
  });

});
