import Image from 'next/image'
import Gif from 'public/animate.gif'
import { type ApplicationComponent } from '@application/types'
import { IHeroCard } from './HeroCard.types'
import { SiGithub } from 'react-icons/si'

const HeroCard: ApplicationComponent<IHeroCard> = ({
    title,
    description,
    image,
}) => {
    return (
        <article className="flex flex-col items-center gap-y-6">
            <div className="w-full relative h-max flex flex-col items-center">
                <picture className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] mx-auto absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-full overflow-hidden flex justify-center">
                    <Image src={Gif} alt={'Gif Image'} />
                </picture>
                <picture className="w-full flex justify-center mx-auto relative  animate-pulse">
                    {image}
                </picture>
            </div>
            <div className="text-center grid grid-cols-1 gap-y-2">
                <h3 className="font-bold font-lato text-xl lg:text-2xl">
                    {title}
                </h3>
                <p className="font-light font-nunito text-base lg:text-lg">
                    {description}
                </p>
            </div>
            <div>
                <div className="mb-2">
                    <a
                        href="https://github.com/haneulab/next-tailwind-ts"
                        className="inline-flex items-center gap-x-2 px-6 py-3 font-medium bg-neutral-900 text-white rounded shadow transition-smooth hover:opacity-60"
                    >
                        <span>Go to Repository</span>
                        <SiGithub className="text-xl" />
                    </a>
                </div>
                <h4 className="text-center text-sm font-medium text-sky-500 font-poppins">
                    Built By <code>@HaneuLab</code>
                </h4>
            </div>
        </article>
    )
}

export default HeroCard
