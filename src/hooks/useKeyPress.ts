import { useEffect } from 'react'

const useKeyPress = (key, func) => {
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === key) {
        func()
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [key, func])
}

export default useKeyPress;
