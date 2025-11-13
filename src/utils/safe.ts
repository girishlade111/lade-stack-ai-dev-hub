/**
 * Safe utility functions to handle common operations with error handling
 */

export const safeWindowOpen = (url: string, target: string = '_blank') => {
  try {
    window.open(url, target, 'noopener,noreferrer')
  } catch (error) {
    console.warn(`Failed to open URL: ${url}`, error)
    // Fallback: try setting href directly
    try {
      window.location.href = url
    } catch (fallbackError) {
      console.warn('Fallback URL navigation failed:', fallbackError)
    }
  }
}

export const safeQuerySelector = <T extends Element = Element>(selector: string): T | null => {
  try {
    return document.querySelector<T>(selector)
  } catch (error) {
    console.warn(`Invalid selector: ${selector}`, error)
    return null
  }
}

export const safeScrollIntoView = (element: Element | null, options?: ScrollIntoViewOptions) => {
  if (!element) {
    console.warn('Cannot scroll: element is null')
    return
  }

  try {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      ...options
    })
  } catch (error) {
    console.warn('Failed to scroll element into view:', error)
    // Fallback: try to scroll to a general position
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (fallbackError) {
      console.warn('Fallback scroll failed:', fallbackError)
    }
  }
}

export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key)
    } catch (error) {
      console.warn(`Failed to get localStorage item: ${key}`, error)
      return null
    }
  },
  
  setItem: (key: string, value: string): boolean => {
    try {
      localStorage.setItem(key, value)
      return true
    } catch (error) {
      console.warn(`Failed to set localStorage item: ${key}`, error)
      return false
    }
  },
  
  removeItem: (key: string): boolean => {
    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.warn(`Failed to remove localStorage item: ${key}`, error)
      return false
    }
  }
}

export const safeClipboard = {
  writeText: async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch (error) {
      console.warn('Failed to write to clipboard:', error)
      // Fallback for older browsers
      try {
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        const result = document.execCommand('copy')
        document.body.removeChild(textArea)
        return result
      } catch (fallbackError) {
        console.warn('Clipboard fallback also failed:', fallbackError)
        return false
      }
    }
  }
}