import { ApplicationComponent } from '@application/types'
import Image from 'next/image'
import Link from 'next/link'
import { IProductsLayout } from './ProductsLayout.types'
import Logo from 'public/logo.png'
import { useEffect, useState } from 'react'
const ProductsLayout: ApplicationComponent<IProductsLayout> = ({
    children,
}) => {
    const [showProductNav, setShowProductNav] = useState<boolean>(false)

    useEffect(() => {
        setShowProductNav(window.screenTop > 100 ? true : false)
    }, [showProductNav])

    return (
        <>
            {showProductNav && (
                <aside className="lg:hidden sticky top-0 z-40 block bg-slate-50/90 backdrop-blur-sm text-slate-900">
                    <section className="px-4 lg:px-8 py-4 flex justify-between items-center">
                        <picture className="w-full max-w-[30px]">
                            <Image src={Logo} alt="Ekin Logo" />
                        </picture>
                        <ul className="flex items-center gap-x-4 justify-start">
                            <Link href={'/products/tshirts'}>
                                <a className="font-medium text-sm md:text-base font-nunito transition-smooth hover:opacity-60">
                                    Tshirt
                                </a>
                            </Link>
                            <Link href={'/products/jeans'}>
                                <a className="font-medium text-sm md:text-base font-nunito transition-smooth hover:opacity-60">
                                    Jeans
                                </a>
                            </Link>
                            <Link href={'/products/shoes'}>
                                <a className="font-medium text-sm md:text-base font-nunito transition-smooth hover:opacity-60">
                                    Shoes
                                </a>
                            </Link>
                        </ul>
                    </section>
                </aside>
            )}
            {children}
        </>
    )
}

export default ProductsLayout
