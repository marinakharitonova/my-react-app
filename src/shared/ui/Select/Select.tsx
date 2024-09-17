import { InputHTMLAttributes, useMemo } from 'react'
import cls from './Select.module.scss'
import classNames from 'classnames'
import { UseFormRegister } from 'react-hook-form'
import { FormFieldError } from 'shared/ui/FormFieldError/FormFieldError.tsx'

type HTMLSelectProps = Omit<
  InputHTMLAttributes<HTMLSelectElement>,
  'value' | 'onChange' | 'name'
>

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends HTMLSelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  name: string
  error?: string
  register: UseFormRegister<any>
  dataTestId?: string
}

export const Select = ({
  className,
  label,
  options,
  name,
  error,
  register,
  dataTestId,
  ...rest
}: SelectProps) => {
  const optionsList = useMemo(
    () =>
      options?.map(opt => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.label}
        </option>
      )),
    [options]
  )

  return (
    <FormFieldError error={error} dataTestId={dataTestId}>
      <label className={classNames(cls.SelectWrapper, className)}>
        {label && <span style={{ flexShrink: 0 }}>{label}</span>}
        <select
          className={classNames(cls.select, {
            [cls.hasError]: !!error,
          })}
          {...register(name)}
          {...rest}
        >
          {optionsList}
        </select>
      </label>
    </FormFieldError>
  )
}
