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
    const expected = '<input name="name" type="text" value="rob">';

    expect(formBuilder.toString()).toBe(expected);
  });

  it('should generate several inputs', () => {
    formBuilder.input('name', {});
    formBuilder.input('job', {});
    const expected =
      '<input name="name" type="text" value="rob">\n<input name="job" type="text" value="hexlet">';

    expect(formBuilder.toString()).toBe(expected);
  });

  it('should generate input with attiributes', () => {
    formBuilder.input('name', { class: 'form-input', id: 'username', });
    const expected =
      '<input name="name" class="form-input" id="username" type="text" value="rob">';

    expect(formBuilder.toString()).toBe(expected);
  });

  it('should generate textarea with default cols and rows', () => {
    formBuilder.input('job', { as: 'textarea' });
    const expected = '<textarea name="job" cols="20" rows="40">hexlet</textarea>';

    expect(formBuilder.toString()).toBe(expected);
  });

  it('should generate textarea with cols and rows', () => {
    formBuilder.input('job', { as: 'textarea', cols: 21, rows: 41 });
    const expected = '<textarea name="job" cols="21" rows="41">hexlet</textarea>';

    expect(formBuilder.toString()).toBe(expected);
  });

  it('shoul throw error if attribute not in template', () => {
    expect(() => formBuilder.input('age', {}))
      .toThrowError('Field \'age\' does not exist in the template.');
  });

});
