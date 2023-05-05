import { useState, useEffect } from 'react'
import { isBrowser } from './isBrowser'

// Just an alternative version of useResponsive or isResponsive

interface States {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

export default function useResponsive() {
  const [responsive, setResponsive] = useState<States>({
    isMobile: true,
    isTablet: false,
    isDesktop: false,
  })

  function Check() {
    if (window.innerWidth <= 500) {
      setResponsive({
        isMobile: true,
        isTablet: false,
        isDesktop: false,
      })
    } else if (window.innerWidth > 500 && window.innerWidth < 950) {
      setResponsive({
        isMobile: false,
        isTablet: true,
        isDesktop: false,
      })
    } else if (window.innerWidth >= 950) {
      setResponsive({
        isMobile: false,
        isTablet: false,
        isDesktop: true,
      })
    }
  }

  useEffect(() => {
    Check()

    isBrowser && window.addEventListener('resize', Check, { passive: true })

    return function cleanUp() {
      isBrowser && window.removeEventListener('resize', Check)
    }
  }, [isBrowser && window.innerWidth])

  const { isDesktop, isMobile, isTablet } = responsive

  return { isDesktop, isMobile, isTablet }
}
