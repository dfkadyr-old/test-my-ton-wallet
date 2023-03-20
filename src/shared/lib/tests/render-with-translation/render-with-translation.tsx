import { render } from '@testing-library/react'
import { ReactNode } from 'react'

export function renderWithTranslation(component: ReactNode) {
  return render(<div>component with {component}</div>)
}
