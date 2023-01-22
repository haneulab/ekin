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

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    return (
        <>
            <div className="w-full">
                <section className="px-4 py-4 max-w-cutoff mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="w-full relative md:col-span-2 lg:col-span-4 transform transition-smooth hover:drop-shadow-lg overflow-hidden text-neutral-900 hover:text-slate-100">
                        <button className="z-20 font-poppins font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-max mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Ekin Tshirts
                        </button>
                        <picture className="w-full relative z-10 overflow-hidden">
                            <Image
                                className="w-full opacity-75 transition-smooth transform hover:opacity-50"
                                src={One}
                                alt="Landing Image One"
                            />
                        </picture>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col items-center px-8 py-16">
                        <h3 className="font-bold font-poppins text-xl md:text-3xl lg:text-4xl mb-2 text-center">
                            Stylish,{' '}
                            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-cyan-800 to-sky-700">
                                ekinish products
                            </span>
                        </h3>
                        <p className="font-light font-nunito text-center mb-6 text-sm w-max lg:text-lg">
                            Become a more stylish star with{' '}
                            <strong>Ekinish Products</strong>
                        </p>
                        <div>
                            <button className="inline-flex justify-center items-center rounded-full bg-neutral-900 text-white font-medium font-poppins text-lg lg:text-xl px-8 py-3 lg:py-4 transition-smooth hover:opacity-60 transform lg:hover:scale-105">
                                New & Featured Products
                            </button>
                        </div>
                    </div>
                    <div className="w-full relative md:col-span-1 lg:col-span-2 transform transition-smooth hover:drop-shadow-lg overflow-hidden text-neutral-900 hover:text-slate-100">
                        <button className="z-20 font-poppins font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-max mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Ekin Jeans
                        </button>
                        <picture className="w-full relative z-10 overflow-hidden">
                            <Image
                                className="w-full opacity-75 transition-smooth transform hover:opacity-50"
                                src={Two}
                                alt="Landing Image Two"
                            />
                        </picture>
                    </div>

                    <div className="w-full relative md:col-span-1 lg:col-span-2 transform transition-smooth hover:drop-shadow-lg overflow-hidden text-neutral-900 hover:text-slate-100">
                        <button className="z-20 font-poppins font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-max mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Ekin Shoes
                        </button>
                        <picture className="w-full relative z-10 overflow-hidden">
                            <Image
                                className="w-full opacity-75 transition-smooth transform hover:opacity-50"
                                src={Three}
                                alt="Landing Image Three"
                            />
                        </picture>
                    </div>
                </section>
            </div>
            <div className="relative w-full">
                <section className="sticky bg-white/80 drop-shadow-sm backdrop-blur-sm top-0 z-50 border-b border-gray-20/20">
                    <div className="p-4 lg:py-6 flex flex-col gap-y-2 lg:gap-y-0 lg:gap-x-0 lg:flex-row justify-between items-center max-w-cutoff mx-auto">
                        <h3 className="font-bold text-xl lg:text-2xl font-lato">
                            Popular Ekinishes
                        </h3>
                        <nav className="flex items-center gap-x-4 text-neutral-600">
                            <a href="#">Trends</a>
                            <a href="#">Back-To-Schools</a>
                            <a href="#">Jeanics</a>
                        </nav>
                    </div>
                </section>
                <section className="w-full max-w-cutoff mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <picture>
                            <Image src={Four} alt="Ok" />
                        </picture>
                        <div className="w-full py-2">
                            <article className="flex justify-between items-center">
                                <h4 className="font-medium font-lato text-lg lg:text-xl">
                                    Ekin Glass Tshirt 2023
                                </h4>
                                <span className="font-bold font-nunito">
                                    $180
                                </span>
                            </article>
                            <article className="flex justify-start">
                                <p className="text-slate-500 font-nunito text-sm lg:text-base">
                                    Tshirt
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <picture className="relative transform transition-smooth z-10">
                            <Image src={Five} alt="Ok" />
                        </picture>
                        <div className="w-full py-2 relative z-20 bg-white">
                            <article className="flex justify-between items-center">
                                <h4 className="font-medium font-lato text-lg lg:text-xl">
                                    Ekin Glass Tshirt 2023
                                </h4>
                                <span className="font-bold font-nunito">
                                    $180
                                </span>
                            </article>
                            <article className="flex justify-start">
                                <p className="text-slate-500 font-nunito text-sm lg:text-base">
                                    Tshirt
                                </p>
                            </article>
                        </div>
                    </div>
                    <div>
                        <picture>
                            <Image src={Six} alt="Ok" />
                        </picture>
                        <div className="w-full py-2">
                            <article className="flex justify-between items-center">
                                <h4 className="font-medium font-lato text-lg lg:text-xl">
                                    Ekin Glass Tshirt 2023
                                </h4>
                                <span className="font-bold font-nunito">
                                    $180
                                </span>
                            </article>
                            <article className="flex justify-start">
                                <p className="text-slate-500 font-nunito text-sm lg:text-base">
                                    Tshirt
                                </p>
                            </article>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="px-4 py-12 flex flex-col items-center">
                        <h3 className="font-bold font-poppins text-xl md:text-3xl lg:text-4xl mb-2 text-center">
                            Ekin Customers,{' '}
                            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-cyan-800 to-sky-700">
                                Chooses
                            </span>
                        </h3>
                        <p className="font-light font-nunito text-center mb-6 text-sm w-max lg:text-lg">
                            Become a more stylish star with{' '}
                            <strong>Ekinish Products</strong>
                        </p>
                        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:gap-x-4 w-full max-w-xl mx-auto">
                            <button className="w-full inline-flex justify-center items-center rounded-full bg-neutral-900 text-white font-medium font-poppins text-lg lg:text-xl px-8 py-3 lg:py-4 transition-smooth hover:opacity-60 transform lg:hover:scale-105">
                                Ekin Selections
                            </button>
                            <button className="w-full inline-flex justify-center items-center rounded-full bg-neutral-900 text-white font-medium font-poppins text-lg lg:text-xl px-8 py-3 lg:py-4 transition-smooth hover:opacity-60 transform lg:hover:scale-105">
                                Your Choices
                            </button>
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
