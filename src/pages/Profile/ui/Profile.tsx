import { ProfileCard, useGetProfileQuery } from 'entities/Profile'
import { useToggle } from 'shared/hooks/useToggle.ts'
import { UpdateProfileForm } from 'entities/Profile/ui/UpdateProfileForm/UpdateProfileForm.tsx'
import { useTranslation } from 'react-i18next'
import { ThemeButton } from 'shared/ui/Button/interface.ts'
import { Button } from 'shared/ui/Button/Button.tsx'
import { ContentLoader } from 'shared/ui/ContentLoader/ContentLoader.tsx'

const Profile = () => {
  const { t } = useTranslation()

  const { data, isFetching, isError } = useGetProfileQuery()

  const { isOn: isEdited, on: edit, off: cancelEdit } = useToggle(false)

  return (
    <div>
      <h2 style={{ marginBottom: '40px' }}>{t('profile')}</h2>

      {isEdited ? (
        <>
          {data && (
            <UpdateProfileForm
              onCancel={cancelEdit}
              defaultValues={{
                firstName: data.firstName,
                lastName: data.lastName,
                username: data.username,
                age: data.age,
                currency: data.currency,
                city: data.city,
              }}
            />
          )}
        </>
      ) : (
        <>
          <Button
            theme={ThemeButton.FULFILLED}
            onClick={edit}
            style={{ display: 'block', margin: '0 0 20px auto' }}
            disabled={isFetching || isError}
          >
            {t('edit')}
          </Button>
          <ContentLoader isLoading={isFetching} isError={isError}>
            {data && <ProfileCard data={data} />}
          </ContentLoader>
        </>
      )}
    </div>
  )
}

export default Profile
