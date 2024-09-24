import {
  ProfileCard,
  UpdateProfileForm,
  useGetProfileQuery,
} from 'entities/Profile'
import { useToggle } from 'shared/hooks/useToggle.ts'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button'
import { ContentLoader } from 'shared/ui/ContentLoader'
import { PageWrapper } from 'widgets/PageWrapper'

const Profile = () => {
  const { t } = useTranslation()

  const { data, isFetching, isError } = useGetProfileQuery()

  const { isOn: isEdited, on: edit, off: cancelEdit } = useToggle(false)

  return (
    <PageWrapper dataTestid={'ProfilePage'}>
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
            data-testid={'ProfilePage.EditButton'}
          >
            {t('edit')}
          </Button>
          <ContentLoader isLoading={isFetching} isError={isError}>
            {data && <ProfileCard data={data} />}
          </ContentLoader>
        </>
      )}
    </PageWrapper>
  )
}

export default Profile
