import * as yup from 'yup'

export const MIN_AGE = 18
export const MAX_AGE = 120

export const validationSchema = yup.object({
  firstName: yup.string().trim().required('required_field'),
  lastName: yup.string().trim().required('required_field'),
  age: yup
    .number()
    .required('required_field')
    .transform(value => (Number.isNaN(value) ? null : value))
    .integer('integer_number')
    .min(MIN_AGE, () => ({
      msg: 'age_error',
      opts: { ns: 'profile', maxAge: MAX_AGE, minAge: MIN_AGE },
    }))
    .max(MAX_AGE, () => ({
      msg: 'age_error',
      opts: { ns: 'profile', maxAge: MAX_AGE, minAge: MIN_AGE },
    })),
  currency: yup.string().required('required_field'),
  city: yup.string().trim().required('required_field'),
  username: yup.string().trim().required('required_field'),
})
