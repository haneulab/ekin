import { type PageWithLayout } from '@application/types'
import { type GetServerSidePropsContext } from 'next'
import { PrimaryLayout } from '@application/components/layouts'
import Image from 'next/image'
import { HiArrowRight } from 'react-icons/hi'
import One from 'public/landing/1.png'
import Two from 'public/landing/2.png'
import Three from 'public/landing/3.png'
import Four from 'public/landing/4.png'
import Five from 'public/landing/5.png'
import Six from 'public/landing/6.png'
import Seven from 'public/landing/7.png'
import Eight from 'public/landing/8.png'
import {
    TitleCard,
    DirectCard,
    PopularBar,
    ProductCard,
    UserCard,
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
            <div className="w-full bg-neutral-900/10 text-neutral-900/90">
                <section className="px-8 py-16 w-full max-w-cutoff mx-auto flex flex-col gap-y-16">
                    <div className="flex flex-col gap-y-2 items-center text-center">
                        <h3 className="font-bold font-poppins text-2xl md:text-3xl lg:text-4xl">
                            Ekin&apos;s Stylebook
                        </h3>
                        <p className="font-light font-nunito text-lg lg:text-xl text-slate-500">
                            Explore some of the featured style notes from
                            Ekinians.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <UserCard
                            username="angelina_1994"
                            src={Seven}
                            alt="Landing Image Seven"
                        />
                        <UserCard
                            username="jean_ish"
                            src={Eight}
                            alt="Landing Image Eight"
                        />
                        <div className="md:col-span-2">
                            <article>
                                <h4 className="font-semibold font-lato text-2xl lg:text-3xl mb-4">
                                    Ekinian Stylebook,
                                </h4>
                                <p className="font-nunito text-slate-500 text-lg lg:text-xl leading-7 lg:leading-8 mb-6">
                                    Provides various collections that customers
                                    review on. Exploring this stylebook can help
                                    you match the styles that suits your need.
                                </p>
                                <div>
                                    <button className="inline-flex items-center gap-x-4 font-medium font-nunito border-l-4 pl-4 border-emerald-400 text-lg lg:text-xl py-2 transition-smooth hover:border-l-8 hover:bg-neutral-900 hover:border-transparent hover:pr-4 border-r-4 border-r-transparent hover:border-r-emerald-400 hover:border-r-8 hover:text-white">
                                        <span>Go to Stylebook</span>
                                        <HiArrowRight />
                                    </button>
                                </div>
                            </article>
                        </div>
                    </div>
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
