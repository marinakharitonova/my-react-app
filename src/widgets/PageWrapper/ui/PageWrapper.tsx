import { MutableRefObject, ReactNode, useEffect, useRef } from 'react'
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll.ts'
import { useThrottle } from 'shared/hooks/useThrottle.ts'
import { useLocation } from 'react-router-dom'
import { scrollPositionSaved } from '../model/slice/index.ts'
import { useAppDispatch, useAppSelector } from 'shared/hooks/useStore.ts'

export const PageWrapper = ({
  children,
  isHidden,
  callback,
  dataTestid,
}: {
  children: ReactNode
  isHidden?: boolean
  callback?: () => void
  dataTestid?: string
}) => {
  const dispatch = useAppDispatch()

  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>

  const { pathname } = useLocation()
  const scrollPosition = useAppSelector(
    state => state.scrollPosition?.[pathname]
  )

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback,
  })

  const handleScroll = useThrottle(() => {
    dispatch(
      scrollPositionSaved({
        position: wrapperRef.current.scrollTop,
        path: pathname,
      })
    )
  }, 500)

  useEffect(() => {
    if (scrollPosition === undefined) return
    wrapperRef.current.scrollTop = scrollPosition
  }, [])

  return (
    <section
      ref={wrapperRef}
      style={{
        flexGrow: 1,
        padding: '40px',
        height: 'calc(100vh - var(--navbar-height))',
        overflowY: 'auto',
      }}
      onScroll={handleScroll}
      data-testid={dataTestid}
    >
      {children}
      <div
        ref={triggerRef}
        style={{
          display: isHidden ? 'none' : 'block',
          height: '20px',
        }}
      />
    </section>
  )
}
