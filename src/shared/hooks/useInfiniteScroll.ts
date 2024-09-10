import { MutableRefObject, useEffect, useRef } from 'react'

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}) => {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const triggerElement = triggerRef.current
    const wrapperElement = wrapperRef.current

    if (callback) {
      const options = {
        root: wrapperElement,
        threshold: 1.0,
      }

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)

      observer.current.observe(triggerElement)
    }

    return () => {
      if (observer.current && triggerElement) {
        observer.current.unobserve(triggerElement)
      }
    }
  }, [callback, triggerRef, wrapperRef])
}
