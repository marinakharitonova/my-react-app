import cls from './ProfileCardItem.module.scss'

export const ProfileCardItem = ({
  name,
  value,
  isShown = true,
}: {
  name: string
  value: string | number
  isShown?: boolean
}) => {
  if (!isShown) return null

  return (
    <div className={cls.ProfileCardItem}>
      <p>{`${name}:`}</p>
      <p>{value}</p>
    </div>
  )
}
