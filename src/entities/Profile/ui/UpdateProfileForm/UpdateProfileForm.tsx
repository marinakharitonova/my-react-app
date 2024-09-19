import { useTranslation } from 'react-i18next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { catchMutationError } from 'shared/helpers/catchMutationError.ts'
import classNames from 'classnames'
import cls from './UpdateProfileForm.module.scss'
import { UpdateProfileFormInputs } from '../../model/types/interface.ts'
import { useUpdateProfileMutation } from '../../model/api/index.ts'
import { CURRENCY_SELECT_OPTIONS } from 'entities/Currency'
import { validationSchema } from '../../model/validation/validationSchema.ts'
import { yupResolver } from '@hookform/resolvers/yup'
import { notifyUi } from 'shared/helpers/notifyUi.ts'
import { Button, ThemeButton } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { Select } from 'shared/ui/Select'

export const UpdateProfileForm = ({
  onCancel,
  defaultValues,
}: {
  onCancel: () => void
  defaultValues: UpdateProfileFormInputs
}) => {
  const { t } = useTranslation(['profile', 'translation'])

  const [updateProfile, { isLoading }] = useUpdateProfileMutation()

  const onSubmit: SubmitHandler<UpdateProfileFormInputs> = data => {
    updateProfile(data)
      .unwrap()
      .then(() => {
        notifyUi(t('profile_updated', { ns: 'profile' }), {
          type: 'success',
        })
        onCancel()
      })
      .catch(catchMutationError)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileFormInputs>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(cls.UpdateProfileForm)}
    >
      <Input
        label={t('first_name', { ns: 'profile' })}
        name={'firstName'}
        register={register}
        error={errors.firstName?.message}
        dataTestId={'UpdateProfileForm.FirstName'}
      />

      <Input
        label={t('last_name', { ns: 'profile' })}
        name={'lastName'}
        register={register}
        error={errors.lastName?.message}
        dataTestId={'UpdateProfileForm.LastName'}
      />

      <Input
        label={t('age', { ns: 'profile' })}
        name={'age'}
        register={register}
        error={errors.age?.message}
        type={'number'}
        dataTestId={'UpdateProfileForm.Age'}
      />

      <Input
        label={t('city', { ns: 'profile' })}
        name={'city'}
        register={register}
        error={errors.city?.message}
        dataTestId={'UpdateProfileForm.City'}
      />

      <Input
        label={t('user_name', { ns: 'profile' })}
        name={'username'}
        register={register}
        error={errors.username?.message}
        dataTestId={'UpdateProfileForm.Username'}
      />

      <Select
        label={t('currency', { ns: 'profile' })}
        name={'currency'}
        register={register}
        options={CURRENCY_SELECT_OPTIONS}
        error={errors.currency?.message}
        dataTestId={'UpdateProfileForm.Currency'}
      />

      <div className={cls.buttons}>
        <Button
          theme={ThemeButton.FULFILLED}
          type={'submit'}
          disabled={isLoading}
          data-testid={'UpdateProfileForm.SubmitButton'}
        >
          {t('save', { ns: 'translation' })}
        </Button>

        <Button
          theme={ThemeButton.FULFILLED}
          type={'button'}
          disabled={isLoading}
          onClick={onCancel}
          data-testid={'UpdateProfileForm.CancelButton'}
        >
          {t('cancel', { ns: 'translation' })}
        </Button>
      </div>
    </form>
  )
}
