import { Dialog, Transition } from '@headlessui/react'
import cn from 'classnames'
import React from 'react'
import { Icon } from '../icon'

import cls from './modal.module.scss'
import { ModalProps } from './modal.types'

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children, title } = props
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className={cls.dialog} onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter={cls.modalEnter}
          enterFrom={cls.backdropFrom}
          enterTo={cls.backdropTo}
          leave={cls.modalLeave}
          leaveFrom={cls.backdropTo}
          leaveTo={cls.backdropFrom}
        >
          <div className={cn(cls.backdrop, cls.insetZero)} />
        </Transition.Child>

        <div className={cn(cls.dialogInnerWrap, cls.insetZero)}>
          <div className={cn(cls.dialogPanelWrap)}>
            <Transition.Child
              as={React.Fragment}
              enter={cls.modalEnter}
              enterFrom={cls.modalFrom}
              enterTo={cls.modalTo}
              leave={cls.modalLeave}
              leaveFrom={cls.modalTo}
              leaveTo={cls.modalFrom}
            >
              <Dialog.Panel className={cn(cls.dialogPanel)}>
                <div className={cn(cls.dialogHeaderWrap, title && cls.spaceBetween)}>
                  {title && (
                    <Dialog.Title as="h3" className={cls.dialogTitle}>
                      {title}
                    </Dialog.Title>
                  )}
                  {/* TODO Add close button */}
                  <button className={cls.closeBtn} onClick={onClose}>
                    <Icon size={24} src="close" />
                  </button>
                </div>

                <div className={cls.childrenWrap}>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
