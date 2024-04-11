'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

type ToastProps = {
  isOpen: boolean
  closeDialog: () => void
  message: string
  type: 'error' | 'success' | 'warning'
}

export const Toast = ({ isOpen, closeDialog, message, type }: ToastProps) => {
  const borderColor = {
    error: 'border-red-500',
    success: 'border-green-500',
    warning: 'border-yellow-500',
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        className='fixed inset-y-10 grid w-full items-end justify-center'
        open={isOpen}
        onClose={closeDialog}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 z-[-1] bg-black/25' />
        </Transition.Child>

        <div className={`border bg-black p-4 ${borderColor[type]}`}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Dialog.Panel>
              <p>{message}</p>

              <button className='text-sm' onClick={closeDialog}>
                Dismiss
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
