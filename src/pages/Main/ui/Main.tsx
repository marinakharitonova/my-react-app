import { useTranslation } from 'react-i18next'
import { PageWrapper } from 'widgets/PageWrapper/ui/PageWrapper.tsx'
import { Drawer } from 'shared/ui/Drawer/Drawer.tsx'
import { MobileView } from 'react-device-detect'
import { AnimationProvider } from 'shared/ui/AnimationProvider/AnimationProvider.tsx'

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
