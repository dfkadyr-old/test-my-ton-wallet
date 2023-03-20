import cn from 'classnames'
import { memo, useCallback, useState } from 'react'

import { myAccount } from '@/shared/const/account'
import { copyToClipboard } from '@/shared/lib/utils/copy-to-clipboard'
import { Icon } from '@/shared/ui/icon'

import { shortAddress } from '../utils/short-address'

import cls from './wallet-info.module.scss'

interface WalletInfoProps {
  className?: string
}

export const WalletInfo = memo(({ className }: WalletInfoProps) => {
  const [idTimerAddressCopied, setIdTimerAddressCopied] = useState<NodeJS.Timeout | null>(null)

  const copyAddressToClipBoard = useCallback(() => {
    idTimerAddressCopied && clearTimeout(idTimerAddressCopied)
    copyToClipboard(myAccount)
    const timerId = setTimeout(() => {
      setIdTimerAddressCopied(null)
    }, 1500)
    setIdTimerAddressCopied(timerId)
  }, [idTimerAddressCopied])

  return (
    <div className={cn(cls.walletInfo, className)}>
      <div className={cn(cls.walletType)}>
        Personal Wallet <Icon size={12} src="arrowDown" className={cls.arrowIcon} />
      </div>
      <div className={cls.walletBalanceContainer}>
        <div className={cls.walletBalance}>$13,123</div>
        <div className={cls.walletBalanceHistory}>
          <span>21%</span>
          <Icon size={12} src="cat" />
          <span>768$</span>
        </div>
      </div>
      <div className={cls.walletName}>
        <span>{shortAddress(myAccount, 5, 6)}</span>
        <button onClick={copyAddressToClipBoard}>
          <Icon size={22} src={idTimerAddressCopied ? 'tick' : 'copy'} />
        </button>
      </div>
    </div>
  )
})
