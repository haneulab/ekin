import { type PageWithLayout } from '@application/types'
import { type GetServerSidePropsContext } from 'next'
import { PrimaryLayout } from '@application/components/layouts'

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center">
                <section className="px-8 py-8 max-w-cutoff mx-auto"></section>
            </div>
        </>
    )
}

HomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default HomePage
