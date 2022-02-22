/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'

const genres = [{
    id: 1,
    name: 'All',
}, {
    id: 2,
    name: 'Tracks',
}, {
    id: 3,
    name: 'Musicians',
}, {
    id: 4,
    name: 'Playlists',
}, {
    id: 5,
    name: 'Albums',
}, {
    id: 6,
    name: 'Sound Kits',
}, {
    id: 7,
    name: 'Services',
},]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SearchBarSelect() {
    const [selected, setSelected] = useState(genres[0])

    return (<Listbox value={selected} onChange={setSelected}>
        {({open}) => (<>
            <div className="relative pt-0.5">
                <Listbox.Button
                    className="relative w-24 pr-8 py-2 cursor-default text-gray400 dark:text-gray300 focus:outline-none  sm:text-sm">
                    <span className="flex items-center justify-end">
                        <span className="ml-3 block ">{selected.name}</span>
                    </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                    </span>
                </Listbox.Button>
                <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="z-10 mt-3 -ml-5 absolute w-30 rounded-md bg-white dark:bg-dark shadow-lg"

                >
                    <Listbox.Options
                        static
                        className=" z-10 mt-1 w-50  bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-x-auto focus:outline-none sm:text-sm">
                        {genres.map((genre) => (<Listbox.Option
                            key={genre.id}
                            className={({active}) => classNames(active ? ' ' : ' text-gray-900', 'w-full cursor-default select-none relative py-1.5 px-3')}
                            value={genre}
                        >
                            {({selected, active}) => (<>
                                <div className="flex items-center dark:hover:text-gray200 hover:text-gray400 ">
                                    <span
                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'px-2 block truncate')}
                                    >
                            {genre.name}
                          </span>
                                </div>

                            </>)}
                        </Listbox.Option>))}
                    </Listbox.Options>
                </Transition>
            </div>
        </>)}
    </Listbox>)
}