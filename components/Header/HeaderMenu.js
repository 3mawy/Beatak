import SearchBar from "./SearchBar/SearchBar";
import {useMediaQuery} from '/components/hooks/useMediaQueryHook';

import Image from "next/image"

import {Fragment, useState} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {SearchIcon, ShoppingBagIcon} from '@heroicons/react/outline'
import HeaderMenuDrawer from "./HeaderMenuDrawer";
import HeaderCart from "./HeaderCart";
import {useRouter} from "next/router";
import Link from "next/link";

const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        {name: 'Tops', href: '#'},
                        {name: 'Dresses', href: '#'},
                        {name: 'Pants', href: '#'},
                        {name: 'Denim', href: '#'},
                        {name: 'Sweaters', href: '#'},
                        {name: 'T-Shirts', href: '#'},
                        {name: 'Jackets', href: '#'},
                        {name: 'Activewear', href: '#'},
                        {name: 'Browse All', href: '#'},
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        {name: 'Watches', href: '#'},
                        {name: 'Wallets', href: '#'},
                        {name: 'Bags', href: '#'},
                        {name: 'Sunglasses', href: '#'},
                        {name: 'Hats', href: '#'},
                        {name: 'Belts', href: '#'},
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        {name: 'Full Nelson', href: '#'},
                        {name: 'My Way', href: '#'},
                        {name: 'Re-Arranged', href: '#'},
                        {name: 'Counterfeit', href: '#'},
                        {name: 'Significant Other', href: '#'},
                    ],
                },
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        {name: 'Tops', href: '#'},
                        {name: 'Pants', href: '#'},
                        {name: 'Sweaters', href: '#'},
                        {name: 'T-Shirts', href: '#'},
                        {name: 'Jackets', href: '#'},
                        {name: 'Activewear', href: '#'},
                        {name: 'Browse All', href: '#'},
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        {name: 'Watches', href: '#'},
                        {name: 'Wallets', href: '#'},
                        {name: 'Bags', href: '#'},
                        {name: 'Sunglasses', href: '#'},
                        {name: 'Hats', href: '#'},
                        {name: 'Belts', href: '#'},
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        {name: 'Re-Arranged', href: '#'},
                        {name: 'Counterfeit', href: '#'},
                        {name: 'Full Nelson', href: '#'},
                        {name: 'My Way', href: '#'},
                    ],
                },
            ],
        },
    ],
    pages: [
        {name: 'Home', href: '/'},
        {name: 'Feed', href: '/feed'},
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HeaderMenu() {
    const router = useRouter();
    let activeLink;
    return (
        <div className="bg-white dark:bg-dark300">
            {/* Mobile menu */}
            <header className="relative mx-auto xl:container ">
                <nav aria-label="Top" className="pb-1.5 lg:pb-0 mx-auto px-4 ">
                    <div>
                        <div className="sm:h-10  flex items-center ">
                            <HeaderMenuDrawer navigation={navigation}/>

                            {/* Flyout menus menu links*/}
                            <Popover.Group className="hidden lg:block lg:self-stretch ">
                                <div className="h-full flex pt-0.5 ">

                                    {navigation.pages.map((page) => (
                                        <Link passHref key={page.name} href={page.href}>
                                            <a className={`flex items-center w-28 text-sm font-medium text-gray-700 
                                            hover:text-gray-800 ${(router.pathname === page.href ) && 'border-primary' +
                                            ' transition-colors ease-out duration-200 border-b-2'}`}
                                            >
                                                {page.name}
                                            </a>
                                        </Link>
                                    ))}
                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex z-50">
                                            {({open}) => (
                                                <>
                                                    <div className="relative flex ">
                                                        <Popover.Button
                                                            className={classNames(
                                                                open
                                                                    ? ' text-indigo-600'
                                                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                                                'hover:border-primary transition-colors ease-out duration-200 w-28 ps-1 relative  flex items-center  text-sm font-medium border-b-2 '
                                                            )}
                                                        >
                                                            {category.name}
                                                        </Popover.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Popover.Panel
                                                            className="absolute top-full inset-x-0 text-sm text-gray-500">
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div className="absolute inset-0 top-1/2 bg-white shadow"
                                                                 aria-hidden="true"/>

                                                            <div className="relative bg-light dark:bg-dark500">
                                                                <div className="max-w-7xl mx-auto px-8">
                                                                    <div
                                                                        className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                                        <div
                                                                            className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                            {category.featured.map((item) => (
                                                                                <div key={item.name}
                                                                                     className="group relative text-base sm:text-sm">
                                                                                    <div
                                                                                        className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                                        <Image
                                                                                            width={5} height={5}
                                                                                            src={item.imageSrc}
                                                                                            alt={item.imageAlt}
                                                                                            className="object-center object-cover"
                                                                                        />
                                                                                    </div>
                                                                                    <a href={item.href}
                                                                                       className="mt-6 block font-medium text-gray-900">
                                                                                        <span
                                                                                            className="absolute z-10 inset-0"
                                                                                            aria-hidden="true"/>
                                                                                        {item.name}
                                                                                    </a>
                                                                                    <p aria-hidden="true"
                                                                                       className="mt-1">
                                                                                        Shop now
                                                                                    </p>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                        <div
                                                                            className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                                                            {category.sections.map((section) => (
                                                                                <div key={section.name}>
                                                                                    <p id={`${section.name}-heading`}
                                                                                       className="font-medium text-gray-900">
                                                                                        {section.name}
                                                                                    </p>
                                                                                    <ul
                                                                                        role="list"
                                                                                        aria-labelledby={`${section.name}-heading`}
                                                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                    >
                                                                                        {section.items.map((item) => (
                                                                                            <li key={item.name}
                                                                                                className="flex">
                                                                                                <a href={item.href}
                                                                                                   className="hover:text-gray-800">
                                                                                                    {item.name}
                                                                                                </a>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}

                                </div>
                            </Popover.Group>
                            <SearchBar className={' md:hidden'}/>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
