import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'

import { ProfileCardItem } from '../ProfileCardItem/ProfileCardItem.tsx'
import { Profile } from '../../model/types/interface.ts'
import classNames from 'classnames'

interface ProfileCardProps {
  className?: string
  data: Profile
}

export const ProfileCard = ({ className, data }: ProfileCardProps) => {
  const { t } = useTranslation('profile')

  return (
    <div className={classNames(cls.ProfileCard, className)}>
      <div className={cls.data}>
        {/*{data?.avatar && (*/}
        {/*    <div className={cls.avatarWrapper}>*/}
        {/*        <Avatar src={data?.avatar} />*/}
        {/*    </div>*/}
        {/*)}*/}
        <ProfileCardItem name={t('first_name')} value={data.firstName} />
        <ProfileCardItem name={t('last_name')} value={data.lastName} />
        <ProfileCardItem name={t('age')} value={data.age} />
        <ProfileCardItem name={t('city')} value={data.city} />
        <ProfileCardItem name={t('user_name')} value={data.username} />
        <ProfileCardItem name={t('currency')} value={data.currency} />
      </div>
    </div>
  )
}
