import { CSSProperties, useMemo } from 'react'
import cls from './Avatar.module.scss'
import classNames from 'classnames'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
  dataTestId?: string
}

export const Avatar = ({
  className,
  src,
  size,
  alt,
  dataTestId,
}: AvatarProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size]
  )

  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, className)}
      data-testid={dataTestId}
    />
  )
}
