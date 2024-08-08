import * as yup from 'yup'

export const validationSchema = yup.object({
  login: yup.string().trim().required('required_field'),
  password: yup.string().required('required_field'),
})
