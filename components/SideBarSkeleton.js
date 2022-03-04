import {ShoppingBagIcon} from "@heroicons/react/outline";
import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'
import {useMediaQuery} from '/components/hooks/useMediaQueryHook';


function SideBarSkeleton(props) {
    const {open, toggleQueueMenuCallBack} = props
    const isMobile = useMediaQuery(1023);

    return (
        <>

            <Transition.Root show={open} as={Fragment}>
                        <div className="fixed z-20 bottom-[3rem] top-[7rem] rtl:left-0 right-0  ps-10 max-w-full flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full "
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div className="w-screen max-w-md">
                                    <div className=" z-50 h-full flex flex-col bg-light dark:bg-dark500 overflow-y-scroll">
                                        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <h1 className="text-lg font-medium text-gray-900">Playing queue</h1>
                                                <div className="ms-3 h-7 flex items-center">
                                                    <button
                                                        type="button"
                                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => toggleQueueMenuCallBack(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true"/>
                                                    </button>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
            </Transition.Root>
        </>

    );
}

export default SideBarSkeleton;