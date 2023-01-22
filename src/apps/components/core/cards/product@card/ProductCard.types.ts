import { StaticImageData } from 'next/image'

export interface IProductCard {
    name: string
    category: string
    price: number
    href: string
    src: StaticImageData
    alt: string
}
