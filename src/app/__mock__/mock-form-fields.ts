import { Validators } from '@angular/forms';
import { field } from '@routes/slide-angular/components/dynamic-form/types';

export const MOCK_FIELDS: field[] = [
  {
    id: 'name',
    name: 'name',
    label: 'Name',
    placeholder: 'Insert your name',
    type: 'text',
    errors: [
      {
        keyError: 'minlength',
        validator: Validators.minLength(3),
        message: '⚠️ Minimum 3 characters',
      },
    ],
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Insert your email',
    type: 'email',
    errors: [
      {
        keyError: 'email',
        validator: Validators.email,
        message: '⚠️ Invalid email format',
      },
    ],
  },
  {
    id: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'Insert your password',
    type: 'password',
    errors: [
      {
        keyError: 'minlength',
        validator: Validators.minLength(6),
        message: '⚠️ Minimum 6 characters',
      },
    ],
  },
];
