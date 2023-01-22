import { type PageWithLayout } from '@application/types'
import { type GetServerSidePropsContext } from 'next'
import { PrimaryLayout } from '@application/components/layouts'
import Image from 'next/image'

import One from 'public/landing/1.png'
import Two from 'public/landing/2.png'
import Three from 'public/landing/3.png'
import Four from 'public/landing/4.png'
import Five from 'public/landing/5.png'
import Six from 'public/landing/6.png'
import {
    TitleCard,
    DirectCard,
    PopularBar,
    ProductCard,
} from '@application/components/core'

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    return (
        <>
            <div className="w-full">
                <section className="px-4 py-4 max-w-cutoff mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <TitleCard
                        title="Ekin Tshirts"
                        href="/products/tshirts"
                        src={One}
                        alt="Landing Image One"
                        className="md:col-span-2 lg:col-span-4"
                    />
                    <DirectCard
                        title="Stylish, Ekinish Apparels"
                        description="Become a more stylish start with Ekinish Apparels"
                        buttons={[
                            { text: 'New & Featured', onClick: () => {} },
                        ]}
                    />
                    <TitleCard
                        title="Ekin Jeans"
                        href="/products/jeans"
                        src={Two}
                        alt="Landing Image Two"
                        className="md:col-span-1 lg:col-span-2"
                    />
                    <TitleCard
                        title="Ekin Shoes"
                        href="/products/shoes"
                        src={Three}
                        alt="Landing Image Two"
                        className="md:col-span-1 lg:col-span-2 "
                    />
                </section>
            </div>
            <div className="relative w-full pb-12">
                <PopularBar
                    title="Popular Ekinish"
                    categories={[
                        { text: 'T-shirts', onClick: () => {} },
                        { text: 'Jeans', onClick: () => {} },
                        { text: 'Shoes', onClick: () => {} },
                    ]}
                />

                <section className="w-full max-w-cutoff mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProductCard
                        name="Ekin Seeple Tshirt"
                        category="T-shirt"
                        src={Four}
                        alt="Landing Product Four"
                        href="/products/tshirts/ekin-seeple"
                        price={35}
                    />
                    <ProductCard
                        name="Ekin Sweaper Jeans"
                        category="Jeans"
                        src={Five}
                        alt="Landing Product Five"
                        href="/products/jeans/sweaper"
                        price={89}
                    />
                    <ProductCard
                        name="Ekin Higher Shoes"
                        category="Shoes"
                        src={Six}
                        alt="Landing Product Six"
                        href="/products/shoes/higher"
                        price={120}
                    />
                </section>
                <section>
                    <DirectCard
                        title="Ekinians, Chooses"
                        description="Better Performance Today and Tomorrow"
                        buttons={[
                            {
                                text: 'Ekin Selections',
                                onClick: () => {},
                            },
                            {
                                text: 'Ekin Seasonal',
                                onClick: () => {},
                            },
                        ]}
                    />
                </section>
            </div>
            <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white via-sky-100 to-white relative">
                <section className="px-4 lg:px-8 pt-16 pb-8 relative z-10">
                    <article className="flex flex-col items-center">
                        <h2 className="font-lato font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-slate-900">
                            Have Questions About Our Apparels?
                        </h2>
                    </article>
                </section>
                <section className="px-8 pt-8 pb-16 relative z-10 w-full">
                    <form className="p-8 w-full max-w-lg mx-auto bg-black/90 text-slate-100 backdrop-blur-lg shadow-xl rounded-xl border border-cyan-500/10 shadow-cyan-700/5 flex flex-col gap-y-6">
                        <p className="text-center font-medium font-nunito text-lg lg:text-xl xl:text-2xl">
                            Send Us Your Questions!
                        </p>
                        <div className="flex flex-col gap-y-4">
                            <label className="font-medium font-lato text-cyan-400">
                                Your Email
                            </label>
                            <input
                                type="text"
                                className="w-full bg-sky-200/20 backdrop-blur-sm px-6 py-3 rounded-xl text-cyan-400 font-medium font-nunito border border-cyan-400/20"
                            />
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <label className="font-medium font-lato text-cyan-400">
                                Title
                            </label>
                            <input
                                type="text"
                                className="w-full bg-sky-200/20 backdrop-blur-sm px-6 py-3 rounded-xl text-cyan-400 font-medium font-nunito border border-cyan-400/20"
                            />
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <label className="font-medium font-lato text-cyan-400">
                                Your Question
                            </label>
                            <textarea className="w-full bg-sky-200/20 backdrop-blur-sm px-6 py-3 rounded-xl text-cyan-400 font-medium font-nunito border border-cyan-400/20" />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-cyan-500 text-white rounded-xl transition-smooth hover:bg-cyan-800 hover:text-white"
                            >
                                Send It Now
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}

HomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default HomePage
