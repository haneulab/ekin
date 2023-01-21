import Image from 'next/image'
import Logo from 'public/logo.png'
import { type PageWithLayout } from '@application/types'
import { type GetServerSidePropsContext } from 'next'
import { PrimaryLayout } from '@application/components/layouts'
import { HeroCard } from '@application/components/core'

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center">
                <section className="px-8 py-8 max-w-cutoff mx-auto">
                    <HeroCard
                        title="NextJs, TypeScript, and TailwindCSS Template"
                        description="Please enjoy using this template, and build something that changes the world!"
                        image={<Image src={Logo} alt="Logo Image" />}
                    />
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
