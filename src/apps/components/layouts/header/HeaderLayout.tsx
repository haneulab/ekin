import { type ApplicationComponent } from '@application/types'
import { TbShoe } from 'react-icons/tb'
import { GiClothes } from 'react-icons/gi'
import {
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineSearch,
    AiOutlineMenu,
} from 'react-icons/ai'

import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/logo.png'
import { useRoute } from '@application/hooks'
import { useState } from 'react'
import {
    CartModal,
    HeartModal,
    MobileModal,
} from '@application/components/core'

const HeaderLayout: ApplicationComponent = () => {
    const [showMobileModal, setShowMobileModal] = useState<boolean>(false)
    const [showCartModal, setShowCartModal] = useState<boolean>(false)
    const [showHeartModal, setShowHeartModal] = useState<boolean>(false)

    function onShowMobileModal() {
        onHideCartModal()
        onHideHeartModal()
        setShowMobileModal(true)
    }
    function onHideMobileModal() {
        setShowMobileModal(false)
    }
    function onShowCartModal() {
        onHideMobileModal()
        onHideHeartModal()
        setShowCartModal(true)
    }
    function onHideCartModal() {
        setShowCartModal(false)
    }
    function onShowHeartModal() {
        onHideMobileModal()
        onHideCartModal()
        setShowHeartModal(true)
    }
    function onHideHeartModal() {
        setShowHeartModal(false)
    }

    const route = useRoute(function () {
        onHideMobileModal()
        onHideCartModal()
        onHideHeartModal()
    })

    return (
        <>
            <MobileModal
                showMobileModal={showMobileModal}
                onHideMobileModal={onHideMobileModal}
            />
            <CartModal
                showCartModal={showCartModal}
                onHideCartModal={onHideCartModal}
            />
            <HeartModal
                showHeartModal={showHeartModal}
                onHideHeartModal={onHideHeartModal}
            />
            <header className="static top-0 z-40 w-full">
                <section className="hidden lg:block bg-neutral-900/90 text-slate-200/90">
                    <div className="px-4 py-2 max-w-cutoff mx-auto flex justify-between items-center">
                        <ul className="flex items-center gap-x-2 lg:gap-x-4 text-xl lg:text-2xl">
                            <GiClothes className="transition-smooth hover:opacity-60 cursor-pointer" />
                            <TbShoe className="transition-smooth hover:opacity-60 cursor-pointer" />
                        </ul>
                        <ul className="flex itmems-center text-sm font-nunito text-gray-200 gap-x-2 divide-x divide-gray-600/20">
                            <Link href={'/'}>
                                <a className="pl-2 transform hover:text-gray-50 hover:font-medium">
                                    Find a store
                                </a>
                            </Link>
                            <Link href={'/'}>
                                <a className="pl-2 transform hover:text-gray-50 hover:font-medium">
                                    Help
                                </a>
                            </Link>
                            <Link href={'/'}>
                                <a className="pl-2 transform hover:text-gray-50 hover:font-medium">
                                    Join Us
                                </a>
                            </Link>
                            <Link href={'/'}>
                                <a className="pl-2 transform hover:text-gray-50 hover:font-medium">
                                    Sign In
                                </a>
                            </Link>
                        </ul>
                    </div>
                </section>
                <section className="bg-white text-slate-800">
                    <div className="p-4 max-w-cutoff mx-auto flex justify-between items-center space-x-4 lg:grid lg:grid-cols-3 lg:gap-x-8">
                        <article>
                            <h1>
                                <Link href={'/'}>
                                    <picture className="block max-w-[50px]">
                                        <Image src={Logo} alt="Ekin Logo" />
                                    </picture>
                                </Link>
                            </h1>
                        </article>
                        <ul className="hidden lg:flex lg:items-center lg:justify-center lg:gap-x-6">
                            <Link href={'/products/'}>
                                <a className="font-medium transition-smooth hover:opacity-75 transform lg:hover:scale-110">
                                    New & Featured
                                </a>
                            </Link>
                            <Link href={'/products/'}>
                                <a className="font-medium transition-smooth hover:opacity-75 transform lg:hover:scale-110">
                                    T-shirts
                                </a>
                            </Link>
                            <Link href={'/products'}>
                                <a className="font-medium transition-smooth hover:opacity-75 transform lg:hover:scale-110">
                                    Jeans
                                </a>
                            </Link>
                            <Link href={'/products/'}>
                                <a className="font-medium transition-smooth hover:opacity-75 transform lg:hover:scale-110">
                                    Shoes
                                </a>
                            </Link>
                        </ul>
                        <ul className="flex items-center gap-x-4 lg:gap-x-6 justify-end">
                            <div className="relative">
                                <button className="inline-flex justify-center items-center transition-smooth hover:opacity-60 transform lg:hover:scale-105 text-xl lg:text-2xl absolute z-10 top-1/2 -translate-y-1/2 w-max h-full px-3 rounded-full bg-gray-100">
                                    <AiOutlineSearch />
                                </button>
                                <input
                                    type="text"
                                    className="px-4 py-2 rounded-full border-none bg-gray-100 outline-none focus:outline-none transition-smooth focus:pl-12 focus:drop-shadow-sm"
                                />
                            </div>
                            <ul className="flex items-center gap-x-2 lg:gap-x-4 text-xl lg:text-2xl">
                                <button
                                    onClick={onShowHeartModal}
                                    className="inline-flex justify-center items-center transition-smooth transform hover:opacity-60 lg:hover:scale-105"
                                >
                                    <AiOutlineHeart />
                                </button>
                                <button
                                    onClick={onShowCartModal}
                                    className="inline-flex justify-center items-center transition-smooth transform hover:opacity-60 lg:hover:scale-105"
                                >
                                    <AiOutlineShoppingCart />
                                </button>
                                <button
                                    onClick={onShowMobileModal}
                                    className="inline-flex lg:hidden justify-center items-center transition-smooth transform hover:opacity-60 lg:hover:scale-105"
                                >
                                    <AiOutlineMenu />
                                </button>
                            </ul>
                        </ul>
                    </div>
                </section>
            </header>
        </>
    )
}

export default HeaderLayout
