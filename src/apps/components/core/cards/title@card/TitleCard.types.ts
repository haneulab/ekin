import { type StaticImageData } from 'next/image'

export interface ITitleCard {
    title: string
    src: StaticImageData
    alt: string
    href: string
}
