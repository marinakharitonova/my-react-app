import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'
import classNames from 'classnames'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginFormInputs } from '../../model/types/interface.ts'
import { validationSchema } from '../../model/validation/validationSchema.ts'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLoginMutation } from '../../model/api/index.ts'
import { catchMutationError } from 'shared/helpers/catchMutationError.ts'
import { notifyUi } from 'shared/helpers/notifyUi.ts'
import { loggedIn } from 'entities/User'
import { Button, ThemeButton } from 'shared/ui/Button'
import { useAppDispatch } from 'shared/hooks/useStore.ts'

export interface LoginFormProps {
  className?: string
  onSuccess?: () => void
}

const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const [login, { isLoading }] = useLoginMutation()

  const onSubmit: SubmitHandler<LoginFormInputs> = data => {
    login({
      username: data.login,
      password: data.password,
    })
      .unwrap()
      .then(resp => {
        notifyUi(t('greeting_by_name', { name: resp.username }), {
          type: 'success',
        })
        dispatch(loggedIn(resp))
        onSuccess?.()
      })
      .catch(catchMutationError)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(validationSchema),
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(cls.LoginForm, className)}
    >
      <Input
        name={'login'}
        register={register}
        className={cls.input}
        placeholder={t('input_login')}
        error={errors.login?.message}
        autofocus
        dataTestId={'LoginForm.Login'}
      />

      <Input
        name={'password'}
        register={register}
        className={cls.input}
        placeholder={t('input_pass')}
        type={'password'}
        error={errors.password?.message}
        dataTestId={'LoginForm.Password'}
      />

      <Button
        className={cls.loginBtn}
        theme={ThemeButton.FULFILLED}
        type={'submit'}
        disabled={isLoading}
        data-testid={'LoginForm.SubmitButton'}
      >
        {t('login')}
      </Button>
    </form>
  )
}

export default LoginForm
