import { useEffect, useState } from 'react'

// Component for testing ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false)

  const handleThrow = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return <button onClick={handleThrow}>throw error</button>
}
