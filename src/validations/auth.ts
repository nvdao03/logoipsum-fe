import * as yup from 'yup'
import { AUTH_MESSAGE } from '../constants/message'

export const signUpValidation = yup.object({
  email: yup.string().email(AUTH_MESSAGE.EMAIL_INVALID).required(AUTH_MESSAGE.EMAIL_REQUIRED).trim(),
  password: yup
    .string()
    .trim()
    .required(AUTH_MESSAGE.PASSWORD_REQUIRED)
    .min(6, AUTH_MESSAGE.PASSWORD_INVALID_LENGTH)
    .max(180, AUTH_MESSAGE.PASSWORD_INVALID_LENGTH)
})

export type TypeSchameSignUp = yup.InferType<typeof signUpValidation>
