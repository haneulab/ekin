import { classnames } from '@application/functions'
import { type ApplicationComponent } from '@application/types'
import Image from 'next/image'
import Link from 'next/link'
import { type ITitleCard } from './TitleCard.types'

const TitleCard: ApplicationComponent<ITitleCard> = ({
    title,
    alt,
    src,
    href,
    className = '',
}) => {
    return (
        <Link href={href}>
            <span
                className={classnames(
                    'w-full relative transform transition-smooth hover:drop-shadow-lg overflow-hidden text-neutral-900 hover:text-slate-100',
                    className
                )}
            >
                <button className="z-20 font-poppins font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center w-max mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {title}
                </button>
                <picture className="w-full relative z-10 overflow-hidden">
                    <Image
                        className="w-full opacity-75 transition-smooth transform hover:opacity-50"
                        src={src}
                        alt={alt}
                    />
                </picture>
            </span>
        </Link>
    )
}

export default TitleCard
