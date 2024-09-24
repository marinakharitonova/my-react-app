import cls from './ProfileCardItem.module.scss'

export const ProfileCardItem = ({
  name,
  value,
  isShown = true,
  dataTestId,
}: {
  name: string
  value: string | number
  isShown?: boolean
  dataTestId?: string
}) => {
  if (!isShown) return null

  return (
    <div className={cls.ProfileCardItem}>
      <p>{`${name}:`}</p>
      <p data-testid={dataTestId}>{value}</p>
    </div>
  )
}
