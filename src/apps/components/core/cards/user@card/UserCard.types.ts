import { type StaticImageData } from 'next/image'

export interface IUserCard {
    username: string
    src: StaticImageData
    alt: string
}
