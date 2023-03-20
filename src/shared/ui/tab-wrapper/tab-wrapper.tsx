import { TabWrapperType } from './tab-wrapper.types'

export const TabWrapper = (props: TabWrapperType) => {
  const { children, tabIndex } = props
  return children[tabIndex]
}
