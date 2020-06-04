import { shallowMount } from '@vue/test-utils';
import TRichSelect from '@/inputs/TRichSelect';
// import mapValues from 'lodash/mapValues';

describe('TRichSelect', () => {
  it('it renders the select', () => {
    const wrapper = shallowMount(TRichSelect);
    expect(wrapper.vm.$refs.wrapper).toBeTruthy();
  });

  it('it renders the select button', () => {
    const wrapper = shallowMount(TRichSelect);
    expect(wrapper.vm.$refs.buttonWrapper).toBeTruthy();
  });

  // it('it renders the select options', () => {
  //   const options = ['Option A', 'Option B', 'Option C'];
  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options },
  //   });

  //   expect(wrapper.vm.$el.getElementsByTagName('option').length).toBe(3);
  // });

  // it('render the select optgroups', () => {
  //   const options = [
  //     { value: 'alone', text: 'no parent :(' },
  //     {
  //       text: 'Letters',
  //       children: [
  //         { value: 'A', text: 'A' },
  //         { value: 'B', text: 'B' },
  //         { value: 'C', text: 'C' },
  //       ],
  //     },
  //     {
  //       text: 'Numbers',
  //       children: [
  //         { value: 1, text: 1 },
  //         { value: 2, text: 2 },
  //       ],
  //     },
  //   ];

  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options },
  //   });

  //   const el = wrapper.vm.$el;

  //   expect(el.getElementsByTagName('option').length).toBe(6);

  //   expect(el.getElementsByTagName('optgroup').length).toBe(2);

  //   const optgroup1 = el.getElementsByTagName('optgroup')[0];
  //   const renderedOptions1 = Array.from(optgroup1.getElementsByTagName('option')).map((option) => ({
  //     text: option.text,
  //     value: option.value,
  //   }));
  //   expect(options[1].children).toEqual(renderedOptions1);

  //   const optgroup2 = el.getElementsByTagName('optgroup')[1];
  //   const renderedOptions2 = Array.from(optgroup2.getElementsByTagName('option')).map((option) => ({
  //     // Becase the value is readed from the DOM is readed as string
  //     text: Number(option.text),
  //     value: Number(option.value),
  //   }));
  //   expect(options[2].children).toEqual(renderedOptions2);
  // });

  // it('set the props.value into the select value', () => {
  //   const options = ['Option A', 'Option B', 'Option C'];
  //   const value = 'Option B';
  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options, value },
  //   });
  //   expect(wrapper.vm.$refs.select.value).toBe(value);
  // });

  // it('select the multioption values', () => {
  //   const options = ['Option A', 'Option B', 'Option C', 'Option D'];
  //   const value = ['Option A', 'Option B', 'Option D'];
  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options, value, multiple: true },
  //   });

  //   const selected = wrapper.vm.$el.querySelectorAll('option:checked');
  //   const values = Array.from(selected).map((el) => el.value);
  //   expect(values).toEqual(value);
  // });

  // it('updates the model value', async () => {
  //   const options = ['Option A', 'Option B', 'Option C'];
  //   const value = 'Option B';
  //   const newValue = 'Option A';
  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options, value },
  //   });
  //   wrapper.setProps({ value: newValue });
  //   await wrapper.vm.$nextTick();
  //   expect(wrapper.vm.$refs.select.value).toBe(newValue);
  // });

  // it('accept the options as array of strings', () => {
  //   // Accepts an array of strings
  //   const strings = ['Option A', 'Option B', 'Option C', 'Option D'];

  //   const expectedOptions = strings.map((str) => ({
  //     value: str,
  //     text: str,
  //   }));

  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options: strings },
  //   });

  //   expect(wrapper.vm.normalizedOptions).toEqual(expectedOptions);
  // });

  // it('accept the options as array of numbers', () => {
  //   const numbers = [1, 2, 3];

  //   const expectedOptions = numbers.map((str) => ({
  //     value: str,
  //     text: str,
  //   }));

  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options: numbers },
  //   });

  //   expect(wrapper.vm.normalizedOptions).toEqual(expectedOptions);
  // });

  // it('accept the options in default format', () => {
  //   // Accepts an array of objects with value
  //   const objectsWithValue = [
  //     { value: 'A', text: 'A' },
  //     { value: 'B', text: 'B' },
  //     { value: 'C', text: 'C' },
  //   ];

  //   const expectedOptions = objectsWithValue.slice(0);

  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options: objectsWithValue },
  //   });

  //   expect(wrapper.vm.normalizedOptions).toEqual(expectedOptions);
  // });

  // it('accept the options using id as value', () => {
  //   const objectsWithIds = [
  //     { id: 1, text: 'A' },
  //     { id: 2, text: 'B' },
  //     { id: 3, text: 'C' },
  //   ];

  //   const expectedOptions = objectsWithIds.map((option) => ({ value: option.id, text: option.text }));

  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options: objectsWithIds },
  //   });

  //   expect(wrapper.vm.normalizedOptions).toEqual(expectedOptions);
  // });

  // it('accept the options and use the label as text', () => {
  //   const objectsWithLabel = [
  //     { value: 'A', label: 'A' },
  //     { value: 'B', label: 'B' },
  //     { value: 'C', label: 'C' },
  //   ];

  //   const expectedOptions = objectsWithLabel.map((option) => ({ value: option.value, text: option.label }));

  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options: objectsWithLabel },
  //   });

  //   expect(wrapper.vm.normalizedOptions).toEqual(expectedOptions);
  // });

  // it('accept the options and pair value:text object', () => {
  //   const optionsObject = {
  //     A: 'Option A',
  //     B: 'Option B',
  //     C: 'Option C',
  //   };

  //   const expectedOptions = Object.keys(optionsObject).map((key) => ({
  //     value: key,
  //     text: optionsObject[key],
  //   }));

  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options: optionsObject },
  //   });

  //   expect(wrapper.vm.normalizedOptions).toEqual(expectedOptions);
  // });

  // it('accept dynamic value/text attributes', () => {
  //   const objectsWithCustomAttribs = [
  //     { key: 'A', description: 'A' },
  //     { key: 'B', description: 'B' },
  //     { key: 'C', description: 'C' },
  //   ];

  //   const expectedOptions = objectsWithCustomAttribs.map((option) => ({ value: option.key, text: option.description }));

  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: {
  //       options: objectsWithCustomAttribs,
  //       valueAttribute: 'key',
  //       textAttribute: 'description',
  //     },
  //   });

  //   expect(wrapper.vm.normalizedOptions).toEqual(expectedOptions);
  // });

  // it('creates and null option when a placeholder is added', () => {
  //   const options = [
  //     { value: 'A', text: 'A' },
  //     { value: 'B', text: 'B' },
  //     { value: 'C', text: 'C' },
  //   ];

  //   const placeholder = 'Select one';

  //   const expectedOptions = options.slice(0);

  //   expectedOptions.unshift({
  //     value: null,
  //     text: placeholder,
  //   });


  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: {
  //       options,
  //       placeholder,
  //     },
  //   });

  //   expect(wrapper.vm.normalizedOptionsWithPlaceholder).toEqual(expectedOptions);
  // });

  // it('handle null values', () => {
  //   const options = [
  //     { value: null, text: 'Select an option' },
  //     { value: 'B', text: 'B' },
  //     { value: 'C', text: 'C' },
  //   ];

  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options },
  //   });

  //   expect(wrapper.vm.normalizedOptions).toEqual(options);
  // });

  // it('updates the model in multiselect', async () => {
  //   const options = ['Option A', 'Option B', 'Option C', 'Option D'];
  //   const value = ['Option A', 'Option B', 'Option D'];
  //   const newValue = ['Option A', 'Option C'];
  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options, value, multiple: true },
  //   });
  //   wrapper.setProps({ value: newValue });
  //   await wrapper.vm.$nextTick();

  //   const selected = wrapper.vm.$el.querySelectorAll('option:checked');
  //   const values = Array.from(selected).map((el) => el.value);
  //   expect(values).toEqual(newValue);
  // });

  // it('disables the select', async () => {
  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { disabled: false },
  //   });
  //   expect(wrapper.vm.$refs.select.disabled).toBe(false);

  //   wrapper.setProps({ disabled: true });
  //   await wrapper.vm.$nextTick();
  //   expect(wrapper.vm.$refs.select.disabled).toBe(true);
  // });

  // it('has common attributes', async () => {
  //   const wrapper = shallowMount(TRichSelect);

  //   const values = {
  //     id: {
  //       default: '',
  //       new: 'new-id',
  //     },
  //     autofocus: {
  //       default: false,
  //       new: true,
  //     },
  //     disabled: {
  //       default: false,
  //       new: true,
  //     },
  //     name: {
  //       default: '',
  //       new: 'new-name',
  //     },
  //     required: {
  //       default: false,
  //       new: true,
  //     },
  //   };

  //   const { select } = wrapper.vm.$refs;

  //   // Check for the default values
  //   Object.keys(values).forEach((key) => {
  //     const elementValue = values[key];
  //     expect(select[elementValue.keyName || key]).toBe(elementValue.default);
  //   });

  //   const newProps = mapValues(values, ({ new: newValue }, key) => newValue);

  //   wrapper.setProps(newProps);

  //   await wrapper.vm.$nextTick();
  //   // Check for the new values
  //   Object.keys(values).forEach((key) => {
  //     const elementValue = values[key];
  //     expect(select[elementValue.keyName || key]).toBe(elementValue.new);
  //   });
  // });

  // it('emits an input event with the select value', async () => {
  //   const options = ['A', 'B', 'C'];
  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options },
  //   });

  //   const inputValue = 'B';

  //   wrapper.setProps({
  //     value: inputValue,
  //   });

  //   await wrapper.vm.$nextTick();

  //   expect(wrapper.emitted('input')).toBeTruthy();

  //   // assert event count
  //   expect(wrapper.emitted('input').length).toBe(1);

  //   // assert event payload
  //   expect(wrapper.emitted('input')[0]).toEqual([inputValue]);
  // });

  // it('emits a change event with the select value', async () => {
  //   const options = ['A', 'B', 'C'];

  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options },
  //   });

  //   const inputValue = 'XXX';

  //   wrapper.setProps({
  //     value: inputValue,
  //   });

  //   await wrapper.vm.$nextTick();

  //   await wrapper.vm.$nextTick();

  //   expect(wrapper.emitted('change')).toBeTruthy();

  //   // assert event count
  //   expect(wrapper.emitted('change').length).toBe(1);

  //   // assert event payload
  //   expect(wrapper.emitted('change')[0]).toEqual([inputValue]);
  // });

  // it('emits a blur event when the select is blurred', () => {
  //   const options = ['A', 'B', 'C'];
  //   const value = 'B';
  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options, value },
  //   });

  //   const { select } = wrapper.vm.$refs;

  //   // The change event should be emitted when the select is blurred
  //   select.dispatchEvent(new Event('blur'));

  //   expect(wrapper.emitted('blur')).toBeTruthy();

  //   // assert event count
  //   expect(wrapper.emitted('blur').length).toBe(1);
  // });

  // it('emits a focus event when the select is focused', () => {
  //   const options = ['A', 'B', 'C'];
  //   const value = 'B';
  //   const wrapper = shallowMount(TRichSelect, {
  //     propsData: { options, value },
  //   });

  //   const { select } = wrapper.vm.$refs;

  //   // The change event should be emitted when the select is focusred
  //   select.dispatchEvent(new Event('focus'));

  //   expect(wrapper.emitted('focus')).toBeTruthy();

  //   // assert event count
  //   expect(wrapper.emitted('focus').length).toBe(1);
  // });

  // it('has a focus and a blur method', () => {
  //   const wrapper = shallowMount(TRichSelect);

  //   wrapper.vm.focus();

  //   expect(wrapper.emitted('focus')).toBeTruthy();

  //   expect(wrapper.emitted('focus').length).toBe(1);

  //   wrapper.vm.blur();

  //   expect(wrapper.emitted('blur')).toBeTruthy();

  //   expect(wrapper.emitted('blur').length).toBe(1);
  // });
});