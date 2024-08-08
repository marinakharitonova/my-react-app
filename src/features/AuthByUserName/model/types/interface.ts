import { User } from 'entities/User'

export interface LoginFormInputs {
  login: string
  password: string
}

export interface LoginMutation {
  username: string
  password: string
}

export interface LoginMutationResponse extends User {
  password: string
}
