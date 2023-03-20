interface TabbedNavProps {
  tabs: string[]
  activeTab: number
  setTab: (activeTab: number) => void
}

export type TabbedNavType = TabbedNavProps
