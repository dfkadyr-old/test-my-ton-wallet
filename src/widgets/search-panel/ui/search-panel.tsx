import cn from 'classnames'
import { memo, useState } from 'react'

import { Icon } from '@/shared/ui/icon'

import cls from './search-panel.module.scss'

interface SearchPanelProps {
  className?: string
}

export const SearchPanel = memo(({ className }: SearchPanelProps) => {
  const [searchValue, setSearchValue] = useState('')

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className={cn(cls.searchPanel, className)}>
      <label htmlFor="search">
        <div className={cn(cls.searchContainer)}>
          <Icon src="search" className={cn(cls.searchIcon)} />
          <div className={cn(cls.inputContainer)}>
            <input value={searchValue} type="text" id="search" placeholder="Search..." onChange={onHandleChange} />
          </div>
          <div>
            <Icon src="burger" />
          </div>
        </div>
      </label>
    </div>
  )
})
