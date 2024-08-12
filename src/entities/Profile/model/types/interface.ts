export interface Profile {
  firstName: string
  lastName: string
  age: number
  currency: string
  city: string
  username: string
  avatar: string
}

export type UpdateProfileFormInputs = Omit<Profile, 'avatar'>
