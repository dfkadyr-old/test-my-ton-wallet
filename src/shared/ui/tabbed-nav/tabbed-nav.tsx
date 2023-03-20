import cn from 'classnames'
import { memo } from 'react'

import cls from './tabbed-nav.module.scss'
import { TabbedNavType } from './tabbed-nav.types'

export const TabbedNav = memo((props: TabbedNavType) => {
  const { tabs, activeTab, setTab } = props
  const handleSetTab = (tabId: number) => setTab(tabId)

  return (
    <div className={cn(cls.tabWrapper)}>
      {tabs.map((t, i) => (
        <button key={t} className={cn(cls.tab, activeTab === i && cls.active)} onClick={() => handleSetTab(i)}>
          {t}
        </button>
      ))}
    </div>
  )
})
