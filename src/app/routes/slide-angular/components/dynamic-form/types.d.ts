import { ValidatorFn } from '@angular/forms';

export type InputType =
  // - HTMLInputElement['type']   // - Note: il suo tipo è string
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'tel'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week'
  | 'search'
  | 'color'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'range';

export type validator<T extends string | number | RegExp> = {
  key: string;
  value?: T;
};
export type error = {
  keyError: string;
  validator: ValidatorFn;
  message: string;
};
export interface field {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: InputType;
  errors: error[];
}
