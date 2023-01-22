import { ApplicationComponent } from '@application/types'
import Image from 'next/image'
import Link from 'next/link'
import { IProductCard } from './ProductCard.types'

const ProductCard: ApplicationComponent<IProductCard> = ({
    name,
    category,
    price,
    src,
    alt,
    href,
}) => {
    return (
        <div className="relative w-full">
            <Link href={href}>
                <picture className="relative transform transition-smooth z-10 lg:hover:animate-pulse block lg:hover:scale-[0.9] cursor-pointer">
                    <Image src={src} alt={alt} />
                </picture>
            </Link>
            <div className="w-full py-2 relative z-20 bg-white">
                <article className="flex justify-between items-center">
                    <h4 className="font-medium font-lato text-lg lg:text-xl">
                        {name}
                    </h4>
                    <span className="font-bold font-nunito">${price}</span>
                </article>
                <article className="flex justify-start">
                    <p className="text-slate-500 font-nunito text-sm lg:text-base">
                        {category}
                    </p>
                </article>
            </div>
        </div>
    )
}

export default ProductCard
