import { StaticImageData } from 'next/image'

export type Mock<DataInterface extends {}> = {
    [K in keyof DataInterface]: DataInterface[K]
} & {
    id: string
}

export type Category<ItemCategories extends string[] = []> =
    ItemCategories[number]
export type TshirtsCategory<T> = Category<T>
export type JeansCategory<J> = Category<J>
export type ShoesCategory<S> = Category<S>

export type Tshirt<Category extends string[] = []> = Mock<{
    name: string
    description: string
    category: Category[number]
    price: number
    src?: StaticImageData
    alt?: string
}>
export type Jean<Category extends string[] = []> = Mock<{
    name: string
    description: string
    category: Category[number]
    price: number
    src?: StaticImageData
    alt?: string
}>
export type Shoe<Category extends string[] = []> = Mock<{
    name: string
    description: string
    category: Category[number]
    price: number
    src?: StaticImageData
    alt?: string
}>
