import { type Tshirt } from '@application/types'
import { v4 as uuid } from 'uuid'
const Tshirts: Tshirt<
    ['new&featured', 'stagefit', 'performance', 'simplistic']
>[] = [
    {
        id: uuid(),
        name: 'Helenish',
        category: 'new&featured',
        description: 'Amazing tshirt of Helenish style.',
        price: 19,
        src: null,
        alt: null,
    },
    {
        id: uuid(),
        name: 'Fountain',
        category: 'new&featured',
        description: 'Amazing tshirt of Fountain style.',
        price: 23,
        src: null,
        alt: null,
    },
    {
        id: uuid(),
        name: 'Shadow',
        category: 'simplistic',
        description: 'Amazing tshirt of Show style.',
        price: 19,
        src: null,
        alt: null,
    },
    {
        id: uuid(),
        name: 'Jumpy',
        category: 'performance',
        description: 'Amazing tshirt of Jumpy style.',
        price: 15,
        src: null,
        alt: null,
    },
    {
        id: uuid(),
        name: 'Sisso',
        category: 'performance',
        description: 'Amazing tshirt of Sisso style.',
        price: 25,
        src: null,
        alt: null,
    },
    {
        id: uuid(),
        name: 'Playground',
        category: 'performance',
        description: 'Amazing tshirt of Playground style.',
        price: 15,
        src: null,
        alt: null,
    },
    {
        id: uuid(),
        name: 'Evanish',
        category: 'performance',
        description: 'Amazing tshirt of Evanish style.',
        price: 15,
        src: null,
        alt: null,
    },
]

const TshirtsCategories = Object.values(Tshirts.map((e) => e.category))

export { Tshirts, TshirtsCategories }
