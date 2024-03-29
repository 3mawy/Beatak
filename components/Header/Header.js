import * as React from 'react';

import {useTranslation} from 'next-i18next';
import styles from '/styles/components/header.module.css'
import SearchBar from "./SearchBar/SearchBar"
import Link from "next/link";

import {Fragment, useState} from 'react'
import {Dialog, Popover, Tab, Transition} from '@headlessui/react'
import Image from "next/image"

import {LogoutIcon, XIcon} from "@heroicons/react/solid";
import HeaderButtons from "./HeaderButtons";
import LanguageToggle from "../LanguageToggle";
import ThemeToggle from "../ThemeToggle";
import HeaderCart from "./HeaderCart";

const navigation = {
    categories: [{
        id: 'women', name: 'Women', featured: [{
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        }, {
            name: 'Basic Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },], sections: [{
            id: 'clothing',
            name: 'Clothing',
            items: [{name: 'Tops', href: '#'}, {name: 'Dresses', href: '#'}, {name: 'Pants', href: '#'}, {
                name: 'Denim',
                href: '#'
            }, {name: 'Sweaters', href: '#'}, {name: 'T-Shirts', href: '#'}, {
                name: 'Jackets',
                href: '#'
            }, {name: 'Activewear', href: '#'}, {name: 'Browse All', href: '#'},],
        }, {
            id: 'accessories',
            name: 'Accessories',
            items: [{name: 'Watches', href: '#'}, {name: 'Wallets', href: '#'}, {
                name: 'Bags',
                href: '#'
            }, {name: 'Sunglasses', href: '#'}, {name: 'Hats', href: '#'}, {name: 'Belts', href: '#'},],
        }, {
            id: 'brands',
            name: 'Brands',
            items: [{name: 'Full Nelson', href: '#'}, {name: 'My Way', href: '#'}, {
                name: 'Re-Arranged',
                href: '#'
            }, {name: 'Counterfeit', href: '#'}, {name: 'Significant Other', href: '#'},],
        },],
    }, {
        id: 'men', name: 'Men', featured: [{
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        }, {
            name: 'Artwork Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },], sections: [{
            id: 'clothing',
            name: 'Clothing',
            items: [{name: 'Tops', href: '#'}, {name: 'Pants', href: '#'}, {
                name: 'Sweaters',
                href: '#'
            }, {name: 'T-Shirts', href: '#'}, {name: 'Jackets', href: '#'}, {
                name: 'Activewear',
                href: '#'
            }, {name: 'Browse All', href: '#'},],
        }, {
            id: 'accessories',
            name: 'Accessories',
            items: [{name: 'Watches', href: '#'}, {name: 'Wallets', href: '#'}, {
                name: 'Bags',
                href: '#'
            }, {name: 'Sunglasses', href: '#'}, {name: 'Hats', href: '#'}, {name: 'Belts', href: '#'},],
        }, {
            id: 'brands',
            name: 'Brands',
            items: [{name: 'Re-Arranged', href: '#'}, {name: 'Counterfeit', href: '#'}, {
                name: 'Full Nelson',
                href: '#'
            }, {name: 'My Way', href: '#'},],
        },],
    },], pages: [{name: 'Company', href: '#'}, {name: 'Stores', href: '#'},],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [open, setOpen] = useState(false)
    const {t} = useTranslation('header');

    return (<div className="">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25"/>
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div
                        className="relative max-w-xs w-full bg-white dark:bg-dark300 shadow-xl pb-12 flex flex-col overflow-y-auto">
                        <div className="px-4 pt-5 pb-2 flex">
                            <button
                                type="button"
                                className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                onClick={() => setOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XIcon className="h-6 w-6" aria-hidden="true"/>
                            </button>
                        </div>

                        {/* Links */}
                        <Tab.Group as="div" className="mt-2">
                            <div className="border-b border-gray-200">
                                <Tab.List className="-mb-px flex px-4 space-x-8">
                                    {navigation.categories.map((category) => (<Tab
                                        key={category.name}
                                        className={({selected}) => classNames(selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent', 'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium')}
                                    >
                                        {category.name}
                                    </Tab>))}
                                </Tab.List>
                            </div>
                            <Tab.Panels as={Fragment}>
                                {navigation.categories.map((category) => (
                                    <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                                        <div className="grid grid-cols-2 gap-x-4">
                                            {category.featured.map((item) => (
                                                <div key={item.name} className="group relative text-sm">
                                                    <div
                                                        className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                        <Image width={5} height={5} src={item.imageSrc} alt={item.imageAlt}
                                                             className="object-center object-cover"/>
                                                    </div>
                                                    <a href={item.href}
                                                       className="mt-6 block font-medium text-gray-900">
                                                            <span className="absolute -z-50 inset-0"
                                                                  aria-hidden="true"/>
                                                        {item.name}
                                                    </a>
                                                    <p aria-hidden="true" className="mt-1">
                                                        Shop now
                                                    </p>
                                                </div>))}
                                        </div>
                                        {category.sections.map((section) => (<div key={section.name}>
                                            <p id={`${category.id}-${section.id}-heading-mobile`}
                                               className="font-medium text-gray-900">
                                                {section.name}
                                            </p>
                                            <ul
                                                role="list"
                                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                className="mt-6 flex flex-col space-y-6"
                                            >
                                                {section.items.map((item) => (
                                                    <li key={item.name} className="flow-root">
                                                        <a href={item.href}
                                                           className="-m-2 p-2 block text-gray-500">
                                                            {item.name}
                                                        </a>
                                                    </li>))}
                                            </ul>
                                        </div>))}
                                    </Tab.Panel>))}
                            </Tab.Panels>
                        </Tab.Group>

                        <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                            {navigation.pages.map((page) => (<div key={page.name} className="flow-root">
                                <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                                    {page.name}
                                </a>
                            </div>))}
                        </div>

                        <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                            <div className="flow-root">
                                <Link href="/login" className="-m-2 p-2 block font-medium text-gray-200">
                                    Sign in
                                </Link>
                            </div>
                            <div className="flow-root">
                                <Link href="/register" className="-m-2 p-2 block font-medium dark:text-gray-200">
                                    Create account
                                </Link>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 py-6 px-4">
                            <a href="#" className="-m-2 p-2 flex items-center">
                                <Image
                                    width={5} height={5}
                                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                                    alt=""
                                    className="w-5 h-auto block flex-shrink-0"
                                />
                                <span className="ms-3 block text-base font-medium text-gray-900">CAD</span>
                                <span className="sr-only">, change currency</span>
                            </a>
                        </div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition.Root>

        <header className="relative dark:bg-dark300">
            {/*<HeaderAnnouncement title={'Get free delivery on orders over $100'}/>*/}
            <nav aria-label="Top" className=" mx-auto px-4 xl:container ">
                <div>
                    <div className="h-16 pt-2 flex  items-center">

                        {/* Logo */}
                        <div className="flex lg:ms-0 h-8 w-auto min-w-fit cursor-pointer">
                            <Link href="/" passHref>
                                <Image
                                    width={25} height={25}
                                    src="/favicon.svg"
                                    alt="Beatak logo"
                                />
                            </Link>
                        </div>
                        <SearchBar className={'hidden md:block max-w-2xl ps-4'}/>
                        <div className="ms-auto min-w-fit flex items-center ">
                            <HeaderButtons/>
                            <LanguageToggle/>
                            <ThemeToggle/>
                            <HeaderCart/>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    </div>)
}
