import { useTranslation } from 'react-i18next'
import { MobileView } from 'react-device-detect'
import { AnimationProvider } from 'shared/ui/AnimationProvider'
import { Drawer } from 'shared/ui/Drawer'
import { PageWrapper } from 'widgets/PageWrapper'

export const Main = () => {
  const { t } = useTranslation()

  return (
    <PageWrapper>
      {t('main')}

      <MobileView>
        <AnimationProvider>
          <Drawer />
        </AnimationProvider>
      </MobileView>
    </PageWrapper>
  )
}
