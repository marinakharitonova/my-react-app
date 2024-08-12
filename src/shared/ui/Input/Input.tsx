import { InputHTMLAttributes } from 'react'
import cls from './Input.module.scss'
import classNames from 'classnames'
import { UseFormRegister } from 'react-hook-form'
import { FormFieldError } from 'shared/ui/FormFieldError/FormFieldError.tsx'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'name'
>

interface InputProps extends HTMLInputProps {
  className?: string
  name: string
  autofocus?: boolean
  label?: string
  error?: string
  register: UseFormRegister<any>
}

export const Input = ({
  className,
  type = 'text',
  label,
  register,
  name,
  error,
  autofocus,
  ...otherProps
}: InputProps) => {
  return (
    <FormFieldError error={error}>
      <label className={classNames(cls.InputWrapper, className)}>
        {label && <span style={{ flexShrink: 0 }}>{label}</span>}
        <input
          type={type}
          className={classNames(cls.input, {
            [cls.hasError]: !!error,
          })}
          {...register(name, { valueAsNumber: type === 'number' })}
          {...otherProps}
          autoFocus={autofocus}
        />
      </label>
    </FormFieldError>
  )
}
