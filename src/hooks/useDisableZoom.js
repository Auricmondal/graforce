import { useEffect } from 'react'

export function useDisableZoom() {
  useEffect(() => {
    // Prevent keyboard zoom (Ctrl + +, Ctrl + -, Ctrl + 0)
    const preventKeyboardZoom = (e) => {
      if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
        e.preventDefault()
      }
    }

    // Prevent mouse wheel zoom (Ctrl + scroll)
    const preventWheelZoom = (e) => {
      if (e.ctrlKey) {
        e.preventDefault()
      }
    }

    // Prevent pinch zoom on touch devices
    const preventTouchZoom = (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault()
      }
    }

    // Add event listeners
    document.addEventListener('keydown', preventKeyboardZoom)
    document.addEventListener('wheel', preventWheelZoom, { passive: false })
    document.addEventListener('touchmove', preventTouchZoom, { passive: false })

    // Set meta viewport if it doesn't exist
    let viewportMeta = document.querySelector('meta[name="viewport"]')
    let originalContent = ''

    if (viewportMeta) {
      originalContent = viewportMeta.getAttribute('content')
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
    } else {
      viewportMeta = document.createElement('meta')
      viewportMeta.name = 'viewport'
      viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      document.head.appendChild(viewportMeta)
    }

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', preventKeyboardZoom)
      document.removeEventListener('wheel', preventWheelZoom)
      document.removeEventListener('touchmove', preventTouchZoom)

      // Restore original viewport content or remove if we created it
      if (originalContent) {
        viewportMeta.setAttribute('content', originalContent)
      } else {
        viewportMeta?.remove()
      }
    }
  }, [])
}