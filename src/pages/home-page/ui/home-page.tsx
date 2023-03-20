import cn from 'classnames'
import { memo, useState } from 'react'

import BirdActivityImage from '@/shared/assets/images/bird-activity.svg'
import BirdCrystalImage from '@/shared/assets/images/bird-crystal.svg'
import BirdHiImage from '@/shared/assets/images/bird-hi.svg'
import BirdLightImage from '@/shared/assets/images/bird-light.svg'
import BirdNftImage from '@/shared/assets/images/bird-nft.svg'
import { IconButton } from '@/shared/ui/icon-button'
import { Modal } from '@/shared/ui/modal'
import { TabWrapper } from '@/shared/ui/tab-wrapper'
import { TabbedNav } from '@/shared/ui/tabbed-nav'
import { Page } from '@/widgets/page'
import { SearchPanel } from '@/widgets/search-panel'
import { WalletInfo } from '@/widgets/wallet-info'

import cls from './home-page.module.scss'

const tabs = ['Assets', 'Activity', 'NFT']

export const HomePage = memo(() => {
  const [tab, setTab] = useState(0)
  const [isReceiveOpen, setIsReceiveOpen] = useState(false)
  const [isSendOpen, setIsSendOpen] = useState(false)
  const [isEarnOpen, setIsEarnOpen] = useState(false)

  return (
    <Page dataTestId="HomePage">
      <SearchPanel />
      <WalletInfo />
      <div className={cls.actionButtonWrapper}>
        <IconButton
          onClick={() => setIsReceiveOpen(true)}
          className={cls.actionButton}
          text="Receive"
          imageSrc="receive"
        />
        <IconButton onClick={() => setIsSendOpen(true)} className={cls.actionButton} text="Send" imageSrc="send" />
        <IconButton className={cls.actionButton} text="Swap" imageSrc="swap" />
        <IconButton onClick={() => setIsEarnOpen(true)} className={cls.actionButton} text="Earn" imageSrc="earning" />
      </div>
      <div className={cls.tabsContentWrapper}>
        <TabbedNav tabs={tabs} activeTab={tab} setTab={setTab} />
        <TabWrapper tabIndex={tab}>
          <div className={cls.tabContent}>Assets</div>
          <div className={cn(cls.tabContent, cls.center)}>
            <BirdActivityImage />
            <div className={cls.text}>No Activity</div>
          </div>
          <div className={cn(cls.tabContent, cls.center)}>
            <BirdNftImage />
            <div className={cls.text}>No NFTs yet</div>
          </div>
        </TabWrapper>
      </div>
      <Modal title="Receive" isOpen={isReceiveOpen} onClose={() => setIsReceiveOpen(false)}>
        <div className={cn(cls.tabContent, cls.center)}>
          <BirdHiImage />
        </div>
      </Modal>
      <Modal title="Send" isOpen={isSendOpen} onClose={() => setIsSendOpen(false)}>
        <div className={cn(cls.tabContent, cls.center)}>
          <BirdLightImage />
        </div>
      </Modal>
      <Modal title="Earning" isOpen={isEarnOpen} onClose={() => setIsEarnOpen(false)}>
        <div className={cn(cls.tabContent, cls.center)}>
          <BirdCrystalImage />
        </div>
      </Modal>
    </Page>
  )
})
