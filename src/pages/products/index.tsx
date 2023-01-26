import {
    type Jean,
    type Shoe,
    type Tshirt,
    type PageWithLayout,
} from '@application/types'
import { type GetServerSideProps, type GetServerSidePropsContext } from 'next'
import { PrimaryLayout, ProductsLayout } from '@application/components/layouts'
import { HiArrowDown } from 'react-icons/hi'
import { useState } from 'react'
import { ProductBar } from '@application/components/core'
import Image from 'next/image'
import Four from 'public/landing/4.png'
import Logo from 'public/logo.png'

interface ProductsSSRProps {
    data: {
        tshirts: Tshirt[]
        jeans: Jean[]
        shoes: Shoe[]
    }
}

const getServerSideProps: GetServerSideProps<ProductsSSRProps> = async (
    _: GetServerSidePropsContext
) => {
    const res = await fetch('http://localhost:3000/api/products')
    const data = await res.json()

    return { props: { data } }
}

const ProductsPage: PageWithLayout<ProductsSSRProps> = ({ data }) => {
    const products = data as {
        tshirts: Tshirt[]
        jeans: Jean[]
        shoes: Shoe[]
    }

    return (
        <div className="bg-white text-neutral-900 min-h-screen relative">
            <section className="px-4 lg:px-8 py-16 max-w-cutoff mx-auto grid grid-cols-1 lg:grid-cols-8 2xl:grid-cols-12 w-full h-full">
                <article className="hidden lg:flex lg:flex-col lg:col-span-2 2xl:col-span-3 border-r h-full pr-4 2xl:pr-8 max-h-[750px] overflow-y-scroll sticky top-12 ">
                    <div className="mb-8 flex items-center justify-start">
                        <picture className="w-full max-w-[50px] block">
                            <Image src={Logo} alt="Ekin Logo" />
                        </picture>
                        <h3 className="font-bold font-lato text-xl xl:text-2xl">
                            Ekin Products
                        </h3>
                    </div>
                    <ul className="grid grid-cols-1 max-h-[350px] overflow-y-scroll">
                        {Object.keys(products).map((key, idx) => (
                            <ProductBar
                                key={idx}
                                product={key}
                                categories={[
                                    ...new Set<string>(
                                        products[key].map((e) => e.category)
                                    ),
                                ]}
                            />
                        ))}
                    </ul>
                </article>
                <article className="lg:col-span-6 2xl:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 2xl:grid-cols-3 lg:pl-8">
                    {products.tshirts.map((t, i) => (
                        <div key={i} className="cursor-pointer">
                            <picture>
                                <Image src={Four} alt="" />
                            </picture>
                            <div className="flex justify-between items-start gap-x-4">
                                <div>
                                    <h3 className="font-medium text-lg font-poppins mb-0.5">
                                        {t.name}
                                    </h3>
                                    <p className="font-light text-slate-600 font-nunito">
                                        {t.description}
                                    </p>
                                </div>
                                <span className="font-medium text-slate-800 font-nunito">
                                    ${t.price}.00
                                </span>
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        </div>
    )
}

ProductsPage.getLayout = (page) => {
    return (
        <PrimaryLayout>
            <ProductsLayout>{page}</ProductsLayout>
        </PrimaryLayout>
    )
}

export { getServerSideProps }
export default ProductsPage
