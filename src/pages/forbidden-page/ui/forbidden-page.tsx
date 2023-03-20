import { memo } from 'react'

import { Page } from '@/widgets/page'

export const ForbiddenPage = memo(() => {
  return <Page dataTestId="ForbiddenPage">ForbiddenPage page</Page>
})
